import { getTranslations } from "next-intl/server";
import { ReviewImageMarquee } from "@/features/reviews/review-image-marquee";
import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";

export async function StudentsWallOfLoveSection() {
  const t = await getTranslations("StudentsWallOfLove");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />
      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10">
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </FadeIn>
        <FadeIn className="w-screen">
          <ReviewImageMarquee audience="students" />
        </FadeIn>
        <Link
          className={ctaButtonVariants({ variant: "primary" })}
          href="/company/reviews"
        >
          {t("button")}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
