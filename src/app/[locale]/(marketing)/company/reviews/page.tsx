import type { Metadata } from "next";

import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";
import { Reviews } from "@/views";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.reviews, locale);
}

const ReviewsPage = () => {
  return <Reviews />;
};

export default ReviewsPage;
