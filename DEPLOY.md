# Deploying Lino Statyba on Vercel

## Prerequisites

- A Vercel account connected to GitHub
- The site builds locally: `npm run build` (from repo root)

## Deploy from this repo (root folder)

1. Push this repository to GitHub (private is fine).
2. In Vercel → **Add New Project** → import the repo from the **root folder**.
3. Set **Root Directory** to `site` (required for Next.js auto-detection).
4. Build settings (auto-detected):
   - Install command: `npm install`
   - Build command: `npm run build`
   - Framework: Next.js
5. Deploy.

If you skip step 3, Vercel can still build using the root `vercel.json` install/build commands, but setting Root Directory to `site` is the recommended path.

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
