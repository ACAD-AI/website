import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

import { siteConfig } from "./site";

/**
 * Resolved, trailing-slash-free site origin. Override per-environment with
 * NEXT_PUBLIC_SITE_URL (e.g. preview deploys); falls back to the canonical URL.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url)
  .trim()
  .replace(/\/+$/, "");

/** Open Graph locale codes keyed by our app locales. */
const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
};

/** Public social / brand profiles — also used for Organization sameAs. */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/acad-ai/",
  youtube: "https://www.youtube.com/@acad__ai",
  tiktok: "https://www.tiktok.com/@acad__ai",
  whatsapp: "https://wa.me/message/DNQ3QF2TRHI7J1",
  medium: "https://acadai.substack.com",
} as const;

export const CONTACT = {
  email: "hello@acadai.co",
  phone: "+234 814 660 4215",
  phoneE164: "+2348146604215",
} as const;

/**
 * Broad keyword bank. Search engines largely ignore the meta keywords tag, but
 * it is included per request and reused to seed per-page keyword sets. Real
 * ranking signals live in titles, descriptions, headings, and structured data.
 */
export const SITE_KEYWORDS: string[] = [
  "Acad AI",
  "AI assessment platform",
  "AI exam grading",
  "automated grading software",
  "AI grading tool",
  "AI marking",
  "automated marking",
  "AI essay grading",
  "rubric grading",
  "custom rubrics",
  "online exam platform",
  "exam automation",
  "digital assessments",
  "assessment software",
  "AI for education",
  "AI in education",
  "edtech Africa",
  "education AI Africa",
  "African AI company",
  "Nigeria edtech",
  "teacher grading tool",
  "lecturer grading",
  "instant feedback",
  "formative assessment",
  "summative assessment",
  "secondary school assessment",
  "university assessment software",
  "institution assessment platform",
  "audit-ready results",
  "webcam proctoring",
  "online proctoring",
  "exam security",
  "report card generation",
  "AI study mode",
  "flashcards generator",
  "practice quizzes",
  "exam preparation",
  "AI tutor",
  "study tool for students",
  "GPA improvement",
  "mock exams",
  "term exams",
  "case study grading",
  "theory question grading",
  "mathematics grading",
  "multiple choice grading",
  "ODL assessment",
  "NUC compliant testing",
  "corporate training assessment",
  "learning outcomes",
  "SDG4",
];

