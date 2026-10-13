# Mirna Samir Mosaad · Portfolio

Portfolio, CV and intro video of **Mirna (Merna) Samir Mosaad (ميرنا سمير مسعد)**, Senior Front-End Developer (React.js, Next.js, TypeScript, React Native) based in Cairo, Egypt.

**Live:** https://mernasamir.github.io/My-Portfolio/ · العربية: https://mernasamir.github.io/My-Portfolio/ar/
**CV (PDF):** https://mernasamir.github.io/My-Portfolio/Merna-Mosaad-CV.pdf
**Intro video:** https://mernasamir.github.io/My-Portfolio/assets/merna-intro.mp4

## Stack
Astro 5 static site, English + Arabic (RTL), all content in `src/data/profile.ts`. Theme tokens in `public/theme.css` (coral & warm sand).

- `tools/cv/cv.html`: the CV source (rendered to PDF with Playwright).
- `tools/reel/`: the intro reel (`intro.html`), original synthesized score (`music.mjs`) and renderer (`render.mjs`).

## Develop
```
npm run dev
npm run build
```
Deployed to GitHub Pages by `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
