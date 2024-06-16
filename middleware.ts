import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.cookies.has("isLoggedIn")) {
    const response = NextResponse.next();
    response.headers.set("x-middleware-cache", "no-cache");
    return response;
  }

  const response = NextResponse.redirect(new URL("/login", request.url));
  response.headers.set("x-middleware-cache", "no-cache");
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path+",
};
