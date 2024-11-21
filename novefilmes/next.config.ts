import { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // false para redirecionamento temporário
      },
    ];
  },
};

export default nextConfig;
