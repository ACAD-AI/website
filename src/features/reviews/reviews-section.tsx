"use client";

import { useMemo, useState } from "react";

import { SectionHeader } from "@/shared";
import { cn } from "@/shared/lib/utils";

import { ReviewCard } from "./review-card";
import {
  type ReviewAudience,
  reviewAudienceLabels,
  reviewItems,
} from "./reviews-data";

const audiences = Object.keys(reviewAudienceLabels) as ReviewAudience[];

export function ReviewsSection() {
  const [activeAudience, setActiveAudience] =
    useState<ReviewAudience>("students");

  const filteredReviews = useMemo(
    () => reviewItems.filter((item) => item.audience === activeAudience),
    [activeAudience],
  );

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_80%,rgba(44,93,255,0.24),transparent_22%),radial-gradient(circle_at_78%_35%,rgba(20,48,138,0.24),transparent_20%)]" />

      <div className="relative mx-auto flex w-full max-w-285 flex-col items-center gap-10 sm:gap-12">
        <SectionHeader
          align="center"
          className="gap-4 pt-10"
          description="Real words from the people who use Acad AI every day."
          eyebrow="Reviews"
          title="Wall of Love."
        />

        <div className="inline-flex items-center rounded-2xl bg-[#45417c] p-1 shadow-[0_16px_32px_rgba(8,12,32,0.2)]">
          {audiences.map((audience) => {
            const isActive = audience === activeAudience;

            return (
              <button
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors sm:min-w-26 sm:px-6",
                  isActive
                    ? "bg-white text-[#2f3158]"
                    : "text-white/72 hover:text-white",
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

        <div className="w-full columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
          {filteredReviews.map((item) => (
            <ReviewCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
