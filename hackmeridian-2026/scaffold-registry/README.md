# HackMeridian 2026: Stellar Scaffold + Stellar Registry

reveal.js 5.1.0, vendored in `vendor/` so it works with no internet.

**Run:** open `index.html` for the joint session (intro and about slides, then Scaffold, then Registry), or `intro.html` / `scaffold.html` / `registry.html` alone. Works from disk, or `npx serve .`.

**Edit:** change `intro.html`, `scaffold.html` or `registry.html`, then run `node build-index.mjs` to regenerate `index.html`.

**Keys:** → next, ↓ demo recording (under slide 5), `S` speaker notes with timings, `F` fullscreen, `?` help.
**PDF:** open `scaffold.html?print-pdf` in Chrome and print to PDF.

**Before the talk**
- Put the demo fallback recording at `media/demo.mp4`.
- Pre-build the app (`init`, `npm install`, one `npm run dev`) so the live build is warm.
- Demo edit: paste the `hint()` method from slide 5 into `contracts/guess-the-number/src/lib.rs`.

`theme.css` is shared by both decks.

**Registry slides:** slide R4 shows `type: registry` in scaffold.yml as "coming soon" (stellar-scaffold/cli#617). If it ships before the event, drop the "Today" column. R6 can be cut if running long.
