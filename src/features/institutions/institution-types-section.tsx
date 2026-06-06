"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

const institutionTypes = [
  "secondarySchools",
  "distanceLearning",
  "corporateTraining",
] as const;

type InstitutionType = (typeof institutionTypes)[number];

export function InstitutionTypesSection() {
  const t = useTranslations("InstitutionsTypes");
  const [activeType, setActiveType] =
    useState<InstitutionType>("secondarySchools");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(25,79,204,0.18),transparent_38%)]" />

      <div className="relative mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-xl bg-[#373764] lg:grid-cols-2">
        <div className="flex flex-col px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.32em] text-[#86c7ed] uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 max-w-md text-4xl leading-tight font-medium tracking-tight text-white sm:text-5xl">
            {t("title")}
          </h2>

          <div
            aria-label={t("title")}
            className="mt-12 flex flex-col gap-2"
            role="tablist"
          >
            {institutionTypes.map((type) => {
              const isActive = activeType === type;

              return (
                <button
                  aria-selected={isActive}
                  className={cn(
                    "border-s-4 border-transparent px-4 py-3 text-start transition-colors",
                    isActive && "border-[#2f6dff]",
                  )}
                  key={type}
                  onClick={() => setActiveType(type)}
                  role="tab"
                  type="button"
                >
                  <span className="block text-lg font-medium text-white sm:text-xl">
                    {t(`items.${type}.title`)}
                  </span>
                  {isActive ? (
                    <span className="mt-3 block max-w-md text-sm leading-7 text-white/70 sm:text-base">
                      {t(`items.${type}.description`)}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex min-h-[360px] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#8bd7f4_0%,#7bcbea_50%,#d6d7b9_100%)] p-6 sm:min-h-[440px] sm:p-10 lg:min-h-[540px]">
          <div className="w-full overflow-hidden rounded-xl border border-white/40 bg-[#141b34] p-1 shadow-[0_24px_50px_rgba(11,18,49,0.35)]">
            <Image
              alt={t(`items.${activeType}.imageAlt`)}
              className="w-full rounded-lg object-cover"
              height={728}
              priority={false}
              src="/images/svg/home-hero.svg"
              width={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
