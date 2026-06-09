# Assumptions & Decisions — RDCA T20 Blast Pilot

This pilot was built autonomously from the brief. Everything below is either a
**decision I made** (with reasoning) or a **placeholder that needs confirming**
before the site could go live. Search the codebase for `TODO:` to find each one
in context.

## Build / stack decisions

- **Vite + React + TypeScript (not Next.js).** The brief flagged Next.js as the
  *future* production stack but this pilot is a visual prototype with no backend
  or data fetching yet. Vite gives the fastest path to a clean, deployable
  component library and the simplest Vercel/Cloudflare deploy. The component and
  data-shape work ports directly to Next.js later.
- **No backend / API in v1.** All content is static placeholder data. Types are
  deliberately shaped to mirror PlayHQ / Play Cricket / Supabase / Cloudinary so
  the swap to live data is a fetch-and-map.
- **New standalone project** (`rdca-t20-pilot`). Does not touch the existing
  `rdca-sportsweb` project/repo.
- **Self-contained `preview.html`** added in addition to the app, because the
  authoring sandbox had no network to run a dev server. It's a review aid only.

## Brand & content (illustrative — confirm with RDCA)

- **Brand name** "RDCA T20 Blast", **tagline** "Local Cricket. Big Bash Energy."
  — taken from the brief.
- **The 10 clubs and their franchise names are placeholders.** Real club names
  in the area were used where reasonable, but the "Blast" franchise names
  (Knights, Heat, Nitro, Strikers, Cobras, Blaze, Magic, Mavericks, Scorpions,
  Warriors), club colours and taglines are invented for energy.
  → Confirm the actual RDCA T20 club list, official colours and real logos.
- **All club logos are generated SVG placeholders** (coloured tiles with the
  3-letter code). → Replace with real Cloudinary logo URLs in `data/clubs.ts`.
- **Fixtures, results, scores and the ladder are fabricated** sample data with
  dates relative to "now". → Replace with PlayHQ data.
- **Sponsor tiers and activations are illustrative.** Real known sponsor logos
  (Bendigo Bank, Altegra, SEDA, Grant Professionals, Field of View, Dorset
  Gardens, Fridge Repairs Today, Good Sports) are placed into invented tiers
  (naming/major/supporting/match-day/challenge/community/technology) with
  invented activations ("Player of the Match", etc.). The "Naming Rights" slot
  is an empty "Your Brand Here" placeholder to show the commercial ceiling.
  → Confirm real sponsor list, tiers and what each partner powers.
- **News, videos and the social feed are placeholder items** with generated
  cover images. No real article bodies or video files.
- **Junior content** (Try Free, Register, Blast Night, etc.) is illustrative.
  The "Scan to register" QR is a **decorative placeholder, not scannable**.
  → Drop in a real QR (e.g. `qrcode.react`) pointing at the real registration URL.

## Identity / contact (placeholders)

- **Contact email** `t20@rdca.com.au` — placeholder, confirm the real address.
- **Social handles** (Instagram/Facebook/TikTok/YouTube) are placeholder URLs.
  Hashtag `#RDCAT20Blast` assumed.
- **Acknowledgement of Country** names the **Wurundjeri Woi-wurrung people of
  the Kulin Nation**. → Confirm correct Traditional Owner wording with RDCA /
  the local council before publishing.

## Media

- **Hero video is absent** (`assets.heroVideo` is empty), so `VideoHero` shows
  the fallback hero image. Add an `.mp4`/Cloudinary URL when produced — no markup
  change needed.
- **Known Cloudinary assets** (hero image, news image, RDCA logo, BBL-style T20
  graphic, sponsor logos) from the handover doc are referenced from account
  `dozdbhjhs`. → Confirm each renders acceptably for the T20 brand.

## Design

- Dark-navy hero with a diagonal electric-blue→gold "blast" gradient streak +
  Bebas Neue display type as the site's signature; clean white content sections
  elsewhere. Colours/fonts from the brief's direction.
- Mobile-first throughout, with a sticky bottom quick-nav on small screens.

## Known limitations / verification owed

- **Not yet run through `npm install` + `vite build`/`tsc` with the pinned
  dependencies.** The authoring sandbox had no network to install them, and the
  only globally-available `tsc` there was a 7.0 preview incompatible with the
  project's pinned TypeScript 5.5 settings. I instead (a) statically verified
  every relative import resolves to a real file, (b) verified every component
  against the actual exports/props/CSS classes it depends on, and (c) ran a
  type-check against loose stand-in type stubs for the uninstalled packages,
  which surfaced **no real errors in the application code**.
  → Please run `npm install && npm run build` locally as the final gate.
- No automated tests yet.
- No accessibility audit beyond build-time care (skip link, focus states,
  reduced-motion, semantic landmarks, alt text on meaningful images).
