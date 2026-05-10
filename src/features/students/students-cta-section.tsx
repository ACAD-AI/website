import { getTranslations } from "next-intl/server";
import { PrimaryButton } from "@/shared";

export async function StudentsCTASection() {
  const t = await getTranslations("StudentsCTA");

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-[#2852ff] via-[#3b5ecc] to-[#6b82e8] px-8 py-16 text-center sm:py-20">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>
        <div className="mt-8">
          <PrimaryButton
            showArrow
            className="bg-[#1836B2] font-semibold shadow-[0_8px_24px_rgba(24,54,178,0.4)]"
          >
            {t("button")}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
