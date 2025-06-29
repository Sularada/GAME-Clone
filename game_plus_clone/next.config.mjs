/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gameplus.com.tr",
        pathname: "/gameplus-static-resources/images/**",
      },
      {
        protocol: "https",
        hostname: "gameplus.com.tr",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.nvidiagrid.net",
        pathname: "/**",
      },
    ],
  },

  // Fast Refresh loop'unu azaltmak için burası önemli!
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      // node_modules klasörünü izleme
      ignored: /node_modules/,
      // Değişiklikleri algılamak için 1 saniyede bir kontrol et
      poll: 1000,
    };
    return config;
  },
};

export default nextConfig;
