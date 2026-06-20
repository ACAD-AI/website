import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";

const testimonialKeys = [
  "cis",
  "scoreReview",
  "seamless",
  "easy",
  "autosave",
] as const;

export async function StudentsWallOfLoveSection() {
  const t = await getTranslations("StudentsWallOfLove");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-10">
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeIn>
        <FadeIn className="grid w-full gap-5 md:grid-cols-2">
          {testimonialKeys.map((key, index) => (
            <blockquote
              className={`flex h-full flex-col rounded-2xl border border-[#e3e8f5] bg-white p-6 text-[#141b34] shadow-[0_14px_36px_rgba(46,73,139,0.08)] sm:p-7 dark:border-[#57588d] dark:bg-[#393967] dark:text-white dark:shadow-[0_14px_36px_rgba(7,15,51,0.22)] ${
                index === testimonialKeys.length - 1
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)]"
                  : ""
              }`}
              key={key}
            >
              <p className="text-sm leading-6 sm:text-base sm:leading-7">
                &ldquo;{t(`items.${key}.review`)}&rdquo;
              </p>
              <footer className="mt-auto pt-7">
                <cite className="text-sm font-medium text-[#1836b2] not-italic sm:text-base dark:text-[#86c7ed]">
                  {t(`items.${key}.course`)}
                </cite>
                <p className="mt-1 text-xs leading-5 text-[#5b6b8c] sm:text-sm dark:text-white/65">
                  {t(`items.${key}.school`)}
                </p>
              </footer>
            </blockquote>
          ))}
        </FadeIn>
        <Link
          className={ctaButtonVariants({ variant: "primary" })}
          href="/company/reviews"
        >
          {t("button")}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
