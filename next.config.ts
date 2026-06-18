import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "substackcdn.com",
        protocol: "https",
      },
      {
        hostname: "substack-post-media.s3.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
