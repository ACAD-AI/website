import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata, PAGE_SEO } from "@/shared/config/seo";
import { StudentsView } from "@/views/solutions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(PAGE_SEO.students, locale);
}

export default async function StudentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <StudentsView />;
}
