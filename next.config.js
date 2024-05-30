/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hatoba.id",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
