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
        "flex min-h-20 flex-col items-start justify-center rounded-xl border border-transparent bg-[#1b2141] px-5 py-4 text-left transition-all hover:border-[#5f67a7] hover:bg-[#20274b]",
        isActive &&
          "border-[#2d63ff] bg-[#20274b] shadow-[0_0_0_1px_rgba(45,99,255,0.75)]",
      )}
      onClick={onClick}
      type="button"
    >
      {Icon ? <Icon className="mb-3 size-5 text-white/80" /> : null}
      <span className="text-[1.05rem] font-medium text-white">{label}</span>
      {description ? (
        <span className="mt-1 text-sm leading-6 text-white/62">
          {description}
        </span>
      ) : null}
    </button>
  );
}
