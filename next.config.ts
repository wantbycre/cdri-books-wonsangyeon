import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "search1.kakaocdn.net",
      },
      {
        protocol: "http",
        hostname: "t1.daumcdn.net",
      },
      {
        protocol: "https",
        hostname: "t1.daumcdn.net",
      },
    ],
  },
};

export default nextConfig;
