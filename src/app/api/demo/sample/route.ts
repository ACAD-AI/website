import { NextResponse } from "next/server";

import {
  getRandomDemoQuestion,
  isAcadAiConfigured,
} from "@/shared/lib/acadai/client";

export async function GET() {
  if (!isAcadAiConfigured()) {
    console.error("Demo sample is missing the LANDING_PAGE_API_KEY env var.");
    return NextResponse.json(
      { error: "Sample data is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const question = await getRandomDemoQuestion();
    return NextResponse.json(question);
  } catch (error) {
    console.error("Demo sample fetch failed:", error);
    return NextResponse.json(
      { error: "Unable to load sample data right now. Please try again." },
      { status: 502 },
    );
  }
}
