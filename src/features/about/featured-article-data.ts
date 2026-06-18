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
  /** Optional longer blurb (used for the video features). */
  description?: string;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    publication: "EduTimes Africa",
    author: "Folaranmi Ajayi",
    date: "July 26, 2025",
    title:
      "Anjolaoluwa Ajayi - Nigeria's “Data Princess” changing the game in AI, education through Acad AI.",
    href: "https://edutimesafrica.com/anjolaoluwa-ajayi-nigerias-data-princess-changing-the-game-in-ai-education-through-acad-ai/",
    imageSrc: "/images/featured-in/edu-times-1.jpg",
    imagePosition: "object-right",
    treatment: "scale-110 saturate-75",
  },
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
    publication: "Punch",
    author: "Temitope Adetunji",
    date: "2025",
    title:
      "Developing AI assessment tool my greatest achievement — Babcock first-class graduate.",
    href: "https://punchng.com/developing-ai-assessment-tool-my-greatest-achievement-babcock-first-class-graduate/",
    imageSrc: "/images/featured-in/edu-times-2.png",
    imagePosition: "object-center",
  },
  {
    publication: "Innovation Village",
    author: "Innovation Village",
    date: "2025",
    title: "Anjolaoluwa Ajayi's Acad AI is redefining exam grading in Africa.",
    href: "https://innovation-village.com/anjolaoluwa-ajayis-acad-ai-is-redefining-exam-grading-in-africa/",
    imageSrc: "/images/featured-in/innovation.png",
    imagePosition: "object-center",
  },
  {
    publication: "Bulbling 247",
    author: "Tomilola Boyinde",
    date: "September 27, 2025",
    title: "Can AI Make Exams Grading Fair? ACAD AI Says Yes!",
    href: "https://www.youtube.com/watch?v=TMmxE9PN70Y",
    description:
      "This episode features Anjolaoluwa Ajayi, the founder and CEO of ACAD AI, an AI-powered examination grading system designed to deliver fast, accurate, and automated grading. A computer science graduate, Anjolaoluwa founded ACAD AI to solve the widespread issue of manual marking errors and inconsistencies in results.",
    imageSrc: "/images/featured-in/can-i-make.png",
    imagePosition: "object-center",
  },
  {
    publication: "Ibom Innovation Network",
    author: "Akwa Ibom Tech Week",
    date: "January 21, 2026",
    title:
      "ACAD AI — from idea to winning the Akwa Ibom Tech Week Innovation Challenge.",
    href: "https://youtu.be/i7Rs-LXhPC0?si=8JQ1eYGNknHhIwFz",
    description:
      "What does it take to go from an idea to winning on the biggest innovation stage in Akwa Ibom? In this mini documentary, we follow the journey of ACAD AI — from how the idea was born, to applying for the Akwa Ibom Tech Week Innovation Challenge, pitching through the semi-finals, and emerging winners among over 16 startups and innovators. Powered by opportunity, community, and belief, this is a story of grit, growth, and what's possible when young innovators are given the right platform.",
    imageSrc: "/images/featured-in/ibom-comp.png",
    imagePosition: "object-center",
  },
];
