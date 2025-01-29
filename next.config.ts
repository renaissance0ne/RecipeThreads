import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      //bodySizeLimit: 10 * 1024 * 1024,
    },
  },
  serverExternalPackages: ["mongoose"], // Moved from experimental.serverComponentsExternalPackages
  // serverComponentsExternalPackages: ["mongoose"],       OUTDATED
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;