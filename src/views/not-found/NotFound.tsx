"use client";

import { Compass, Home, MoveLeft } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { ctaButtonVariants, FadeIn } from "@/shared";

const NotFound = () => {
  const t = useTranslations("NotFound");

  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* Ambient brand glow — subtle in both themes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(40,82,255,0.16),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(40,82,255,0.22),transparent_70%)]"
      />

      <FadeIn delay={0.05}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d8def0] bg-white px-4 py-1.5 text-sm text-[#3a4b7c] shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white/80">
          <Compass className="size-3.5 text-[#2852ff] dark:text-blue-400" />
          {t("badge")}
        </span>
      </FadeIn>

      <FadeIn delay={0.12}>
        <p className="mt-8 select-none bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] bg-clip-text text-[110px] font-semibold leading-none tracking-tight text-transparent md:text-[180px] dark:bg-[linear-gradient(93.74deg,#8fb0ff_0%,#2852ff_100%)]">
          404
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="mt-2 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-[#141b34] md:text-5xl dark:text-white">
          {t("heading")}
        </h1>
      </FadeIn>

      <FadeIn className="max-w-xl" delay={0.28}>
        <p className="mt-5 text-base text-[#5b6b8c] dark:text-white/60">
          {t("description")}
        </p>
      </FadeIn>

      <FadeIn delay={0.36}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link className={ctaButtonVariants({ variant: "primary" })} href="/">
            <Home className="size-4 shrink-0" aria-hidden="true" />
            {t("homeCta")}
          </Link>
          <Link
            className={ctaButtonVariants({ variant: "secondary" })}
            href="/pricing"
          >
            <MoveLeft className="size-4 shrink-0" aria-hidden="true" />
            {t("secondaryCta")}
          </Link>
        </div>
      </FadeIn>
    </main>
  );
};

export default NotFound;
