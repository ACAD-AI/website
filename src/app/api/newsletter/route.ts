import { NextResponse } from "next/server";

interface NewsletterPayload {
  email?: unknown;
  name?: unknown;
  role?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const subscribers = new Set<string>();

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

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (subscribers.has(email)) {
    return NextResponse.json(
      { error: "You're already signed up." },
      { status: 409 },
    );
  }

  subscribers.add(email);

  return NextResponse.json({
    message: "You're subscribed. Please check your email for updates.",
    subscriber: {
      email,
      name,
      role,
      receivedAt: new Date().toISOString(),
    },
    success: true,
  });
}
