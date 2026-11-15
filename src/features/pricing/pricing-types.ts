export type PricingAudience = "educators" | "institutions" | "students";

export interface PricingPlan {
  id: string;
  credits: string;
  description: string;
  price: string;
  unitPrice?: string;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface PricingAudienceContent {
  audience: PricingAudience;
  title: string;
  description: string;
  plans?: PricingPlan[];
  infoTitle?: string;
  infoDescription?: string;
  bullets?: string[];
  ctaLabel: string;
  ctaHref: string;
}

export type StudentCurrency = "NGN" | "USD";

export interface StudentPlanPrice {
  /** Weekly price shown on the card, e.g. "₦799". */
  weekly: string;
  /** Optional original weekly price shown struck through. */
  original?: string;
}

export interface StudentPlan {
  id: string;
  name: string;
  billing: string;
  note?: string;
  badge?: string;
  badgeTone?: "primary" | "success";
  /** Prices per currency. A currency appears in the toggle only if every plan has it. */
  prices: Partial<Record<StudentCurrency, StudentPlanPrice>>;
}

export interface StudentPricingContent {
  title: string;
  description: string;
  plans: StudentPlan[];
  defaultPlanId: string;
  featuresTitle: string;
  features: string[];
  ctaHref: string;
  footnote: string;
}
