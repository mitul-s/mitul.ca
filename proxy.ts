import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get("auth");

  if (
    !isAuthenticated &&
    request.nextUrl.pathname.startsWith("/visitors/gang")
  ) {
    return NextResponse.redirect(new URL("/visitors/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/visitors/gang/:path*",
};

