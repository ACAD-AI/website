"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: "-80px" } as const;

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Starting vertical offset in px. */
  y?: number;
}

/**
 * Subtle scroll-triggered reveal: rise + fade + slight blur, once.
 * Honors prefers-reduced-motion (renders children statically).
 * Server-rendered children pass straight through this client boundary.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
}: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Seconds between each child. */
  gap?: number;
  /** Seconds before the first child starts. */
  delay?: number;
}

/**
 * Container that reveals its <StaggerItem> children one after another.
 * Keep the same className you'd put on the grid/flex wrapper — layout is
 * preserved because this renders a single div in its place.
 */
export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

/** A single item inside <Stagger>. Carry the item's layout classes here. */
export function StaggerItem({ children, className, y = 24 }: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
}
