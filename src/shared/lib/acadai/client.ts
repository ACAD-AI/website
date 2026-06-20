/**
 * Minimal client for the ACAD AI landing-page backend.
 *
 * The backend owns the newsletter list and contact inbox — we forward each
 * submission to it with a server-side API key so the credential never reaches
 * the browser.
 *
 * Required environment variables:
 * - LANDING_PAGE_API_KEY  ACAD AI API key (sent as the `ACAD-AI-API-KEY` header)
 * - LANDING_PAGE_API_URL  Optional base URL (defaults to the production backend)
 */

const API_URL =
  process.env.LANDING_PAGE_API_URL ??
  "https://acada-ai-landing-page-238741267770.europe-west1.run.app";
const API_KEY = process.env.LANDING_PAGE_API_KEY;

// The grading service lives on a separate host with its own API key.
const GRADING_API_URL =
  process.env.GRADING_API_URL ??
  "https://ai-v6-protected-238741267770.europe-west1.run.app";
const GRADING_API_KEY = process.env.GRADING_API_KEY;

export function isAcadAiConfigured(): boolean {
  return Boolean(API_KEY);
}

export function isGradingConfigured(): boolean {
  return Boolean(GRADING_API_KEY);
}

export interface BackendResult {
  /** True when the backend accepted the request (2xx). */
  ok: boolean;
  /** HTTP status returned by the backend. */
  status: number;
  /** Human-readable message from the backend, when present. */
  message?: string;
}

/** Backend enum values — must match the API's OpenAPI schema. */
export type AcadInquiryType = "demo_request" | "general_inquiry";
export type AcadUserRole = "student" | "teacher" | "institutional_admin";

/**
 * POSTs a JSON body to the backend with the API key attached and normalises
 * the response into a {@link BackendResult}. The backend follows FastAPI
 * conventions: `{ message }` on success and `{ detail }` on error.
 *
 * Throws only on network/transport errors or a missing API key.
 */
async function post(path: string, body: unknown): Promise<BackendResult> {
  if (!API_KEY) {
    throw new Error("LANDING_PAGE_API_KEY is not configured.");
  }

  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ACAD-AI-API-KEY": API_KEY,
    },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => null)) as {
    message?: string;
    // FastAPI uses a string for raised errors and an array for request
    // validation failures.
    detail?: string | unknown[];
  } | null;

  const detail = typeof data?.detail === "string" ? data.detail : undefined;

  return {
    ok: response.ok,
    status: response.status,
    message: data?.message ?? detail,
  };
}

/** Subscribes a contact to the newsletter via the ACAD AI backend. */
export function subscribeToNewsletter(params: {
  email: string;
  name: string;
  role: string;
}): Promise<BackendResult> {
  return post("/api/newsletter/subscribe", {
    full_name: params.name,
    role: params.role,
    email: params.email,
  });
}

/** Submits a contact inquiry via the ACAD AI backend. */
export function submitContactInquiry(params: {
  name: string;
  email: string;
  phoneNumber: string;
  institutionName: string;
  inquiryType: AcadInquiryType;
  role: AcadUserRole;
  message?: string;
}): Promise<BackendResult> {
  return post("/api/contact/contact", {
    full_name: params.name,
    email: params.email,
    phone_number: params.phoneNumber,
    institution_name: params.institutionName,
    inquiry_type: params.inquiryType,
    role: params.role,
    additional_info: params.message,
  });
}

export interface DemoQuestion {
  question: string;
  modelAnswer: string;
  studentAnswer: string;
  strict: boolean;
}

/**
 * Fetches a random sample question for the "Test it Out" playground. The live
 * backend returns a richer object (`correct_answer`, `level_of_correctness`,
 * etc.); we normalise it to the four fields the playground needs.
 */
export async function getRandomDemoQuestion(): Promise<DemoQuestion> {
  if (!API_KEY) {
    throw new Error("LANDING_PAGE_API_KEY is not configured.");
  }

  const response = await fetch(`${API_URL}/api/demo/random-question`, {
    headers: { "ACAD-AI-API-KEY": API_KEY },
  });

  if (!response.ok) {
    throw new Error(`random-question failed with status ${response.status}`);
  }

  const data = (await response.json()) as {
    question?: string;
    student_answer?: string;
    model_answer?: string;
    correct_answer?: string;
    strict?: boolean;
  };

  return {
    question: data.question ?? "",
    studentAnswer: data.student_answer ?? "",
    modelAnswer: data.model_answer ?? data.correct_answer ?? "",
    // The endpoint doesn't always return `strict`; default to strict grading.
    strict: typeof data.strict === "boolean" ? data.strict : true,
  };
}

export interface GradeResult {
  score: number;
  maxScore: number;
  feedback: string;
}

/** Grades a student answer via the ai-v6 test-grade endpoint. */
export async function gradeDemoAnswer(params: {
  question: string;
  studentAnswer: string;
  modelAnswer?: string;
  strict: boolean;
}): Promise<GradeResult> {
  if (!GRADING_API_KEY) {
    throw new Error("GRADING_API_KEY is not configured.");
  }

  const response = await fetch(`${GRADING_API_URL}/api/test-grade`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ACAD-AI-API-KEY": GRADING_API_KEY,
    },
    body: JSON.stringify({
      question: params.question,
      student_answer: params.studentAnswer,
      model_answer: params.modelAnswer || null,
      strict: params.strict,
    }),
  });

  if (!response.ok) {
    throw new Error(`test-grade failed with status ${response.status}`);
  }

  const data = (await response.json()) as {
    score?: number;
    max_score?: number;
    feedback?: string;
  };

  return {
    score: typeof data.score === "number" ? data.score : 0,
    maxScore: typeof data.max_score === "number" ? data.max_score : 0,
    feedback: data.feedback ?? "",
  };
}
