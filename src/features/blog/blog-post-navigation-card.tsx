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
        "flex min-h-28 flex-col rounded-[14px] border border-[#595f93] bg-[#433f7d] px-5 py-4 text-white transition-colors hover:bg-[#4b4788]",
        isPrevious ? "items-start text-left" : "items-end text-right",
      )}
      href={`/resources/blog/${post.slug}`}
    >
      <span className="inline-flex items-center gap-2 text-sm text-white/64">
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
