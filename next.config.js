/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.rareblocks.xyz", "www.apple.com"],
  },
};

module.exports = nextConfig;
