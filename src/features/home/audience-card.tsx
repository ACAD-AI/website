import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

interface AudienceCardProps {
  description: string;
  href: string;
  index: number;
  linkLabel: string;
  title: string;
}

export function AudienceCard({
  description,
  href,
  index,
  linkLabel,
  title,
}: AudienceCardProps) {
  return (
    <article className="group flex min-h-[360px] flex-col rounded-xl border border-[#e3e8f5] bg-white p-6 shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-8 dark:border-[#5a5c96] dark:bg-[#363664] dark:shadow-[0_0_28px_rgba(64,142,255,0.15)]">
      <span className="flex size-14 items-center justify-center rounded-xl bg-[#1769ed] text-lg font-semibold text-white">
        {index}
      </span>

      <div className="mt-9">
        <h3 className="text-2xl font-medium tracking-tight text-[#141b34] sm:text-3xl dark:text-white">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[#5b6b8c] dark:text-white/65">
          {description}
        </p>
      </div>

      <Link
        className="mt-auto inline-flex items-center gap-3 pt-8 text-base font-medium text-[#1836b2] transition-colors hover:text-[#0f2168] dark:text-[#86c7ed] dark:hover:text-white"
        href={href}
      >
        {linkLabel}
        <ArrowRight
          aria-hidden="true"
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
