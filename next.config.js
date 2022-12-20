/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wl-lizee-production.cellar-c2.services.clever-cloud.com"],
  },
}

module.exports = nextConfig