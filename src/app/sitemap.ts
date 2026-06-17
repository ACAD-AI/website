import type { MetadataRoute } from "next";

import { localizedPath, PAGE_SEO } from "@/shared/config/seo";

// Per-route crawl hints. Default to monthly / 0.7 for anything unlisted.
const HINTS: Record<
  string,
  {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/solutions/institutions": { changeFrequency: "monthly", priority: 0.9 },
  "/solutions/educators": { changeFrequency: "monthly", priority: 0.9 },
  "/solutions/students": { changeFrequency: "monthly", priority: 0.9 },
  "/pricing": { changeFrequency: "monthly", priority: 0.8 },
  "/terms": { changeFrequency: "yearly", priority: 0.4 },
  "/resources/blog": { changeFrequency: "weekly", priority: 0.7 },
  "/resources/events": { changeFrequency: "weekly", priority: 0.6 },
  "/resources/faq": { changeFrequency: "monthly", priority: 0.6 },
  "/company/about": { changeFrequency: "monthly", priority: 0.7 },
  "/company/reviews": { changeFrequency: "monthly", priority: 0.6 },
  "/company/contact": { changeFrequency: "yearly", priority: 0.5 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(PAGE_SEO).map((page) => {
    const hint = HINTS[page.path] ?? {
      changeFrequency: "monthly",
      priority: 0.7,
    };

    return {
      url: localizedPath(page.path, "en"),
      lastModified,
      changeFrequency: hint.changeFrequency,
      priority: hint.priority,
      alternates: {
        languages: {
          en: localizedPath(page.path, "en"),
          fr: localizedPath(page.path, "fr"),
          ar: localizedPath(page.path, "ar"),
        },
      },
    };
  });
}
