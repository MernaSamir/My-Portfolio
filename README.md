# Mirna Samir Mosaad · Portfolio

Portfolio, CV and intro video of **Mirna (Merna) Samir Mosaad (ميرنا سمير مسعد)**, Senior Front-End Developer (React.js, Next.js, TypeScript, React Native) based in Cairo, Egypt.

**Live:** https://oriebalzyuot96.github.io/merna/ · العربية: https://oriebalzyuot96.github.io/merna/ar/
**CV (PDF):** https://oriebalzyuot96.github.io/merna/Merna-Mosaad-CV.pdf
**Intro video:** https://oriebalzyuot96.github.io/merna/assets/merna-intro.mp4

## Stack
Astro 5 static site, English + Arabic (RTL), all content in `src/data/profile.ts`. Theme tokens in `public/theme.css` (coral & warm sand).

- `tools/cv/cv.html`: the CV source (rendered to PDF with Playwright).
- `tools/reel/`: the intro reel (`intro.html`), original synthesized score (`music.mjs`) and renderer (`render.mjs`).

## Develop
```
npm run dev
npm run build
```
Deployed to GitHub Pages by `.github/workflows/deploy.yml`.
