import { setRequestLocale } from "next-intl/server";

import { EducatorsView } from "@/views/solutions";

export default async function EducatorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <EducatorsView />;
}
