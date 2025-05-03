import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://ui-avatars.com/api/?background=random&name=Bonieky&size=100"
      ),
    ],
  },
};

export default nextConfig;
