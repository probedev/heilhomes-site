import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Hanalei · Guest guide | Heil Homes",
  description: "House tips and local notes for your stay.",
  robots: { index: false, follow: false },
};

function parseTips(raw: string) {
  const cleaned = raw.replace(/\u200b/g, "").trim();
  const blocks = cleaned.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  return blocks.map((block, i) => {
    const oneLine = !block.includes("\n");
    if (oneLine && isSectionHeading(block)) {
      return (
        <h2
          key={i}
          className="mt-10 border-b border-teal-900/15 pb-2 font-serif text-lg font-normal text-slate-900 first:mt-0 sm:text-xl"
        >
          {block}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="text-sm leading-relaxed text-slate-700 sm:text-[15px]"
      >
        {block}
      </p>
    );
  });
}

function isSectionHeading(line: string): boolean {
  const t = line.trim();
  if (t.length < 6 || t.length > 90) return false;
  if (t.includes(":")) return false;
  const letters = t.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 4) return false;
  return letters === letters.toUpperCase();
}

export default async function HanaleiGuestGuidePage() {
  const filePath = path.join(process.cwd(), "public", "hanalei_house_tips.txt");
  let raw: string;
  try {
    raw = await readFile(filePath, "utf-8");
  } catch {
    raw =
      "Guest guide content is loading. If you see this message, hanalei_house_tips.txt is missing from the site.";
  }

  const sections = parseTips(raw);

  return (
    <>
      <section className="relative -mx-4 mb-10 h-[38vh] min-h-[220px] overflow-hidden bg-slate-100 sm:-mx-6 lg:-mx-8 sm:mb-12">
        <Image
          src="/images/hanalei/IMG_3132.jpg"
          alt="Hanalei home"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-8 pt-6 sm:px-10">
          <p className="text-[11px] font-medium tracking-[0.28em] text-slate-100">
            HANALEI · GUEST GUIDE
          </p>
          <h1 className="mt-2 font-serif text-2xl font-normal text-slate-50 sm:text-3xl">
            Welcome — house tips &amp; local notes
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <p className="mb-8 text-sm text-slate-600">
          Scan-to-page guide for guests. For photos, availability, and booking,
          see the{" "}
          <Link
            href="/hanalei/stay"
            className="font-medium text-teal-800 underline-offset-2 hover:underline"
          >
            Hanalei property page
          </Link>
          .
        </p>

        <article className="space-y-4 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm sm:p-10">
          <div className="space-y-4">{sections}</div>
        </article>

        <p className="mt-10 text-center text-xs text-slate-500">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Heil Homes
          </Link>
          {" · "}
          <Link
            href="/hanalei/stay"
            className="text-slate-600 hover:text-slate-900"
          >
            Hanalei rental
          </Link>
        </p>
      </div>
    </>
  );
}
