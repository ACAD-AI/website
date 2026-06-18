import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import "../globals.css";
import { hasLocale, routing } from "@/i18n/routing";
import { Footer, Navbar } from "@/shared";
import { ThemeProvider } from "@/shared/components/providers/theme-provider";
import { Toaster } from "@/shared/components/ui/sonner";
import {
  organizationJsonLd,
  PAGE_SEO,
  SITE_KEYWORDS,
  SITE_URL,
  websiteJsonLd,
} from "@/shared/config/seo";
import { siteConfig } from "@/shared/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: PAGE_SEO.home.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: SITE_KEYWORDS,
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "education",
    formatDetection: { telephone: true, email: true },
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/images/svg/acad-ai-logo.svg",
      shortcut: "/images/svg/acad-ai-logo.svg",
      apple: "/images/svg/acad-ai-logo.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: SITE_URL,
      title: PAGE_SEO.home.title,
      description: siteConfig.description,
      locale: "en_US",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_SEO.home.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@acad__ai",
      site: "@acad__ai",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} min-h-screen font-sans antialiased`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is generated from trusted, static config.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is generated from trusted, static config.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="site-shell min-h-screen bg-background text-foreground">
              <Navbar />
              {children}
              <Footer />
            </div>
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
