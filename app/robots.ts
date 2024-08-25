import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/visitors"],
      disallow: ["/private/", "/visitors/*", "/api/*"],
    },
  };
}
