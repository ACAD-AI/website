import {
  ClipboardList,
  FileCheck,
  FileDown,
  FileText,
  ScanEye,
  Sparkles,
  UserRound,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import {
  FadeIn,
  FeatureCard,
  SectionHeader,
  Stagger,
  StaggerItem,
} from "@/shared";

const features = [
  { key: "questionGenerator", icon: FileText },
  { key: "malpracticeControl", icon: ScanEye },
  { key: "instantFeedback", icon: Sparkles },
  { key: "examSetup", icon: ClipboardList },
  { key: "exportResults", icon: FileDown },
  { key: "automaticGrading", icon: UserRound },
  { key: "reportCards", icon: FileCheck },
] as const;

export async function PlatformFeaturesSection() {
  const t = await getTranslations("InstitutionsPlatformFeatures");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(25,79,204,0.17),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[920px]">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="max-w-2xl text-4xl leading-tight"
            descriptionClassName="max-w-2xl text-sm leading-6"
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, index) => (
            <StaggerItem
              className={
                index === features.length - 1
                  ? "sm:col-span-2 lg:col-span-2 lg:col-start-3"
                  : "lg:col-span-2"
              }
              key={feature.key}
            >
              <FeatureCard
                description={t(`items.${feature.key}.description`)}
                icon={feature.icon}
                title={t(`items.${feature.key}.title`)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
