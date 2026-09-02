import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity'],
  async redirects() {
    return [
      {
        source: '/services/healing',
        destination: '/services/emotional-well-being',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
