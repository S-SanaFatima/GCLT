/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'www.gclt.com.pk' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/academics/diploma-programs/diploma-in-financial-jurisprudence',
        destination: '/academics/programmes/islamic-banking-finance',
        permanent: true,
      },
      {
        source: '/academics/short-courses/technical-approaches-to-research',
        destination: '/academics/programmes/research-methods-academic-writing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
