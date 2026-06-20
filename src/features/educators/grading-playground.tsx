"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { ctaButtonVariants } from "@/shared";
import { cn } from "@/shared/lib/utils";

import { GradingResult } from "./grading-result";
import { type ParsedFeedback, parseFeedback } from "./parse-feedback";

type Phase = "input" | "loading" | "result";

// Number of rotating status messages shown while grading is in flight.
const MESSAGE_COUNT = 6;

interface GradeResponse {
  score: number;
  maxScore: number;
  feedback: string;
}

function Field({
  description,
  label,
  name,
  onChange,
  placeholder,
  value,
}: {
  description: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  value: string;
}) {
  return (
    <label className="flex flex-col gap-3 text-sm font-medium text-[#141b34] dark:text-white">
      {label}
      <textarea
        className="min-h-28 resize-y rounded-lg border border-[#cbd5eb] bg-white px-4 py-3 text-base font-normal text-[#141b34] outline-none placeholder:text-[#7c86a0] focus:border-[#3479ff] dark:border-[#55578f] dark:bg-[#111a37] dark:text-white dark:placeholder:text-white/38"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
      <span className="text-xs leading-5 font-normal text-[#5b6b8c] dark:text-white/50">
        {description}
      </span>
    </label>
  );
}

function StyleToggle({
  strict,
  onChange,
  strictLabel,
  notStrictLabel,
}: {
  strict: boolean;
  onChange: (value: boolean) => void;
  strictLabel: string;
  notStrictLabel: string;
}) {
  const base = "rounded-md px-5 py-2 text-sm font-medium transition-colors";
  return (
    <div className="inline-flex w-fit gap-1 self-start rounded-lg bg-[#eef2fb] p-1 dark:bg-[#1b2141]">
      <button
        className={cn(
          base,
          strict
            ? "bg-[#1d4ed8] text-white"
            : "text-[#5b6b8c] dark:text-white/60",
        )}
        onClick={() => onChange(true)}
        type="button"
      >
        {strictLabel}
      </button>
      <button
        className={cn(
          base,
          !strict
            ? "bg-[#1d4ed8] text-white"
            : "text-[#5b6b8c] dark:text-white/60",
        )}
        onClick={() => onChange(false)}
        type="button"
      >
        {notStrictLabel}
      </button>
    </div>
  );
}

