"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { LanguageSwitcher } from "@/features/language-switcher/language-switcher";
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
                className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
                type="button"
              >
                {item.label}
                <ChevronDown className="size-4 text-[#4d73ff] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none  absolute left-0 top-full z-30 mt-0.5 -translate-y-2 opacity-0 transition duration-200 group-hover:cursor-pointer group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div
                  className={cn(
                    "min-w-full overflow-hidden rounded-b-2xl rounded-tr-2xl border border-white/10 bg-[#040b26] shadow-[0_24px_60px_rgba(0,0,0,0.45)]",
                    item.menuClassName,
                  )}
                >
                  {item.items.map((subItem) => (
                    <Link
                      className="block border-b border-white/6 px-4 py-4 last:border-b-0 hover:bg-white/4"
                      href={subItem.href}
                      key={subItem.href}
                    >
                      <div className="text-xs font-medium text-white">
                        {subItem.label}
                      </div>
                      {subItem.description ? (
                        <p className="mt-1 text-[10px] leading-6 text-white/55">
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
            className="inline-flex h-11 items-center rounded-md px-4 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
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
  return (
    <div
      className={cn(
        "overflow-hidden border-t border-white/10 bg-[#171f40] transition-all duration-300 xl:hidden",
        open ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <div className="space-y-6 overflow-y-auto px-4 py-5 sm:px-6">
        <div className="space-y-4">
          {mainNav.map((item) => (
            <div className="space-y-3" key={item.label}>
              {item.href ? (
                <Link
                  className="block text-base font-medium text-white"
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                <p className="text-base font-medium text-white">{item.label}</p>
              )}

              {item.items?.length ? (
                <div className="space-y-2 border-l border-white/10 pl-4">
                  {item.items.map((subItem) => (
                    <Link
                      className="block py-1"
                      href={subItem.href}
                      key={subItem.href}
                      onClick={onClose}
                    >
                      <div className="text-sm font-medium text-white/90">
                        {subItem.label}
                      </div>
                      {subItem.description ? (
                        <p className="mt-1 text-sm leading-5 text-white/55">
                          {subItem.description}
                        </p>
                      ) : null}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <LanguageSwitcher
            buttonClassName="w-full justify-between"
            className="w-full"
            menuClassName="left-0 right-0 min-w-0"
          />
          <Link
            className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/10 px-4 text-sm font-semibold text-white"
            href="/signup"
            onClick={onClose}
          >
            Sign Up
          </Link>
          <Button
            asChild
            className="h-12 rounded-xl bg-[#2852ff] px-5 text-sm font-semibold text-white hover:bg-[#3c63ff]"
          >
            <Link href="/request-demo" onClick={onClose}>
              Request a Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#141B34] text-white backdrop-blur-md">
      <div className="border-b border-white/10">
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
            <LanguageSwitcher />
            <Button
              asChild
              className="hidden h-11 rounded-xl bg-[#2852ff] px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(40,82,255,0.3)] hover:bg-[#3c63ff] md:inline-flex"
            >
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </div>

          <div className=" hidden items-center gap-3 xl:flex">
            <LanguageSwitcher />
            <Link
              className="inline-flex h-11 items-center rounded-md px-4 text-sm font-semibold text-white transition-colors hover:text-white/80"
              href="/signup"
            >
              Sign Up
            </Link>
            <Button
              asChild
              className="h-12 rounded-xl bg-[#2852ff] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(40,82,255,0.35)] hover:bg-[#3c63ff]"
            >
              <Link href="/request-demo">Request a Demo</Link>
            </Button>
          </div>

          <Button
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="ml-auto size-11 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 sm:ml-0 xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Navbar;
