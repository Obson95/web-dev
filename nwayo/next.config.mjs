/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['via.placeholder.com'],
      minimumCacheTTL: 60, // Increase the cache time
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  