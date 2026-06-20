/** @type {import('next').NextConfig} */
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
  poweredByHeader: false,
};

export default nextConfig;
