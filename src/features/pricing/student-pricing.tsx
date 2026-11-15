"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, Stagger, StaggerItem } from "@/shared";
import { cn } from "@/shared/lib/utils";

import { studentPricing } from "./pricing-data";
import type { StudentCurrency, StudentPlan } from "./pricing-types";

const CURRENCIES: StudentCurrency[] = ["NGN", "USD"];

export function StudentPricing() {
  const {
    plans,
    defaultPlanId,
    title,
    description,
    featuresTitle,
    features,
    ctaHref,
    footnote,
  } = studentPricing;

  // Only offer currencies that every plan has a price for.
  const availableCurrencies = CURRENCIES.filter((code) =>
    plans.every((plan) => plan.prices[code]),
  );

  const [currency, setCurrency] = useState<StudentCurrency>(
    availableCurrencies[0] ?? "NGN",
  );
  const [selectedId, setSelectedId] = useState(defaultPlanId);

  const selectedPlan = plans.find((plan) => plan.id === selectedId) ?? plans[0];
  const selectedPrice = selectedPlan.prices[currency];

  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center gap-6">
        {availableCurrencies.length > 1 ? (
          <div className="inline-flex items-center rounded-2xl border border-[#e3e8f5] bg-[#eef1fb] p-1 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-transparent dark:bg-[#45417c] dark:shadow-[0_16px_32px_rgba(8,12,32,0.2)]">
            {availableCurrencies.map((code) => (
              <button
                aria-pressed={code === currency}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  code === currency
                    ? "bg-white text-[#2f3158] shadow-[0_8px_18px_rgba(46,73,139,0.1)] dark:shadow-none"
                    : "text-[#5b6b8c] hover:text-[#141b34] dark:text-white/72 dark:hover:text-white",
                )}
                key={code}
                onClick={() => setCurrency(code)}
                type="button"
              >
                {code}
              </button>
            ))}
          </div>
        ) : null}

        <Stagger className="grid w-full gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.id}>
              <StudentPlanCard
                currency={currency}
                isSelected={plan.id === selectedPlan.id}
                onSelect={() => setSelectedId(plan.id)}
                plan={plan}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[2.8rem] leading-tight font-medium text-[#141b34] sm:text-5xl dark:text-white">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#5b6b8c] dark:text-white/72">
          {description}
        </p>

        <div className="mt-10 text-left">
          <h3 className="text-lg font-semibold text-[#141b34] dark:text-white">
            {featuresTitle}
          </h3>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                className="flex items-start gap-3 text-sm leading-7 text-[#5b6b8c] sm:text-base dark:text-white/72"
                key={feature}
              >
                <span className="mt-2 size-2 shrink-0 rounded-full bg-[#1836b2] dark:bg-[#86c7ed]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          className={ctaButtonVariants({
            variant: "primary",
            className: "mt-10",
          })}
          href={ctaHref}
        >
          Start with {selectedPlan.name} plan
          {selectedPrice ? ` - ${selectedPrice.weekly}/week` : ""}
          <ArrowUpRight className="size-4" />
        </Link>

        <p className="mt-4 text-sm text-[#5b6b8c] dark:text-white/58">
          {footnote}
        </p>
      </div>
    </div>
  );
}

interface StudentPlanCardProps {
  plan: StudentPlan;
  currency: StudentCurrency;
  isSelected: boolean;
  onSelect: () => void;
}

function StudentPlanCard({
  plan,
  currency,
  isSelected,
  onSelect,
}: StudentPlanCardProps) {
  const price = plan.prices[currency];

  return (
    <button
      aria-pressed={isSelected}
      className={cn(
        "flex h-full w-full flex-col rounded-[16px] border bg-white p-5 text-left shadow-[0_16px_38px_rgba(46,73,139,0.08)] transition-colors sm:p-6 dark:bg-[#433f7d] dark:shadow-[0_24px_60px_rgba(9,13,35,0.18)]",
        isSelected
          ? "border-[#2d6aff] ring-2 ring-[#2d6aff] dark:border-[#8ab5ff] dark:ring-[#8ab5ff]"
          : "border-[#e3e8f5] hover:border-[#b9c4e6] dark:border-[#595f93]",
      )}
      onClick={onSelect}
      type="button"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div>
          <h3 className="text-[2rem] leading-tight font-medium text-[#141b34] dark:text-white">
            {plan.name}
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#5b6b8c] dark:text-white/58">
            {plan.billing}
          </p>
        </div>

        {plan.badge ? (
          <span
            className={cn(
              "inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white",
              plan.badgeTone === "success" ? "bg-[#22c55e]" : "bg-[#2d6aff]",
            )}
          >
            {plan.badge}
          </span>
        ) : null}
      </div>

      {price ? (
        <div className="mt-auto space-y-2 pt-6">
          <p className="flex items-baseline gap-2">
            <span className="text-[2.3rem] leading-none font-semibold text-[#141b34] dark:text-white">
              {price.weekly}
            </span>
            <span className="text-sm text-[#5b6b8c] dark:text-white/58">
              / week
            </span>
            {price.original ? (
              <span className="text-sm text-[#9aa5bf] line-through">
                {price.original}
              </span>
            ) : null}
          </p>
          {plan.note ? (
            <p className="text-sm text-[#1836b2] dark:text-[#8ab5ff]">
              {plan.note}
            </p>
          ) : null}
        </div>
      ) : null}
    </button>
  );
}
