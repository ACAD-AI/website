export interface FeaturedArticle {
  author: string;
  date: string;
  href: string;
  imagePosition: string;
  imageSrc: string;
  publication: string;
  title: string;
  treatment?: string;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    publication: "EDUSIGHT",
    author: "Akeem Alao",
    date: "July 24, 2025",
    title:
      "How Africa's first AI grading engine emerged from a Nigerian undergraduate research project.",
    href: "/resources/blog",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-center",
  },
  {
    publication: "EduTimes Africa",
    author: "Folaranmi Ajayi",
    date: "July 26, 2025",
    title:
      "Anjolaoluwa Ajayi - Nigeria's “Data Princess” changing the game in AI, education through Acad AI.",
    href: "/resources/blog",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-right",
    treatment: "scale-110 saturate-75",
  },
  {
    publication: "EduTimes Africa",
    author: "EduTimesAfrica",
    date: "September 26, 2025",
    title:
      "The Next Chapter: Where Will You Be in Five Years? - With Anjolaoluwa Ajayi (The Data Princess)",
    href: "/resources/blog",
    imageSrc: "/images/numbers-story-educator.png",
    imagePosition: "object-left",
    treatment: "grayscale",
  },
];
