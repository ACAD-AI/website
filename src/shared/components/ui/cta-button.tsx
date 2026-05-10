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
      "inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold text-white bg-[#1836B2]",
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
      "inline-flex items-center gap-3 rounded-xl bg-white text-[#155EEF] px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90",
      className,
    )}
    {...props}
  >
    {children}
    {showArrow && <ArrowRight className="size-4 shrink-0" />}
  </button>
);

export default { PrimaryButton, SecondaryButton };
