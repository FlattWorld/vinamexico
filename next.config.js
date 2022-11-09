/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  images: {
    domains: ['absolutewellnesscenters.com'],
  },
};

module.exports = nextConfig;
