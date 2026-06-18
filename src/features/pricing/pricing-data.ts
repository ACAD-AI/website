import { ONBOARDING_URL } from "@/shared/config/site";

import type { PricingAudience, PricingAudienceContent } from "./pricing-types";

export const pricingTabLabels: Record<PricingAudience, string> = {
  educators: "Educators",
  institutions: "Institution",
  students: "Students",
};

export const pricingAudienceOrder: PricingAudience[] = [
  "educators",
  "students",
  "institutions",
];

export const pricingContent: Record<PricingAudience, PricingAudienceContent> = {
  educators: {
    audience: "educators",
    bullets: [
      "Generate up to 100 questions instantly from your lesson notes.",
      "Administer an exam to a student.",
    ],
    ctaHref: ONBOARDING_URL,
    ctaLabel: "Get Free Credits on Signup. No Card Needed",
    description:
      "We use a credit system to make it easier and more cost-effective for teachers to generate and grade exams using AI.",
    infoDescription:
      "Each credit is a flexible unit that can be used for any of these actions:",
    infoTitle: "What is one credit?",
    plans: [
      {
        badge: "Basic",
        credits: "50 Credits",
        ctaHref: ONBOARDING_URL,
        ctaLabel: "Get started",
        description: "Perfect for new lecturers",
        id: "educators-basic",
        price: "₦2,500",
        unitPrice: "₦ 50 per credit",
      },
      {
        badge: "Plus",
        credits: "250 Credits",
        ctaHref: ONBOARDING_URL,
        ctaLabel: "Get started",
        description: "Standard choice for active lecturers",
        id: "educators-plus",
        price: "₦10,000",
        unitPrice: "₦ 40 per credit",
      },
      {
        badge: "Pro",
        credits: "1000 Credits",
        ctaHref: ONBOARDING_URL,
        ctaLabel: "Get started",
        description: "For lectures with multiple courses",
        id: "educators-pro",
        price: "₦30,000",
        unitPrice: "₦ 30 per credit",
      },
    ],
    title: "Pay for what you use",
  },
  institutions: {
    audience: "institutions",
    ctaHref: "/company/contact",
    ctaLabel: "Contact Sales",
    description:
      "Get free pilot usage for one semester and a custom quote based on your school size.",
    title: "For Schools & Institutions",
  },
  students: {
    audience: "students",
    bullets: [
      "Generate up to 60 flashcards instantly from one material or text.",
      "Generate up to 100 questions in a practice quiz from one material or text.",
      "Grade and review your practice quiz",
    ],
    ctaHref: ONBOARDING_URL,
    ctaLabel: "Get Free Credits on Signup. No Card Needed",
    description:
      "We use a credit system to make it easier and more cost-effective for students to generate flashcards and practice quizzes with AI.",
    infoDescription:
      "Each credit is a flexible unit that can be used for any of these actions:",
    infoTitle: "What is one credit?",
    plans: [
      {
        credits: "5 Credits",
        ctaHref: ONBOARDING_URL,
        ctaLabel: "Get started",
        description: "Get as much credit as you require",
        id: "students-credits",
        price: "₦250",
        unitPrice: "₦ 50 per credit",
      },
    ],
    title: "Pay for what you use",
  },
};
