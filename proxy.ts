import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  MARKDOWN_VARY_HEADER,
  isLLMAgent,
  shouldServeMarkdown,
} from "@/lib/content-negotiation";

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
    // The response variant depends on the Accept header, so caches must key
    // on it — otherwise a CDN can serve cached HTML to a markdown request
    // (or vice versa) depending on which variant was cached first.
    response.headers.set("Vary", MARKDOWN_VARY_HEADER);
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
