"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/shared/lib/utils";

interface TextGenerateEffectProps {
  /** The full string to reveal, word by word. */
  words: string;
  className?: string;
  /**
   * Optional substring rendered in the brand gradient (e.g. the hero accent
   * word). Matched case-sensitively within `words`.
   */
  highlight?: string;
  /** Seconds between each word. */
  stagger?: number;
}

const HIGHLIGHT_CLASS =
  "bg-linear-to-r from-[#2852ff] to-[#4d73ff] bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400";

/**
 * Aceternity-style "text generate" effect: words fade + de-blur in sequence.
 * The settled state is identical to plain text, so the static look is
 * unchanged. Honors prefers-reduced-motion.
 */
export function TextGenerateEffect({
  words,
  className,
  highlight,
  stagger = 0.07,
}: TextGenerateEffectProps) {
  const reduce = useReducedMotion();
  const tokens = words.split(" ");

  const isHighlighted = (token: string) =>
    highlight ? highlight.split(" ").includes(token) : false;

  if (reduce) {
    return (
      <span className={className}>
        {tokens.map((token, index) => (
          <span
            className={isHighlighted(token) ? HIGHLIGHT_CLASS : undefined}
            // biome-ignore lint/suspicious/noArrayIndexKey: static word list, never reordered
            key={`${token}-${index}`}
          >
            {token}
            {index < tokens.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {tokens.map((token, index) => (
        <motion.span
          className={cn(
            "inline-block",
            isHighlighted(token) && HIGHLIGHT_CLASS,
          )}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * stagger,
            ease: "easeOut",
          }}
          // biome-ignore lint/suspicious/noArrayIndexKey: static word list, never reordered
          key={`${token}-${index}`}
        >
          {token}
          {index < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
