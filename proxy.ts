import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseMediaType(mt: string): { type: string; quality: number } {
  const parts = mt.trim().split(";");
  const type = parts[0].trim().toLowerCase();
  let quality = 1;

  for (let i = 1; i < parts.length; i++) {
    const param = parts[i].trim();
    if (param.startsWith("q=")) {
      quality = parseFloat(param.slice(2)) || 0;
    }
  }

  return { type, quality };
}

function shouldServeMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false;

  type MediaInfo = { quality: number; position: number };

  const found: Record<string, MediaInfo> = {};
  const relevantTypes = ["text/html", "text/markdown", "text/plain"];

  acceptHeader.split(",").forEach((mt, i) => {
    const { type, quality } = parseMediaType(mt);
    if (relevantTypes.includes(type) && !found[type]) {
      found[type] = { quality, position: i };
    }
  });

  const html = found["text/html"];
  const markdown = found["text/markdown"];
  const plain = found["text/plain"];

  if (!markdown && !plain) return false;
  if (!html) return true;

  const preferHigherQuality = (a: MediaInfo, b: MediaInfo): MediaInfo => {
    if (a.quality !== b.quality) {
      return a.quality > b.quality ? a : b;
    }
    return a.position < b.position ? a : b;
  };

  let best: MediaInfo;
  if (!markdown) {
    best = plain;
  } else if (!plain) {
    best = markdown;
  } else {
    best = preferHigherQuality(markdown, plain);
  }

  return preferHigherQuality(best, html) === best;
}

const LLM_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "Claude-Web",
  "Claudebot",
  "Anthropic",
  "CCBot",
  "PerplexityBot",
  "Google-Extended",
  "Bytespider",
  "cohere-ai",
];

function isLLMAgent(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return LLM_USER_AGENTS.some((agent) =>
    userAgent.toLowerCase().includes(agent.toLowerCase())
  );
}

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent");
  const acceptHeader = request.headers.get("accept");
  const { pathname } = request.nextUrl;

  // Auth check for /visitors/gang routes
  const isAuthenticated = request.cookies.get("auth");
  if (!isAuthenticated && pathname.startsWith("/visitors/gang")) {
    return NextResponse.redirect(new URL("/visitors/login", request.url));
  }

  // Skip for static files, API routes, and already markdown routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/md") ||
    pathname.includes(".") // static files like .ico, .png, etc.
  ) {
    return NextResponse.next();
  }

  // Serve markdown if Accept header prefers it, or if it's an LLM agent
  if (shouldServeMarkdown(acceptHeader) || isLLMAgent(userAgent)) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/md";
    url.searchParams.set("path", pathname);

    const response = NextResponse.rewrite(url);
    response.headers.set("x-original-path", pathname);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/visitors/gang/:path*",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
