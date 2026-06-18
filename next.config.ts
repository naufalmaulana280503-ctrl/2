import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Matikan semua error TypeScript pas build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Matikan semua error ESLint pas build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
