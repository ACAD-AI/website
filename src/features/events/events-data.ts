import type { EventItem, EventStatus } from "./events-types";

export const eventTabLabels: Record<EventStatus, string> = {
  past: "Past Event",
  upcoming: "Upcoming Event",
};

export const eventItems: EventItem[] = [
  {
    description:
      "A conversation on how AI is reshaping education and assessment across Africa.",
    id: "redefining-education-africa-ai",
    image: {
      alt: "Acad AI event recording cover",
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    },
    lumaUrl: "https://luma.com/user/acadai",
    status: "past",
    title: "Redefining Education in Africa with AI",
    watchUrl: "https://youtu.be/28kHVhLhG6U?si=KmeUDp5V5jzkG_yX",
  },
  {
    description:
      "A practical session for lecturers exploring AI skills and better assessment workflows.",
    id: "ai-skills-lecturers-vol-2",
    image: {
      alt: "Workshop audience in a lecture hall",
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80",
    },
    lumaUrl: "https://luma.com/user/acadai",
    status: "past",
    title: "AI Skills for Lecturers Vol 2",
    watchUrl: "https://youtu.be/AIeFKVjW8qs",
  },
];
