"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/features/language-switcher/language-switcher";
import { ThemeToggle } from "@/features/theme-toggle/theme-toggle";
import { Link } from "@/i18n/navigation";
import { Button } from "@/shared/components/ui/button";
import { mainNav } from "@/shared/config/nav";
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
          "absolute inset-0 bg-[#040b26]/82 backdrop-blur-md transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        type="button"
      />

      <aside
        aria-hidden={!open}
        className={cn(
          "absolute inset-y-0 right-0 z-50 flex h-full w-full flex-col bg-[linear-gradient(180deg,#151c37_0%,#141b34_100%)] shadow-[-24px_0_80px_rgba(0,0,0,0.5)] transition-transform duration-300 sm:max-w-100 sm:border-l sm:border-[#2a315c]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="relative z-10 flex items-center justify-between border-b border-white/8 px-5 py-5 sm:px-6">
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
            />
          </Link>

          <Button
            aria-label="Close navigation menu"
            className="size-10 rounded-[20px] border border-white/8 bg-white/4 text-white hover:bg-white/8"
            onClick={onClose}
            size="icon"
            variant="ghost"
          >
            <X className="size-5" />
          </Button>
        </div>

        <div
          className={cn(
            "relative z-10 min-h-0 flex-1 overflow-y-auto px-5 py-6 transition-opacity duration-200 sm:px-6",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold tracking-[0.32em] text-[#86c7ed] uppercase">
                Explore
              </p>
              <p className="max-w-sm text-sm leading-6 text-white/56">
                Navigate products, resources, and company pages.
              </p>
            </div>

            <div className="space-y-4">
              {mainNav.map((item) => (
                <div className="border-b border-white/8 pb-4" key={item.label}>
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
                        <span className="text-xl font-semibold text-white">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "size-5 text-white/60 transition-transform duration-200",
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
                                  "block rounded-2xl px-4 py-3 transition-colors hover:bg-white/5",
                                )}
                                href={subItem.href}
                                key={subItem.href}
                                onClick={onClose}
                              >
                                <div className="space-y-1">
                                  <div className="text-base font-medium text-white/92">
                                    {subItem.label}
                                  </div>
                                  {subItem.description ? (
                                    <p className="text-sm leading-6 text-white/48">
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
                      className="flex items-center justify-between py-1 text-xl font-semibold text-white"
                      href={item.href ?? "/"}
                      onClick={onClose}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-[24px] border border-white/8 bg-white/3 p-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-white">Preferences</p>
                <p className="text-sm leading-6 text-white/48">
                  Choose your language and access your account.
                </p>
              </div>

              <LanguageSwitcher
                buttonClassName="w-full justify-between"
                className="w-full"
                menuClassName="left-0 right-0 min-w-0"
              />
              <ThemeToggle className="w-full justify-center" />

              <div className="flex flex-col gap-3">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/6"
                  href="https://www.acadai.co/onboarding"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={onClose}
                >
                  Sign Up
                </a>
                <Button
                  asChild
                  className="h-12 rounded-xl bg-[#1836B2] px-5 text-sm text-white font-semibold"
                >
                  <Link href="/request-demo" onClick={onClose}>
                    Request a Demo
                  </Link>
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
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </div>

          <div className=" hidden items-center gap-3 xl:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              className="inline-flex h-11 items-center rounded-md px-4 text-sm font-semibold text-[#141b34] transition-colors hover:text-[#1836b2] dark:text-white dark:hover:text-white/80"
              href="/signup"
            >
              Sign Up
            </Link>
            <Button
              asChild
              className="h-12 rounded-xl bg-[#1836B2] px-6 text-sm font-semibold text-white"
            >
              <Link href="/request-demo">Request a Demo</Link>
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
