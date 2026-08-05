/** @type {import('next').NextConfig} */
// Deployed to GitHub Pages under /Jesus-Celebration-Centre, so the site is
// exported as static HTML and served from that sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
