import { useTranslations } from "next-intl";

import { FadeIn, SectionHeader, Stagger, StaggerItem } from "@/shared";

import { AudienceCard } from "./audience-card";

const audiences = [
  {
    key: "institutions",
    href: "/solutions/institutions",
  },
  {
    key: "educators",
    href: "/solutions/educators",
  },
  {
    key: "students",
    href: "/solutions/students",
  },
] as const;

export function AudienceSection() {
  const t = useTranslations("Home");

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            titleClassName="text-4xl leading-tight sm:text-5xl"
            descriptionClassName="leading-7 sm:text-base"
          />
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <StaggerItem key={audience.key}>
              <AudienceCard
                description={t(`audiences.${audience.key}.description`)}
                href={audience.href}
                index={index + 1}
                linkLabel={t(`audiences.${audience.key}.linkLabel`)}
                title={t(`audiences.${audience.key}.title`)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
