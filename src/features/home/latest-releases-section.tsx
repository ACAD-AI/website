import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import {
  ctaButtonVariants,
  FadeIn,
  SectionHeader,
  Stagger,
  StaggerItem,
} from "@/shared";

import { ReleaseCard } from "./release-card";

const releases = ["proctoring", "studyMode", "rubrics"] as const;

export function LatestReleasesSection() {
  const t = useTranslations("HomeReleases");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(25,79,204,0.18),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
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
          {releases.map((release) => (
            <StaggerItem key={release}>
              <ReleaseCard
                description={t(`items.${release}.description`)}
                label={t("itemLabel")}
                title={t(`items.${release}.title`)}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-10 flex justify-center">
          <Link
            className={ctaButtonVariants({ variant: "primary" })}
            href="/solutions/students"
          >
            {t("button")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
