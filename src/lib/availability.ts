import { eachDayOfInterval, isValid, parseISO } from "date-fns";
import {
  BOOKED_RANGES,
  type PropertySlug,
} from "@/data/availability";

/** All calendar Dates that fall inside any booked range for this property. */
export function getBookedDates(slug: PropertySlug): Date[] {
  const ranges = BOOKED_RANGES[slug] ?? [];
  const out: Date[] = [];
  for (const r of ranges) {
    const start = parseISO(r.start);
    const end = parseISO(r.end);
    if (!isValid(start) || !isValid(end) || start > end) continue;
    out.push(...eachDayOfInterval({ start, end }));
  }
  return out;
}
