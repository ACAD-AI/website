import { Brain, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn, PrimaryButton, Stagger, StaggerItem } from "@/shared";

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-[#f5f7ff] p-6 dark:bg-[#141B34]">
      <h4 className="text-lg font-semibold text-[#141b34] dark:text-white">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-[#5b6b8c] dark:text-white/60">
        {description}
      </p>
    </div>
  );
}

export async function StudentsFeaturesSection() {
  const t = await getTranslations("StudentsFeatures");

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-5xl bg-white p-8 sm:p-10 lg:p-12 dark:bg-[#323261]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            <FadeIn>
              <div className="flex flex-col gap-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1836B2]">
                  <Brain className="size-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-snug text-[#141b34] sm:text-3xl dark:text-white">
                    {t("leftTitle")}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5b6b8c] dark:text-white/60">
                    {t("leftDescription")}
                  </p>
                </div>
              </div>
            </FadeIn>
            <PrimaryButton showArrow className="self-start">
              {t("leftButton")}
            </PrimaryButton>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#1836B2]">
                <Zap className="size-6 text-white" />
              </div>
            </FadeIn>
            <FadeIn>
              <h3 className="text-2xl font-semibold leading-snug text-[#141b34] sm:text-3xl dark:text-white">
                {t("rightTitle")}
              </h3>
            </FadeIn>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <FeatureCard
                  title={t("flashcardsTitle")}
                  description={t("flashcardsDescription")}
                />
              </StaggerItem>
              <StaggerItem>
                <FeatureCard
                  title={t("quizzesTitle")}
                  description={t("quizzesDescription")}
                />
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
