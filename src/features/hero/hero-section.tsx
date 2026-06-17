import { Sparkles } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn, TextGenerateEffect } from "@/shared";

interface HeroSectionProps {
  tagline: string;
  heading: string;
  headingAccent?: string;
  subHeading: string;
  buttonOne?: string;
  buttonOneArrow?: boolean;
  buttonOneHref?: string;
  buttonTwo?: string;
  buttonTwoArrow?: boolean;
  buttonTwoHref?: string;
  image?: string;
}

const HeroSection = ({
  tagline,
  heading,
  headingAccent,
  subHeading,
  buttonOne,
  buttonOneArrow,
  buttonOneHref,
  buttonTwo,
  buttonTwoArrow,
  buttonTwoHref,
}: HeroSectionProps) => {
  const renderAction = (
    label: string,
    href: string | undefined,
    variant: "primary" | "secondary",
    showArrow?: boolean,
  ) => {
    const content = (
      <>
        {label}
        {showArrow ? <span aria-hidden="true">→</span> : null}
      </>
    );

    if (!href) {
      return (
        <button className={ctaButtonVariants({ variant })} type="button">
          {content}
        </button>
      );
    }

    return href.startsWith("http") ? (
      <a className={ctaButtonVariants({ variant })} href={href}>
        {content}
      </a>
    ) : (
      <Link className={ctaButtonVariants({ variant })} href={href}>
        {content}
      </Link>
    );
  };

  return (
    <section className="flex flex-col items-center gap-8 px-6 pt-20 text-center">
      <FadeIn delay={0.05}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d8def0] bg-white px-4 py-1.5 text-sm text-[#3a4b7c] shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white/80">
          <Sparkles className="size-3.5 text-[#2852ff] dark:text-blue-400" />
          {tagline}
        </span>
      </FadeIn>

      <h1 className="max-w-209.25 text-5xl font-medium leading-tight tracking-tight text-[#141b34] md:text-[64px] dark:text-white">
        <TextGenerateEffect words={heading} highlight={headingAccent} />
      </h1>

      <FadeIn className="max-w-155.25" delay={0.25}>
        <p className="text-base text-[#5b6b8c] dark:text-white/60">
          {subHeading}
        </p>
      </FadeIn>

      {(buttonOne || buttonTwo) && (
        <FadeIn delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {buttonOne &&
              renderAction(buttonOne, buttonOneHref, "primary", buttonOneArrow)}
            {buttonTwo &&
              renderAction(
                buttonTwo,
                buttonTwoHref,
                "secondary",
                buttonTwoArrow,
              )}
          </div>
        </FadeIn>
      )}
    </section>
  );
};

export default HeroSection;
