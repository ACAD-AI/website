import { setRequestLocale } from "next-intl/server";

import { Events } from "@/views";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Events />;
}
