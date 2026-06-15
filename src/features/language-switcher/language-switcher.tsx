"use client";

import { ChevronDown, Database } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/shared/lib/utils";

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
        <Database className="size-4 text-[#68718b] dark:text-white/75" />
        <span>{locale.toUpperCase()}</span>
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
            "absolute right-0 top-[calc(100%+0.5rem)] z-40 min-w-35 overflow-hidden rounded-xl border border-[#d5dbea] bg-white shadow-[0_16px_48px_rgba(46,73,139,0.18)] dark:border-white/10 dark:bg-[#040b26] dark:shadow-[0_16px_48px_rgba(0,0,0,0.45)]",
            menuClassName,
          )}
        >
          {routing.locales.map((nextLocale) => {
            const isActive = nextLocale === locale;

            return (
              <button
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                  isActive
                    ? "bg-[#2852ff] text-white"
                    : "text-[#141b34] hover:bg-[#f4f7ff] hover:text-[#1836b2] dark:text-white/80 dark:hover:bg-white/6 dark:hover:text-white",
                )}
                key={nextLocale}
                onClick={() => {
                  router.replace(pathname, { locale: nextLocale });
                  setOpen(false);
                }}
                type="button"
              >
                <span className="uppercase">{nextLocale}</span>
                {isActive ? (
                  <span className="text-xs text-white/70">Active</span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
