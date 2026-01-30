import { NextRequest } from "next/server";
import { experiences, beliefs, bucketList, Status } from "@/content";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { readFileSync } from "fs";
import { join } from "path";

const BASE_URL = "https://mitul.ca";

function getHomeMarkdown(): string {
  return `# Mitul Shah

> Design engineer, photographer, and a bit more.

Crafting memorable interfaces with deep attention to detail. I dedicate most my time to continuous learning and refining my skillset.

## Experience

${experiences.map((exp) => `### ${exp.company} - ${exp.role} (${exp.range})
${exp.description}
${exp.link ? `[Visit](${exp.link})` : ""}`).join("\n\n")}

## Projects

### Daybloom
A mindful daily journal that combines your photos and thoughts into calendar view, helping you capture memories and reflect on life's meaningful moments.
[Visit](https://daybloom.app)

### Montreal in Motion
A documentation of the brutalist and distinctly designed metro stations. The project uses CSS 3D transforms and noise to mirror the architectural character of the spaces.
[Visit](https://typicalmitul.com/montreal-in-motion)

### Places to Read
A microsite to discover community submitted parks around the world where you can sit down, chill and enjoy reading a book.
[Visit](https://placestoread.xyz)

## Photography

I've built up my craft as a photographer over a number of years and thrived in turning it into an independent business.

Notable achievements include:
- Being a personal photographer for the Uber CEO
- Featured in local Toronto newspapers
- Having a photo as a wallpaper in every Google device

Today, my focus is on music photography where I capture my favourite artists at concerts or festivals.

[Visit my portfolio](https://typicalmitul.com)

## Contact

- Email: mitulxshah@gmail.com
- Twitter: [@typicalmitul](https://x.com/typicalmitul)
- Instagram: [@typicalmitul](https://instagram.com/typicalmitul)
- GitHub: [mitul-s](https://github.com/mitul-s)

## Blog Posts

${blogPosts.map((post) => `- [${post.title}](${BASE_URL}/p/${post.slug}) - ${post.description}`).join("\n")}
`;
}

function getAboutMarkdown(): string {
  return `# About Mitul Shah

Hey, my name is Mitul and welcome to my space on the internet. I'm a self-taught design engineer based in Toronto, Canada.

Learning to code has felt like a superpower for me, it allows me to bring any idea I can imagine to life. I love creating and focusing on the little things that enhance our experiences as we dive into the abyss of the web.

Apart from all of that, a strong sense of curiosity about the world has always driven me. Travel, and specifically the diverse experiences gained from exploring different places, cultures, and landscapes, have significantly influenced my personal growth.

My life thrives on both chaos and serendipity. I'm just tryna channel the same spirit of adventure as Ferris Bueller.

## Beliefs

${beliefs.map((belief) => `- ${belief}`).join("\n")}

## Bucket List

${bucketList.map((item) => `- ${item.item}${item.status === Status.completed ? " ✓" : item.status === Status.progress ? " (in progress)" : ""}`).join("\n")}
`;
}

function getBlogPostMarkdown(slug: string): string | null {
  const post = getBlogPost(slug);
  if (!post) return null;

  // Try to read the MDX file content
  try {
    const mdxPath = join(
      process.cwd(),
      "app/(without-root-layout)/p",
      slug,
      "page.mdx"
    );
    let content = readFileSync(mdxPath, "utf-8");

    // Remove import statements and export metadata
    content = content
      .replace(/^import.*$/gm, "")
      .replace(/export const metadata = \{[\s\S]*?\};/m, "")
      .replace(/<BlogPostJsonLd.*?\/>/g, "")
      .replace(/<Figure[\s\S]*?\/>/g, (match) => {
        // Extract alt text from Figure components
        const altMatch = match.match(/alt="([^"]*)"/);
        const srcMatch = match.match(/src=\{?([^}\s]*)\}?/);
        if (altMatch) return `*${altMatch[1]}*`;
        return "";
      })
      .replace(/<ImageContainer>[\s\S]*?<\/ImageContainer>/g, "")
      .replace(/<Callout>[\s\S]*?<\/Callout>/g, "")
      .replace(/<SmallText>[\s\S]*?<\/SmallText>/g, "")
      .replace(/<[^>]+>/g, "") // Remove remaining JSX tags
      .trim();

    return `# ${post.title}

*Published: ${post.datePublished}*

${content}

---
[Back to home](${BASE_URL})
`;
  } catch {
    // Fallback if we can't read the file
    return `# ${post.title}

${post.description}

*Published: ${post.datePublished}*

[Read the full article](${BASE_URL}/p/${slug})
`;
  }
}

function getVisitorsMarkdown(): string {
  return `# Guestbook

Welcome to the guestbook! This is an interactive page where visitors can leave notes.

[Visit the guestbook](${BASE_URL}/visitors) to sign it.
`;
}

export async function GET(request: NextRequest) {
  // Try searchParams first, then x-original-path header from proxy
  const path =
    request.nextUrl.searchParams.get("path") ||
    request.headers.get("x-original-path") ||
    "/";

  let markdown: string;

  if (path === "/" || path === "") {
    markdown = getHomeMarkdown();
  } else if (path === "/about") {
    markdown = getAboutMarkdown();
  } else if (path === "/visitors") {
    markdown = getVisitorsMarkdown();
  } else if (path.startsWith("/p/")) {
    const slug = path.replace("/p/", "");
    const content = getBlogPostMarkdown(slug);
    if (content) {
      markdown = content;
    } else {
      markdown = `# Not Found\n\nThe requested page was not found.`;
    }
  } else {
    markdown = `# Not Found\n\nThe requested page was not found.`;
  }

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
