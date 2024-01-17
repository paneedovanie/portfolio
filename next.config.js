/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'edovanie-profile-cms.x10.mx'
      },
      {
        protocol: 'http',
        hostname: 'edovanie-profile-cms.x10.mx'
      }
    ],
  },
}

module.exports = nextConfig
