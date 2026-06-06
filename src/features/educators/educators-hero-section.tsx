import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn } from "@/shared";

interface EducatorsHeroSectionProps {
  button: string;
  description: string;
  eyebrow: string;
  title: string;
}

export function EducatorsHeroSection({
  button,
  description,
  eyebrow,
  title,
}: EducatorsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_92%,rgba(27,72,190,0.25),transparent_40%)]" />

      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1180px] items-center justify-center">
        <FadeIn className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#1836b2] uppercase sm:text-base dark:text-[#86c7ed]">
            {eyebrow}
          </p>
          <h1 className="mt-6 whitespace-pre-line text-5xl leading-[1.08] font-medium tracking-tight text-[#141b34] sm:text-6xl lg:text-[5.25rem] dark:text-white">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#5b6b8c] sm:text-lg dark:text-white/65">
            {description}
          </p>
          <Link
            className={ctaButtonVariants({
              variant: "primary",
              className: "mt-10",
            })}
            href="/signup"
          >
            {button}
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
