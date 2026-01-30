import { experiences } from "@/content";
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

function generateLlmsTxt(): string {
  const blogSlugs = getBlogSlugs();

  return `# Mitul Shah

> Personal portfolio and blog of Mitul Shah, a design engineer and photographer based in New York City (originally from Toronto, Canada).

## About

Mitul is a self-taught design engineer currently working at Vercel. He crafts memorable interfaces with deep attention to detail and dedicates time to continuous learning. He's also a professional photographer specializing in music photography, with notable achievements including being a personal photographer for the Uber CEO and having photos featured as wallpapers on Google devices.

## Contact

- Email: mitulxshah@gmail.com
- Twitter/X: @typicalmitul
- Instagram: @typicalmitul
- GitHub: mitul-s

## Pages

- [Home](${BASE_URL}): Main portfolio with experience, projects, photography, and contact info
- [About](${BASE_URL}/about): Personal background, beliefs, and bucket list
- [Guestbook](${BASE_URL}/visitors): Interactive guestbook for visitors to leave notes
- [Photography Portfolio](https://typicalmitul.com): External photography portfolio site

## Blog Posts

${blogSlugs.map((slug) => `- [${slug}](${BASE_URL}/p/${slug})`).join("\n")}

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
