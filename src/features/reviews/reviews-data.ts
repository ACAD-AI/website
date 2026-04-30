export type ReviewAudience = "students" | "educators" | "admins";

export interface ReviewItem {
  id: string;
  audience: ReviewAudience;
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

export const reviewItems: ReviewItem[] = [
  {
    id: "students-1",
    audience: "students",
    quote:
      '"I used to dread marking 200 essays. Now it\'s a 15-minute review."',
    author: "Dr. Adaeze O.",
    organization: "OAU",
  },
  {
    id: "students-2",
    audience: "students",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sit lacus auctor adipiscing convallis dignissim arcu laoreet in vulputate. In fringilla nulla tellus mattis.",
    author: "Dr. Adaeze O.",
    organization: "OAU",
    featured: true,
  },
  {
    id: "students-3",
    audience: "students",
    quote:
      '"I used to dread marking 200 essays. Now it\'s a 15-minute review."',
    author: "Dr. Adaeze O.",
    organization: "OAU",
  },
  {
    id: "students-4",
    audience: "students",
    quote: "",
    author: "Dr. Adaeze O.",
    organization: "OAU",
    mediaPlaceholder: true,
  },
  {
    id: "students-5",
    audience: "students",
    quote:
      '"I used to dread marking 200 essays. Now it\'s a 15-minute review."',
    author: "Dr. Adaeze O.",
    organization: "OAU",
  },
  {
    id: "students-6",
    audience: "students",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sit lacus auctor adipiscing convallis dignissim arcu laoreet in vulputate. In fringilla nulla tellus mattis. Condimentum arcu placerat pretium praesent ullamcorper.",
    author: "Dr. Adaeze O.",
    organization: "OAU",
  },
  {
    id: "students-7",
    audience: "students",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sit lacus auctor adipiscing convallis dignissim arcu laoreet in vulputate. In fringilla nulla tellus mattis. Condimentum arcu placerat pretium praesent ullamcorper.",
    author: "Dr. Adaeze O.",
    organization: "OAU",
  },
  {
    id: "students-8",
    audience: "students",
    quote: "",
    author: "Dr. Adaeze O.",
    organization: "OAU",
    mediaPlaceholder: true,
  },
  {
    id: "students-9",
    audience: "students",
    quote: "",
    author: "Dr. Adaeze O.",
    organization: "OAU",
    mediaPlaceholder: true,
  },
  {
    id: "educators-1",
    audience: "educators",
    quote:
      '"Acad AI helps me give faster, more consistent feedback without losing my own voice as an educator."',
    author: "Prof. Chiamaka E.",
    organization: "UNILAG",
    featured: true,
  },
  {
    id: "educators-2",
    audience: "educators",
    quote:
      "Rubric-based review now feels practical at scale. My team spends less time on repetitive checks and more time mentoring students.",
    author: "Dr. Tunde A.",
    organization: "Babcock University",
  },
  {
    id: "educators-3",
    audience: "educators",
    quote: "",
    author: "Ms. Gloria N.",
    organization: "Lead City University",
    mediaPlaceholder: true,
  },
  {
    id: "admins-1",
    audience: "admins",
    quote:
      '"We finally have a cleaner audit trail around assessments, moderation, and review workflows across departments."',
    author: "Registrar Team",
    organization: "Private University",
    featured: true,
  },
  {
    id: "admins-2",
    audience: "admins",
    quote:
      "The rollout was straightforward, and staff adoption improved once they saw how much time the platform saved during exam periods.",
    author: "Assessment Office",
    organization: "Covenant University",
  },
  {
    id: "admins-3",
    audience: "admins",
    quote: "",
    author: "Quality Assurance",
    organization: "Institutional Team",
    mediaPlaceholder: true,
  },
];
