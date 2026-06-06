import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { FadeIn, Stagger, StaggerItem } from "@/shared";

const benefits = ["digitized", "scalable", "auditReady"] as const;

export async function GoldStandardSection() {
  const t = await getTranslations("InstitutionsGoldStandard");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_55%,rgba(25,79,204,0.18),transparent_30%)]" />

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center">
        <FadeIn>
          <h2 className="max-w-3xl text-center text-4xl leading-tight font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
            {t("title")}
          </h2>
        </FadeIn>

        <Stagger className="mt-8 flex flex-wrap justify-center gap-3">
          {benefits.map((benefit) => (
            <StaggerItem
              className="rounded-full bg-[#10004d] px-6 py-3 text-sm text-white/72 sm:text-base"
              key={benefit}
            >
              {t(`benefits.${benefit}`)}
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="relative mt-10 w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,#111c66_0%,#1935a8_38%,#099ec1_100%)] px-5 pb-6 pt-8 shadow-[0_28px_70px_rgba(7,15,51,0.28)] sm:px-10 sm:pb-10 sm:pt-12 lg:px-20">
          <div className="relative z-10 mx-auto w-full max-w-[760px] overflow-hidden rounded-2xl border-[6px] border-[#090d16] bg-[#141b34] shadow-[0_28px_60px_rgba(0,0,0,0.35)]">
            <Image
              alt={t("imageAlt")}
              className="w-full object-cover"
              height={728}
              src="/images/svg/home-hero.svg"
              width={1200}
            />
          </div>

          <div className="relative z-10 mt-7 sm:mt-9">
            <p className="text-sm font-semibold text-[#86c7ed] uppercase sm:text-base">
              {t("eyebrow")}
            </p>
            <p className="mt-2 max-w-4xl text-2xl leading-tight font-medium text-white sm:text-3xl">
              {t("description")}
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_2%,rgba(39,202,218,0.35),transparent_35%)]" />
        </FadeIn>
      </div>
    </section>
  );
}
