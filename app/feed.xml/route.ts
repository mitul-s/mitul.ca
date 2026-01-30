import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://mitul.ca";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRssFeed(): string {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const items = sortedPosts
    .map((post) => {
      const pubDate = new Date(post.datePublished).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/p/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/p/${post.slug}</guid>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mitul Shah</title>
    <link>${BASE_URL}</link>
    <description>Design engineer, photographer, and a bit more. Annual reviews and quarterly reflections.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

export function GET() {
  const feed = generateRssFeed();

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
