import createMDX from "@next/mdx";

const withMDX = createMDX({});

const config = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/os",
  //       permanent: false,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/os",
        destination: "https://os-2.vercel.app/os",
      },
      {
        source: "/os/:path*",
        destination: "https://os-2.vercel.app/os/:path*",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "res.craft.do",
      },
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
