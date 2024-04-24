/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: 'http://110.74.194.123:8989'
  },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;
