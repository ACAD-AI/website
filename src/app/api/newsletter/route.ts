import { NextResponse } from "next/server";

import {
  addSubscriber,
  isSendPulseConfigured,
  isSubscribed,
} from "@/shared/lib/sendpulse/client";
import {
  isZeptoMailConfigured,
  sendWelcomeEmail,
} from "@/shared/lib/zeptomail/client";

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

  // Validate the email before we ever store it or send a confirmation.
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!isSendPulseConfigured()) {
    console.error(
      "Newsletter signup is missing SendPulse env vars (SENDPULSE_CLIENT_ID, SENDPULSE_CLIENT_SECRET, SENDPULSE_ADDRESSBOOK_ID).",
    );
    return NextResponse.json(
      { error: "Newsletter signup is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    // Reject duplicates so we don't add the same person twice.
    if (await isSubscribed(email)) {
      return NextResponse.json(
        { error: "You're already signed up." },
        { status: 409 },
      );
    }

    // SendPulse address book is the system of record for the newsletter list.
    await addSubscriber({ email, name, role });
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now. Please try again." },
      { status: 502 },
    );
  }

  // Send the welcome email via ZeptoMail. A failure here shouldn't undo the
  // signup — the contact is already saved — so we log and continue.
  if (isZeptoMailConfigured()) {
    try {
      await sendWelcomeEmail({ email, name });
    } catch (error) {
      console.error("Welcome email failed for", email, error);
    }
  } else {
    console.warn(
      "ZeptoMail env vars missing (ZEPTOMAIL_TOKEN, ZEPTOMAIL_FROM_ADDRESS); welcome email skipped.",
    );
  }

  return NextResponse.json({
    message: "You're subscribed. Please check your email to get started.",
    success: true,
  });
}
