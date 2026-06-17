import {
  ClipboardList,
  FileDown,
  FileText,
  ScanEye,
  Sparkles,
  UserRound,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import {
  ctaButtonVariants,
  FadeIn,
  FeatureCard,
  SectionHeader,
  Stagger,
  StaggerItem,
} from "@/shared";
import { ONBOARDING_URL } from "@/shared/config/site";

const features = [
  { key: "questionGenerator", icon: FileText },
  { key: "malpracticeControl", icon: ScanEye },
  { key: "instantFeedback", icon: Sparkles },
  { key: "examSetup", icon: ClipboardList },
  { key: "exportResults", icon: FileDown },
  { key: "automaticGrading", icon: UserRound },
] as const;

export async function EducatorsFeaturesSection() {
  const t = await getTranslations("EducatorsFeatures");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,rgba(25,79,204,0.18),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1060px]">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="max-w-3xl text-4xl leading-tight sm:text-5xl"
            descriptionClassName="max-w-2xl text-base leading-7"
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.key}>
              <FeatureCard
                description={t(`items.${feature.key}.description`)}
                icon={feature.icon}
                title={t(`items.${feature.key}.title`)}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <Link
            className={ctaButtonVariants({ variant: "primary" })}
            href={ONBOARDING_URL}
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
