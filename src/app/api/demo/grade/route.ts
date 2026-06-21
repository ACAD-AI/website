import { NextResponse } from "next/server";

import {
  gradeDemoAnswer,
  isGradingConfigured,
} from "@/shared/lib/acadai/client";

interface GradePayload {
  question?: unknown;
  studentAnswer?: unknown;
  modelAnswer?: unknown;
  strict?: unknown;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: GradePayload;

  try {
    payload = (await request.json()) as GradePayload;
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid grading request." },
      { status: 400 },
    );
  }

  const question = asString(payload.question);
  const studentAnswer = asString(payload.studentAnswer);
  const modelAnswer = asString(payload.modelAnswer);

  if (!question || !studentAnswer) {
    return NextResponse.json(
      { error: "A question and a student's answer are required." },
      { status: 400 },
    );
  }

  if (!isGradingConfigured()) {
    console.error("Grading requires GRADING_API_URL and GRADING_API_KEY.");
    return NextResponse.json(
      { error: "Grading is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const result = await gradeDemoAnswer({
      question,
      studentAnswer,
      modelAnswer: modelAnswer || undefined,
      strict: payload.strict !== false,
    });
    return NextResponse.json(result);
  } catch (error) {
    console.error("Demo grading failed:", error);
    return NextResponse.json(
      { error: "Unable to grade right now. Please try again." },
      { status: 502 },
    );
  }
}
