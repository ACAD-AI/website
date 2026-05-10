import { Sparkles } from "lucide-react";
import Image from "next/image";

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
        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {headingAccent}
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="flex flex-col items-center gap-8 px-6 pt-20 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80">
        <Sparkles className="size-3.5 text-blue-400" />
        {tagline}
      </div>

      <h1 className="max-w-209.25 text-5xl font-medium leading-tight tracking-tight text-white md:text-[64px]">
        {renderHeading()}
      </h1>

      <p className="max-w-155.25 text-base text-white/60">{subHeading}</p>

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

      {image && (
        <div className="relative mt-4 w-full max-w-4xl overflow-hidden rounded-2xl bg-linear-to-br from-teal-500/30 via-blue-600/20 to-blue-900/30 p-1">
          <Image
            src={image}
            alt={heading}
            width={1200}
            height={728}
            className="w-full rounded-xl object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
