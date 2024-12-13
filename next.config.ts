import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org" }],
  },
  /* config options here */
};

export default nextConfig;
