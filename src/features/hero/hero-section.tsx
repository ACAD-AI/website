import { Sparkles } from "lucide-react";

import { PrimaryButton, SecondaryButton } from "@/shared";

interface HeroSectionProps {
  tagline: string;
  heading: string;
  headingAccent?: string;
  subHeading: string;
  buttonOne?: string;
  buttonOneArrow?: boolean;
  buttonTwo?: string;
  buttonTwoArrow?: boolean;
  image?: string;
}

const HeroSection = ({
  tagline,
  heading,
  headingAccent,
  subHeading,
  buttonOne,
  buttonOneArrow,
  buttonTwo,
  buttonTwoArrow,
  image,
}: HeroSectionProps) => {
  const renderHeading = () => {
    if (!headingAccent) return heading;
    const [before, ...rest] = heading.split(headingAccent);
    const after = rest.join(headingAccent);

    return (
      <>
        {before}
        <span className="bg-linear-to-r from-[#2852ff] to-[#4d73ff] bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
          {headingAccent}
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="flex flex-col items-center gap-8 px-6 pt-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#d8def0] bg-white px-4 py-1.5 text-sm text-[#3a4b7c] shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white/80">
        <Sparkles className="size-3.5 text-[#2852ff] dark:text-blue-400" />
        {tagline}
      </div>

      <h1 className="max-w-209.25 text-5xl font-medium leading-tight tracking-tight text-[#141b34] md:text-[64px] dark:text-white">
        {renderHeading()}
      </h1>

      <p className="max-w-155.25 text-base text-[#5b6b8c] dark:text-white/60">
        {subHeading}
      </p>

      {(buttonOne || buttonTwo) && (
        <div className="flex flex-wrap items-center justify-center gap-3">
          {buttonOne && (
            <PrimaryButton showArrow={buttonOneArrow}>
              {buttonOne}
            </PrimaryButton>
          )}
          {buttonTwo && (
            <SecondaryButton showArrow={buttonTwoArrow}>
              {buttonTwo}
            </SecondaryButton>
          )}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
