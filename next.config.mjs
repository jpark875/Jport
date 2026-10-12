// Static export for GitHub Pages. NEXT_PUBLIC_BASE_PATH is the sub-path a project site is
// served from (e.g. "/Jport"); it stays empty for a user site or local development.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
