import type { Metadata } from "next";

import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";
import { Faq } from "@/views";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.faq, locale);
}

const FaqPage = () => {
  return (
    <div>
      <Faq />
    </div>
  );
};

export default FaqPage;
