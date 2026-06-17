"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { routing } from "@/i18n/routing";
import { cn } from "@/shared/lib/utils";

const languageOptions = [
  {
    locale: "en",
    flag: "🇺🇸",
    language: "English",
    region: "United States",
  },
  {
    locale: "en-GB",
    flag: "🇬🇧",
    language: "English (UK)",
    region: "United Kingdom",
  },
  {
    locale: "fr",
    flag: "🇫🇷",
    language: "Français",
    region: "France",
  },
  {
    locale: "es",
    flag: "🇪🇸",
    language: "Español",
    region: "Spain",
  },
  {
    locale: "de",
    flag: "🇩🇪",
    language: "Deutsch",
    region: "Germany",
  },
  {
    locale: "pt",
    flag: "🇵🇹",
    language: "Português",
    region: "Portugal",
  },
  {
    locale: "ar",
    flag: "🇸🇦",
    language: "العربية",
    region: "Saudi Arabia",
  },
] satisfies Array<{
  locale: (typeof routing.locales)[number];
  flag: string;
  language: string;
  region: string;
}>;

export function LanguageSwitcher({
  className,
  buttonClassName,
  menuClassName,
}: {
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const activeLanguage =
    languageOptions.find((option) => option.locale === locale) ??
    languageOptions[0];

  return (
    <div className={cn("relative", className)}>
      <button
        aria-expanded={open}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-xl border border-[#cfd5e7] px-4 text-sm font-medium text-[#141b34] dark:border-[#323261] dark:text-white",
          buttonClassName,
        )}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {activeLanguage.flag}
        </span>
        <span>{activeLanguage.language}</span>
        <ChevronDown
          className={cn(
            "size-4 text-[#4d73ff] transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <div
          className={cn(
            "absolute right-0 top-[calc(100%+0.5rem)] z-40 min-w-72 overflow-hidden rounded-xl border border-[#d5dbea] bg-white shadow-[0_16px_48px_rgba(46,73,139,0.18)] dark:border-white/10 dark:bg-[#040b26] dark:shadow-[0_16px_48px_rgba(0,0,0,0.45)]",
            menuClassName,
          )}
        >
          {languageOptions.map((option) => {
            const isActive = option.locale === locale;

            return (
              <button
                className={cn(
                  "flex w-full items-center gap-4 px-4 py-3 text-left transition-colors",
                  isActive
                    ? "bg-[#eef4ff] text-[#141b34] dark:bg-[#2852ff] dark:text-white"
                    : "text-[#141b34] hover:bg-[#f4f7ff] hover:text-[#1836b2] dark:text-white/80 dark:hover:bg-white/6 dark:hover:text-white",
                )}
                key={option.locale}
                onClick={() => {
                  router.replace(pathname, { locale: option.locale });
                  setOpen(false);
                }}
                type="button"
              >
                <span aria-hidden="true" className="text-xl leading-none">
                  {option.flag}
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium">
                    {option.language}
                  </span>
                  <span
                    className={cn(
                      "text-sm text-[#667085]",
                      isActive && "dark:text-white/70",
                    )}
                  >
                    {option.region}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
