import { setRequestLocale } from "next-intl/server";

import { Pricing } from "@/views";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Pricing />;
}
