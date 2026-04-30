import { cn } from "@/shared/lib/utils";

import type { ReviewItem } from "./reviews-data";

interface ReviewCardProps {
  item: ReviewItem;
}

export function ReviewCard({ item }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "break-inside-avoid rounded-2xl border border-[#535090] bg-[#43407c] p-5 text-white shadow-[0_16px_36px_rgba(8,12,32,0.24)] sm:p-6",
        item.featured &&
          "border-[#1ea1ff] shadow-[0_0_0_2px_rgba(30,161,255,0.95),0_20px_42px_rgba(8,12,32,0.28)]",
      )}
    >
      {item.mediaPlaceholder ? (
        <div className="mb-6 h-24 rounded-xl bg-[#d9d9d9] sm:h-28" />
      ) : null}

      {item.quote ? (
        <p className="text-lg leading-10 text-white/96 sm:text-[1.05rem]">
          {item.quote}
        </p>
      ) : null}

      <div
        className={cn("mt-7", !item.quote && !item.mediaPlaceholder && "mt-0")}
      >
        <h3 className="text-[1.05rem] font-medium text-white">{item.author}</h3>
        <p className="mt-1 text-sm tracking-wide text-white/54 uppercase">
          {item.organization}
        </p>
      </div>
    </article>
  );
}
