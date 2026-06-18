import { NextResponse } from "next/server";

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

  if (!payload.name?.trim()) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 },
    );
  }

  if (!payload.inquiryType || !payload.role) {
    return NextResponse.json(
      { error: "Please complete the contact flow before submitting." },
      { status: 400 },
    );
  }

  if (
    !payload.email?.trim() ||
    !EMAIL_PATTERN.test(payload.email.trim()) ||
    !payload.phoneNumber?.trim()
  ) {
    return NextResponse.json(
      { error: "Please provide a valid email and phone number." },
      { status: 400 },
    );
  }

  if (!payload.message?.trim()) {
    return NextResponse.json(
      { error: "Please tell us a bit more about your request." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      "We have received your email and a member of our team will be in touch shortly.",
    payload: {
      ...payload,
      receivedAt: new Date().toISOString(),
    },
    success: true,
  });
}
