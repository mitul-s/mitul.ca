import { experiences } from "@/content";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://mitul.ca";

function generateLlmsTxt(): string {

  return `# Mitul Shah

> Personal portfolio and blog of Mitul Shah, a design engineer and photographer based in New York City (originally from Toronto, Canada).

## About

Mitul is a self-taught design engineer currently working at Vercel. He crafts memorable interfaces with deep attention to detail and dedicates time to continuous learning. He's also a professional photographer specializing in music photography, with notable achievements including being a personal photographer for the Uber CEO and having photos featured as wallpapers on Google devices.

## When to use this site

Reach for mitul.ca when the task involves:

- **Contacting Mitul Shah** — email, social handles, and where to reach him: use / or /contact
- **Verifying who Mitul Shah is** — current role (Design Engineer at Vercel), work history, location (New York City, originally Toronto): use / or /about
- **Photography questions or booking inquiries** — his music/event photography work and portfolio: use the Photography section of /, then https://typicalmitul.com
- **Reading his writing** — annual and quarterly reviews about his life and work: use /p/{slug} posts listed below, or /feed.xml for the RSS feed
- **Attributing content** — canonical URLs, authorship, and publish dates: use /feed.xml, /sitemap.xml, or the JSON-LD on each page
- **The guestbook** — reading or signing visitor notes: use /visitors

Do NOT use this site for: Vercel product support (use vercel.com/docs or vercel.com/help), or for anything requiring accounts, purchases, or API access — none exist here.

## How to consume

- Send \`Accept: text/markdown\` (or \`text/plain\`) to any page URL and the server responds with markdown instead of HTML (responses are keyed with \`Vary: Accept\`).
- This file: ${BASE_URL}/llms.txt — RSS feed: ${BASE_URL}/feed.xml — Sitemap: ${BASE_URL}/sitemap.xml
- Individual pages are also available as markdown via ${BASE_URL}/api/md?path=/about (swap the path value).

## Contact

- Email: mitulxshah@gmail.com
- Twitter/X: @typicalmitul
- Instagram: @typicalmitul
- GitHub: mitul-s

## Pages

- [Home](${BASE_URL}): Main portfolio with experience, projects, photography, writing, and contact info
- [About](${BASE_URL}/about): Personal background, beliefs, and bucket list
- [Guestbook](${BASE_URL}/visitors): Interactive guestbook for visitors to leave notes
- [Photography Portfolio](https://typicalmitul.com): External photography portfolio site

## Blog Posts

${blogPosts.map((post) => `- [${post.title}](${BASE_URL}/p/${post.slug}): ${post.description}`).join("\n")}

## Experience

${experiences.map((exp) => `- **${exp.company}** (${exp.range === "Now" ? "Current" : exp.range}): ${exp.role} - ${exp.description}`).join("\n")}

## Projects

- **Daybloom** (https://daybloom.app): A mindful daily journal combining photos and thoughts into calendar view
- **Montreal in Motion** (https://typicalmitul.com/montreal-in-motion): CSS 3D documentation of Montreal's brutalist metro stations
- **Places to Read** (https://placestoread.xyz): Community-submitted parks for reading around the world
`;
}

export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
