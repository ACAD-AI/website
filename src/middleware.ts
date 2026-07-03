import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Fix redirect URLs when behind a reverse proxy (e.g. Railway).
  // next-intl builds the Location header from the internal Host header,
  // which includes the container port (e.g. :8080). Rewrite it using
  // the proxy-forwarded headers so the browser sees the public URL.
  const location = response.headers.get("location");
  if (location) {
    const forwardedHost = request.headers.get("x-forwarded-host");
    const forwardedProto = request.headers.get("x-forwarded-proto") || "https";

    if (forwardedHost) {
      try {
        const url = new URL(location);
        url.protocol = forwardedProto;
        url.host = forwardedHost; // also clears the port
        url.port = "";
        response.headers.set("location", url.toString());
      } catch {
        // If the location isn't a parseable URL, leave it as-is
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(en|en-GB|fr|es|de|pt|ar)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
