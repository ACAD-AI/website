import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/shared/lib/utils";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "For Institutions", href: "/solutions/institutions" },
      { label: "For Educators", href: "/solutions/educators" },
      { label: "For Students", href: "/solutions/students" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Events", href: "/resources/events" },
      { label: "FAQs", href: "/resources/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Reviews", href: "/company/reviews" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
] as const;

const socialLinks = [
  { label: "X", href: "", shortLabel: "X" },
  { label: "LinkedIn", href: "", shortLabel: "in" },
  { label: "Instagram", href: "", shortLabel: "ig" },
  { label: "GitHub", href: "", shortLabel: "gh" },
] as const;

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-[radial-gradient(circle_at_top_left,rgba(36,93,255,0.22),transparent_28%),linear-gradient(135deg,#1a2246_0%,#111833_48%,#192142_100%)] text-white",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-330 flex-col gap-14 px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr] lg:gap-10">
          <div className="max-w-md space-y-8">
            <Link className="inline-flex items-center" href="/">
              <Image
                src="/images/svg/acad-ai-white-logo.svg"
                alt="ACAD AI"
                width={213}
                height={48}
                className="h-12 w-auto"
              />
            </Link>

            <p className="max-w-sm text-[1.05rem] leading-10 text-white/68">
              Pioneering AI for Education in Africa. We exist to improve the
              lives of educators and learners one assessment at a time.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, shortLabel }) => (
                <a
                  aria-label={label}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-white/8 bg-[#101733] text-white/88 transition-colors hover:bg-white/10 hover:text-white"
                  href={href || "#"}
                  key={label}
                >
                  <span className="text-base font-medium uppercase tracking-wide">
                    {shortLabel}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div className="space-y-5" key={section.title}>
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <Link
                    className="text-[1.05rem] text-white/66 transition-colors hover:text-white"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 border-t border-white/18 pt-7 text-sm text-white/58 lg:space-y-0 lg:border-white/16 lg:pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p>
              &copy; 2026 Acad AI. Built with love in Africa, for the world.
            </p>
            <p className="lg:text-right">
              Where every assessment becomes a moment of learning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
