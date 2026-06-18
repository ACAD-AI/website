import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { CONTACT, SOCIAL_LINKS } from "@/shared/config/seo";
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
  {
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    iconSrc: "/icons/social/linkedin.svg",
  },
  {
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    iconSrc: "/icons/social/youtube.svg",
  },
  {
    label: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    iconSrc: "/icons/social/tiktok.svg",
  },
  {
    label: "WhatsApp",
    href: SOCIAL_LINKS.whatsapp,
    iconSrc: "/icons/social/whatsapp.svg",
  },
] as const;

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-[radial-gradient(circle_at_top_left,rgba(40,82,255,0.08),transparent_30%),linear-gradient(135deg,#f4f6fd_0%,#eef1fb_55%,#f4f6fd_100%)] text-[#141b34] dark:bg-[radial-gradient(circle_at_top_left,rgba(36,93,255,0.22),transparent_28%),linear-gradient(135deg,#1a2246_0%,#111833_48%,#192142_100%)] dark:text-white",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-330 flex-col gap-14 px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr] lg:gap-10">
          <div className="max-w-md space-y-8">
            <Link className="inline-flex items-center" href="/">
              <Image
                src="/images/svg/acad-ai-logo.svg"
                alt="ACAD AI"
                width={213}
                height={48}
                className="h-12 w-auto dark:hidden"
              />
              <Image
                src="/images/svg/acad-ai-white-logo.svg"
                alt="ACAD AI"
                width={213}
                height={48}
                className="hidden h-12 w-auto dark:block"
              />
            </Link>

            <p className="max-w-sm text-[1.05rem] leading-10 text-[#5b6b8c] dark:text-white/68">
              Pioneering AI for Education in Africa.
            </p>

            <div className="space-y-2 text-sm leading-6 text-[#5b6b8c] dark:text-white/68">
              <a
                className="block transition-colors hover:text-[#1836b2] dark:hover:text-white"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
              <a
                className="block transition-colors hover:text-[#1836b2] dark:hover:text-white"
                href={`tel:${CONTACT.phoneE164}`}
              >
                {CONTACT.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href, iconSrc }) => (
                <a
                  aria-label={label}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-[#dce1f0] bg-white text-[#3a4b7c] transition-colors hover:bg-[#eef1fb] hover:text-[#1836b2] dark:border-white/8 dark:bg-[#101733] dark:text-white/88 dark:hover:bg-white/10 dark:hover:text-white"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span
                    aria-hidden="true"
                    className="size-5 bg-current"
                    style={{
                      WebkitMask: `url(${iconSrc}) center / contain no-repeat`,
                      mask: `url(${iconSrc}) center / contain no-repeat`,
                    }}
                  />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div className="space-y-5" key={section.title}>
              <h2 className="text-xl font-semibold text-[#141b34] dark:text-white">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <Link
                    className="text-[1.05rem] text-[#5b6b8c] transition-colors hover:text-[#1836b2] dark:text-white/66 dark:hover:text-white"
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

        <div className="space-y-6 border-t border-[#dce1f0] pt-7 text-sm text-[#7c86a0] lg:space-y-0 lg:pt-8 dark:border-white/18 dark:text-white/58 dark:lg:border-white/16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p>
              &copy; 2026 Acad AI. Built with love in Africa, for the world.
            </p>
            <p className="lg:text-right">
              <Link href="/terms#pricing-policy">Pricing Policy</Link>
              {" · "}
              <Link href="/terms#terms-and-conditions">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
