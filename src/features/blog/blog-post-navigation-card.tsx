import { ArrowLeft, ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils";

import type { BlogPostSummary } from "./blog-types";

interface BlogPostNavigationCardProps {
  direction: "next" | "previous";
  post: BlogPostSummary;
}

export function BlogPostNavigationCard({
  direction,
  post,
}: BlogPostNavigationCardProps) {
  const isPrevious = direction === "previous";

  return (
    <Link
      className={cn(
        "flex min-h-28 flex-col rounded-[14px] border border-[#e3e8f5] bg-white px-5 py-4 text-[#141b34] transition-colors hover:bg-[#f5f7ff] dark:border-[#595f93] dark:bg-[#433f7d] dark:text-white dark:hover:bg-[#4b4788]",
        isPrevious ? "items-start text-left" : "items-end text-right",
      )}
      href={`/resources/blog/${post.slug}`}
    >
      <span className="inline-flex items-center gap-2 text-sm text-[#5b6b8c] dark:text-white/64">
        {isPrevious ? <ArrowLeft className="size-4" /> : null}
        {isPrevious ? "Previous" : "Next"}
        {!isPrevious ? <ArrowRight className="size-4" /> : null}
      </span>
      <span className="mt-3 max-w-sm text-2xl leading-[1.3] font-medium">
        {post.title}
      </span>
    </Link>
  );
}
