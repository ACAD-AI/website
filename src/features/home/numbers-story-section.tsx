import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, SectionHeader } from "@/shared";

import { StatCard } from "./stat-card";

const stats = ["assessments", "hours", "accuracy", "performance"] as const;

export function NumbersStorySection() {
  const t = useTranslations("HomeNumbers");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_82%,rgba(25,79,204,0.22),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <SectionHeader
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          titleClassName="text-4xl leading-tight sm:text-5xl"
          descriptionClassName="leading-7 sm:text-base"
        />

        <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[0.95fr_1.2fr] lg:gap-6">
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard
                  key={stat}
                  label={t(`stats.${stat}.label`)}
                  value={t(`stats.${stat}.value`)}
                />
              ))}
            </div>

            <Link
              className={ctaButtonVariants({
                variant: "primary",
                className: "mt-10",
              })}
              href="/company/reviews"
            >
              {t("button")}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              alt={t("imageAlt")}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              src="/images/numbers-story-educator.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
