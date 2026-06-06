import { GlobeLock, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import {
  FadeIn,
  FeatureCard,
  SectionHeader,
  Stagger,
  StaggerItem,
} from "@/shared";

const securityFeatures = [
  { key: "sovereignty", icon: ShieldCheck },
  { key: "standards", icon: GlobeLock },
] as const;

export async function SecuritySection() {
  const t = await getTranslations("InstitutionsSecurity");

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(25,79,204,0.16),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[760px]">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="max-w-2xl text-4xl leading-tight"
            descriptionClassName="max-w-2xl text-sm leading-6"
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {securityFeatures.map((feature) => (
            <StaggerItem key={feature.key}>
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
