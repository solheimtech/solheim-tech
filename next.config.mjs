/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    domains: ['assets.aceternity.com', 'solheimtech.com', 'img.stripecdn.com', 'media.giphy.com'],
  },
  async redirects() {
    return [
      // Redirects for NFC Card Google Review
      {
        source: '/nfc/clients/complete-calibrations/mesa/google-review',
        destination: 'https://g.page/r/Caxsrxx5LDDbEAI/review',
        permanent: true,
      },
    ];
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;