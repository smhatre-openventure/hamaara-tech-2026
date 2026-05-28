import type { NextConfig } from "next";

const basePath =
  process.env.NODE_ENV === "production" ? "/hamaara-tech-2026" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  // Expose basePath so components can prefix static asset paths manually,
  // since next/image does not prepend basePath to src with unoptimized: true.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
