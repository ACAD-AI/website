"use client";

import { ArrowUpRight, ChevronDown, Menu, Settings2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/features/language-switcher/language-switcher";
import { ThemeToggle } from "@/features/theme-toggle/theme-toggle";
import { Link } from "@/i18n/navigation";
import { Button } from "@/shared/components/ui/button";
import { mainNav } from "@/shared/config/nav";
import { CALENDAR_URL, ONBOARDING_URL } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 xl:flex 2xl:gap-2">
      {mainNav.map((item) => {
        if (item.items?.length) {
          return (
            <div
              className="group relative hover:cursor-pointer"
              key={item.label}
            >
              <button
                className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-[15px] font-medium text-[#141b34]/90 transition-colors hover:text-[#1836b2] dark:text-white/90 dark:hover:text-white"
                type="button"
              >
                {item.label}
                <ChevronDown className="size-4 text-[#4d73ff] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none  absolute left-0 top-full z-30 mt-0.5 -translate-y-2 opacity-0 transition duration-200 group-hover:cursor-pointer group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div
                  className={cn(
                    "min-w-full overflow-hidden rounded-b-2xl rounded-tr-2xl border border-[#e3e8f5] bg-white shadow-[0_24px_60px_rgba(46,73,139,0.18)] dark:border-white/10 dark:bg-[#040b26] dark:shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
                    item.menuClassName,
                  )}
                >
                  {item.items.map((subItem) => (
                    <Link
                      className="block border-b border-[#eef1f8] px-4 py-4 last:border-b-0 hover:bg-[#f4f7ff] dark:border-white/6 dark:hover:bg-white/4"
                      href={subItem.href}
                      key={subItem.href}
                    >
                      <div className="text-xs font-medium text-[#141b34] dark:text-white">
                        {subItem.label}
                      </div>
                      {subItem.description ? (
                        <p className="mt-1 text-[10px] leading-6 text-[#5b6b8c] dark:text-white/55">
                          {subItem.description}
                        </p>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            className="inline-flex h-11 items-center rounded-md px-4 text-[15px] font-medium text-[#141b34]/90 transition-colors hover:text-[#1836b2] dark:text-white/90 dark:hover:text-white"
            href={item.href ?? "/"}
            key={item.label}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (!open) {
      setActiveSection("");
    }
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-40 h-dvh w-full overflow-hidden xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        aria-hidden={!open}
        className={cn(
          "absolute inset-0 bg-[#141b34]/35 backdrop-blur-md transition-opacity duration-300 dark:bg-[#040b26]/82",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        type="button"
      />

      <aside
        aria-hidden={!open}
        className={cn(
          "absolute inset-y-0 right-0 z-50 flex h-full w-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f5f7ff_100%)] shadow-[-24px_0_80px_rgba(46,73,139,0.22)] transition-transform duration-300 sm:max-w-100 sm:border-l sm:border-[#dce1f0] dark:bg-[linear-gradient(180deg,#151c37_0%,#141b34_100%)] dark:shadow-[-24px_0_80px_rgba(0,0,0,0.5)] dark:sm:border-[#2a315c]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="relative z-10 flex items-center justify-between border-b border-[#dce1f0] px-5 py-5 sm:px-6 dark:border-white/8">
          <Link
            className="flex shrink-0 items-center gap-2.5 text-base font-semibold tracking-tight text-[#4166ff]"
            href="/"
            onClick={onClose}
          >
            <Image
              src="/images/svg/acad-ai-logo.svg"
              alt="Acadai Logo"
              width={100}
              height={100}
              className="dark:hidden"
            />
            <Image
              src="/images/svg/acad-ai-white-logo.svg"
              alt="Acadai Logo"
              width={100}
              height={100}
              className="hidden dark:block"
            />
          </Link>

          <Button
            aria-label="Close navigation menu"
            className="size-10 rounded-[20px] border border-[#d5dbea] bg-[#f4f6fb] text-[#141b34] hover:bg-[#e9edf7] dark:border-white/8 dark:bg-white/4 dark:text-white dark:hover:bg-white/8"
            onClick={onClose}
            size="icon"
            variant="ghost"
          >
            <X className="size-5" />
          </Button>
        </div>

        <div
          className={cn(
            "relative z-10 min-h-0 flex-1 overflow-y-auto px-5 py-5 transition-opacity duration-200 sm:px-6 sm:py-6",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold tracking-[0.32em] text-[#1836b2] uppercase sm:text-[11px] dark:text-[#86c7ed]">
                Explore
              </p>
              <p className="max-w-sm text-xs leading-5 text-[#5b6b8c] sm:text-sm sm:leading-6 dark:text-white/56">
                Navigate products, resources, and company pages.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {mainNav.map((item) => (
                <div
                  className="border-b border-[#dce1f0] pb-3 sm:pb-4 dark:border-white/8"
                  key={item.label}
                >
                  {item.items?.length ? (
                    <>
                      <button
                        aria-expanded={activeSection === item.label}
                        className="flex w-full items-center justify-between py-1 text-left"
                        onClick={() =>
                          setActiveSection((current) =>
                            current === item.label ? "" : item.label,
                          )
                        }
                        type="button"
                      >
                        <span className="text-lg font-semibold text-[#141b34] sm:text-xl dark:text-white">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "size-5 text-[#68718b] transition-transform duration-200 dark:text-white/60",
                            activeSection === item.label && "rotate-180",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "grid transition-all duration-300 ease-out",
                          activeSection === item.label
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1 pt-4">
                            {item.items.map((subItem) => (
                              <Link
                                className={cn(
                                  "block rounded-2xl px-4 py-3 transition-colors hover:bg-[#eef2fb] dark:hover:bg-white/5",
                                )}
                                href={subItem.href}
                                key={subItem.href}
                                onClick={onClose}
                              >
                                <div className="space-y-1">
                                  <div className="text-sm font-medium text-[#141b34] sm:text-base dark:text-white/92">
                                    {subItem.label}
                                  </div>
                                  {subItem.description ? (
                                    <p className="text-xs leading-5 text-[#5b6b8c] sm:text-sm sm:leading-6 dark:text-white/48">
                                      {subItem.description}
                                    </p>
                                  ) : null}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      className="flex items-center justify-between py-1 text-lg font-semibold text-[#141b34] sm:text-xl dark:text-white"
                      href={item.href ?? "/"}
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-[22px] border border-[#d5dbea] bg-white p-3 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-white/8 dark:bg-white/3 dark:shadow-none">
              <div className="flex items-start gap-3 px-1 pb-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e9efff] text-[#1836b2] dark:bg-[#2852ff]/15 dark:text-[#86c7ed]">
                  <Settings2 aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#141b34] sm:text-sm dark:text-white">
                    Preferences
                  </p>
                  <p className="mt-0.5 text-[11px] leading-4 text-[#5b6b8c] sm:text-xs dark:text-white/48">
                    Personalize your experience.
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-y border-[#e3e8f5] py-3 dark:border-white/8">
                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#f5f7ff] px-3 py-2 dark:bg-[#111832]">
                  <div>
                    <p className="text-xs font-medium text-[#141b34] dark:text-white">
                      Language
                    </p>
                    <p className="text-[10px] text-[#7c86a0] dark:text-white/40">
                      Display language
                    </p>
                  </div>
                  <LanguageSwitcher
                    buttonClassName="h-9 min-w-24 justify-between rounded-lg bg-white px-3 text-xs shadow-sm dark:bg-white/5"
                    menuClassName="right-0 min-w-32"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#f5f7ff] px-3 py-2 dark:bg-[#111832]">
                  <div>
                    <p className="text-xs font-medium text-[#141b34] dark:text-white">
                      Appearance
                    </p>
                    <p className="text-[10px] text-[#7c86a0] dark:text-white/40">
                      Light or dark mode
                    </p>
                  </div>
                  <ThemeToggle className="shrink-0" />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#1836b2] px-3 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(24,54,178,0.22)] transition-colors hover:bg-[#244ac6]"
                  href={ONBOARDING_URL}
                  onClick={onClose}
                >
                  Sign Up
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
                <Button
                  asChild
                  className="h-10 rounded-xl border border-[#cfd5e7] bg-transparent px-3 text-xs font-semibold text-[#141b34] hover:bg-[#f4f6fb] dark:border-white/10 dark:text-white dark:hover:bg-white/6"
                  variant="ghost"
                >
                  <a
                    href={CALENDAR_URL}
                    onClick={onClose}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Request Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 text-[#141b34] backdrop-blur-md dark:bg-[#141B34]/95 dark:text-white">
      <div className="border-b border-[#dce1f0] dark:border-white/10">
        <div className="mx-auto flex justify-between h-18 w-full  items-center gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link
            className="flex shrink-0 items-center gap-2.5 text-base font-semibold tracking-tight text-[#4166ff] sm:gap-3 sm:text-lg"
            href="/"
          >
            <Image
              src="/images/svg/acad-ai-logo.svg"
              alt="Acadai Logo"
              width={100}
              height={100}
              className="dark:hidden"
            />
            <Image
              src="/images/svg/acad-ai-white-logo.svg"
              alt="Acadai Logo"
              width={100}
              height={100}
              className="hidden dark:block"
            />
          </Link>

          <div className="hidden xl:block">
            <DesktopNav />
          </div>

          <div className=" hidden items-center gap-2 sm:flex xl:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              asChild
              className="hidden h-11 rounded-xl bg-[#2852ff] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(40,82,255,0.3)] hover:bg-[#3c63ff] md:inline-flex"
            >
              <a href={CALENDAR_URL} rel="noreferrer" target="_blank">
                Request Demo
              </a>
            </Button>
          </div>

          <div className=" hidden items-center gap-3 xl:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              className="inline-flex h-11 items-center rounded-md px-4 text-sm font-semibold text-[#141b34] transition-colors hover:text-[#1836b2] dark:text-white dark:hover:text-white/80"
              href={ONBOARDING_URL}
            >
              Sign Up
            </Link>
            <Button
              asChild
              className="h-12 rounded-xl bg-[#1836B2] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(24,54,178,0.3)] transition-colors hover:bg-[#2852ff] active:bg-[#3c63ff]"
            >
              <a href={CALENDAR_URL} rel="noreferrer" target="_blank">
                Request a Demo
              </a>
            </Button>
          </div>

          <Button
            aria-label="Open navigation menu"
            className="ml-auto size-11 rounded-xl border border-[#d5dbea] bg-[#f4f6fb] text-[#141b34] hover:bg-[#e9edf7] sm:ml-0 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 xl:hidden"
            onClick={() => setMobileOpen(true)}
            size="icon"
            variant="ghost"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Navbar;
