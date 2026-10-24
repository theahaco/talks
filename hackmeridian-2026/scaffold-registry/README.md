# HackMeridian 2026: Stellar Scaffold + Stellar Registry

reveal.js 5.1.0, vendored in `vendor/` so it works with no internet.

**Run:** open `index.html` for the joint session (intro, agenda and speakers, then Scaffold, then Registry, then the shared closing), or `intro.html` / `scaffold.html` / `registry.html` / `outro.html` alone. The flow follows the HackMeridian speaker template. Works from disk, or `npx serve .`.

**Edit:** change `intro.html`, `scaffold.html`, `registry.html` or `outro.html`, then run `node build-index.mjs` to regenerate `index.html`.

**Keys:** → next, `S` speaker notes with timings, `F` fullscreen, `?` help.
**PDF:** open `scaffold.html?print-pdf` in Chrome and print to PDF.

**Style:** follows the Aha master deck in [theahaco/brand](https://github.com/theahaco/brand/tree/main/templates): 1920×1080, Space Grotesk titles, Spectral body, brand colors. `theme.css` and `deck.js` (footer and reveal setup) are shared by every deck file. Slides use `class="navy"` with `data-background-color="#1a3b60"` for the cover, dividers and closing, and `data-background-color="#f6e2ff"` for big-idea and takeaway slides.

**Registry slides:** slide R4 shows `type: registry` in scaffold.yml as "coming soon" (stellar-scaffold/cli#617). If it ships before the event, drop the "Today" column. A future talk (e.g. Nido) goes in its own file, added to `build-index.mjs` before `outro.html`.
