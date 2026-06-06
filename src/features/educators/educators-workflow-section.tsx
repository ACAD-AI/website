import { BookOpenText } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants } from "@/shared";

const steps = ["create", "secure", "deliver", "grade", "review"] as const;

export async function EducatorsWorkflowSection() {
  const t = await getTranslations("EducatorsWorkflow");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(25,79,204,0.2),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#1836b2] uppercase sm:text-sm dark:text-[#86c7ed]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-medium tracking-tight text-[#141b34] sm:text-5xl lg:text-6xl dark:text-white">
            {t("title")}
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-xl">
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
              href="/signup"
            >
              {t("button")}
            </Link>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:mx-0 sm:px-0">
            {steps.map((step, index) => (
              <article
                className="w-[88%] shrink-0 snap-center overflow-hidden rounded-sm border border-[#e3e8f5] bg-white p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:w-[76%] sm:p-8 lg:w-[92%] lg:p-10 dark:border-[#57588d] dark:bg-[#393967] dark:shadow-[0_24px_65px_rgba(7,15,51,0.32)]"
                key={step}
              >
                <div className="-rotate-3 rounded-xl bg-[#f5f7ff] p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:p-7 dark:bg-[#141b34] dark:shadow-[0_25px_55px_rgba(0,0,0,0.3)]">
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
                    {t(`steps.${step}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#5b6b8c] dark:text-white/65">
                    {t(`steps.${step}.description`)}
                  </p>

                  <div className="mt-8 overflow-hidden rounded-lg border-2 border-[#1836b2] bg-white dark:border-[#86c7ed]">
                    <Image
                      alt={t(`steps.${step}.imageAlt`)}
                      className="aspect-[16/10] w-full object-cover object-top"
                      height={728}
                      src="/images/svg/home-hero.svg"
                      width={1200}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
