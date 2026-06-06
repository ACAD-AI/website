import { GlobeLock, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FeatureCard, SectionHeader } from "@/shared";

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
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          titleClassName="max-w-2xl text-4xl leading-tight"
          descriptionClassName="max-w-2xl text-sm leading-6"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {securityFeatures.map((feature) => (
            <FeatureCard
              description={t(`items.${feature.key}.description`)}
              icon={feature.icon}
              key={feature.key}
              title={t(`items.${feature.key}.title`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
