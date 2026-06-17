import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "en-GB", "fr", "es", "de", "pt", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];

export function hasLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale);
}
