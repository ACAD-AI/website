import type { EventItem, EventStatus } from "./events-types";

export const eventTabLabels: Record<EventStatus, string> = {
  past: "Past Event",
  upcoming: "Upcoming Event",
};

// To add an upcoming event, prepend an entry like this (the Register button and
// Luma checkout embed turn on automatically when `lumaEventId` is present):
//
//   {
//     id: "next-event-slug",
//     status: "upcoming",
//     title: "Event title",
//     description: "Short description.",
//     image: { src: "/images/events/next-event.png", alt: "Event cover" },
//     lumaEventId: "evt-kceQtmuyiIejNNa", // from the event's Luma "Register" embed
//     learnMoreUrl: "https://luma.com/<event-page>", // "Learn more"
//   },
//
// TODO(content): replace the placeholder Unsplash images/descriptions below, and
// point each `lumaUrl` at the event's specific Luma page (grab from
// https://luma.com/user/acadai) instead of the generic profile.
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
