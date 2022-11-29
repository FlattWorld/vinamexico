/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['absolutewellnesscenters.com', 'placehold.jp'],
  },
};

module.exports = nextConfig;
