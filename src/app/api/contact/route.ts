import { NextResponse } from "next/server";

import {
  type AcadInquiryType,
  type AcadUserRole,
  type BackendResult,
  isAcadAiConfigured,
  submitContactInquiry,
} from "@/shared/lib/acadai/client";

interface ContactPayload {
  email?: string;
  inquiryType?: string;
  institutionName?: string;
  message?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
  submittedAt?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The form uses kebab-case values; the backend expects its own snake_case enums.
const INQUIRY_TYPE_MAP: Record<string, AcadInquiryType> = {
  "request-demo": "demo_request",
  "general-inquiry": "general_inquiry",
};

const ROLE_MAP: Record<string, AcadUserRole> = {
  student: "student",
  teacher: "teacher",
  "institutional-admin": "institutional_admin",
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid contact request." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phoneNumber = payload.phoneNumber?.trim() ?? "";
  const institutionName = payload.institutionName?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 },
    );
  }

  const inquiryType = payload.inquiryType
    ? INQUIRY_TYPE_MAP[payload.inquiryType]
    : undefined;
  const role = payload.role ? ROLE_MAP[payload.role] : undefined;

  if (!inquiryType || !role) {
    return NextResponse.json(
      { error: "Please complete the contact flow before submitting." },
      { status: 400 },
    );
  }

  if (!email || !EMAIL_PATTERN.test(email) || !phoneNumber) {
    return NextResponse.json(
      { error: "Please provide a valid email and phone number." },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json(
      { error: "Please tell us a bit more about your request." },
      { status: 400 },
    );
  }

  if (!isAcadAiConfigured()) {
    console.error("Contact form is missing the LANDING_PAGE_API_KEY env var.");
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  let result: BackendResult;
  try {
    result = await submitContactInquiry({
      name,
      email,
      phoneNumber,
      // The backend requires an institution name (min 2 chars); the form treats
      // it as optional, so fall back to a placeholder when it's left blank.
      institutionName: institutionName || "Not specified",
      inquiryType,
      role,
      message,
    });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 502 },
    );
  }

  if (result.ok) {
    return NextResponse.json({
      message:
        result.message ||
        "We have received your email and a member of our team will be in touch shortly.",
      success: true,
    });
  }

  // A 403 means our API key is missing/invalid — a server config problem, not
  // something the visitor can fix, so don't leak it to them.
  if (result.status === 403) {
    console.error(
      "ACAD AI rejected the contact API key (403). Check LANDING_PAGE_API_KEY.",
    );
    return NextResponse.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  // The backend rejected the input (validation error). Surface its message.
  if (result.status === 400 || result.status === 422) {
    return NextResponse.json(
      { error: result.message || "Please check your details and try again." },
      { status: 400 },
    );
  }

  console.error(
    `ACAD AI contact submit returned unexpected status ${result.status}.`,
  );
  return NextResponse.json(
    { error: "Unable to send your message right now. Please try again." },
    { status: 502 },
  );
}
