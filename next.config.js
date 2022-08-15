/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
  images:{
    domains: ['medinery-bucket.s3.ap-south-1.amazonaws.com']
  }
};

module.exports = nextConfig;
