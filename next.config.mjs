import createMDX from "@next/mdx";

const withMDX = createMDX({});

const config = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    serverActions: true,
    mdxRs: true,
  },
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

export default withMDX(config);
