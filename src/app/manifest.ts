import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — AI Assessment Platform`,
    short_name: "Acad AI",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#141b34",
    theme_color: "#1836b2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/images/svg/acad-ai-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
