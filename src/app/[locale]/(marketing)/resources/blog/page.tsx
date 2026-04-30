import { setRequestLocale } from "next-intl/server";

import { Blog } from "@/views";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Blog />;
}
