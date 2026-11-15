import { FadeIn } from "@/shared";
import { CALENDAR_URL } from "@/shared/config/site";

interface InstitutionsHeroSectionProps {
  button: string;
  description: string;
  eyebrow: string;
  title: string;
}

export function InstitutionsHeroSection({
  button,
  description,
  eyebrow,
  title,
}: InstitutionsHeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(27,72,190,0.23),transparent_38%)]" />

      <div className="relative mx-auto flex min-h-[610px] w-full max-w-[1180px] items-center justify-center">
        <FadeIn className="relative z-10 flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-[#1836b2] uppercase sm:text-base dark:text-[#86c7ed]">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl leading-[1.08] font-medium tracking-tight text-[#141b34] sm:text-6xl lg:text-[5.25rem] dark:text-white">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#5b6b8c] sm:text-lg dark:text-white/65">
            {description}
          </p>
          <a
            className="mt-10 inline-flex items-center justify-center rounded-xl border border-[#3479ff] bg-[#1836b2] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#2350d5]"
            href={CALENDAR_URL}
            rel="noreferrer"
            target="_blank"
          >
            {button}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
