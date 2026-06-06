import { setRequestLocale } from "next-intl/server";

import { InstitutionsView } from "@/views/solutions";

export default async function InstitutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <InstitutionsView />;
}
