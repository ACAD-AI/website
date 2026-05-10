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
      "Acad AI is a assessment and learning platform that automates the entire exam process. We help schools and teachers generate, deliver, and grade assessments in minutes. Recently, we launched a Study Mode (beta) for students to help them master their subjects faster.",
  },
  {
    id: "question-types",
    question: "What question types does Acad AI support?",
    answer:
      "Currently, Acad AI supports Theory, Multiple Choice (MCQ), and Fill-in-the-Blanks. Whether you need to test deep understanding through open-ended answers or quick recall through objective questions, our AI is optimized to generate and grade these formats accurately.",
  },
  {
    id: "final-grades",
    question: "Who is responsible for final grades on Acad AI?",
    answer:
      "The teacher always has the final say. Our AI provides 'first-pass' grading suggestions, detailed feedback, and rubric breakdown to save time, but every score can be reviewed, edited, and approved by an educator before results are released to students.",
  },
  {
    id: "shared-information",
    question: "What information is shared with the AI models?",
    answer:
      "We only share anonymized assessment data, such as exam questions and student answers, necessary for the AI to perform grading or generate study materials. We never share personally identifiable information (PII) like names or email addresses with the language models.",
  },
  {
    id: "training-data",
    question: "Do you train models using student data?",
    answer:
      "No. We respect intellectual property and privacy. Student submissions and school data are never used to train or improve third-party AI models. Your data remains your own.",
  },
  {
    id: "exam-malpractice",
    question: "How does Acad AI prevent exam malpractice?",
    answer:
      "We use active Web Proctoring to keep exams fair. If a student leaves the exam tab to open another app or website, they receive an immediate warning. If they attempt to leave the tab a second time, the system automatically submits their exam. This prevents students from searching for answers or using external tools. We also disable copy-pasting to ensure all work is original and completed within the secure testing window.",
  },
  {
    id: "grading-reliability",
    question: "How reliable is Acad AI grading?",
    answer:
      "Acad AI is highly accurate and built to follow specific rubrics or marking schemes. While our AI suggested grades are designed to be consistent and objective, we view them as a high-quality draft for teachers to refine, ensuring the human element of grading is never lost.",
  },
  {
    id: "free-plan",
    question: "Can I use Acad AI for free?",
    answer:
      "Yes! Teachers and students receive free credits upon sign-up. We also run regular promotions and referral programs to help you keep using the platform for free. For schools and institutions, we offer a dedicated pilot program to test our full suite of features for free.",
  },
  {
    id: "lms-support",
    question: "Can I use Acad AI with my school's LMS?",
    answer:
      "Yes. Acad AI lets you download student scores and feedback into a clean, organized CSV file. This allows you to keep a portable record of your results and easily update your external gradebooks in tools like Google Classroom or Canvas.",
  },
];
