import {
  CheckCheck,
  Equal,
  FileImage,
  FileText,
  Search,
  SquareSigma,
  TextCursorInput,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FeatureCard } from "./feature-card";

const questionTypes = [
  { key: "multiChoice", icon: CheckCheck },
  { key: "fillGap", icon: Equal },
  { key: "theory", icon: TextCursorInput },
  { key: "essay", icon: FileText },
  { key: "mathematics", icon: SquareSigma },
  { key: "caseStudy", icon: Search },
  { key: "diagram", icon: FileImage },
] as const;

export async function QuestionTypesSection() {
  const t = await getTranslations("QuestionTypes");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_84%,rgba(25,79,204,0.2),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1060px]">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#86c7ed] uppercase sm:text-sm">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {questionTypes.map((questionType, index) => (
            <div
              className={
                index === questionTypes.length - 1
                  ? "sm:col-span-2 lg:col-span-2 lg:col-start-3"
                  : "lg:col-span-2"
              }
              key={questionType.key}
            >
              <FeatureCard
                icon={questionType.icon}
                iconStyle="tile"
                title={t(`items.${questionType.key}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
