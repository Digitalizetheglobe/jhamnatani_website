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
  async rewrites() {
    const backendUrl = (
      process.env.NEXT_PUBLIC_CMS_URL ||
      process.env.NEXT_PUBLIC_LOCATION_API_URL ||
      "https://api.jhamtani.com"
    ).replace(/\/+$/, "");
    return [
      {
        source: "/api/forms/:path*",
        destination: `${backendUrl}/api/forms/:path*`,
      },
    ];
  },
};

export default nextConfig;
