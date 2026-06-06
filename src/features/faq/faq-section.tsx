import { getTranslations } from "next-intl/server";

import { FaqAccordion } from "@/features/faq/faq-accordion";
import { FaqContactCard } from "@/features/faq/faq-contact-card";
import type { FaqItem } from "@/features/faq/faq-data";
import { FadeIn, SectionHeader } from "@/shared";
import { faqJsonLd } from "@/shared/config/seo";

export async function FaqSection() {
  const t = await getTranslations("FAQ");

  const items: FaqItem[] = [
    {
      id: "what-is-acad-ai",
      question: t("items.whatIsAcadAi.question"),
      answer: t("items.whatIsAcadAi.answer"),
    },
    {
      id: "question-types",
      question: t("items.questionTypes.question"),
      answer: t("items.questionTypes.answer"),
    },
    {
      id: "final-grades",
      question: t("items.finalGrades.question"),
      answer: t("items.finalGrades.answer"),
    },
    {
      id: "shared-information",
      question: t("items.sharedInformation.question"),
      answer: t("items.sharedInformation.answer"),
    },
    {
      id: "training-data",
      question: t("items.trainingData.question"),
      answer: t("items.trainingData.answer"),
    },
    {
      id: "exam-malpractice",
      question: t("items.examMalpractice.question"),
      answer: t("items.examMalpractice.answer"),
    },
    {
      id: "grading-reliability",
      question: t("items.gradingReliability.question"),
      answer: t("items.gradingReliability.answer"),
    },
    {
      id: "free-plan",
      question: t("items.freePlan.question"),
      answer: t("items.freePlan.answer"),
    },
    {
      id: "lms-support",
      question: t("items.lmsSupport.question"),
      answer: t("items.lmsSupport.answer"),
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is generated from trusted translation content.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(items)),
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(44,93,255,0.16),transparent_26%),radial-gradient(circle_at_80%_78%,rgba(26,61,173,0.18),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-270 flex-col items-center gap-14">
        <FadeIn className="w-full max-w-4xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description={t("description")}
            descriptionClassName="max-w-2xl text-[#5b6b8c] dark:text-white/62"
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleClassName="max-w-3xl text-[2.95rem] leading-[1.04] sm:text-6xl lg:text-[5rem]"
          />
        </FadeIn>

        <FadeIn className="w-full max-w-185">
          <FaqAccordion items={items} />
        </FadeIn>

        <FadeIn className="w-full pt-4">
          <FaqContactCard />
        </FadeIn>
      </div>
    </section>
  );
}
