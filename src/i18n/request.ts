import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { hasLocale } from "@/i18n/routing";

async function getMessages(locale: string) {
  switch (locale) {
    case "ar":
      return (await import("../../messages/ar.json")).default;
    case "de":
      return (await import("../../messages/de.json")).default;
    case "en-GB":
      return (await import("../../messages/en-GB.json")).default;
    case "es":
      return (await import("../../messages/es.json")).default;
    case "fr":
      return (await import("../../messages/fr.json")).default;
    case "pt":
      return (await import("../../messages/pt.json")).default;
    default:
      return (await import("../../messages/en.json")).default;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !hasLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: await getMessages(locale),
  };
});
