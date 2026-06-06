import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { SectionHeader } from "@/shared";

import { ReleaseCard } from "./release-card";

const releases = ["proctoring", "studyMode", "rubrics"] as const;

export function LatestReleasesSection() {
  const t = useTranslations("HomeReleases");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_48%,rgba(25,79,204,0.18),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          titleClassName="text-4xl leading-tight sm:text-5xl"
          descriptionClassName="leading-7 sm:text-base"
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {releases.map((release) => (
            <ReleaseCard
              description={t(`items.${release}.description`)}
              key={release}
              label={t("itemLabel")}
              title={t(`items.${release}.title`)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex items-center gap-3 rounded-lg border border-[#3b6bff]/40 bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95"
            href="/solutions/students"
          >
            {t("button")}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
