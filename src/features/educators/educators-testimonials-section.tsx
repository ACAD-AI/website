import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";

const testimonialKeys = ["ukandu", "awoniyi", "eti", "ajibade"] as const;

export async function EducatorsTestimonialsSection() {
  const t = await getTranslations("EducatorsTestimonials");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.2),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.22),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-10">
        <FadeIn>
          <SectionHeader align="center" title={t("title")} />
        </FadeIn>
        <FadeIn className="grid w-full gap-5 md:grid-cols-2">
          {testimonialKeys.map((key) => (
            <blockquote
              className="flex h-full flex-col rounded-md border border-[#57588d] bg-[#393967] p-6 text-white shadow-[0_14px_36px_rgba(7,15,51,0.22)] sm:p-7"
              key={key}
            >
              <p className="text-sm leading-6 sm:text-base sm:leading-7">
                &ldquo;{t(`items.${key}.quote`)}&rdquo;
              </p>
              <footer className="mt-auto pt-7">
                <cite className="text-sm font-medium not-italic sm:text-base">
                  {t(`items.${key}.author`)}
                </cite>
                <p className="mt-1 text-xs leading-5 text-white/65 sm:text-sm">
                  {t(`items.${key}.organization`)}
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
