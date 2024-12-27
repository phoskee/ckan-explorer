import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // !! WARN !!
    // Ignora gli errori TypeScript durante la build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora anche gli errori ESLint se necessario
    ignoreDuringBuilds: true,
  },
  output: 'export', // Necessario per GitHub Pages
};

export default nextConfig;
