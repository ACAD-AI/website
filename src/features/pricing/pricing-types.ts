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
