# rage-of-mages/pages

Static site built with [Astro](https://astro.build) and deployed to GitHub Pages via `.github/workflows/astro.yml`.

## Local development

```sh
npm install
npm run dev
```

Astro will print the local URL (usually `http://localhost:4321`).

## Build

```sh
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Push to the `master` branch.

The GitHub Actions workflow builds the site and deploys the `dist/` folder to GitHub Pages.

### Notes

- This repo is scaffolded to build from the repository root (workflow `BUILD_PATH: "."`).
- The workflow provides `--site` and `--base` flags to `astro build`, so `astro.config.mjs` is intentionally minimal.
- Astro is configured with `srcDir: '.'`, so source lives at the repo root:
	- routes in `pages/`
	- shared components/layouts in `layouts/`

## i18n (English + Russian)

We use URL-based locales:

- English: `/en/...`
- Russian: `/ru/...`

The root route `/` is a tiny redirector (`pages/index.astro`) that:

1. Uses saved preference (`localStorage["rom_lang"]`), otherwise
2. Detects browser language (`navigator.languages`) and redirects to `/ru/` for Russian, `/en/` otherwise.
