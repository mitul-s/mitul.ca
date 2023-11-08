/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        port: "",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        port: "",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        port: "",
        hostname: "assets.literal.club",
      },
    ],
  },
};

module.exports = nextConfig;