/** Builds the absolute URL for a path under a given locale (localePrefix: as-needed). */
export function localizedPath(path: string, locale: string): string {
  const suffix = path === "/" ? "" : path;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${suffix}`;
}

/** hreflang map (all locales + x-default) for the alternates block. */
function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedPath(path, locale);
  }
  languages["x-default"] = localizedPath(path, routing.defaultLocale);
  return languages;
}

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

/**
 * Per-page SEO source of truth. Add a route's `path` here and feed it to
 * `buildMetadata` from that route's `generateMetadata`.
 */
export const PAGE_SEO = {
  home: {
    path: "/",
    title:
      "Acad AI — AI Assessment & Exam Grading Platform for Education in Africa",
    description:
      "Acad AI is the AI assessment platform that helps institutions digitize exams, lets educators grade quizzes and exams automatically with instant feedback, and helps students study smarter. Assessments reimagined, end to end.",
  },
  institutions: {
    path: "/solutions/institutions",
    title: "For Institutions — Digitized, Audit-Ready AI Assessments",
    description:
      "The gold standard for institutional assessments. 100% digitized, fully audit-ready, and scalable for 100 or 100,000 learners. Move from manual marking to AI-powered precision in minutes.",
    keywords: [
      "institution assessment platform",
      "audit-ready results",
      "online exam platform",
      "report card generation",
      "ODL assessment",
      "NUC compliant testing",
      "corporate training assessment",
      "exam security",
      "AI exam grading",
    ],
  },
  educators: {
    path: "/solutions/educators",
    title: "For Educators — AI Grading for Your Quizzes & Exams",
    description:
      "Save hours every week. Acad AI grades your quizzes and exams from your own marking guide and returns personalized feedback to your students. Trusted by 300+ lecturers.",
    keywords: [
      "AI grading tool",
      "teacher grading tool",
      "lecturer grading",
      "AI essay grading",
      "rubric grading",
      "custom rubrics",
      "automated marking",
      "instant feedback",
    ],
  },
  students: {
    path: "/solutions/students",
    title: "For Students — Study Like the Top 1% with AI",
    description:
      "Join the top 1% of students. Get personalized feedback on every exam, turn your notes into flashcards and practice quizzes, and study smarter with Acad AI's AI study mode.",
    keywords: [
      "AI study mode",
      "flashcards generator",
      "practice quizzes",
      "exam preparation",
      "study tool for students",
      "GPA improvement",
      "AI tutor",
      "instant feedback",
    ],
  },
  events: {
    path: "/resources/events",
    title: "Events — Acad AI Talks, Workshops & Recordings",
    description:
      "Upcoming and past Acad AI events: talks, workshops, and recordings on AI for education, assessment, and the future of grading in Africa.",
    keywords: ["Acad AI events", "AI education events", "edtech webinars"],
  },
  blog: {
    path: "/resources/blog",
    title: "Blog — AI, Assessment & Education Insights",
    description:
      "Tutorials, product updates, and insights on AI for education, automated grading, and assessment from the Acad AI team.",
    keywords: ["AI education blog", "edtech blog", "AI grading insights"],
  },
  faq: {
    path: "/resources/faq",
    title: "FAQs — How Acad AI Works",
    description:
      "Answers to common questions about Acad AI: how AI grading works, supported question types, accuracy, data privacy, security, pricing, and onboarding.",
    keywords: [
      "Acad AI FAQ",
      "AI grading questions",
      "how AI grading works",
      "exam grading accuracy",
    ],
  },
  about: {
    path: "/company/about",
    title: "About — Revolutionizing Education in Africa with AI",
    description:
      "Acad AI is a pioneering African AI company on a mission to improve the lives of educators and learners, one assessment at a time. Discover our vision, mission, story, values, and team.",
    keywords: [
      "African AI company",
      "AI in education",
      "education AI Africa",
      "Acad AI story",
      "SDG4",
    ],
  },
  reviews: {
    path: "/company/reviews",
    title: "Reviews — Our Wall of Love",
    description:
      "See what students, educators, and institutional admins say about Acad AI. Real reviews from our wall of love.",
    keywords: ["Acad AI reviews", "Acad AI testimonials", "wall of love"],
  },
  contact: {
    path: "/company/contact",
    title: "Contact — Talk to Acad AI or Book a Demo",
    description:
      "Get in touch with Acad AI. Ask a general question or request a personalized demo for your school, university, or training organization.",
    keywords: ["contact Acad AI", "book a demo", "request a demo"],
  },
  pricing: {
    path: "/pricing",
    title: "Pricing — Get Free Credits on Signup",
    description:
      "Simple, transparent Acad AI pricing. Get free credits on signup with no card needed, or contact sales for institutional plans.",
    keywords: [
      "Acad AI pricing",
      "AI grading pricing",
      "assessment platform pricing",
    ],
  },
  terms: {
    path: "/terms",
    title: "Terms and Pricing Policy — Acad AI",
    description:
      "Read Acad AI's pricing policy, acceptable use terms, contact details, and service conditions.",
    keywords: ["Acad AI terms", "Acad AI pricing policy", "terms of service"],
  },
} satisfies Record<string, PageSeo>;

/** Composes a full Next Metadata object for a page + locale. */
export function buildMetadata(page: PageSeo, locale: string): Metadata {
  const canonical = localizedPath(page.path, locale);
  const isHome = page.path === "/";
  const ogTitle = isHome ? page.title : `${page.title} | ${siteConfig.name}`;

  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    keywords: [...(page.keywords ?? []), ...SITE_KEYWORDS],
    alternates: {
      canonical,
      languages: languageAlternates(page.path),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: canonical,
      title: ogTitle,
      description: page.description,
      locale: OG_LOCALE[locale] ?? "en_US",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}

/** Organization structured data (rendered once, globally). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: "Acad AI",
    url: SITE_URL,
    logo: `${SITE_URL}/images/svg/acad-ai-logo.svg`,
    description: siteConfig.description,
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    foundingLocation: "Nigeria",
    areaServed: "Africa",
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.youtube,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.whatsapp,
      SOCIAL_LINKS.medium,
    ],
  };
}

/** WebSite structured data (rendered once, globally). */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: [...routing.locales],
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

/** FAQPage structured data from a list of Q&A pairs. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
