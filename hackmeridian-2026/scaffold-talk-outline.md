# Stellar Scaffold: hackathon talk plan

**Slot:** ~7 minutes of a 15-minute joint session (Scaffold ~7, Registry ~8).
**Audience:** hackathon developers who want to ship something this weekend.
**Order:** Scaffold first, Registry second. Scaffold is "build your app", Registry is "share and reuse contracts by name", which is where the handout already points (step 5).
**One takeaway:** one command gets you contracts, a frontend, a local network and typed clients that rebuild every time you save.

Source for content: the v2 Scaffold hackathon handout (Chad's update, 2026-10-21), which moves testnet deploys from Scaffold to Registry.

## Slide-by-slide

| # | Time | Slide | Content | Demo? |
|---|------|-------|---------|-------|
| 1 | 0:00–0:30 | **From idea to working dApp, fast** | Handout header as the title slide: navy band, one-line pitch, Docs/Code/Registry links. | |
| 2 | 0:30–1:00 | **The hackathon problem** | Hand-wiring builds, deploys, contract IDs, bindings and wallet code before writing a feature. | |
| 3 | 1:00–1:45 | **Three things to remember** | The handout's three cards: `scaffold.yml` = your dependencies, `app-lib/clients` = generated, `npm run dev` = the loop. | |
| 4 | 1:45–2:25 | **1–2 Set up and start a project** | `cargo install` of both the Scaffold and Registry CLIs, `doctor`, `init` (asks template + package manager), `npm run dev`, plus the project tree. | Step-through code |
| 5 | 2:25–3:05 | **Your frontend: React or Svelte** | Pick at `init`. Both templates ship wallet connect, network switching and `GuessTheNumber`. The same client call is shown side by side in React (`useWallet` hook) and Svelte (wallet store). `--template none` makes a contracts-only project (no app/, app-lib or clients). | |
| 6 | 3:05–5:05 | **Demo: save → redeploy → typed client** | Add `hint()` to guess-the-number, save, watch rebuild/redeploy/regen, autocomplete in the component. | Static walkthrough (1 min) |
| 7 | 5:05–5:45 | **3 Add a contract** | `generate contract --from oz/nft-royalties` and its `scaffold.yml` entry. | Step-through code |
| 8 | 5:45–6:25 | **5 Go to testnet and ship** | Scaffold only deploys locally. `build --compile-only`, then Registry `publish`/`deploy` (covered in the next talk), then a per-network `testnet: type: contract, source: C...` entry in `scaffold.yml`, `build --network testnet`, `npm run build`. | |
| 9 | 6:25–6:50 | **7–8 Hackathon survival kit** | `doctor`, `clean`, testnet breaks but local works (rebuild with `--network testnet`), find dependencies at rgstry.xyz, the agent skill. | |
| 10 | 6:50–7:00 | **Handoff to Registry** | "How do you get it onto testnet under a name, and use other people's without copying addresses?" plus the `stellar registry publish` line. | |

Slide headings no longer carry the handout's section numbers (removed 2026-10-24); speaker notes still name the matching handout section.

Buffer: target 6:30 of spoken content so the 7:00 slot absorbs a slow demo.

## Handoff with the Registry talk

- **Into Scaffold:** nothing needed; Scaffold opens the session.
- **Out of Scaffold:** slide 9 ends on the deployed contract and the question "how do others use it by name?" The Registry talk should open by answering that, ideally reusing the same demo contract so the audience sees one project end to end.
- **Shared demo contract:** ask Registry to plan around publishing the contract from the Scaffold demo (e.g. `my-nft` or the template's `guess-the-number`) under `unverified/`, and show `scaffold.yml` pulling a published contract by name.
- **Shared closing slide (optional):** one combined "links" slide at the end of Registry: stellarscaffold.org, rgstry.xyz, skills.stellar.org, the handout QR code.
- **Shared look:** both decks use the handout's design (white page, navy #1A3B60 headings, Spectral titles, Space Grotesk body, warm-grey #F7F2F2 code panels, lavender #F6E2FF cards, green #47A019 accents, the Built by Aha footer) so they play as one deck.

## Demo plan

- Pre-build the project before the talk: run `init`, `npm install` and one full `npm run dev` so Docker images, Rust deps and the first deploy are cached. A cold first build is too slow for stage.
- Have the editor, terminal and browser tiled on one screen.
- Edit to make on stage: add a `hint(guess)` read method to `guess-the-number` that returns "higher" or "lower", save, show the watcher output, then type `guessTheNumber.` in the React component to show the new method in autocomplete.
- Fallback: a 2-minute screen recording embedded in slide 5, triggered if anything stalls for more than ~15 seconds.

## Proposed approach: slides in code, run from a browser

**Decision (Ellie, 2026-10-19): reveal.js, one HTML file per talk, vendored locally.**

- Plain HTML + Markdown slides, opens in any browser with `npx serve` or straight from disk. No build step.
- Built-in code highlighting with step-through line highlights (good for `scaffold.yml` and the client call), speaker notes view (`S` key), PDF export, and fragments for the typed-out command animation.
- Vendor reveal.js into the repo instead of a CDN so venue Wi-Fi can't break it.
- Both talks share one `theme.css`; a tiny `index.html` can load Scaffold then Registry sections as one continuous deck, or each runs alone.
- Demo video embedded as a local `<video>` on slide 5.

Layout:

```
talk/
├── index.html         # combined deck (Scaffold + Registry)
├── scaffold.html      # this talk alone
├── slides/scaffold.md # slide content, speaker notes inline
├── theme.css          # shared with the Registry deck
├── media/demo.mp4     # fallback recording
└── vendor/reveal.js/
```

Alternative considered: **Slidev** (Markdown + Vue, live-editable code blocks). Nicer for a developer crowd, but it needs a Node dev server and its own build, and merging two decks is harder. Worth it only if you want runnable code embedded in slides.

## Decisions (Ellie, 2026-10-19)

1. Order: Scaffold first, then Registry.
2. Split: Scaffold ~7 min, Registry ~8 min (can shift toward Scaffold if needed).
3. Demo: live, with a pre-recorded fallback Ellie may record.
4. Slides: reveal.js, vendored locally, shared `theme.css`.
5. Slide code lives in theahaco/talks under `hackmeridian-2026/`.
