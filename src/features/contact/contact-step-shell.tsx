import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface ContactStepShellProps {
  canProceed?: boolean;
  children: React.ReactNode;
  isLastStep?: boolean;
  onBack: () => void;
  onNext: () => void;
  step: number;
  title: string;
  totalSteps: number;
}

export function ContactStepShell({
  canProceed = true,
  children,
  isLastStep = false,
  onBack,
  onNext,
  step,
  title,
  totalSteps,
}: ContactStepShellProps) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="rounded-[24px] border border-[#5a5f93] bg-[#323261] p-7 shadow-[0_24px_70px_rgba(9,13,35,0.28)] sm:p-10">
      <div className="mb-10">
        <div className="h-1.5 rounded-full bg-[#1b2141]">
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full rounded-full bg-[#2f6dff]"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
      </div>

      <p className="text-sm text-white/60">
        Step {step} of {totalSteps}
      </p>
      <h2 className="mt-3 text-3xl leading-tight font-medium text-white sm:text-[3rem]">
        {title}
      </h2>

      <div className="mt-8">{children}</div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <button
          className={cn(
            "inline-flex items-center gap-3 text-base text-white/65 transition-colors hover:text-white",
            step === 1 && "pointer-events-none opacity-40",
          )}
          onClick={onBack}
          type="button"
        >
          <ArrowLeft className="size-4" />
          Back
        </button>

        <Button
          className="h-12 min-w-30 rounded-xl bg-[#245dff] px-5 text-sm font-semibold text-white hover:bg-[#3a71ff]"
          disabled={!canProceed}
          onClick={onNext}
          type="button"
        >
          {isLastStep ? (
            <>
              <Sparkles className="size-4" />
              Submit
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
