import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [75, 80, 82, 85, 90, 95, 100],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
