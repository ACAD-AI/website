import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ReviewImageMarquee } from "@/features/reviews/review-image-marquee";
import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";

export async function EducatorsTestimonialsSection() {
  const t = await getTranslations("EducatorsTestimonials");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.2),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.22),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10">
        <FadeIn>
          <SectionHeader align="center" title={t("title")} />
        </FadeIn>
        <FadeIn className="w-screen">
          <ReviewImageMarquee audience="educators" />
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
