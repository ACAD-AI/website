import type { LucideIcon } from "lucide-react";

import { cn } from "@/shared/lib/utils";

interface FeatureCardProps {
  description?: string;
  icon: LucideIcon;
  iconStyle?: "plain" | "tile";
  title: string;
}

export function FeatureCard({
  description,
  icon: Icon,
  iconStyle = "plain",
  title,
}: FeatureCardProps) {
  return (
    <article className="flex h-full min-h-[150px] flex-col rounded-lg border border-[#e3e8f5] bg-white p-5 shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-6 dark:border-[#55578f] dark:bg-[#373764] dark:shadow-[0_0_18px_rgba(64,142,255,0.16)]">
      <span
        className={cn(
          "flex items-center text-[#1836b2] dark:text-[#8ed1f1]",
          iconStyle === "tile"
            ? "size-12 justify-center rounded-xl bg-[#1769ed] text-white shadow-[0_10px_24px_rgba(23,105,237,0.25)] dark:text-white"
            : "justify-start",
        )}
      >
        <Icon
          aria-hidden="true"
          className={iconStyle === "tile" ? "size-5" : "size-5"}
          strokeWidth={1.7}
        />
      </span>
      <h3 className="mt-7 text-lg font-medium text-[#141b34] sm:text-xl dark:text-white">
        {title}
      </h3>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-[#5b6b8c] dark:text-white/62">
          {description}
        </p>
      ) : null}
    </article>
  );
}
