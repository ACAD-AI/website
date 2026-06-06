import { getTranslations } from "next-intl/server";

import { FadeIn, MediaShowcase } from "@/shared";

export async function EducatorsInActionSection() {
  const t = await getTranslations("EducatorsInAction");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(25,79,204,0.2),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-[1060px]">
        <FadeIn>
          <MediaShowcase
            imageAlt={t("imageAlt")}
            imageSrc="/images/svg/home-hero.svg"
            subtitle={t("subtitle")}
            title={t("title")}
          />
        </FadeIn>
      </div>
    </section>
  );
}
