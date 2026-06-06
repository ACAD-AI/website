"use client";

import { useTranslations } from "next-intl";
import type { FormEvent } from "react";
import { useState } from "react";

import { ctaButtonVariants } from "@/shared";

const sampleData = {
  question: "What are the main causes of climate change?",
  modelAnswer:
    "The main causes include burning fossil fuels, deforestation, and industrial activities that increase greenhouse gas emissions.",
  studentAnswer:
    "Climate change happens because people burn coal, oil, and gas, and because forests are being cut down.",
};

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
        className="min-h-14 resize-y rounded-lg border border-[#cbd5eb] bg-white px-4 py-3 text-base font-normal text-[#141b34] outline-none placeholder:text-[#7c86a0] focus:border-[#3479ff] dark:border-[#55578f] dark:bg-[#111a37] dark:text-white dark:placeholder:text-white/38"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
        value={value}
      />
      <span className="text-xs leading-5 font-normal text-[#5b6b8c] dark:text-white/50">
        {description}
      </span>
    </label>
  );
}

export function GradingPlayground() {
  const t = useTranslations("EducatorsPlayground");
  const [question, setQuestion] = useState("");
  const [modelAnswer, setModelAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fillSampleData = () => {
    setQuestion(sampleData.question);
    setModelAnswer(sampleData.modelAnswer);
    setStudentAnswer(sampleData.studentAnswer);
    setShowResult(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowResult(true);
  };

  return (
    <form
      className="mt-10 rounded-xl border border-[#e3e8f5] bg-white p-5 sm:p-8 lg:p-10 dark:border-[#55578f] dark:bg-[#373764]"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-end">
        <button
          className={ctaButtonVariants({ variant: "primary" })}
          onClick={fillSampleData}
          type="button"
        >
          {t("sampleButton")}
        </button>
      </div>

      <div className="mt-8">
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

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          className={ctaButtonVariants({ variant: "primary" })}
          type="submit"
        >
          {t("gradeButton")}
        </button>
        {showResult ? (
          <p
            className="text-sm leading-6 text-[#1836b2] dark:text-[#8ed1f1]"
            role="status"
          >
            {t("demoResult")}
          </p>
        ) : null}
      </div>
    </form>
  );
}
