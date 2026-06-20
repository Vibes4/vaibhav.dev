/** @type {import('next').NextConfig} */

// On GitHub Pages a *project* repo is served under /<repo> (e.g. /vaibhav.dev),
// while a user site (vibes4.github.io) is served at the root. The CI workflow
// detects this and passes the value via NEXT_PUBLIC_BASE_PATH; locally it's empty.
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const basePath = rawBase === '/' ? '' : rawBase;

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: 'export',
  images: {
    // GitHub Pages can't run the Next.js image optimizer.
    unoptimized: true,
  },
  // Emit /path/index.html so GitHub Pages serves clean URLs without 404s.
  trailingSlash: true,
  // Prefixes routes AND _next/ asset URLs so CSS/JS load under the repo subpath.
  basePath,
  poweredByHeader: false,
};

export default nextConfig;
