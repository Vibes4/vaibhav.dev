# Deploying to GitHub Pages

This portfolio is a **Next.js static export** (`output: 'export'`) that deploys to
GitHub Pages via GitHub Actions. Every push to `main` rebuilds and republishes the
site automatically.

- **Live URL:** https://vibes4.github.io/vaibhav.dev/ (project repo `vaibhav.dev`)
- **Hosting:** GitHub Pages
- **CI/CD:** `.github/workflows/deploy.yml` (Node 24)
- **Base path:** auto-detected — root for a user site, `/<repo>` for a project
  repo. The `configure-pages` step injects it into the build, so CSS/JS load from
  the right place no matter the repo name.

---

## One-time setup

### 1. Create the repository

Create a **public** repo. Either works — the build adapts the base path automatically:

- **Project repo** (e.g. `vaibhav.dev`) → served at `https://vibes4.github.io/<repo>/`.
- **User site** (repo named exactly `vibes4.github.io`) → served at the clean root
  `https://vibes4.github.io`.

### 2. Push the code

From the project root:

```bash
git add -A
git commit -m "Deploy portfolio to GitHub Pages"
git branch -M main
git remote add origin https://github.com/vibes4/vaibhav.dev.git
git push -u origin main
```

### 3. Enable GitHub Actions as the Pages source

On GitHub:

**Settings → Pages → Build and deployment → Source → "GitHub Actions"**

That's it. The first push triggers the workflow; once it finishes, the site is live
at **https://vibes4.github.io**.

---

## How it works

`next.config.mjs` is configured for static hosting:

```js
output: 'export',          // emits a fully static site into ./out
images: { unoptimized: true }, // GitHub Pages can't run the Next image optimizer
trailingSlash: true,       // emits /path/index.html so URLs resolve without 404s
```

The workflow (`.github/workflows/deploy.yml`):

1. **build** — `npm ci` → `npm run build`, which writes the static site to `./out`,
   then uploads it as a Pages artifact.
2. **deploy** — publishes that artifact to GitHub Pages.

`public/.nojekyll` is included so GitHub doesn't run Jekyll over the `_next/` folder.

---

## Everyday workflow

Just push to `main` — the site redeploys automatically:

```bash
git add -A
git commit -m "Update content"
git push
```

Watch progress under the repo's **Actions** tab. A deploy typically takes ~1–2 minutes.

---

## Preview the production build locally

```bash
npm run build     # generates ./out
npm run preview   # serves ./out at http://localhost:5200
```

`npm run preview` serves the exact static files that GitHub Pages will host, so it's
the most accurate local check.

For day-to-day development use the dev server instead:

```bash
npm run dev       # http://localhost:3000
```

---

## Custom domain (optional, later)

If you point a domain at GitHub Pages:

1. Add a `public/CNAME` file containing just your domain, e.g. `vaibhav.dev`.
2. Update `url` in `lib/data.ts` to `https://vaibhav.dev` (used by SEO, sitemap,
   OG tags).
3. Configure the domain under **Settings → Pages → Custom domain** and add the DNS
   records GitHub shows you.

No base path is needed for a user site or a custom domain — only project repos
(`username.github.io/repo`) require one.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| First deploy fails on the **deploy** job | Set **Settings → Pages → Source → GitHub Actions**, then re-run the workflow. |
| CSS/JS 404s, page unstyled | Base path is auto-detected by the **Configure Pages** step — make sure it's present in the workflow and that **Settings → Pages → Source** is set to **GitHub Actions**, then re-run. |
| `_next` assets 404 | Confirm `public/.nojekyll` exists and was committed. |
| Images not loading | `images.unoptimized: true` must stay set — Pages can't optimize images. |
| Resume / portrait 404 | They live in `public/` and are served from the site root; re-run the build. |
