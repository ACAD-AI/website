"use client";

import Image from "next/image";
import { useState } from "react";

import { FadeIn, SectionHeader } from "@/shared";
import { cn } from "@/shared/lib/utils";

import { ReviewImageMarquee } from "./review-image-marquee";
import { type ReviewAudience, reviewAudienceLabels } from "./reviews-data";

const audiences = Object.keys(reviewAudienceLabels) as ReviewAudience[];

export function ReviewsSection() {
  const [activeAudience, setActiveAudience] =
    useState<ReviewAudience>("students");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />

      <div className="relative mx-auto flex w-full max-w-285 flex-col items-center gap-10 sm:gap-12">
        <FadeIn>
          <SectionHeader
            align="center"
            className="gap-4 pt-10"
            description="Real words from the people who use Acad AI every day."
            eyebrow="Reviews"
            title="Wall of Love."
          />
        </FadeIn>

        <div className="inline-flex items-center rounded-2xl bg-white p-1 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:bg-[#45417c] dark:shadow-[0_16px_32px_rgba(8,12,32,0.2)]">
          {audiences.map((audience) => {
            const isActive = audience === activeAudience;

            return (
              <button
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors sm:min-w-26 sm:px-6",
                  isActive
                    ? "bg-[#f0f3fb] text-[#2f3158] dark:bg-white dark:text-[#2f3158]"
                    : "text-[#5b6b8c] hover:text-[#141b34] dark:text-white/72 dark:hover:text-white",
                )}
                key={audience}
                onClick={() => setActiveAudience(audience)}
                type="button"
              >
                {reviewAudienceLabels[audience]}
              </button>
            );
          })}
        </div>

        {activeAudience !== "admins" ? (
          <FadeIn className="w-screen">
            <ReviewImageMarquee audience={activeAudience} />
          </FadeIn>
        ) : (
          <FadeIn className="w-full max-w-[900px]">
            <div className="overflow-hidden rounded-2xl border border-[#e3e8f5] bg-white p-2 shadow-[0_16px_38px_rgba(46,73,139,0.12)] dark:border-[#535090] dark:bg-[#43407c] dark:shadow-[0_16px_36px_rgba(8,12,32,0.24)] sm:p-3">
              <Image
                alt="Admin review screenshot"
                className="h-auto w-full rounded-xl"
                height={256}
                sizes="(max-width: 900px) 92vw, 900px"
                src="/images/reviews/admins/974372d0d37ec60eb48b4f10c4f67106ca8e2d21.png"
                width={975}
              />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
