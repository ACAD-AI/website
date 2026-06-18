import { getTranslations } from "next-intl/server";

import { FadeIn, YouTubeVideoShowcase } from "@/shared";

export async function InActionSection() {
  const t = await getTranslations("InstitutionsInAction");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(25,79,204,0.2),transparent_38%)]" />

      <FadeIn className="relative mx-auto w-full max-w-[920px]">
        <YouTubeVideoShowcase
          subtitle={t("subtitle")}
          title={t("title")}
          videoId="6X-Y_Xp4MxE"
          videoTitle="Institutions in action video"
        />
      </FadeIn>
    </section>
  );
}
