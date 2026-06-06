import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/shared";

import { WorldMapVisual } from "./world-map-visual";

export async function AboutStorySection() {
  const t = await getTranslations("AboutStory");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_86%,rgba(25,79,204,0.2),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <WorldMapVisual location={t("location")} />

        <FadeIn className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.32em] text-[#1836b2] uppercase dark:text-[#86c7ed]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-8 text-[#5b6b8c] dark:text-white/65">
          <p>
            {t("paragraph1")}{" "}
            <strong className="font-semibold text-[#141b34] dark:text-white">
              {t("paragraph1Bold")}
            </strong>
          </p>
          <p>{t("paragraph2")}</p>
          <p>{t("paragraph3")}</p>
        </FadeIn>
      </div>
    </section>
  );
}
