import { NextResponse } from "next/server";

import type { EventItem } from "@/features/events/events-types";

const LUMA_USER_ID = "usr-36GZqKB3hGLK3Dh";
const LUMA_EVENTS_ENDPOINT = "https://api.lu.ma/user/profile/events-hosting";
const MAX_PAGES = 10;

interface LumaEvent {
  api_id: string;
  cover_url: string;
  name: string;
  start_at: string;
  timezone?: string;
  url: string;
}

interface LumaEventEntry {
  event: LumaEvent;
}

interface LumaEventsPage {
  entries?: LumaEventEntry[];
  has_more?: boolean;
  next_cursor?: string;
}

function formatEventDate(event: LumaEvent) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: event.timezone ?? "Africa/Lagos",
  }).format(new Date(event.start_at));
}

function toEventItem({ event }: LumaEventEntry): EventItem {
  return {
    description: `Online event · ${formatEventDate(event)}`,
    id: event.api_id,
    image: {
      alt: `${event.name} event cover`,
      src: event.cover_url,
    },
    learnMoreUrl: `https://luma.com/${event.url}`,
    lumaEventId: event.api_id,
    status: "upcoming",
    title: event.name,
  };
}

async function getUpcomingEvents() {
  const entries: LumaEventEntry[] = [];
  let cursor: string | undefined;

  for (let page = 0; page < MAX_PAGES; page += 1) {
    const params = new URLSearchParams({
      period: "future",
      user_api_id: LUMA_USER_ID,
    });

    if (cursor) params.set("pagination_cursor", cursor);

    const response = await fetch(`${LUMA_EVENTS_ENDPOINT}?${params}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Luma returned ${response.status}`);
    }

    const data = (await response.json()) as LumaEventsPage;
    entries.push(...(data.entries ?? []));

    if (!data.has_more || !data.next_cursor) break;
    cursor = data.next_cursor;
  }

  return entries.map(toEventItem);
}

export async function GET() {
  try {
    return NextResponse.json({ events: await getUpcomingEvents() });
  } catch (error) {
    console.error("Unable to load upcoming Luma events", error);
    return NextResponse.json(
      { error: "Upcoming events are temporarily unavailable.", events: [] },
      { status: 502 },
    );
  }
}
