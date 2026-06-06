import {
  Eye,
  Handshake,
  Heart,
  Rocket,
  ShieldCheck,
  Star,
  Trophy,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FeatureCard, SectionHeader } from "@/shared";

import {
  InteractivePurposeGallery,
  type PurposePanel,
} from "./interactive-purpose-gallery";

const values = [
  { key: "customerFirst", icon: Handshake },
  { key: "transparency", icon: Eye },
  { key: "respect", icon: Star },
  { key: "ownership", icon: ShieldCheck },
  { key: "excellence", icon: Trophy },
  { key: "speed", icon: Rocket },
  { key: "fairness", icon: Heart },
] as const;

export async function AboutPurposeValuesSection() {
  const tWhy = await getTranslations("AboutWhy");
  const tValues = await getTranslations("AboutValues");
  const tPanels = await getTranslations("AboutPurposePanels");

  const panels: PurposePanel[] = [
    {
      title: tWhy("title"),
      description: tWhy("description"),
      imageAlt: tPanels("whyImageAlt"),
      imagePosition: "object-center",
    },
    {
      title: tPanels("educatorsTitle"),
      description: tPanels("educatorsDescription"),
      imageAlt: tPanels("educatorsImageAlt"),
      imagePosition: "object-left",
    },
    {
      title: tPanels("learnersTitle"),
      description: tPanels("learnersDescription"),
      imageAlt: tPanels("learnersImageAlt"),
      imagePosition: "object-right",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(25,79,204,0.19),transparent_36%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <InteractivePurposeGallery panels={panels} />

        <div className="mx-auto mt-20 max-w-[920px] lg:mt-28">
          <SectionHeader
            eyebrow={tValues("eyebrow")}
            title={tValues("title")}
            titleClassName="max-w-2xl text-4xl leading-tight sm:text-5xl"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {values.map((value, index) => (
              <div
                className={
                  index === values.length - 1
                    ? "sm:col-span-2 lg:col-span-2 lg:col-start-3"
                    : "lg:col-span-2"
                }
                key={value.key}
              >
                <FeatureCard
                  description={tValues(`${value.key}Description`)}
                  icon={value.icon}
                  title={tValues(`${value.key}Title`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
