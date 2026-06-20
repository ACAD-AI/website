import { NextResponse } from "next/server";

import {
  type BackendResult,
  isAcadAiConfigured,
  subscribeToNewsletter,
} from "@/shared/lib/acadai/client";

interface NewsletterPayload {
  email?: unknown;
  name?: unknown;
  role?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid newsletter signup." },
      { status: 400 },
    );
  }

  const email = asTrimmedString(payload.email).toLowerCase();
  const name = asTrimmedString(payload.name);
  const role = asTrimmedString(payload.role);

  if (!name) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 },
    );
  }

  if (!role) {
    return NextResponse.json(
      { error: "Please select your role." },
      { status: 400 },
    );
  }

  // Validate the email before we ever hand it off to the backend.
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!isAcadAiConfigured()) {
    console.error(
      "Newsletter signup is missing the LANDING_PAGE_API_KEY env var.",
    );
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 503 },
    );
  }

  let result: BackendResult;
  try {
    // The ACAD AI backend is the system of record for the newsletter list.
    result = await subscribeToNewsletter({ email, name, role });
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 502 },
    );
  }

  if (result.ok) {
    return NextResponse.json({
      message:
        result.message ||
        "You're subscribed. Please check your email to get started.",
      success: true,
    });
  }

  // A 403 means our API key is missing/invalid — a server config problem, not
  // something the visitor can fix, so don't leak it to them.
  if (result.status === 403) {
    console.error(
      "ACAD AI rejected the newsletter API key (403). Check LANDING_PAGE_API_KEY.",
    );
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 503 },
    );
  }

  // The backend rejected the input (e.g. already subscribed). Surface its
  // message so the visitor knows what happened.
  if (result.status === 400 || result.status === 409 || result.status === 422) {
    return NextResponse.json(
      { error: result.message || "Unable to subscribe with those details." },
      { status: 409 },
    );
  }

  console.error(
    `ACAD AI newsletter subscribe returned unexpected status ${result.status}.`,
  );
  return NextResponse.json(
    { error: "Unable to subscribe right now. Please try again." },
    { status: 502 },
  );
}
