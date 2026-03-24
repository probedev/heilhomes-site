"use client";

import { useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import type { PropertySlug } from "@/data/availability";
import { getBookedDates } from "@/lib/availability";

type PropertyAvailabilityCalendarProps = {
  propertySlug: PropertySlug;
  title?: string;
};

export function PropertyAvailabilityCalendar({
  propertySlug,
  title = "Availability",
}: PropertyAvailabilityCalendarProps) {
  const bookedDates = useMemo(
    () => getBookedDates(propertySlug),
    [propertySlug],
  );

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg text-slate-900">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-600">
        Highlighted dates are already booked. We update this calendar by hand—
        send a message below to confirm dates before you book travel.
      </p>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-8">
        <Calendar
          defaultMonth={new Date()}
          modifiers={{ booked: bookedDates }}
          modifiersClassNames={{
            booked:
              "bg-rose-100 text-rose-950 [&_button]:bg-rose-100/80 [&_button]:text-rose-950 [&_button]:hover:bg-rose-200/90",
          }}
        />
        <div className="flex flex-col gap-3 rounded-lg border border-slate-200/80 bg-[#f5f1ea]/80 px-4 py-3 text-xs text-slate-600">
          <span className="font-medium uppercase tracking-wide text-slate-500">
            Key
          </span>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm bg-rose-100 ring-1 ring-rose-200"
              aria-hidden
            />
            Booked / unavailable
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm bg-white ring-1 ring-slate-200"
              aria-hidden
            />
            Open (inquire to confirm)
          </div>
        </div>
      </div>
    </div>
  );
}
