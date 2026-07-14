# Deployment — RDCA T20 Blast Pilot

A standard Vite SPA. Below is the recommended path (GitHub → Vercel), a
Cloudflare Pages alternative, and how to roll back.

## 0. Prerequisites

- Node 18+ and npm
- A GitHub account/org for the repo
- A Vercel (or Cloudflare) account

Verify it builds locally first:

```bash
npm install
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally to sanity-check
```

## 1. Push to GitHub

The repo already exists: **`SportsWeb-Australia/rdca-t20-pilot-`** and `origin`
is already set. So it's just:

```bash
git add -A
git commit -m "T20 Black Glass: flatten repo, black/glass theme, hero video, live ticker"
git push origin main
```

`.gitignore` already excludes `node_modules`, `dist`, and local env files.

> **Note — the repo was flattened.** The project used to sit in a nested
> `rdca-t20-pilot/` subfolder with a stale partial copy of `src/` at the root.
> The app now lives at the repo root (where `package.json` is), which is what
> Vercel expects by default. If you'd left it nested you'd have had to set
> **Root Directory** = `rdca-t20-pilot` in the Vercel project settings.

## 2a. Deploy on Vercel (recommended)

1. Vercel → **Add New… → Project** → import `rdca-t20-pilot-`.
2. Vercel auto-detects Vite; `vercel.json` pins it anyway. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Root directory:** `./` (repo root)
3. **Deploy.** Every push to `main` auto-deploys; PRs get preview URLs.

### SPA routing (already handled)
This app uses client-side routing (React Router), so a hard refresh on
`/fixtures` would 404 without a fallback. `vercel.json` at the repo root already
rewrites every path to `index.html`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## 2b. Deploy on Cloudflare Pages (alternative)

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
2. Build settings: **Build command** `npm run build`, **Output directory** `dist`.
3. Add SPA fallback: create `public/_redirects` containing:
   ```
   /*  /index.html  200
   ```
   (Files in `public/` are copied to the build root.)

## 3. Custom domain

Add the domain in the host's dashboard (e.g. `t20.rdca.com.au`) and point DNS
as instructed. Keep it distinct from the existing `rdca-sportsweb.vercel.app`.

## 4. Environment variables

None are required for v1 (no backend). `.env.example` lists the placeholders for
the *future* integrations (Cloudinary, PlayHQ, Play Cricket, Supabase). When
those land, add the real values in the host's Environment Variables settings and
expose any browser-needed ones with the `VITE_` prefix.

## 5. Rollback

- **Vercel:** Project → **Deployments** → pick the last good deployment →
  **⋯ → Promote to Production** (instant; no rebuild).
- **Cloudflare Pages:** Project → **Deployments** → previous build →
  **Rollback to this deployment**.
- **Git-level:** `git revert <bad-commit>` and push, or reset `main` to a known
  good commit and force-push (coordinate with the team first).

## 6. After deploy — quick checks

- **Hero video plays** (autoplay/muted/loop). It's served from RDCA's KeyCDN
  pull zone (`yourbrand-18274.kxcdn.com`) — if it's blocked by CORS or the zone
  goes away, `VideoHero` silently falls back to the poster image, so check it's
  actually moving, not just showing a still.
- **Glass renders.** Backdrop-filter is the whole look. Safari/iOS is fine;
  there's an `@supports not (backdrop-filter)` fallback to solid `#101014` for
  anything older, which should look intentional rather than broken.
- Live ticker scrolls above the header and pauses on hover.
- Mobile quick-nav appears on a narrow viewport and doesn't cover the footer.
- Each nav route loads (no SPA 404 on refresh of `/fixtures`, `/ladder`, etc.).
- Sponsor and Cloudinary images resolve — note sponsor logos sit on a light
  plate (`.splogo`) because most are dark-on-transparent and vanish on black.
