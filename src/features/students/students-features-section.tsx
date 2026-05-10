import { Brain, Zap } from "lucide-react";
import { PrimaryButton } from "@/shared";

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-[#141B34] p-6">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
    </div>
  );
}

export function StudentsFeaturesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-5xl bg-[#323261] p-8 sm:p-10 lg:p-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            <div className=" flex flex-col gap-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#1836B2]">
                <Brain className="size-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Exams that teach you
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  For every exam your teacher gives you on Acad AI, we&apos;ll
                  return your result with personal feedback that shows exactly
                  where you cooked — and where you missed it on each question.
                </p>
              </div>
            </div>
            <PrimaryButton showArrow className="self-start">
              Lock In Now
            </PrimaryButton>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#1836B2]">
              <Zap className="size-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Test yourself before your teacher does
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                title="Flashcards"
                description="Convert bulky PDFs and slides into flashcards that help you understand subjects faster, for long-term memory."
              />
              <FeatureCard
                title="Practice Quizzes"
                description="Solve standard exam questions with a timer so you walk into the real exam with confidence."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
