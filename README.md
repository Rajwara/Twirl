# TWIRL° site

Static HTML/CSS/JS site — no build step.

## Deploy on Vercel

1. Import this repository at https://vercel.com/new.
2. Framework Preset: **Other**. Leave Build Command and Output Directory empty
   (the repo root is served as-is).
3. Deploy.

Or from the CLI:

```bash
npx vercel --prod
```

`vercel.json` enables clean URLs (`/menu` serves `menu.html`; `/menu.html`
redirects to `/menu`) and sets caching for `/assets`. `.vercelignore` keeps
`IMAGE-PROMPTS.md` and this README out of the deployment.

## Local preview

```bash
npx serve .
```
