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
    <article className="flex h-full min-h-[150px] flex-col rounded-lg border border-[#55578f] bg-[#373764] p-5 shadow-[0_0_18px_rgba(64,142,255,0.16)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
      <span
        className={cn(
          "flex items-center justify-center text-[#8ed1f1] text-center",
          iconStyle === "tile" &&
            "size-12 rounded-xl bg-[#1769ed] text-white shadow-[0_10px_24px_rgba(23,105,237,0.25)]",
        )}
      >
        <Icon
          aria-hidden="true"
          className={iconStyle === "tile" ? "size-5" : "size-5"}
          strokeWidth={1.7}
        />
      </span>
      <h3 className="mt-7 text-lg font-medium text-white sm:text-xl">
        {title}
      </h3>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-white/62">{description}</p>
      ) : null}
    </article>
  );
}
