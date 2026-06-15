export interface FeaturedArticle {
  author: string;
  date: string;
  href: string;
  imagePlacement?: "middle" | "top";
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
      "How Africa's first AI grading engine emerged from a Nigerian undergraduate Anjolaoluwa Ajayi's research project.",
    href: "https://edugist.org/how-africas-first-ai-grading-engine-emerged-from-a-nigerian-undergraduate-anjolaoluwa-ajayis-research-project/",
    imageSrc: "/images/featured-in/how-is-ai.jpg",
    imagePosition: "object-center",
  },
  {
    publication: "EduTimes Africa",
    author: "Folaranmi Ajayi",
    date: "July 26, 2025",
    title:
      "Anjolaoluwa Ajayi - Nigeria's “Data Princess” changing the game in AI, education through Acad AI.",
    href: "https://edutimesafrica.com/anjolaoluwa-ajayi-nigerias-data-princess-changing-the-game-in-ai-education-through-acad-ai/",
    imageSrc: "/images/featured-in/edu-times-1.jpg",
    imagePosition: "object-right",
    imagePlacement: "middle",
    treatment: "scale-110 saturate-75",
  },
  {
    publication: "EduTimes Africa",
    author: "EduTimesAfrica",
    date: "September 26, 2025",
    title:
      "The Next Chapter: Where Will You Be in Five Years? - With Anjolaoluwa Ajayi (The Data Princess) - Snippet",
    href: "https://edutimesafrica.com/africa-why-global-education-funding-cuts-could-push-6-million-more-children-out-of-school/",
    imageSrc: "/images/featured-in/edu-times-2.png",
    imagePosition: "object-left",
  },
];
