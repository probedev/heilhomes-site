import Link from "next/link";
import type { ReactNode } from "react";

const heroPrimaryClass =
  "inline-flex rounded-full bg-white/90 px-7 py-2 text-[11px] font-semibold tracking-[0.22em] text-slate-900 shadow-sm backdrop-blur hover:bg-white";

const heroSecondaryClass =
  "inline-flex rounded-full border border-white/75 bg-white/10 px-7 py-2 text-[11px] font-semibold tracking-[0.22em] text-white shadow-sm backdrop-blur hover:bg-white/20";

type CheckAvailabilityHeroGroupProps = {
  /** e.g. gallery anchor on same page */
  galleryHref: string;
};

/** Pairs “View gallery” with “Check availability” in property heroes. */
export function CheckAvailabilityHeroGroup({
  galleryHref,
}: CheckAvailabilityHeroGroupProps) {
  return (
    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Link href={galleryHref} className={heroPrimaryClass}>
        VIEW GALLERY
      </Link>
      <Link href="#availability" className={heroSecondaryClass}>
        CHECK AVAILABILITY
      </Link>
    </div>
  );
}

type MidPageBannerProps = {
  /** Short line above the button */
  headline: string;
  /** Border / tint to match the property page */
  tone: "hanalei" | "amsterdam";
};

export function CheckAvailabilityMidBanner({
  headline,
  tone,
}: MidPageBannerProps) {
  const shell =
    tone === "hanalei"
      ? "border-teal-900/15 bg-gradient-to-br from-teal-50/80 to-[#f5f1ea]/90"
      : "border-sky-200/70 bg-gradient-to-br from-sky-50/80 to-[#f5f1ea]/90";
  const btn =
    tone === "hanalei"
      ? "bg-teal-900 hover:bg-teal-950"
      : "bg-sky-900 hover:bg-sky-950";

  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-2xl border px-6 py-8 text-center shadow-sm sm:px-10 ${shell}`}
    >
      <p className="max-w-md text-sm leading-relaxed text-slate-700">
        {headline}
      </p>
      <Link
        href="#availability"
        className={`inline-flex rounded-full px-8 py-2.5 text-[11px] font-semibold tracking-[0.22em] text-white shadow-sm transition ${btn}`}
      >
        CHECK AVAILABILITY
      </Link>
    </div>
  );
}

type InlineTextLinkProps = {
  children: ReactNode;
  className?: string;
};

/** Sentence-level link to #availability (same page). */
export function CheckAvailabilityInlineLink({
  children,
  className = "text-slate-800 decoration-slate-400/55",
}: InlineTextLinkProps) {
  return (
    <Link
      href="#availability"
      className={`font-medium underline-offset-2 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}
