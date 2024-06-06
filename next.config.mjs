/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['assets.aceternity.com'],
  },
};

export default nextConfig;
