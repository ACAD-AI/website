import type { Metadata } from "next";

import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";
import { Contact } from "@/views";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.contact, locale);
}

const ContactPage = () => {
  return <Contact />;
};

export default ContactPage;
