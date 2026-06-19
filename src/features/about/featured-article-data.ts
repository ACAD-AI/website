export interface FeaturedArticle {
  author: string;
  date: string;
  href: string;
  imagePlacement: "bottom" | "top";
  imagePosition: string;
  imageSrc: string;
  publication: string;
  publicationLogoSrc: string;
  title: string;
  treatment?: string;
  /** Optional longer blurb (used for the video features). */
  description?: string;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    publication: "EDUTIMES AFRICA",
    author: "Folaranmi Ajayi",
    date: "July 26, 2025",
    title:
      "Anjolaoluwa Ajayi - Nigeria's “Data Princess” changing the game in AI, education through Acad AI.",
    description:
      "Anjolaoluwa Ajayi stands out as one of Nigeria’s brightest young minds shaping the future of education and data science, in a world driven by technology and innovation.",
    href: "https://edutimesafrica.com/anjolaoluwa-ajayi-nigerias-data-princess-changing-the-game-in-ai-education-through-acad-ai/",
    imagePlacement: "top",
    imageSrc: "/images/featured-in/edu-times-1.jpg",
    imagePosition: "object-right",
    publicationLogoSrc: "/images/media-features/edutimes.png",
    treatment: "scale-110 saturate-75",
  },
  {
    publication: "EDUSIGHT",
    author: "Akeem Alao",
    date: "July 24, 2025",
    title:
      "How Africa's first AI grading engine emerged from a Nigerian undergraduate Anjolaoluwa Ajayi's research project.",
    description:
      "ACAD AI graded 500 student scripts in under 200 seconds, achieving 100% accuracy and zero cases of prompt manipulation or security breaches. The platform also includes critical anti-malpractice features.",
    href: "https://edugist.org/how-africas-first-ai-grading-engine-emerged-from-a-nigerian-undergraduate-anjolaoluwa-ajayis-research-project/",
    imagePlacement: "bottom",
    imageSrc: "/images/featured-in/how-is-ai.jpg",
    imagePosition: "object-center",
    publicationLogoSrc: "/images/media-features/edugist.png",
  },
  {
    publication: "PUNCH",
    author: "Temitope Adetunji",
    date: "October 4 2025",
    title:
      "Developing AI assessment tool my greatest achievement – Babcock first-class graduate",
    description:
      "Nsikak-Abasi Ebong, the best graduating student of Babcock University’s School of Computing, tells TEMITOPE ADETUNJI how curiosity and an unyielding pursuit of excellence propelled him to the top of his class.",
    href: "https://punchng.com/developing-ai-assessment-tool-my-greatest-achievement-babcock-first-class-graduate/",
    imagePlacement: "top",
    imageSrc: "/images/featured-in/edu-times-2.png",
    imagePosition: "object-center",
    publicationLogoSrc: "/images/media-features/punch.png",
  },
  {
    publication: "INNOVATION VILLAGE",
    author: "Jessica Adiele",
    date: "November 28, 2025",
    title: "Anjolaoluwa Ajayi’s Acad AI Is Redefining Exam Grading in Africa",
    description:
      "For years, Africa’s education sector has struggled with one of its most persistent yet overlooked problems: the slow, stressful, and error-prone process of manual exam grading.",
    href: "https://innovation-village.com/anjolaoluwa-ajayis-acad-ai-is-redefining-exam-grading-in-africa/",
    imagePlacement: "bottom",
    imageSrc: "/images/featured-in/innovation.png",
    imagePosition: "object-center",
    publicationLogoSrc: "/images/media-features/innovation-village.png",
  },
  {
    publication: "BULBLING 247",
    author: "Tomilola Boyinde",
    date: "September 27, 2025",
    title: "Can AI Make Exams Grading Fair? ACAD AI Says Yes!",
    href: "https://www.youtube.com/watch?v=TMmxE9PN70Y",
    description:
      "This episode features Anjolaoluwa Ajayi, the founder and CEO of ACAD AI, an AI-powered examination grading system designed to deliver fast, accurate, and automated grading.",
    imagePlacement: "top",
    imageSrc: "/images/featured-in/can-i-make.png",
    imagePosition: "object-center",
    publicationLogoSrc: "/images/media-features/building.png",
  },
  {
    publication: "IBOM INNOVATION",
    author: "Akwa Ibom Tech Week",
    date: "January 21 2026",
    title:
      "ACAD AI — from idea to winning the Akwa Ibom Tech Week Innovation Challenge.",
    href: "https://youtu.be/i7Rs-LXhPC0?si=8JQ1eYGNknHhIwFz",
    description:
      "What does it take to go from an idea to winning on the biggest innovation stage in Akwa Ibom? In this mini documentary, we follow the journey of ACAD AI.",
    imagePlacement: "bottom",
    imageSrc: "/images/featured-in/ibom-comp.png",
    imagePosition: "object-center",
    publicationLogoSrc: "/images/media-features/ibom.jpg",
  },
];
