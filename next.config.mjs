/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages adds a trailing slash by default that needs to be handled
  trailingSlash: true,
  // The base path should match your GitHub repository name if it's not served from the root
  // e.g., if your repo is username.github.io/my-project, use basePath: '/my-project'
  basePath: '/askharoun.dev-FINAL', // Replace 'your-repo-name' with your actual repository name
  assetPrefix: './',
}

export default nextConfig
