// Renders intro.html to public/assets/merna-intro.mp4 (H.264 High, yuv420p TV range + AAC),
// merna-intro.webm (VP9 yuv420p + Opus) and merna-intro-poster.jpg. Every CSS animation is paused and
// scrubbed to the exact frame time, so output is deterministic. The soundtrack comes from music.mjs (music.wav).
// Usage: npm i playwright-core && node music.mjs && node render.mjs   (needs ffmpeg on PATH and a Playwright Chromium)
//        STILLS=2,8,15 OUT_DIR=/tmp node render.mjs   -> only writes PNG stills at those seconds (for checking layout)
// Encoding notes: browser screenshots are full-range JPEG; the master keeps full range (yuvj420p, near-lossless),
// and the delivery files convert explicitly to TV-range yuv420p so every browser decodes them.
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const here = process.env.REEL_DIR || path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(here, '../../public/assets');
const FPS = 30, DURATION = 40, W = 1280, H = 720;
const run = (args) => new Promise((res, rej) => {
  const p = spawn('ffmpeg', args, { stdio: ['ignore', 'inherit', 'inherit'] });
  p.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg exited ' + c))));
});

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(here, 'intro.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.getAnimations().forEach(a => a.pause()));
const seek = t => page.evaluate(ms => document.getAnimations().forEach(a => { a.currentTime = ms; }), t * 1000);

if (process.env.STILLS) {
  const out = process.env.OUT_DIR || here;
  for (const s of process.env.STILLS.split(',').map(Number)) {
    await seek(s);
    await page.screenshot({ path: path.join(out, `still-${String(s).replace('.', '_')}.png`) });
  }
  await browser.close();
  console.log('stills done');
  process.exit(0);
}

const master = path.join(process.env.OUT_DIR || here, 'master.mkv');
const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
  '-c:v', 'libx264', '-pix_fmt', 'yuvj420p', '-preset', 'medium', '-crf', '10', master], { stdio: ['pipe', 'inherit', 'inherit'] });

for (let f = 0; f < FPS * DURATION; f++) {
  await seek(f / FPS);
  const buf = await page.screenshot({ type: 'jpeg', quality: 94 });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  if (f % 150 === 0) console.log(`frame ${f}/${FPS * DURATION}`);
}
ff.stdin.end();
await new Promise(r => ff.on('close', r));

await seek(3.5);    // hello scene: photo + name, fully in
await page.screenshot({ path: path.join(assets, 'merna-intro-poster.jpg'), type: 'jpeg', quality: 88 });
await browser.close();

const music = path.join(here, 'music.wav');
const VF = 'scale=in_range=full:out_range=tv,format=yuv420p';
await run(['-y', '-i', master, '-i', music, '-map', '0:v', '-map', '1:a', '-vf', VF,
  '-c:v', 'libx264', '-profile:v', 'high', '-level', '4.0', '-preset', 'slow', '-crf', '21',
  '-color_range', 'tv', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
  '-c:a', 'aac', '-b:a', '160k', '-ar', '44100', '-shortest', '-movflags', '+faststart', path.join(assets, 'merna-intro.mp4')]);
await run(['-y', '-i', master, '-i', music, '-map', '0:v', '-map', '1:a', '-vf', VF,
  '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '34', '-row-mt', '1', '-deadline', 'good', '-cpu-used', '2', '-g', '60',
  '-c:a', 'libopus', '-b:a', '128k', '-shortest', path.join(assets, 'merna-intro.webm')]);
if (!process.env.KEEP_MASTER) fs.rmSync(master);
console.log('done');
