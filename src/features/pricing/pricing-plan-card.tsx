import { Link } from "@/i18n/navigation";
import { PrimaryButton } from "@/shared";
import { Button } from "@/shared/components/ui/button";
import type { PricingPlan } from "./pricing-types";

interface PricingPlanCardProps {
  plan: PricingPlan;
}

export function PricingPlanCard({ plan }: PricingPlanCardProps) {
  return (
    <article className="rounded-[16px] border border-[#595f93] bg-[#433f7d] p-5 shadow-[0_24px_60px_rgba(9,13,35,0.18)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[2rem] leading-tight font-medium text-white">
            {plan.credits}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/58">
            {plan.description}
          </p>
        </div>

        {plan.badge ? (
          <span className="inline-flex rounded-full bg-[#2d6aff] px-3 py-1 text-xs font-semibold text-white">
            {plan.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-[2.3rem] leading-none font-semibold text-white">
          {plan.price}
        </p>
        {plan.unitPrice ? (
          <p className="text-sm text-[#8ab5ff]">{plan.unitPrice}</p>
        ) : null}
      </div>

      <PrimaryButton className="mt-8">
        <Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
      </PrimaryButton>
    </article>
  );
}
