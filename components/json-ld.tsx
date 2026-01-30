export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mitul Shah",
    url: "https://mitul.ca",
    image: "https://mitul.ca/og-2.png",
    jobTitle: "Design Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Vercel",
      url: "https://vercel.com",
    },
    description: "Design engineer, photographer, and a bit more.",
    sameAs: [
      "https://twitter.com/typicalmitul",
      "https://instagram.com/typicalmitul",
      "https://github.com/mitul-s",
      "https://typicalmitul.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mitul Shah",
    url: "https://mitul.ca",
    description: "Personal portfolio and blog of Mitul Shah",
    author: {
      "@type": "Person",
      name: "Mitul Shah",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

import { getBlogPost } from "@/lib/blog-posts";

const BASE_URL = "https://mitul.ca";

interface BlogPostJsonLdProps {
  slug: string;
}

export function BlogPostJsonLd({ slug }: BlogPostJsonLdProps) {
  const post = getBlogPost(slug);
  if (!post) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/p/${post.slug}`,
    image: post.image || `${BASE_URL}/og-2.png`,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Person",
      name: "Mitul Shah",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Mitul Shah",
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
