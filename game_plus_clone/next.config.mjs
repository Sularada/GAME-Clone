/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gameplus.com.tr",
        pathname: "/gameplus-static-resources/images/**",
      },
    ],
  },
};
