import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath only applies during production builds (GitHub Pages subpath)
  basePath: process.env.NODE_ENV === "production" ? "/hamaara-tech-2026" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
