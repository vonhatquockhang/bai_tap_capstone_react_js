import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "movienew.cybersoft.edu.vn",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
