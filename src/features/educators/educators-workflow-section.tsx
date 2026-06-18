import { BookOpenText } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, Stagger, StaggerItem } from "@/shared";
import { ONBOARDING_URL } from "@/shared/config/site";

const steps = [
  {
    key: "create",
    imageSrc: "/images/educators-guide/create-exam.png",
    imageWidth: 505,
    imageHeight: 375,
  },
  {
    key: "secure",
    imageSrc: "/images/educators-guide/create-student-group.png",
    imageWidth: 505,
    imageHeight: 376,
  },
  {
    key: "deliver",
    imageSrc: "/images/educators-guide/publsh-exam.png",
    imageWidth: 513,
    imageHeight: 388,
  },
  {
    key: "grade",
    imageSrc: "/images/educators-guide/review-and-approve.png",
    imageWidth: 510,
    imageHeight: 383,
  },
  {
    key: "review",
    imageSrc: "/images/educators-guide/export-and-share.png",
    imageWidth: 515,
    imageHeight: 429,
  },
] as const;

export async function EducatorsWorkflowSection() {
  const t = await getTranslations("EducatorsWorkflow");

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
          <FadeIn className="max-w-xl lg:sticky lg:top-32">
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

          <Stagger className="flex flex-col gap-8 lg:gap-10">
            {steps.map((step, index) => (
              <StaggerItem
                className="overflow-hidden rounded-sm border border-[#e3e8f5] bg-white p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-8 lg:p-10 dark:border-[#57588d] dark:bg-[#393967] dark:shadow-[0_24px_65px_rgba(7,15,51,0.32)]"
                key={step.key}
              >
                <div className="-rotate-2 overflow-hidden rounded-xl bg-[#f5f7ff] p-5 pb-7 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-7 sm:pb-9 dark:bg-[#141b34] dark:shadow-[0_25px_55px_rgba(0,0,0,0.3)]">
                  <div className="flex items-start justify-between gap-5">
                    <BookOpenText
                      aria-hidden="true"
                      className="size-8 text-[#1836b2] dark:text-[#86c7ed]"
                      strokeWidth={1.7}
                    />
                    <span className="text-7xl leading-none font-medium text-[#c2cbe4] sm:text-8xl dark:text-[#55568d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-medium text-[#141b34] sm:text-3xl dark:text-white">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5b6b8c] dark:text-white/65">
                    {t(`steps.${step.key}.description`)}
                  </p>

                  <div className="mt-8 overflow-hidden rounded-xl border-2 border-[#1836b2] bg-white p-2 shadow-[0_18px_36px_rgba(24,54,178,0.12)] sm:p-3 dark:border-[#86c7ed] dark:shadow-[0_20px_40px_rgba(134,199,237,0.1)]">
                    <Image
                      alt={t(`steps.${step.key}.imageAlt`)}
                      className="aspect-[4/3] w-full rounded-lg object-contain"
                      height={step.imageHeight}
                      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 60vw, 650px"
                      src={step.imageSrc}
                      width={step.imageWidth}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
