import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import type * as React from "react";

import { cn } from "@/shared/lib/utils";

/**
 * Single source of truth for the brand CTA buttons (light + dark).
 * Use <CtaButton> for <button> elements, or apply `ctaButtonVariants(...)`
 * as a className on a Next <Link> (or any element) for link-style CTAs.
 *
 * - primary:   the brand blue gradient (#0A174C → #1836B2), white label.
 * - secondary: white surface with #155EEF label.
 *
 * Edit light/dark styling here once and it propagates everywhere.
 */
export const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-[#3b6bff]/40 text-white bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] shadow-[0_10px_24px_rgba(24,54,178,0.22)] hover:opacity-95",
        secondary:
          "border border-[#dbe4f5] bg-white text-[#155EEF] hover:bg-[#f4f7ff] dark:border-white/15",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  showArrow?: boolean;
}

export const CtaButton = ({
  children,
  variant,
  showArrow,
  className,
  type = "button",
  ...props
}: CtaButtonProps) => (
  <button
    type={type}
    className={cn(ctaButtonVariants({ variant }), className)}
    {...props}
  >
    {children}
    {showArrow && <ArrowRight className="size-4 shrink-0" />}
  </button>
);

/** Back-compat wrappers — both delegate to the single CtaButton source. */
export const PrimaryButton = ({
  children,
  showArrow,
  className,
  ...props
}: Omit<CtaButtonProps, "variant">) => (
  <CtaButton
    variant="primary"
    showArrow={showArrow}
    className={className}
    {...props}
  >
    {children}
  </CtaButton>
);

export const SecondaryButton = ({
  children,
  showArrow,
  className,
  ...props
}: Omit<CtaButtonProps, "variant">) => (
  <CtaButton
    variant="secondary"
    showArrow={showArrow}
    className={cn("text-base", className)}
    {...props}
  >
    {children}
  </CtaButton>
);

export default { CtaButton, PrimaryButton, SecondaryButton };
