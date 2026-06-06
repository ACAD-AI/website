"use client";

import { useMemo, useState } from "react";

import { SectionHeader } from "@/shared";
import { cn } from "@/shared/lib/utils";

import { EventCard } from "./event-card";
import { eventItems, eventTabLabels } from "./events-data";
import { EventsEmptyState } from "./events-empty-state";
import type { EventStatus } from "./events-types";

const tabs: EventStatus[] = ["upcoming", "past"];

export function EventsSection() {
  const [activeTab, setActiveTab] = useState<EventStatus>("upcoming");

  const filteredEvents = useMemo(
    () => eventItems.filter((event) => event.status === activeTab),
    [activeTab],
  );

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(49,91,255,0.2),transparent_20%),radial-gradient(circle_at_78%_84%,rgba(34,69,177,0.22),transparent_24%)]" />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center gap-12 sm:gap-14">
        <div className="w-full max-w-5xl pt-8 sm:pt-12">
          <SectionHeader
            align="center"
            className="gap-4"
            description="Workshops, summits, and meetups for the future of learning in Africa."
            descriptionClassName="max-w-3xl text-[#5b6b8c] dark:text-white/60"
            eyebrow="Events"
            title="Where Acad AI shows up."
            titleClassName="max-w-5xl text-[3rem] sm:text-6xl lg:text-[5rem]"
          />
        </div>

        <div className="inline-flex items-center rounded-2xl border border-[#e3e8f5] bg-white p-1 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-transparent dark:bg-[#45417c] dark:shadow-[0_16px_32px_rgba(8,12,32,0.2)]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors sm:min-w-36 sm:px-6",
                  isActive
                    ? "bg-[#1836b2] text-white dark:bg-white dark:text-[#2f3158]"
                    : "text-[#5b6b8c] hover:text-[#141b34] dark:text-white/72 dark:hover:text-white",
                )}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {eventTabLabels[tab]}
              </button>
            );
          })}
        </div>

        <div className="w-full">
          {filteredEvents.length > 0 ? (
            <div className="rounded-[18px] border border-[#e3e8f5] bg-white p-4 shadow-[0_16px_38px_rgba(46,73,139,0.08)] dark:border-[#595f93] dark:bg-[#433f7d] dark:shadow-[0_24px_60px_rgba(9,13,35,0.18)] sm:p-5">
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredEvents.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>
          ) : (
            <EventsEmptyState message="No upcoming events yet. Check back soon — or follow us on Luma to be the first to know." />
          )}
        </div>
      </div>
    </section>
  );
}
