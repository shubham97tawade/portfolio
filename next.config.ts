import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'ckyxqcfgzcctzxlptfjx.supabase.co',
      port: '',
      pathname: '/storage/**'
    }]
  },
};

export default nextConfig;
