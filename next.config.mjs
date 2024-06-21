/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['assets.aceternity.com', 'solheimtech.com'],
  },
  async redirects() {
    return [
      // Redirects for /our-team/*
      {
        source: '/nfc/clients/complete-calibrations/mesa/google-review',
        destination: 'https://g.page/r/Caxsrxx5LDDbEAI/review',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

