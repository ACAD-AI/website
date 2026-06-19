import type { EventItem, EventStatus } from "./events-types";

export const eventTabLabels: Record<EventStatus, string> = {
  past: "Past Events",
  upcoming: "Upcoming Events",
};

export const eventItems: EventItem[] = [
  {
    description: "Online event held on February 24, 2026.",
    id: "ai-skills-for-lecturers-vol-2",
    image: {
      alt: "AI Skills for Lecturers: Vol 2 event cover",
      src: "https://images.lumacdn.com/event-covers/8s/d054d258-93b1-4bd4-be7a-e81f6981384e.png",
    },
    lumaUrl: "https://luma.com/vacxk5k7",
    status: "past",
    title: "AI Skills for Lecturers: Vol 2",
    watchUrl: "https://youtu.be/AIeFKVjW8qs",
  },
  {
    description: "Online event held on January 23, 2026.",
    id: "ai-skills-for-lecturers-vol-1",
    image: {
      alt: "AI Skills for Lecturers: Vol 1 event cover",
      src: "https://images.lumacdn.com/event-covers/1b/ae21faad-1223-4569-a1b9-c57aa16ff535.png",
    },
    lumaUrl: "https://luma.com/ph96jsd1",
    status: "past",
    title: "AI Skills for Lecturers: Vol 1",
  },
  {
    description: "Online event held on November 29, 2025.",
    id: "redefining-education-in-africa-with-ai",
    image: {
      alt: "Redefining Education in Africa with AI event cover",
      src: "https://images.lumacdn.com/event-covers/93/c5724e3a-318c-4eb9-b5b5-33bddeb2a3d7.png",
    },
    lumaUrl: "https://luma.com/zt3y864f",
    status: "past",
    title: "Redefining Education in Africa with AI",
    watchUrl: "https://youtu.be/28kHVhLhG6U?si=KmeUDp5V5jzkG_yX",
  },
  {
    description: "Online event held on October 30, 2025.",
    id: "make-twice-the-impact-with-half-the-effort",
    image: {
      alt: "Make Twice the Impact with Half the Effort with AI event cover",
      src: "https://images.lumacdn.com/event-covers/s7/624336b2-b75c-4a58-a424-82757226c42b.png",
    },
    lumaUrl: "https://luma.com/1p2nobi4",
    status: "past",
    title: "Make Twice the Impact with Half the Effort (with AI)",
  },
  {
    description: "Online event held on September 30, 2025.",
    id: "do-more-in-less-time-with-ai",
    image: {
      alt: "Do More in Less Time with AI event cover",
      src: "https://images.lumacdn.com/event-covers/74/8673e982-8150-4f2c-b9b0-b43c6d07e832.png",
    },
    lumaUrl: "https://luma.com/cdyenkcx",
    status: "past",
    title: "Do More in Less Time with AI",
  },
];
