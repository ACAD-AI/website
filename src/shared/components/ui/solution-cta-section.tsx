import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils";

interface SolutionCTAAction {
  href: string;
  label: string;
  showArrow?: boolean;
  variant?: "primary" | "secondary";
}

interface SolutionCTASectionProps {
  actions: SolutionCTAAction[];
  description?: string;
  title: string;
}

export function SolutionCTASection({
  actions,
  description,
  title,
}: SolutionCTASectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_12%_100%,rgba(135,196,255,0.72),transparent_44%),linear-gradient(135deg,#2852ff_0%,#1836b2_100%)] px-6 py-14 text-center sm:px-10 sm:py-16">
        <h2 className="mx-auto max-w-2xl whitespace-pre-line text-4xl leading-tight font-medium tracking-tight text-white sm:text-5xl">
          {title}
        </h2>

        {description ? (
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/72 sm:text-base">
            {description}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {actions.map((action) => (
            <Link
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
                action.variant === "secondary"
                  ? "bg-white text-[#1836b2] hover:bg-white/90"
                  : "border border-[#3479ff] bg-[#1836b2] text-white hover:bg-[#2350d5]",
              )}
              href={action.href}
              key={`${action.href}-${action.label}`}
            >
              {action.label}
              {action.showArrow ? (
                <ArrowRight aria-hidden="true" className="size-4" />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
