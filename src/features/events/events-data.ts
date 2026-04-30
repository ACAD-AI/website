import type { EventItem, EventStatus } from "./events-types";

export const eventTabLabels: Record<EventStatus, string> = {
  past: "Past Event",
  upcoming: "Upcoming Event",
};

export const eventItems: EventItem[] = [
  {
    description:
      "A one-day gathering of educators reimagining assessments with AI. Featuring keynotes from leading educators across West Africa.",
    id: "lagos-summit-2024",
    image: {
      alt: "Audience seated at a summit listening to a speaker",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    },
    lumaUrl: "https://lu.ma/acad-ai-lagos-summit",
    status: "past",
    title: "AI in African Classrooms — Lagos Summit 2024",
    watchUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    description:
      "Hands-on session with university lecturers on building marking guides for AI grading.",
    id: "abuja-workshop",
    image: {
      alt: "Workshop audience in a lecture hall",
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    },
    lumaUrl: "https://lu.ma/acad-ai-abuja-workshop",
    status: "past",
    title: "Edu-Innovators Workshop — Abuja",
    watchUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
];
