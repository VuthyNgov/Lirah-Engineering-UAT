# LIRAH Engineering — First Draft

A lightweight, responsive portfolio website built with plain HTML, CSS and JavaScript.

## Run locally

You can open `index.html` directly, or run a tiny local server from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Performance choices

- No external frameworks, libraries or web fonts.
- All site images are WebP.
- Hero image is preloaded and given high fetch priority.
- Portfolio images use native lazy loading and async decoding.
- Project cards are generated from one data array to avoid repeated markup.
- Minimal JavaScript: project filtering, mobile navigation and header state only.
- Reduced-motion preference is respected.

## Structure

- `index.html` — one-page site
- `assets/css/styles.css` — all styling
- `assets/js/main.js` — project data + small interactions
- `assets/img/` — optimized WebP assets
