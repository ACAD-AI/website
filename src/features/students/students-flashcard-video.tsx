"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Students study-mode showcase.
 *
 * The screenshots slide horizontally (with the next one peeking in), while the
 * caption is a separate overlay that crossfades — it is not attached to the
 * sliding track. Drop the real screenshots into `public/images/study-mode/`
 * using the filenames below.
 */
const slides = [
  {
    key: "flashcards",
    eyebrow: "Study Mode",
    title: "Generate Flashcards from your Slides in Seconds.",
    imageSrc: "/images/study-mode/study-mode-1.png",
    imageAlt: "Acad AI study mode flashcard creation screen",
  },
  {
    key: "recall",
    eyebrow: "Study Mode",
    title: "Active Recall Everywhere & Anywhere with Flashcards.",
    imageSrc: "/images/study-mode/study-mode-2.png",
    imageAlt: "Acad AI flashcard active recall screen",
  },
  {
    key: "predict",
    eyebrow: "Study Mode",
    title: "Study exactly what you’ll be tested on.",
    imageSrc: "/images/study-mode/study-mode-3.png",
    imageAlt: "Acad AI practice questions screen",
  },
] as const;

// Each slide is this percent of the container width; the remainder lets the
// next slide peek in. Advancing one slide translates the track by this amount.
const SLIDE_PERCENT = 88;

export function StudentsFlashcardSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === slides.length - 1;

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, slides.length - 1)));
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(25,79,204,0.2),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-[1180px]">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#0c1430_0%,#16205a_100%)] p-3 shadow-[0_30px_70px_rgba(7,15,51,0.45)] sm:p-4">
          {/* Sliding screenshots — "just there", with the next one peeking. */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(-${activeIndex * SLIDE_PERCENT}%)`,
              }}
            >
              {slides.map((slide) => (
                <div className="w-[88%] shrink-0 pr-3 sm:pr-4" key={slide.key}>
                  <div className="relative aspect-[872/627] w-full overflow-hidden rounded-xl">
                    <Image
                      alt={slide.imageAlt}
                      className="object-cover object-top"
                      fill
                      sizes="(max-width: 1024px) 88vw, 1040px"
                      src={slide.imageSrc}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrim keeps the caption legible over any screenshot. */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 rounded-b-3xl bg-[linear-gradient(to_top,rgba(7,12,32,0.92)_0%,rgba(7,12,32,0.4)_45%,transparent_100%)]" />

          {/* Caption — fades in/out, independent of the sliding track. */}
          <div className="absolute right-6 bottom-6 left-6 sm:right-12 sm:bottom-10 sm:left-10">
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: 10 }}
                key={activeIndex}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold tracking-[0.32em] text-[#86c7ed] uppercase">
                  {slides[activeIndex].eyebrow}
                </p>
                <h3 className="mt-2 max-w-2xl text-2xl leading-tight font-medium text-white sm:text-3xl lg:text-4xl">
                  {slides[activeIndex].title}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows — hidden at the bounds. */}
          <div className="absolute right-6 bottom-6 flex items-center gap-3 sm:right-10 sm:bottom-10">
            {!isFirst ? (
              <button
                aria-label="Previous slide"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#141b34] sm:size-12"
                onClick={() => goTo(activeIndex - 1)}
                type="button"
              >
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
            ) : null}
            {!isLast ? (
              <button
                aria-label="Next slide"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#141b34] sm:size-12"
                onClick={() => goTo(activeIndex + 1)}
                type="button"
              >
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
