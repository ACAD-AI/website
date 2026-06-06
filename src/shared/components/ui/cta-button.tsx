import { ArrowRight } from "lucide-react";
import type * as React from "react";

import { cn } from "@/shared/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showArrow?: boolean;
}

export const PrimaryButton = ({
  children,
  showArrow,
  className,
  ...props
}: CTAButtonProps) => (
  <button
    type="button"
    className={cn(
      "inline-flex items-center gap-3 rounded-xl border border-[#3b6bff]/40 px-6 py-3 text-sm font-semibold text-white bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] shadow-[0_10px_24px_rgba(24,54,178,0.22)] transition-opacity hover:opacity-95",
      className,
    )}
    {...props}
  >
    {children}
    {showArrow && <ArrowRight className="size-4 shrink-0" />}
  </button>
);

export const SecondaryButton = ({
  children,
  showArrow,
  className,
  ...props
}: CTAButtonProps) => (
  <button
    type="button"
    className={cn(
      "inline-flex items-center gap-3 rounded-xl border border-[#dbe4f5] bg-white text-[#155EEF] px-6 py-3 text-base font-semibold transition-colors hover:bg-[#f4f7ff]",
      className,
    )}
    {...props}
  >
    {children}
    {showArrow && <ArrowRight className="size-4 shrink-0" />}
  </button>
);

export default { PrimaryButton, SecondaryButton };
