import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(process.env.VERCEL ? {} : { output: "export" }),
  images: { unoptimized: !process.env.VERCEL },
};

export default nextConfig;
