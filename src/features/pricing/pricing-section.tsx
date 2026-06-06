"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, PrimaryButton, SectionHeader } from "@/shared";
import { cn } from "@/shared/lib/utils";

import {
  pricingAudienceOrder,
  pricingContent,
  pricingTabLabels,
} from "./pricing-data";
import { PricingPlanCard } from "./pricing-plan-card";
import type { PricingAudience } from "./pricing-types";

export function PricingSection() {
  const [activeAudience, setActiveAudience] =
    useState<PricingAudience>("educators");

  const content = useMemo(
    () => pricingContent[activeAudience],
    [activeAudience],
  );

  const hasPlans = Boolean(content.plans?.length);
  const isInstitutions = activeAudience === "institutions";

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(49,91,255,0.18),transparent_22%),radial-gradient(circle_at_74%_88%,rgba(34,69,177,0.24),transparent_26%)]" />

      <div className="relative mx-auto flex w-full max-w-330 flex-col items-center gap-12 sm:gap-14">
        <div className="w-full max-w-6xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description="No setup fees. No hidden costs. Cancel anytime."
            descriptionClassName="max-w-3xl text-[#5b6b8c] dark:text-white/60"
            eyebrow="Pricing"
            title="Simple. Honest. Built for Africa."
            titleClassName="max-w-6xl text-[3rem] sm:text-6xl lg:text-[5rem]"
          />
        </div>

        <div className="inline-flex items-center rounded-2xl border border-[#e3e8f5] bg-[#eef1fb] p-1 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-transparent dark:bg-[#45417c] dark:shadow-[0_16px_32px_rgba(8,12,32,0.2)]">
          {pricingAudienceOrder.map((audience) => {
            const isActive = audience === activeAudience;

            return (
              <button
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors sm:min-w-28 sm:px-6",
                  isActive
                    ? "bg-white text-[#2f3158] shadow-[0_8px_18px_rgba(46,73,139,0.1)] dark:shadow-none"
                    : "text-[#5b6b8c] hover:text-[#141b34] dark:text-white/72 dark:hover:text-white",
                )}
                key={audience}
                onClick={() => setActiveAudience(audience)}
                type="button"
              >
                {pricingTabLabels[audience]}
              </button>
            );
          })}
        </div>

        <div className="w-full max-w-4xl">
          {isInstitutions ? (
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-[2.8rem] leading-tight font-medium text-[#141b34] sm:text-5xl dark:text-white">
                {content.title}
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5b6b8c] dark:text-white/72">
                {content.description}
              </p>
              <Link
                className={ctaButtonVariants({
                  variant: "primary",
                  className: "mt-10 h-12 min-w-54",
                })}
                href={content.ctaHref}
              >
                {content.ctaLabel}
              </Link>
            </div>
          ) : (
            <div className="space-y-16">
              {hasPlans ? (
                <div
                  className={cn(
                    "grid gap-4",
                    activeAudience === "students"
                      ? "mx-auto max-w-107.5"
                      : "md:grid-cols-2",
                  )}
                >
                  {content.plans?.map((plan) => (
                    <PricingPlanCard key={plan.id} plan={plan} />
                  ))}
                </div>
              ) : null}

              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-[2.8rem] leading-tight font-medium text-[#141b34] sm:text-5xl dark:text-white">
                  {content.title}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#5b6b8c] dark:text-white/72">
                  {content.description}
                </p>

                {content.infoTitle ? (
                  <div className="mt-10 text-left">
                    <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
                      {content.infoTitle}
                    </h3>
                    {content.infoDescription ? (
                      <p className="mt-4 text-base leading-8 text-[#5b6b8c] dark:text-white/72">
                        {content.infoDescription}
                      </p>
                    ) : null}

                    {content.bullets?.length ? (
                      <ul className="mt-5 space-y-3">
                        {content.bullets.map((bullet) => (
                          <li
                            className="flex items-start gap-3 text-sm leading-7 text-[#5b6b8c] sm:text-base dark:text-white/72"
                            key={bullet}
                          >
                            <span className="mt-2 size-2 rounded-full bg-[#1836b2] dark:bg-[#86c7ed]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : null}

                <PrimaryButton className="mt-8">
                  <Link href={content.ctaHref}>
                    {content.ctaLabel}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
