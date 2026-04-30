export type EventStatus = "past" | "upcoming";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  status: EventStatus;
  watchUrl?: string;
  lumaUrl?: string;
}
