export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "2025",
    title: "[Annual Review] 2025",
    description:
      "A year in review: moving, adjusting, and finding breathing room",
    datePublished: "2025-12-31",
  },
  {
    slug: "2024",
    title: "[Annual Review] 2024",
    description: "Everything I want.",
    datePublished: "2024-12-31",
  },
  {
    slug: "q1-2025",
    title: "[Quarter Review] Q1/25",
    description: "Thriving on chaos",
    datePublished: "2025-03-31",
  },
  {
    slug: "q2-2025",
    title: "[Quarter Review] Q2/25",
    description: "Moving to NYC",
    datePublished: "2025-06-30",
  },
  {
    slug: "q3-2025",
    title: "[Quarter Review] Q3/25",
    description: "Three months in NYC: Starting from scratch",
    datePublished: "2025-09-30",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
