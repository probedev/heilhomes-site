/**
 * Manual availability — edit booked date ranges here and redeploy.
 * Dates are inclusive (start through end). Add notes for your own reference.
 */

export type PropertySlug = "hanalei" | "amsterdam";

export type BookedRange = {
  /** inclusive, YYYY-MM-DD */
  start: string;
  /** inclusive, YYYY-MM-DD */
  end: string;
  /** optional note (not shown on site; for your reference in this file) */
  note?: string;
};

export const BOOKED_RANGES: Record<PropertySlug, BookedRange[]> = {
  hanalei: [
    { start: "2026-03-26", end: "2026-04-15", note: "Booked" },
    { start: "2026-05-07", end: "2026-05-15", note: "Booked" },
    { start: "2026-06-01", end: "2026-06-28", note: "Booked" },
    { start: "2026-07-01", end: "2026-07-21", note: "Booked" },
  ],
  amsterdam: [
    // Example: { start: "2025-12-20", end: "2025-12-28", note: "Holidays" },
  ],
};
