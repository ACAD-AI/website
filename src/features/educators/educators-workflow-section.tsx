"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FilePlus2, ListChecks, Send, Share2, UsersRound } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn } from "@/shared";
import { ONBOARDING_URL } from "@/shared/config/site";

const steps = [
  {
    key: "create",
    icon: FilePlus2,
    imageSrc: "/images/educators-guide/create-exam.png",
  },
  {
    key: "secure",
    icon: UsersRound,
    imageSrc: "/images/educators-guide/create-student-group.png",
  },
  {
    key: "deliver",
    icon: Send,
    imageSrc: "/images/educators-guide/publsh-exam.png",
  },
  {
    key: "grade",
    icon: ListChecks,
    imageSrc: "/images/educators-guide/review-and-approve.png",
  },
  {
    key: "review",
    icon: Share2,
    imageSrc: "/images/educators-guide/export-and-share.png",
  },
] as const;

// Blue backdrop on mobile; the muted device frame returns on desktop.
const sharedFrameClass =
  "overflow-hidden rounded-md border border-[#2740c9] bg-[#2433c9] p-3 shadow-[0_24px_65px_rgba(7,15,51,0.32)] sm:p-4 lg:border-[#57588d] lg:bg-[#393967]";

const stepCardClass =
  "relative flex h-full flex-col overflow-hidden rounded-xl bg-[#f5f7ff] p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-7 dark:bg-[#141b34] dark:shadow-[0_25px_55px_rgba(0,0,0,0.3)]";

const imageFrameClass = "relative mt-5 min-h-0 w-full flex-1 sm:mt-7";

// The whole card tilts a different way per step for a hand-placed feel.
const cardRotations = [
  "-rotate-[3deg]",
  "rotate-[3deg]",
  "-rotate-[2.5deg]",
  "rotate-[3deg]",
  "-rotate-[2.5deg]",
];

const slideHeightClass = "h-[clamp(24rem,calc(100svh-16rem),38rem)]";

export function EducatorsWorkflowSection() {
  const t = useTranslations("EducatorsWorkflow");
  const workflowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: workflowRef,
    offset: ["start start", "end end"],
  });
  const trackY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((steps.length - 1) / steps.length) * 100}%`],
  );

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(25,79,204,0.2),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#1836b2] uppercase sm:text-sm dark:text-[#86c7ed]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-medium tracking-tight text-[#141b34] sm:text-5xl lg:text-6xl dark:text-white">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="mt-16 grid items-start gap-12 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn className="lg:sticky lg:top-32 lg:self-start">
            <h3 className="whitespace-pre-line text-4xl leading-[1.16] font-medium tracking-tight text-[#141b34] sm:text-5xl lg:text-[3.5rem] dark:text-white">
              {t("introTitle")}
            </h3>
            <p className="mt-8 text-base leading-8 text-[#5b6b8c] sm:text-lg dark:text-white/65">
              {t("description")}
            </p>
            <Link
              className={ctaButtonVariants({
                variant: "primary",
                className: "mt-10",
              })}
              href={ONBOARDING_URL}
            >
              {t("button")}
            </Link>
          </FadeIn>

          <div className="relative h-[500svh]" ref={workflowRef}>
            <div className="sticky top-20 sm:top-24">
              <div className={sharedFrameClass}>
                <div className={`overflow-hidden ${slideHeightClass}`}>
                  <motion.div className="flex flex-col" style={{ y: trackY }}>
                    {steps.map((step, index) => (
                      <article
                        className={`shrink-0 px-1.5 py-5 sm:px-2.5 sm:py-7 ${slideHeightClass}`}
                        key={step.key}
                      >
                        <div
                          className={`${stepCardClass} ${
                            cardRotations[index % cardRotations.length]
                          }`}
                        >
                          <div className="flex min-h-8 items-start">
                            <step.icon
                              aria-hidden="true"
                              className="size-6 text-[#1836b2] sm:size-8 dark:text-[#86c7ed]"
                              strokeWidth={1.7}
                            />
                          </div>

                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -top-4 right-3 text-[5rem] leading-none font-medium text-[#c2cbe4]/65 sm:-top-7 sm:right-5 sm:text-[7rem] dark:text-[#62639b]/75"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="relative mt-4 pr-16 text-xl font-medium text-[#141b34] sm:mt-5 sm:pr-24 sm:text-3xl dark:text-white">
                            {t(`steps.${step.key}.title`)}
                          </h3>
                          <p className="relative mt-2 pr-4 text-sm leading-6 text-[#5b6b8c] sm:mt-3 sm:text-base sm:leading-7 dark:text-white/65">
                            {t(`steps.${step.key}.description`)}
                          </p>

                          <div className={imageFrameClass}>
                            <Image
                              alt={t(`steps.${step.key}.imageAlt`)}
                              className="object-contain object-center drop-shadow-[0_18px_25px_rgba(0,0,0,0.28)]"
                              fill
                              sizes="(max-width: 1023px) 90vw, 650px"
                              src={step.imageSrc}
                            />
                          </div>
                        </div>
                      </article>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
