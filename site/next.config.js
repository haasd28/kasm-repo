/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'haasd28/ksam-repo',
    description: 'The community store for Kasm supported workspaces by Haas Dennis.',
    icon: 'https://haasd28.github.io/kasm-repo/1.0/image.png',
    listUrl: 'https://haasd28.github.io/kasm-repo/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-repo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
