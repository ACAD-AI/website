"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

/**
 * Slides for the students study-mode showcase.
 *
 * TODO(content): drop the real app screenshots into
 * `public/images/students-guide/` and tweak the copy below. The first slide
 * mirrors the provided design; the rest are placeholders to extend.
 */
const slides = [
  {
    key: "flashcards",
    eyebrow: "Study Mode",
    title: "Generate Flashcards from your Slides in Seconds.",
    imageSrc: "/images/students-guide/study-mode-flashcards.png",
    imageAlt: "Acad AI study mode flashcard creation screen",
  },
  {
    key: "quiz",
    eyebrow: "Practice Quiz",
    title: "Test yourself with AI-generated practice questions.",
    imageSrc: "/images/students-guide/practice-quiz.png",
    imageAlt: "Acad AI practice quiz screen",
  },
  {
    key: "study-set",
    eyebrow: "Study Mode",
    title: "Turn any PDF or slide deck into an interactive study set.",
    imageSrc: "/images/students-guide/study-set.png",
    imageAlt: "Acad AI interactive study set screen",
  },
] as const;

// Each slide is this percent of the container width; the remainder lets the
// next slide peek in. The track fills the container, so advancing one slide
// translates the track by exactly this percentage.
const SLIDE_PERCENT = 88;

export function StudentsFlashcardSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, slides.length - 1)));
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(25,79,204,0.2),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${activeIndex * SLIDE_PERCENT}%)`,
            }}
          >
            {slides.map((slide) => (
              <div className="w-[88%] shrink-0 pr-4 sm:pr-6" key={slide.key}>
                <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#0c1430_0%,#16205a_100%)] p-5 shadow-[0_30px_70px_rgba(7,15,51,0.45)] sm:p-8 lg:p-10">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                    <Image
                      alt={slide.imageAlt}
                      className="object-cover object-top"
                      fill
                      sizes="(max-width: 1024px) 88vw, 1040px"
                      src={slide.imageSrc}
                    />
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <p className="text-xs font-semibold tracking-[0.32em] text-[#86c7ed] uppercase">
                      {slide.eyebrow}
                    </p>
                    <h3 className="mt-2 max-w-2xl text-2xl leading-tight font-medium text-white sm:text-3xl lg:text-4xl">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === activeIndex
                    ? "w-8 bg-[#1836b2] dark:bg-[#86c7ed]"
                    : "w-1.5 bg-[#c2cbe4] dark:bg-[#55568d]",
                )}
                key={slide.key}
                onClick={() => goTo(index)}
                type="button"
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous slide"
              className="flex size-11 items-center justify-center rounded-full border border-[#c2cbe4] text-[#141b34] transition-colors hover:bg-[#1836b2] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/25 dark:text-white dark:hover:bg-white dark:hover:text-[#141b34]"
              disabled={activeIndex === 0}
              onClick={() => goTo(activeIndex - 1)}
              type="button"
            >
              <ArrowLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              aria-label="Next slide"
              className="flex size-11 items-center justify-center rounded-full border border-[#c2cbe4] text-[#141b34] transition-colors hover:bg-[#1836b2] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/25 dark:text-white dark:hover:bg-white dark:hover:text-[#141b34]"
              disabled={activeIndex === slides.length - 1}
              onClick={() => goTo(activeIndex + 1)}
              type="button"
            >
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
