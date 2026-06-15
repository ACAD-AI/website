export type ReviewAudience = "students" | "educators" | "admins";

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  organization: string;
  featured?: boolean;
  mediaPlaceholder?: boolean;
}

export const reviewAudienceLabels: Record<ReviewAudience, string> = {
  students: "Students",
  educators: "Educators",
  admins: "Admins",
};
