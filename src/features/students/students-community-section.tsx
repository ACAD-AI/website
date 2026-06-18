import { getTranslations } from "next-intl/server";
import { ctaButtonVariants, FadeIn, SectionHeader } from "@/shared";
import { STUDENT_COMMUNITY_URL } from "@/shared/config/site";

export async function StudentsCommunitySection() {
  const t = await getTranslations("StudentsCommunity");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(44,93,255,0.18),transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        <FadeIn>
          <SectionHeader
            align="center"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>
        <a
          className={ctaButtonVariants({
            variant: "secondary",
            className: "bg-white text-[#155EEF]",
          })}
          href={STUDENT_COMMUNITY_URL}
          rel="noreferrer"
          target="_blank"
        >
          {t("button")}
        </a>
      </div>
    </section>
  );
}
