# RDCA T20 Blast — SportsWeb One Pilot (Template Pilot 001)

**Local Cricket. Big Bash Energy.**

A visual, front-end pilot website for the **RDCA T20 Blast** — the short-form
competition of the Ringwood & District Cricket Association. It is the first
template ("Template Pilot 001") for the **SportsWeb One** website builder, built
to prove the component library, theming system and section model that future
association/competition sites will reuse.

This is a **prototype**: real, polished UI driven entirely by config + placeholder
data, with **no backend** in v1. Every data file is shaped to match the future
live sources (PlayHQ, Play Cricket, Supabase, Cloudinary) so going live later is
a fetch-and-map, not a rewrite.

---

## Quick start

> The build sandbox this was authored in has **no network access**, so
> dependencies could not be installed there. Run these on your own machine.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build + local preview of the build
npm run build
npm run preview
```

Requirements: Node 18+ (Node 22 used in authoring). Stack: **Vite + React 18 + TypeScript + React Router**.

---

## Instant preview (no build needed)

Open **`preview.html`** directly in any browser. It's a fully self-contained,
static snapshot of the homepage that inlines the real stylesheet and uses the
same placeholder data — handy for a quick look or for sharing without running
Node. (Some images load from Cloudinary, so an internet connection helps.)

`preview.html` is generated from the real data by `build_preview.py`:

```bash
python3 build_preview.py   # regenerates preview.html
```

The **real, interactive** site is the Vite app — `preview.html` is only a
review aid, not the deliverable that gets deployed.

---

## What's inside

```
rdca-t20-pilot/
├── index.html                # Vite entry
├── preview.html              # self-contained static homepage preview
├── build_preview.py          # regenerates preview.html from the data
├── public/favicon.svg
├── src/
│   ├── main.tsx              # entry: applies theme, mounts router app
│   ├── App.tsx               # routes (all pages wrapped in MainLayout)
│   ├── config/               # ── EDIT THESE TO RE-SKIN / RE-CONFIGURE ──
│   │   ├── siteConfig.ts     #   site identity, social, contact
│   │   ├── themeConfig.ts    #   colours, fonts, radius (design tokens)
│   │   ├── navigationConfig.ts #  desktop nav + mobile quick-nav
│   │   ├── sectionsConfig.ts #   homepage section show/hide + order  ← builder hook
│   │   └── mediaConfig.ts    #   Cloudinary assets + placeholder generator
│   ├── data/                 # placeholder data, typed to mirror future APIs
│   │   ├── types.ts clubs.ts fixtures.ts ladder.ts sponsors.ts
│   │   ├── news.ts videos.ts fanhub.ts (fanhub + challenges + juniors + store)
│   ├── lib/                  # applyTheme.ts (TS theme → CSS vars), datetime.ts
│   ├── styles/               # theme.css (token defaults) + globals.css (all UI)
│   ├── components/
│   │   ├── core/             # Header, Footer, MobileQuickNav, Button, Icon, SectionHeading
│   │   ├── sports/           # VideoHero, FeatureMatch, MatchCard, FixtureStrip,
│   │   │                     #   MatchCentrePreview, LadderTable, ClubCard,
│   │   │                     #   SponsorPanel, NewsCard, StorePanel, CommunityFeed
│   │   └── engagement/       # FanHubCard, ChallengeCard, JuniorCTA
│   ├── layouts/MainLayout.tsx
│   └── pages/                # Home.tsx (data-driven assembly) + pages.tsx (routes) + PageShell.tsx
├── ASSUMPTIONS.md            # every placeholder + decision that needs confirming
├── DEPLOYMENT.md             # GitHub + Vercel/Cloudflare deploy + rollback
└── FUTURE_BUILDER.md         # how this becomes the SportsWeb One builder template
```

---

## The two ideas that make this a "builder template"

1. **Theme = data.** Every colour, font and radius lives in `themeConfig.ts`.
   `applyTheme()` writes them to `:root` as CSS variables, and *all* component
   CSS references those variables. Re-skinning a whole site = editing one file.

2. **Page = config.** The homepage doesn't hard-code its section order. It reads
   `sectionsConfig.ts` and renders only the enabled sections, in the listed
   order. A future admin UI flips a boolean or drags a row — no code change.

Components never hard-code content; they consume `config/` + `data/`. That's
what makes them reusable across the next pilots (e.g. a BHRDCA association site).

---

## Editing common things

| I want to…                         | Edit                                  |
|------------------------------------|---------------------------------------|
| Change colours / fonts             | `src/config/themeConfig.ts`           |
| Rename the site / change tagline   | `src/config/siteConfig.ts`            |
| Show/hide or reorder homepage rows | `src/config/sectionsConfig.ts`        |
| Change nav links                   | `src/config/navigationConfig.ts`      |
| Swap in real club / fixture data   | `src/data/*.ts`                       |
| Add the real hero video            | `mediaConfig.ts` → `assets.heroVideo` |
| Point at real images               | `src/config/mediaConfig.ts`           |

Search the code for `TODO:` to find every spot awaiting real data/confirmation.

---

## Status

Front-end pilot, ~complete for the homepage + all primary routes. No live data,
auth, commerce or CMS yet (by design — see `FUTURE_BUILDER.md` for the roadmap
and `ASSUMPTIONS.md` for what needs confirming before launch).

Powered by **SportsWeb One** · Template Pilot 001.
