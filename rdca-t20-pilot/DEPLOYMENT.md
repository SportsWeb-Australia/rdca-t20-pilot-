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

Recommended repo name: **`rdca-t20-pilot`** (kept separate from `rdca-sportsweb`).

```bash
git init
git add .
git commit -m "Initial RDCA T20 SportsWeb One pilot scaffold"
git branch -M main
git remote add origin https://github.com/<your-org>/rdca-t20-pilot.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `dist`, and local env files.

## 2a. Deploy on Vercel (recommended)

1. Vercel → **Add New… → Project** → import the `rdca-t20-pilot` repo.
2. Vercel auto-detects Vite. Confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. **Deploy.** Every push to `main` auto-deploys; PRs get preview URLs.

### SPA routing note (important)
This app uses client-side routing (React Router). Vercel's Vite preset handles
SPA fallback automatically. If deep links (e.g. `/fixtures`) 404, add a
`vercel.json` at the repo root:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
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

- Homepage hero + "blast" streak render; fonts load (Bebas Neue display).
- Mobile sticky quick-nav appears on a narrow viewport and doesn't cover the footer.
- Each nav route loads (no SPA 404 on refresh of `/fixtures`, `/ladder`, etc.).
- Sponsor and Cloudinary images resolve.