export function GradingPlayground() {
  const t = useTranslations("EducatorsPlayground");
  const [phase, setPhase] = useState<Phase>("input");
  const [question, setQuestion] = useState("");
  const [modelAnswer, setModelAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [strict, setStrict] = useState(true);
  const [isSampleLoading, setIsSampleLoading] = useState(false);
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [parsed, setParsed] = useState<ParsedFeedback | null>(null);

  // Loading animation state: a cycling status message + a creeping progress bar.
  const loadingMessages = [
    t("grading"),
    t("loadingAnalyzing"),
    t("loadingComparing"),
    t("loadingCompiling"),
    t("loadingRubric"),
    t("loadingSmallStuff"),
  ];
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (phase !== "loading") return;

    setProgress(8);
    setMessageIndex(0);

    const progressTimer = setInterval(() => {
      // Ease toward ~92% while we wait; the response completes it to 100%.
      setProgress((value) =>
        value >= 92 ? value : value + (92 - value) * 0.12,
      );
    }, 320);
    const messageTimer = setInterval(() => {
      setMessageIndex((value) => (value + 1) % MESSAGE_COUNT);
    }, 1800);

    return () => {
      clearInterval(progressTimer);
      clearInterval(messageTimer);
    };
  }, [phase]);

  const fillSampleData = async () => {
    setIsSampleLoading(true);
    try {
      const response = await fetch("/api/demo/sample");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || t("errorSample"));
      }
      setQuestion(data.question ?? "");
      setModelAnswer(data.modelAnswer ?? "");
      setStudentAnswer(data.studentAnswer ?? "");
      setStrict(data.strict !== false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("errorSample"));
    } finally {
      setIsSampleLoading(false);
    }
  };

  // Keep the live request promise so the loading view stays up for a beat.
  const gradeStartedAt = useRef(0);

  const handleGrade = async () => {
    if (!question.trim() || !studentAnswer.trim()) {
      toast.error(t("studentDescription"));
      return;
    }

    setPhase("loading");
    gradeStartedAt.current = Date.now();

    try {
      const response = await fetch("/api/demo/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, modelAnswer, studentAnswer, strict }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || t("errorGrade"));
      }

      // Let the progress bar finish so the transition doesn't feel abrupt.
      const elapsed = Date.now() - gradeStartedAt.current;
      if (elapsed < 1200) {
        await new Promise((resolve) => setTimeout(resolve, 1200 - elapsed));
      }

      setResult(data as GradeResponse);
      setParsed(parseFeedback((data as GradeResponse).feedback));
      setPhase("result");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("errorGrade"));
      setPhase("input");
    }
  };

  const reset = () => {
    setPhase("input");
    setResult(null);
    setParsed(null);
  };

  // The grading controls only appear once all three fields are filled — until
  // then we show the "Use Sample data" shortcut in their place.
  const allFilled = Boolean(
    question.trim() && modelAnswer.trim() && studentAnswer.trim(),
  );

  const cardClass =
    "mt-10 rounded-xl border border-[#e3e8f5] bg-white p-5 sm:p-8 lg:p-10 dark:border-[#55578f] dark:bg-[#373764]";

  if (phase === "loading") {
    return (
      <div className={cn(cardClass, "min-h-[420px]")}>
        <div className="flex h-full flex-col items-center justify-center gap-10 py-10">
          <div>
            <Image
              alt="Acad AI"
              className="h-9 w-auto dark:hidden"
              height={48}
              src="/images/svg/acad-ai-logo.svg"
              width={200}
            />
            <Image
              alt="Acad AI"
              className="hidden h-9 w-auto dark:block"
              height={48}
              src="/images/svg/acad-ai-white-logo.svg"
              width={200}
            />
          </div>

          <div className="h-2 w-full max-w-2xl overflow-hidden rounded-full bg-[#dbe4f5] dark:bg-white/85">
            <div
              className="h-full rounded-full bg-[#1836b2] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-xl bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] px-6 py-4 text-base font-semibold text-white">
              {loadingMessages[messageIndex]}
              <Loader2 className="size-5 animate-spin" />
            </div>
            <p className="text-sm text-[#5b6b8c] dark:text-white/55">
              {t("totalMark")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result" && result && parsed) {
    return (
      <div className={cardClass}>
        <GradingResult
          maxScore={result.maxScore}
          modelAnswer={modelAnswer}
          onReset={reset}
          parsed={parsed}
          question={question}
          score={result.score}
          studentAnswer={studentAnswer}
        />
      </div>
    );
  }

  return (
    <div className={cardClass}>
      {!allFilled ? (
        <div className="flex justify-end">
          <button
            className={ctaButtonVariants({ variant: "primary" })}
            disabled={isSampleLoading}
            onClick={fillSampleData}
            type="button"
          >
            {isSampleLoading ? t("sampleLoading") : t("sampleButton")}
          </button>
        </div>
      ) : null}

      <div className={allFilled ? "" : "mt-8"}>
        <Field
          description={t("questionDescription")}
          label={t("questionLabel")}
          name="question"
          onChange={setQuestion}
          placeholder={t("questionPlaceholder")}
          value={question}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Field
          description={t("modelDescription")}
          label={t("modelLabel")}
          name="modelAnswer"
          onChange={setModelAnswer}
          placeholder={t("modelPlaceholder")}
          value={modelAnswer}
        />
        <Field
          description={t("studentDescription")}
          label={t("studentLabel")}
          name="studentAnswer"
          onChange={setStudentAnswer}
          placeholder={t("studentPlaceholder")}
          value={studentAnswer}
        />
      </div>

      {allFilled ? (
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-[#141b34] dark:text-white">
              {t("gradingStyleLabel")}
            </span>
            <StyleToggle
              notStrictLabel={t("notStrict")}
              onChange={setStrict}
              strict={strict}
              strictLabel={t("strict")}
            />
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <button
              className={ctaButtonVariants({ variant: "primary" })}
              onClick={handleGrade}
              type="button"
            >
              {t("gradeButton")}
            </button>
            <p className="text-xs text-[#5b6b8c] dark:text-white/50">
              {t("totalMark")}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
