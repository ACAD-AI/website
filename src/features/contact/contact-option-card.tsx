"use client";

import {
  GraduationCap,
  type LucideIcon,
  NotebookText,
  UserRoundCog,
} from "lucide-react";

import { cn } from "@/shared/lib/utils";

const icons: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "notebook-text": NotebookText,
  "user-round-cog": UserRoundCog,
};

interface ContactOptionCardProps {
  description?: string;
  icon?: keyof typeof icons;
  isActive: boolean;
  label: string;
  onClick: () => void;
}

export function ContactOptionCard({
  description,
  icon,
  isActive,
  label,
  onClick,
}: ContactOptionCardProps) {
  const Icon = icon ? icons[icon] : null;

  return (
    <button
      className={cn(
        "flex min-h-20 w-full flex-col items-start justify-center rounded-xl border border-[#e3e8f5] bg-[#f5f7ff] px-5 py-4 text-left transition-all hover:border-[#b9c6ea] hover:bg-[#eef2fc] dark:border-transparent dark:bg-[#1b2141] dark:hover:border-[#5f67a7] dark:hover:bg-[#20274b]",
        isActive &&
          "border-[#2d63ff] bg-[#eef2fc] shadow-[0_0_0_1px_rgba(45,99,255,0.75)] dark:bg-[#20274b]",
      )}
      onClick={onClick}
      type="button"
    >
      {Icon ? (
        <Icon className="mb-3 size-5 text-[#5b6b8c] dark:text-white/80" />
      ) : null}
      <span className="text-[1.05rem] font-medium text-[#141b34] dark:text-white">
        {label}
      </span>
      {description ? (
        <span className="mt-1 text-sm leading-6 text-[#5b6b8c] dark:text-white/62">
          {description}
        </span>
      ) : null}
    </button>
  );
}
