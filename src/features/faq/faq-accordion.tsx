"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/features/faq/faq-data";
import { cn } from "@/shared/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="w-full">
      {items.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div
            className="border-b border-[#e3e8f5] first:border-t dark:border-[#2f3764]"
            key={item.id}
          >
            <button
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-[#141b34]/3 sm:px-6 dark:hover:bg-white/2"
              onClick={() =>
                setOpenItem((current) => (current === item.id ? null : item.id))
              }
              type="button"
            >
              <span className="text-base leading-7 font-medium text-[#141b34] sm:text-[1.0625rem] dark:text-white">
                {item.question}
              </span>
              <span className="flex size-8 shrink-0 items-center justify-center text-[#5b6b8c] dark:text-white/80">
                {isOpen ? (
                  <Minus className="size-4" />
                ) : (
                  <Plus className="size-4" />
                )}
              </span>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-[#5b6b8c] sm:px-6 sm:text-base dark:text-white/68">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
