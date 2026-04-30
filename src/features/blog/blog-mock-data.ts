import type { BlogPost } from "./blog-types";

const quizImage = {
  alt: "Educator filling out a quiz answer sheet",
  height: 960,
  src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  width: 1440,
} as const;

const aiEducationImage = {
  alt: "Stack of books with an apple on top",
  height: 960,
  src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  width: 1440,
} as const;

const rubricsImage = {
  alt: "Open book and notebook on a desk",
  height: 960,
  src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80",
  width: 1440,
} as const;

export const fallbackBlogPosts: BlogPost[] = [
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: quizImage,
    description: "A 5-minute walkthrough for first-time educators.",
    excerpt:
      "Setting up your first Acad AI quiz takes less than five minutes. Here's the exact process we use with new educator on day one.",
    fallbackParagraphs: [
      "Your first Acad AI quiz starts with a simple decision: what outcome are you trying to measure? Once that is clear, the platform does the heavy lifting around structure, grading logic, and distribution.",
      "Inside the quiz builder, you can choose a question mix, define time controls, and preview how the assessment will appear to learners. The default setup is intentionally clean, so you can move from idea to live quiz without a long configuration session.",
      "If you already have a rubric, Acad AI can align feedback criteria to it. If you do not, the system gives you a solid starting point that you can refine with your own language and standards.",
      "Most first-time educators are ready to publish after one short review pass. From there, analytics, grading support, and student-facing feedback all flow from the same setup, which keeps the entire workflow lightweight.",
    ],
    id: "how-to-set-up-your-first-acad-ai-quiz",
    publishedAt: "2026-04-26T09:00:00.000Z",
    readingTime: "5 min read",
    slug: "how-to-set-up-your-first-acad-ai-quiz",
    title: "How to Set Up Your First Acad AI Quiz",
  },
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: aiEducationImage,
    description: "A field view of where AI-assisted assessment is headed next.",
    excerpt:
      "Educators are quietly transforming how learning is measured. Here's what we are seeing across 200+ institutions.",
    fallbackParagraphs: [
      "Across African institutions, the strongest AI adoption pattern is not flashy automation. It is consistent, well-scoped support for assessment design, moderation, and feedback quality.",
      "Administrators are asking for auditability and fairness before they ask for scale. Educators want faster review cycles without losing the nuance that matters in real teaching contexts.",
      "That combination is shaping the next generation of assessment tools: practical systems that save time, surface insights, and still keep educators in charge of the final decision.",
      "The opportunity is especially strong where class sizes are growing faster than staffing capacity. In those environments, even a modest reduction in repetitive grading work can change the student experience.",
    ],
    id: "the-state-of-ai-in-african-education-2026",
    publishedAt: "2026-03-28T09:00:00.000Z",
    readingTime: "8 min read",
    slug: "the-state-of-ai-in-african-education-2026",
    title: "The State of AI in African Education — 2026",
  },
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: rubricsImage,
    description: "The feature launch our educator community kept asking for.",
    excerpt:
      "Today we're launching Custom Rubrics, the most requested feature from our educator community. Here's how it works.",
    fallbackParagraphs: [
      "Custom Rubrics gives educators a way to bring their own grading language into Acad AI without rebuilding the rest of their workflow. You can define the categories that matter, tune their weighting, and keep feedback consistent across large cohorts.",
      "The result is faster review with less cleanup after the fact. Instead of adapting your standards to the platform, the platform bends toward the way your team already evaluates work.",
      "We designed the launch around common assessment realities: mixed question types, varying difficulty, and the need to justify grades when students or departments ask for more context.",
      "This is one of those features that looks small on the surface and becomes foundational once teams start using it across multiple courses.",
    ],
    id: "we-just-shipped-custom-rubrics",
    publishedAt: "2026-03-14T09:00:00.000Z",
    readingTime: "3 min read",
    slug: "we-just-shipped-custom-rubrics",
    title: "We Just Shipped Custom Rubrics",
  },
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: quizImage,
    description: "A practical guide to assessment templates that save time.",
    excerpt:
      "Reusable templates are one of the fastest ways to cut prep time without sacrificing assessment quality.",
    fallbackParagraphs: [
      "Templates work best when they capture what changes least: structure, standards, and grading expectations. Once those are fixed, educators can swap in new prompts or content areas without starting from scratch.",
      "Acad AI lets departments standardize those foundations while still giving instructors room to teach in their own voice.",
      "Over time, template libraries become more than a convenience. They become a quality layer that helps new staff ramp up faster and keeps learner experience more consistent across cohorts.",
    ],
    id: "building-better-assessment-templates",
    publishedAt: "2026-02-21T09:00:00.000Z",
    readingTime: "4 min read",
    slug: "building-better-assessment-templates",
    title: "Building Better Assessment Templates",
  },
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: aiEducationImage,
    description: "What institutional teams are asking for before they scale.",
    excerpt:
      "When institutions evaluate AI partners, the conversation quickly becomes about governance, visibility, and trust.",
    fallbackParagraphs: [
      "Institutional buyers are rarely looking for magic. They are looking for software that fits procurement, risk management, and academic quality processes without creating new headaches.",
      "That is why reporting, role-based access, and moderation trails matter so much. Teams need evidence that decisions can be reviewed and defended.",
      "The best implementations happen when product design respects that operational reality from the start.",
    ],
    id: "what-institutions-need-from-ai-assessment-tools",
    publishedAt: "2026-01-30T09:00:00.000Z",
    readingTime: "6 min read",
    slug: "what-institutions-need-from-ai-assessment-tools",
    title: "What Institutions Need From AI Assessment Tools",
  },
  {
    author: "The Acad AI Team",
    body: [],
    coverImage: rubricsImage,
    description: "A closer look at how feedback quality changes retention.",
    excerpt:
      "Students stay engaged when feedback arrives quickly, clearly, and with enough context to act on it.",
    fallbackParagraphs: [
      "Assessment feedback is often treated like the end of a process, but for students it is really the beginning of the next learning loop.",
      "Shorter turnaround times help, but quality matters just as much. Learners need comments that are specific enough to guide improvement rather than simply justify a score.",
      "That balance between speed and depth is exactly where thoughtful AI support can make the biggest difference.",
    ],
    id: "why-feedback-speed-still-matters",
    publishedAt: "2026-01-12T09:00:00.000Z",
    readingTime: "5 min read",
    slug: "why-feedback-speed-still-matters",
    title: "Why Feedback Speed Still Matters",
  },
];
