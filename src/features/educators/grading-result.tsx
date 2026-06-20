"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

import { normalizeScore, type ParsedFeedback } from "./parse-feedback";

interface AccordionItemProps {
  label: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function AccordionItem({ label, defaultOpen, children }: AccordionItemProps) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <div className="border-b border-[#e3e8f5] dark:border-white/12">
      <button
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[#141b34] dark:text-white"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {label}
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-[#2f6dff] transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? <div className="pb-6">{children}</div> : null}
    </div>
  );
}

interface GradingResultProps {
  question: string;
  modelAnswer: string;
  studentAnswer: string;
  score: number;
  maxScore: number;
  parsed: ParsedFeedback;
  onReset: () => void;
}

export function GradingResult({
  question,
  modelAnswer,
  studentAnswer,
  score,
  maxScore,
  parsed,
  onReset,
}: GradingResultProps) {
  const t = useTranslations("EducatorsPlayground");
  const displayScore = normalizeScore(score, maxScore);
  const generalFeedback = parsed.generalFeedback || t("parseError");

  const answerClass =
    "text-base leading-7 whitespace-pre-line text-[#5b6b8c] dark:text-white/70";

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-3xl font-medium tracking-tight text-[#1836b2] sm:text-4xl dark:text-white">
            {t("resultTitle")}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#5b6b8c] dark:text-white/65">
            {t("resultSubtitle")}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-sm font-medium text-[#5b6b8c] dark:text-white/65">
            {t("totalScoreLabel")}
          </span>
          <span className="rounded-xl bg-[#141b34] px-4 py-3 text-lg font-semibold text-white tabular-nums">
            {displayScore}
            <span className="ml-1 text-sm font-normal text-white/60">/5</span>
          </span>
        </div>
      </div>

      <div className="mt-8">
        <AccordionItem label={t("questionLabel")}>
          <p className={answerClass}>{question}</p>
        </AccordionItem>
        <AccordionItem label={t("modelLabel")}>
          <p className={answerClass}>{modelAnswer || parsed.modelAnswer}</p>
        </AccordionItem>
        <AccordionItem label={t("studentLabel")}>
          <p className={answerClass}>{studentAnswer}</p>
        </AccordionItem>
        <AccordionItem defaultOpen label={t("rubricBreakdown")}>
          <div className="rounded-xl bg-[#f6f8fc] p-5 dark:bg-[#2a2c55]">
            <p className="text-sm font-semibold text-[#141b34] dark:text-white">
              {t("generalFeedbackLabel")}
            </p>
            <p className="mt-1 text-sm leading-6 whitespace-pre-line text-[#41506f] dark:text-white/75">
              {generalFeedback}
            </p>
            {parsed.modelAnswer ? (
              <>
                <p className="mt-4 text-sm font-semibold text-[#141b34] dark:text-white">
                  {t("modelLabel")}:
                </p>
                <p className="mt-1 text-sm leading-6 whitespace-pre-line text-[#41506f] dark:text-white/75">
                  {parsed.modelAnswer}
                </p>
              </>
            ) : null}
          </div>

          {parsed.criteria.length > 0 ? (
            <>
              {/* Table layout for tablet/desktop. */}
              <div className="mt-6 hidden overflow-x-auto sm:block">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-[#2f6dff] uppercase">
                      <th className="py-3 pr-4">{t("tableIndex")}</th>
                      <th className="py-3 pr-4">{t("tableCriteria")}</th>
                      <th className="py-3 pr-4 text-right">
                        {t("tableScore")}
                      </th>
                      <th className="py-3 text-right">{t("tableMaxScore")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsed.criteria.map((criterion) => (
                      <tr
                        className="border-t border-[#e3e8f5] align-top dark:border-white/12"
                        key={criterion.index}
                      >
                        <td className="py-4 pr-4 text-sm text-[#5b6b8c] tabular-nums dark:text-white/60">
                          {criterion.index}
                        </td>
                        <td className="py-4 pr-4 text-sm leading-6 text-[#41506f] dark:text-white/80">
                          {criterion.criteria}
                        </td>
                        <td className="py-4 pr-4 text-right text-sm font-semibold text-[#141b34] tabular-nums dark:text-white">
                          {criterion.score.toFixed(2)}
                        </td>
                        <td className="py-4 text-right text-sm text-[#5b6b8c] tabular-nums dark:text-white/60">
                          {criterion.maxScore.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Card layout for mobile. */}
              <div className="mt-6 flex flex-col gap-4 sm:hidden">
                {parsed.criteria.map((criterion) => (
                  <div
                    className="rounded-xl border border-[#e3e8f5] p-4 dark:border-white/12"
                    key={criterion.index}
                  >
                    <span className="text-xs font-semibold tracking-wide text-[#2f6dff] uppercase">
                      {t("tableIndex")} {criterion.index}
                    </span>
                    <p className="mt-2 text-sm leading-6 text-[#41506f] dark:text-white/80">
                      {criterion.criteria}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <span className="block text-xs font-semibold tracking-wide text-[#2f6dff] uppercase">
                          {t("tableScore")}
                        </span>
                        <span className="text-base font-semibold text-[#141b34] tabular-nums dark:text-white">
                          {criterion.score.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-xs font-semibold tracking-wide text-[#2f6dff] uppercase">
                          {t("tableMaxScore")}
                        </span>
                        <span className="text-base text-[#5b6b8c] tabular-nums dark:text-white/60">
                          {criterion.maxScore.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </AccordionItem>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          className="text-sm font-semibold text-[#1836b2] hover:underline dark:text-[#8ed1f1]"
          onClick={onReset}
          type="button"
        >
          {t("gradeAnother")}
        </button>
      </div>
    </div>
  );
}
