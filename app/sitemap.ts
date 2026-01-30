import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";

const BASE_URL = "https://mitul.ca";

function getBlogSlugs(): string[] {
  const postsDir = join(process.cwd(), "app/(without-root-layout)/p");
  try {
    return readdirSync(postsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getBlogSlugs();

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
