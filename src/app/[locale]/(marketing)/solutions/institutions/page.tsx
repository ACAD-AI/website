import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";
import { InstitutionsView } from "@/views/solutions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.institutions, locale);
}

export default async function InstitutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <InstitutionsView />;
}
