/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "i.scdn.co",
      },
    ],
  },
};

module.exports = nextConfig;
