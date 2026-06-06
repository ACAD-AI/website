"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

export interface PurposePanel {
  description: string;
  imageAlt: string;
  imagePosition: string;
  title: string;
}

interface InteractivePurposeGalleryProps {
  panels: PurposePanel[];
}

export function InteractivePurposeGallery({
  panels,
}: InteractivePurposeGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-xl bg-white p-3 sm:p-4 dark:bg-[#373764]">
      <div className="flex flex-col gap-3 lg:h-[480px] lg:flex-row">
        {panels.map((panel, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              aria-pressed={isActive}
              className={cn(
                "group relative min-h-[260px] overflow-hidden rounded-lg text-start transition-[flex] duration-500 ease-out lg:min-h-0",
                isActive ? "lg:flex-[2.4]" : "lg:flex-1",
              )}
              key={panel.title}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              type="button"
            >
              <Image
                alt={panel.imageAlt}
                className={cn(
                  "object-cover transition duration-500",
                  isActive
                    ? "scale-100 grayscale-0"
                    : "scale-105 grayscale group-hover:grayscale-0",
                  panel.imagePosition,
                )}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                src="/images/numbers-story-educator.png"
              />
              <span
                className={cn(
                  "absolute inset-0 bg-[#0b1024]/38 transition-opacity duration-300",
                  isActive ? "opacity-0" : "opacity-45",
                )}
              />

              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 block bg-[linear-gradient(180deg,rgba(14,16,24,0.05),rgba(14,16,24,0.92))] p-5 transition-all duration-300 sm:p-6",
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0 lg:pointer-events-none",
                )}
              >
                <span className="block text-2xl font-medium text-white sm:text-3xl">
                  {panel.title}
                </span>
                <span className="mt-3 block max-w-xl text-sm leading-7 text-white/78 sm:text-base">
                  {panel.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
