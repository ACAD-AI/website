export type NavChildItem = {
  label: string;
  description?: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  items?: NavChildItem[];
  menuClassName?: string;
};

export const mainNav: NavItem[] = [
  {
    label: "Solutions",
    menuClassName: "min-w-[320px]",
    items: [
      {
        label: "For Institutions",
        description: "100% digitized, audit-ready assessments.",
        href: "/solutions/institutions",
      },
      {
        label: "For Educators",
        description: "AI grading for your quizzes and exams.",
        href: "/solutions/educators",
      },
      {
        label: "For Students",
        description: "Study like the top 1%.",
        href: "/solutions/students",
      },
    ],
  },
  {
    label: "Resources",
    menuClassName: "min-w-[120px]",
    items: [
      {
        label: "Events",
        href: "/resources/events",
      },
      {
        label: "Blog",
        href: "/resources/blog",
      },
      {
        label: "FAQs",
        href: "/resources/faq",
      },
    ],
  },
  {
    label: "Company",
    menuClassName: "min-w-[120px]",
    items: [
      {
        label: "About",
        href: "/company/about",
      },
      {
        label: "Reviews",
        href: "/company/reviews",
      },
      {
        label: "Contact",
        href: "/company/contact",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];
