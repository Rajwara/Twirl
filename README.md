# Jade Palast site

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

## Languages (English / German)

The site shows German to visitors whose browser is set to German and English to everyone else.
The EN / DE buttons in the header and footer switch language, and the choice is remembered.

All German text lives in `assets/i18n.js` as `"English text": "German text"` pairs.
When you change or add English text on a page, add or update the matching line there.
Prices like `€13.80` are converted to `13,80 €` automatically.
