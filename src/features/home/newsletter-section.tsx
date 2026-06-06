"use client";

import { useTranslations } from "next-intl";
import type { FormEvent } from "react";
import { toast } from "sonner";

const roles = ["student", "teacher", "admin", "researcher", "other"] as const;

export function NewsletterSection() {
  const t = useTranslations("AboutNewsletter");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success(t("successMessage"));
  };

  return (
    <section className="px-4 pb-20 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div className="relative mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-xl border border-[#e3e8f5] bg-white px-6 py-10 shadow-[0_16px_38px_rgba(46,73,139,0.08)] sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-20 dark:border-transparent dark:bg-[#373764] dark:shadow-none">
        <div className="relative z-10">
          <h2 className="max-w-md text-4xl leading-tight font-medium tracking-tight text-[#141b34] sm:text-5xl dark:text-white">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#5b6b8c] dark:text-white/65">
            {t("description")}
          </p>
        </div>

        <form
          className="relative z-10 mt-10 flex flex-col gap-5 lg:mt-0"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-[#141b34] dark:text-white">
            {t("nameLabel")}
            <input
              className="h-12 rounded-lg border border-[#cbd5eb] bg-white px-4 text-base font-normal text-[#141b34] outline-none placeholder:text-[#7c86a0] focus:border-[#3479ff] dark:border-[#55578f] dark:bg-[#111a37] dark:text-white dark:placeholder:text-white/45"
              name="name"
              placeholder={t("namePlaceholder")}
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#141b34] dark:text-white">
            {t("roleLabel")}
            <select
              className="h-12 rounded-lg border border-[#cbd5eb] bg-white px-4 text-base font-normal text-[#141b34] outline-none focus:border-[#3479ff] dark:border-[#55578f] dark:bg-[#111a37] dark:text-white"
              defaultValue=""
              name="role"
              required
            >
              <option disabled value="">
                {t("rolePlaceholder")}
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {t(`role${role[0].toUpperCase()}${role.slice(1)}`)}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#141b34] dark:text-white">
            {t("emailLabel")}
            <input
              className="h-12 rounded-lg border border-[#cbd5eb] bg-white px-4 text-base font-normal text-[#141b34] outline-none placeholder:text-[#7c86a0] focus:border-[#3479ff] dark:border-[#55578f] dark:bg-[#111a37] dark:text-white dark:placeholder:text-white/45"
              name="email"
              placeholder={t("emailPlaceholder")}
              required
              type="email"
            />
          </label>

          <button
            className="mt-1 h-12 rounded-lg border border-[#3b6bff]/40 bg-[linear-gradient(93.74deg,#0A174C_0%,#1836B2_100%)] text-sm font-semibold text-white transition-opacity hover:opacity-95"
            type="submit"
          >
            {t("submitButton")}
          </button>
        </form>

        <div className="pointer-events-none absolute -bottom-28 left-12 h-48 w-20 -rotate-30 rounded-full bg-[#cdd9ff] opacity-70 dark:bg-[#27398c] dark:opacity-80" />
        <div className="pointer-events-none absolute -bottom-14 -left-12 size-32 rotate-45 rounded-2xl bg-[#aac0ff] opacity-60 dark:bg-[#6076a8] dark:opacity-75" />
      </div>
    </section>
  );
}
