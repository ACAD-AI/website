import type { MetadataRoute } from "next";

import { SITE_URL } from "@/shared/config/seo";

// Allow all crawlers full access; point them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
