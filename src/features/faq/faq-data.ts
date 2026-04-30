export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is-acad-ai",
    question: "What is ACAD AI?",
    answer:
      "ACAD AI is an assessment platform for institutions, educators, and students. It helps teams create, deliver, review, and improve assessments with AI-assisted workflows.",
  },
  {
    id: "question-types",
    question: "What question types does Acad AI support?",
    answer:
      "The platform is designed to support objective and written assessments, including quizzes, exams, and structured academic evaluations. Exact question types can be configured based on your assessment workflow.",
  },
  {
    id: "final-grades",
    question: "Who is responsible for final grades on Acad AI?",
    answer:
      "Educators and institutions remain in control of final grading decisions. ACAD AI supports the review process, but academic oversight stays with the teaching team.",
  },
  {
    id: "shared-information",
    question: "What information is shared with the AI models?",
    answer:
      "Only the information required to process the assessment workflow is used. The exact data shared depends on the feature being used and your institution's configuration.",
  },
  {
    id: "training-data",
    question: "Do you train models using student data?",
    answer:
      "Dummy answer for now: ACAD AI is designed with privacy-first principles, and institutions can review how data is handled before rollout.",
  },
  {
    id: "exam-malpractice",
    question: "How does Acad AI prevent exam malpractice?",
    answer:
      "Dummy answer for now: platform controls, audit trails, educator review flows, and institutional policies all work together to reduce abuse and improve accountability.",
  },
  {
    id: "grading-reliability",
    question: "How reliable is Acad AI grading?",
    answer:
      "Dummy answer for now: grading assistance is intended to improve consistency and speed while keeping human oversight in place for quality assurance.",
  },
  {
    id: "free-plan",
    question: "Can I use Acad AI for free?",
    answer:
      "Dummy answer for now: availability of a free tier depends on the product plan, institution access, and the use case you're signing up for.",
  },
  {
    id: "lms-support",
    question: "Can I use Acad AI with my school's LMS?",
    answer:
      "Dummy answer for now: LMS compatibility is part of the intended workflow, and integrations can be discussed based on your institution's stack.",
  },
];
