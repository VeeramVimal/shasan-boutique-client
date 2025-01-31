import type { NextConfig } from "next";

const env = process.env.NEXT_PUBLIC_ENV || 'production';

let outputDir;

if (env === 'production') {
    outputDir = 'out-prod';
} else if (env === 'staging') {
    outputDir = 'out-stage';
} else {
    outputDir = 'out-dev';
}


const nextConfig: NextConfig = {
  "output": 'export',
  distDir: outputDir,
  reactStrictMode: false,
  images: {
    //   remotePatterns: [
    //       {
    //           protocol: 'https',
    //           hostname: 'localhost',
    //           pathname: '/**',
    //       },
    //   ],

      unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
