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
  /**
   * Upcoming events: the Luma event id (e.g. "evt-kceQtmuyiIejNNa"). Powers the
   * "Register for Event" button via Luma's checkout embed.
   */
  lumaEventId?: string;
  /** Upcoming events: link to the event's page on Luma ("Learn more"). */
  learnMoreUrl?: string;
  /** Past events: link to the event's page on Luma ("View on Luma"). */
  lumaUrl?: string;
  /** Past events: YouTube recording link ("Watch"). Optional. */
  watchUrl?: string;
}
