"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/shared/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <fieldset
      className={cn(
        "inline-flex h-11 items-center overflow-hidden rounded-md border border-[#cfd5e7] bg-[#f2f5fb] p-0.5 shadow-sm dark:border-[#303862] dark:bg-[#111832]",
        className,
      )}
    >
      <legend className="sr-only">Color theme</legend>
      <button
        aria-label="Use light mode"
        aria-pressed={mounted && resolvedTheme === "light"}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-sm text-[#707996] transition-colors hover:text-[#141b34] dark:text-white/55 dark:hover:text-white",
          mounted &&
            resolvedTheme === "light" &&
            "bg-white text-[#141b34] shadow-sm",
        )}
        onClick={() => setTheme("light")}
        type="button"
      >
        <Sun aria-hidden="true" className="size-4" />
      </button>
      <button
        aria-label="Use dark mode"
        aria-pressed={!mounted || resolvedTheme === "dark"}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-sm text-[#53617e] transition-colors hover:text-[#141b34] dark:text-white/55 dark:hover:text-white",
          (!mounted || resolvedTheme === "dark") &&
            "bg-[#2148c5] text-white shadow-sm hover:text-white",
        )}
        onClick={() => setTheme("dark")}
        type="button"
      >
        <Moon aria-hidden="true" className="size-4 fill-current" />
      </button>
    </fieldset>
  );
}
