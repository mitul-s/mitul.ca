import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://mitul.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = blogPosts.map((post) => post.slug);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/visitors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/p/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
