# SportsWeb One — Builder Notes (from Template Pilot 001)

This pilot is the **first template** for the SportsWeb One website builder. The
goal of the builder is to spin up a club/association/competition site without
writing code. Everything here was built with that reuse in mind. This doc
explains the seams the builder plugs into, and notes for the next pilots.

## The three reusable seams

### 1. Theme tokens (`src/config/themeConfig.ts` + `src/lib/applyTheme.ts`)
- One TS object holds every colour, font and radius.
- `applyTheme(theme)` writes them to `:root` as CSS custom properties.
- All component CSS references the variables (`var(--color-accent)`, …).
- **Builder action:** a "Brand" panel edits this object (or passes a theme to
  `applyTheme` at runtime) to re-skin the entire site live. `theme.css` holds the
  same values as static defaults so first paint is correct before JS runs.

### 2. Section model (`src/config/sectionsConfig.ts`)
- `homeSections` is an ordered array of `{ key, enabled }`.
- `Home.tsx` builds a `key → JSX` map and renders only enabled sections, in order.
- **Builder action:** a "Page builder" panel toggles `enabled` and reorders the
  array (drag-and-drop). No code change recomposes the page. Adding a new section
  type = add a key to `HomeSectionKey`, add an entry to the map in `Home.tsx`,
  add a component.

### 3. Data adapters (`src/data/*` typed in `src/data/types.ts`)
- Every domain type mirrors the shape of its eventual live source, noted inline:
  - **PlayHQ** → fixtures, results, ladder
  - **Play Cricket** → player stats
  - **Supabase / CMS** → clubs, news, sponsors, events, FanHub config
  - **Cloudinary** → images, hero video, highlights
  - **Zoho / Shopify** → store / merch
- Components consume these types only — never raw API responses.
- **Builder action:** replace each static `data/*.ts` export with a fetch that
  returns the same type. Components don't change.

> Net effect: **theme = data, page = config, content = typed adapters.** A new
> site is "new config + new data", not new code.

## Config-vs-content boundary (what the builder edits vs what stays code)

| Layer        | Lives in            | Who edits in the builder |
|--------------|---------------------|--------------------------|
| Brand tokens | `config/themeConfig`| Brand panel              |
| Identity     | `config/siteConfig` | Settings panel           |
| Navigation   | `config/navigationConfig` | Nav panel          |
| Page layout  | `config/sectionsConfig`   | Page builder       |
| Content/data | `data/*`            | CMS / live API           |
| Components/CSS | `components/`, `styles/` | Product team (code) |

## Component inventory (all data-driven, reusable)

Core: `Header`, `Footer`, `MobileQuickNav`, `Button`, `Icon` (dependency-free
SVG set), `SectionHeading`.
Sports: `VideoHero`, `FeatureMatch`, `MatchCard`, `FixtureStrip`,
`MatchCentrePreview`, `LadderTable`, `ClubCard`, `SponsorPanel`, `NewsCard`,
`StorePanel`, `CommunityFeed`.
Engagement: `FanHubCard`, `ChallengeCard`, `JuniorCTA`.

Each takes typed props/data and reads design tokens via CSS variables, so they
drop into any SportsWeb One site.

## Notes for the next pilots

### Template Pilot 002 — BHRDCA (association site)
An association site has a different emphasis than a T20 competition:
- Likely **disable** `challenges`, `store`, and possibly `communityFeed`.
- Likely **enable/add** new section types: `documents` (by-laws, forms),
  `committee`, `grounds`, `representativeCricket`, `awards`.
- Reuse `LadderTable`, `FixtureStrip`, `MatchCard`, `ClubCard`, `NewsCard`,
  `SponsorPanel` unchanged.
- New theme tokens for the BHRDCA brand; same `applyTheme` mechanism.
- This proves the section model + theme system generalise beyond one comp.

### General builder hardening to do later
- Promote `sectionsConfig` to a schema the builder can validate and serialise.
- Add per-section settings (e.g. "ladder rows to show", "fixtures limit") as
  config rather than component props.
- Move the section `key → component` map into a registry so new section types
  can be registered without editing `Home.tsx`.
- Add an admin-time theme editor that calls `applyTheme` for live preview.
- Wire the data adapters to real sources behind the same types.

## Migration path to the production stack
When moving to the brief's future stack (Next.js + Supabase + Cloudinary +
PlayHQ/Play Cricket APIs): keep `config/`, `data/types.ts`, `components/`,
`styles/` and the theme/section systems; replace the static `data/*` exports
with server/client fetches returning the same types, and move routing from React
Router to the Next.js app router. The visual + structural work carries over intact.
