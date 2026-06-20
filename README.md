# Vaibhav Kulkarni — Portfolio (`life`)

A premium, recruiter-focused personal site positioning Vaibhav as a **Backend & Platform Engineer**.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide · shadcn-style UI primitives. Deploys to **Vercel**.

## Sections
Hero · About · Engineering Impact (animated metrics) · Experience timeline · Featured projects · Technical skills · **Live GitHub activity** · Contact · Footer. Full SEO: metadata, Open Graph (dynamic image), JSON-LD `Person`, `sitemap.xml`, `robots.txt`.

## Local development
```bash
cd life
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
> Node 18.18+ required (Node 20+ recommended).

## Assets (already in `public/`)
- `headshot.jpeg` — hero photo
- `Vaibhav_Resume.pdf` — downloadable ATS resume (linked from nav + hero)

To update the resume, replace `public/Vaibhav_Resume.pdf` (keep the filename).

## Editing content
All copy lives in **`lib/data.ts`** — `site`, `about`, `metrics`, `experience`, `projects`, `skills`, `nav`. No need to touch components for text changes.

- **Custom domain:** set `site.url` in `lib/data.ts` to your domain (e.g. `https://vaibhav.dev`). Canonical, sitemap, and OG tags follow it automatically.
- **GitHub:** `site.githubUser` is `vibes4`. The GitHub section fetches live repos/stars/followers from the public API (cached 1h). No token needed; to raise rate limits set `GITHUB_TOKEN` in Vercel env.

## GitHub API rate limits
Unauthenticated requests are limited to 60/hour per IP. If the live grid is empty it falls back to a "view profile" card. Add a fine-grained read-only `GITHUB_TOKEN` env var in Vercel to remove this limit.

## Contact form
The form composes a `mailto:` to `site.email` (no backend, no secrets). To switch to a hosted form (real inbound submissions), wire the `onSubmit` in `components/sections/contact.tsx` to **Formspree** or **Resend** and add the API key as a Vercel env var.

## Deploy to Vercel
1. Push this `life/` folder to a GitHub repo.
2. On [vercel.com/new](https://vercel.com/new), import the repo. Framework auto-detects **Next.js** — no config needed.
3. Deploy. You get a free `*.vercel.app` URL.
4. (Optional) Add a custom domain in **Project → Settings → Domains**, then update `site.url`.

CLI alternative:
```bash
npm i -g vercel
cd life && vercel        # preview
vercel --prod            # production
```

## Performance & SEO
- Single hero image (priority, AVIF/WebP via `next/image`), system+Google fonts with `display: swap`, minimal JS, motion respects `prefers-reduced-motion` → targets Lighthouse 95+.
- Security headers in `vercel.json`.
