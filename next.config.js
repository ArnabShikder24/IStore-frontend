/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.rareblocks.xyz",
      "www.apple.com",
      "www.zdnet.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
