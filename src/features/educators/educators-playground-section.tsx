import { getTranslations } from "next-intl/server";

import { GradingPlayground } from "./grading-playground";

export async function EducatorsPlaygroundSection() {
  const t = await getTranslations("EducatorsPlayground");

  return (
    <section className="relative overflow-hidden px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(25,79,204,0.2),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-[1180px] rounded-3xl bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-14 dark:bg-[#373764]">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#5b6b8c] dark:text-white/65">
            {t("description")}
          </p>
        </div>

        <GradingPlayground />
      </div>
    </section>
  );
}
