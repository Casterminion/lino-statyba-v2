# Deploying Lino Statyba on Vercel

## Prerequisites

- A Vercel account connected to GitHub
- The site builds locally: `npm run build` (from repo root)

## Deploy from this repo

### Recommended (simplest)

1. Push this repository to GitHub (private is fine).
2. In Vercel → **Add New Project** → import the repo.
3. Set **Root Directory** to `site`.
4. Leave Install / Build commands empty (Vercel auto-detects Next.js).
5. Set **Node.js Version** to `20.x` (or match `engines.node` in `site/package.json`).
6. Deploy.

### Alternative (repo root)

The root [`vercel.json`](vercel.json) points Vercel at the Next.js app in `site/` via `@vercel/next`. Leave **Root Directory** empty and clear any custom **Output Directory** in the dashboard (must not be `public`).

### Troubleshooting

| Symptom | Fix |
|---------|-----|
| `No Output Directory named "public" found` | Clear **Output Directory** in Vercel settings, or set **Root Directory** to `site` with Framework = Next.js |
| Build stops at “Collecting page data” | Set **Root Directory** to `site` and clear custom build commands |
| `Cannot find module '@tailwindcss/postcss'` | Build deps are in `dependencies`; redeploy after pulling latest |
| `EBADENGINE` Node version warning | Safe to ignore, or set Node.js version in Vercel to 20.x or 22.x |
| Wrong app / missing routes | Confirm Vercel is connected to `Casterminion/lino-statyba-v2` (not `Lino-Statyba`) |

## Custom domain

1. Add your domain in Vercel → **Domains**.
2. Update DNS at your registrar per Vercel's instructions.
3. Wait for SSL provisioning.

## Local commands (from repo root)

```bash
npm install --prefix site
npm run dev
npm run build
```

## Content editing

Edit text and project data in [`site/content/site.json`](site/content/site.json), then rebuild. Media files live in [`site/public/media/`](site/public/media/).
