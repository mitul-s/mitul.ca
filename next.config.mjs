import createMDX from "@next/mdx";
import { withMicrofrontends } from "@vercel/microfrontends/next/config";

const withMDX = createMDX({});

const config = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
    cacheComponents: true,
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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/os",
  //       destination: "https://os-2.vercel.app/os",
  //     },
  //     {
  //       source: "/os/:path*",
  //       destination: "https://os-2.vercel.app/os/:path*",
  //     },
  //   ];
  // },

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
        hostname: "assets.literal.club",
      },
      {
        protocol: "https",
        port: "",
        hostname: "img.youtube.com",
      },
    ],
    qualities: [5, 25, 40, 75],
  },
};

export default withMicrofrontends(withMDX(config));
