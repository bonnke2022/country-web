import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/rest",
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
