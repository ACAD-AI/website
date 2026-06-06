import { getTranslations } from "next-intl/server";

import { FaqAccordion, type FaqItem } from "@/features/faq";

const faqKeys = [
  "whatIsAcadAi",
  "questionTypes",
  "finalGrades",
  "sharedInformation",
  "trainingData",
  "examMalpractice",
  "gradingReliability",
  "freePlan",
  "lmsSupport",
] as const;

export async function EducatorsFaqSection() {
  const faq = await getTranslations("FAQ");
  const t = await getTranslations("EducatorsFaq");

  const items: FaqItem[] = faqKeys.map((key) => ({
    id: key,
    question: faq(`items.${key}.question`),
    answer: faq(`items.${key}.answer`),
  }));

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_80%,rgba(25,79,204,0.2),transparent_28%)]" />

      <div className="relative mx-auto w-full max-w-[760px]">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#86c7ed] uppercase sm:text-sm">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-medium tracking-tight text-white sm:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
