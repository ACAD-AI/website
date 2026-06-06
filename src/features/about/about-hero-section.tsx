import { Compass, Heart, Rocket } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FeatureCard } from "@/shared";

const cards = [
  {
    key: "vision",
    icon: Compass,
  },
  {
    key: "mission",
    icon: Rocket,
  },
  {
    key: "why",
    icon: Heart,
  },
] as const;

export async function AboutHeroSection() {
  const t = await getTranslations("AboutHero");

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(25,79,204,0.2),transparent_36%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#86c7ed] uppercase sm:text-base">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 text-5xl leading-[1.08] font-medium tracking-tight text-white sm:text-6xl lg:text-[5rem]">
            {t("title")}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard
              description={t(`${card.key}Description`)}
              icon={card.icon}
              iconStyle="tile"
              key={card.key}
              title={t(`${card.key}Title`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
