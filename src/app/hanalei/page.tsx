import Image from "next/image";
import { Speaker } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hanalei · Guest guide | Heil Homes",
  description: "House tips and local notes for your stay.",
  robots: { index: false, follow: false },
};

const linkClass =
  "font-medium text-teal-800 underline-offset-2 hover:underline decoration-teal-800/40";

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function MapsLink({
  query,
  children,
}: {
  query: string;
  children: ReactNode;
}) {
  return (
    <a
      href={mapsUrl(query)}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {children}
    </a>
  );
}

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-b border-teal-900/15 pb-2 font-serif text-xl font-normal text-slate-900 sm:text-2xl"
    >
      {children}
    </h2>
  );
}

function Subheading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 font-serif text-base font-medium text-slate-900 sm:text-lg"
    >
      {children}
    </h3>
  );
}

export default function HanaleiGuestGuidePage() {
  return (
    <>
      <section className="relative -mx-4 mb-10 h-[40vh] min-h-[240px] overflow-hidden bg-slate-100 sm:-mx-6 lg:-mx-8 sm:mb-12">
        <Image
          src="/images/hanalei/IMG_0575.png"
          alt="Turquoise wave breaking on Hanalei Bay with a leaning palm tree and rocky shore under a clear blue sky"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-6 pb-10 pt-6 sm:px-10">
          <p className="text-[11px] font-medium tracking-[0.28em] text-slate-100">
            HANALEI · GUEST GUIDE
          </p>
          <h1 className="mt-2 font-serif text-2xl font-normal text-slate-50 sm:text-3xl">
            Welcome — house tips &amp; local notes
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-20 pt-2 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm leading-relaxed text-slate-600">
          Scan-to-page guide for guests. For photos, availability, and booking,
          visit the{" "}
          <Link href="/hanalei/stay" className={linkClass}>
            Hanalei property page
          </Link>
          .
        </p>
        <div className="mb-8">
          <Link
            href="/hanalei/stay#availability"
            className="inline-flex rounded-full border border-teal-800/30 bg-teal-50/90 px-6 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-teal-900 shadow-sm transition hover:bg-teal-100"
          >
            CHECK AVAILABILITY
          </Link>
        </div>

        {/* Quick reference — above nav for QR guests */}
        <section className="mb-10 scroll-mt-28 rounded-2xl border border-teal-900/10 bg-white p-6 shadow-sm sm:p-8">
          <SectionTitle id="quick-reference">Quick reference</SectionTitle>
          <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-[#f5f1ea]/80 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                WiFi
              </dt>
              <dd className="mt-1 font-mono text-slate-900">gmoneyhanalei</dd>
            </div>
            <div className="rounded-lg bg-[#f5f1ea]/80 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Password
              </dt>
              <dd className="mt-1 font-mono text-slate-900">R0berto99</dd>
            </div>
            <div className="rounded-lg bg-[#f5f1ea]/80 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Main house key code
              </dt>
              <dd className="mt-1 font-mono text-lg text-slate-900">2337</dd>
            </div>
            <div className="rounded-lg bg-[#f5f1ea]/80 px-4 py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Guest house key code
              </dt>
              <dd className="mt-1 font-mono text-lg text-slate-900">2338</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            Text{" "}
            <a href="tel:+13038038576" className={linkClass}>
              Gregg · 303.803.8576
            </a>{" "}
            or{" "}
            <a href="tel:+16165601402" className={linkClass}>
              Nicole · 616.560.1402
            </a>{" "}
            with any questions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Physical keys: outdoor closet in the <strong>Mr. Clean box</strong> next
            to the main house side door (backup if keypads don&apos;t work).
          </p>
        </section>

        {/* Table of contents */}
        <nav
          aria-label="On this page"
          className="mb-10 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#f5f1ea] to-white p-6 shadow-sm sm:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            On this page
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-800">
            <li>
              <a href="#quick-reference" className={linkClass}>
                Quick reference
              </a>
            </li>
            <li>
              <a href="#main-house" className={linkClass}>
                Main house tips
              </a>
            </li>
            <li>
              <a href="#ohana" className={linkClass}>
                Ohana guest house
              </a>
            </li>
            <li>
              <a href="#restaurants" className={linkClass}>
                Restaurant &amp; dining tips
              </a>
              <ul className="mt-2 ml-4 list-none space-y-1.5 border-l-2 border-teal-200/80 pl-4 text-[13px] text-slate-600">
                <li>
                  <a href="#rest-ama" className="hover:text-teal-900">
                    Ama
                  </a>
                </li>
                <li>
                  <a href="#rest-bar-acuda" className="hover:text-teal-900">
                    Bar Acuda
                  </a>
                </li>
                <li>
                  <a href="#rest-dolphin" className="hover:text-teal-900">
                    The Dolphin
                  </a>
                </li>
                <li>
                  <a href="#rest-bread" className="hover:text-teal-900">
                    Hanalei Bread Company
                  </a>
                </li>
                <li>
                  <a href="#rest-pats" className="hover:text-teal-900">
                    Pat&apos;s Tacos
                  </a>
                </li>
                <li>
                  <a href="#rest-pizza" className="hover:text-teal-900">
                    Hanalei Pizza
                  </a>
                </li>
                <li>
                  <a href="#rest-kalypso" className="hover:text-teal-900">
                    Kalypso
                  </a>
                </li>
                <li>
                  <a href="#rest-tahiti-nui" className="hover:text-teal-900">
                    Tahiti Nui
                  </a>
                </li>
                <li>
                  <a href="#rest-trucks" className="hover:text-teal-900">
                    Food trucks
                  </a>
                </li>
                <li>
                  <a href="#rest-one-hotel" className="hover:text-teal-900">
                    1 Hotel
                  </a>
                </li>
                <li>
                  <a href="#rest-markets" className="hover:text-teal-900">
                    Markets &amp; groceries
                  </a>
                </li>
                <li>
                  <a href="#rest-gaia-kauai" className="hover:text-teal-900">
                    Gaia Kauai
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <article className="space-y-12">
          {/* Main house */}
          <section className="space-y-4">
            <SectionTitle id="main-house">Main house tips</SectionTitle>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-700 marker:text-teal-700 sm:text-[15px]">
              <li>
                Leave <strong>fans</strong> on inside and outside for airflow; use
                each fan&apos;s remote for speed and lights.
              </li>
              <li>
                <strong>AC:</strong> each unit has its own remote—don&apos;t run
                continuously day and night; use when doors/windows are closed. Or
                open top <strong>Jalousie</strong> windows (pole in outside closet);
                opposing sides create cross-breeze without AC.
              </li>
              <li>
                Tap water is fine; <strong>Brita pitchers</strong> live in the
                fridges.
              </li>
              <li>
                <strong>Espresso machine:</strong> turn on, tap the gear icon for
                the tutorial. Choose drink type, start with the portafilter in the
                grind position, then lock into brew. Refill beans (top) and water
                (use filtered). Beans: Hanalei Bread Company or Hanalei Market—we
                like <strong>Outpost</strong> coffee.
              </li>
              <li>
                <strong>BBQ:</strong> pull ~3 feet from the house before lighting.
                Auto lighter doesn&apos;t work—use a long lighter.
              </li>
              <li>
                Indoor shower: both heads toggle with the <strong>left button</strong>
                .
              </li>
              <li>
                <strong>Apple TV:</strong> use our streaming logins + YouTube TV for
                broadcast.
              </li>
              <li>
                <span className="inline-flex items-start gap-2">
                  <Speaker
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span>
                    <strong>Sonos:</strong> whole-home sound for TV / home theatre,
                    plus two portable <strong>Sonos Move 2</strong> speakers—one in
                    the master bedroom and one in the guest (ohana) house. From any
                    AirPlay-compatible phone, tablet, or laptop, choose the{" "}
                    <strong>Sonos</strong> output to play music on any or all
                    speakers at once.{" "}
                    <a
                      href="https://support.sonos.com/en-us/article/play-audio-from-your-ios-device-using-airplay-on-sonos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkClass} inline-flex items-center gap-1`}
                    >
                      Sonos AirPlay instructions
                      <span aria-hidden>↗</span>
                    </a>
                  </span>
                </span>
              </li>
              <li>
                Garbage disposal runs very quietly—remember to turn it off.
              </li>
              <li>
                Keep counters clear of crumbs and open fruit (ants → other
                critters). Take garbage out daily if heavy use; bags in the drawer
                in the garbage cabinet.
              </li>
              <li>
                Garbage bin: far side of garage toward the main street.{" "}
                <strong>Thursday</strong> morning pickup—roll to Aku St. Wednesday
                night.
              </li>
              <li>
                <strong>Drawer fridges:</strong> one has a freezer—close fully; they
                sit ajar easily.
              </li>
              <li>
                Laundry on the side of the house—extra TP and paper towels on shelves
                above. Lock the bottom latch on the inside of the left laundry door
                and close fully so wind can&apos;t blow it open.
              </li>
              <li>
                Cleaning supplies and vacuum: closet outside the side door.
              </li>
              <li>
                On departure: please don&apos;t leave food in fridges or pantries.
              </li>
              <li>
                Don&apos;t sit on lanai furniture in wet clothes (mildews quickly).
              </li>
              <li>
                Shoes off inside—<strong>foot washer</strong> on the side of the
                house for sand.
              </li>
              <li>
                Master sliding door: close <strong>firmly</strong> to latch.
              </li>
            </ul>
          </section>

          {/* Ohana */}
          <section className="space-y-4">
            <SectionTitle id="ohana">Ohana guest house</SectionTitle>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-slate-700 marker:text-teal-700 sm:text-[15px]">
              <li>
                <strong>No garbage disposal</strong>—don&apos;t put food down the
                sink.
              </li>
              <li>
                Tan sheets for the pull-out couch are in a drawer upstairs in the
                loft.
              </li>
              <li>
                Smart TV: press the <strong>home</strong> button for streaming apps.
              </li>
              <li>
                Keep a twin fitted sheet on couch cushions; don&apos;t sit with wet
                swimsuits.
              </li>
              <li>Rinse sandy feet and remove shoes before entering.</li>
            </ul>
          </section>

          {/* Restaurants */}
          <section
            id="restaurants"
            className="space-y-8 rounded-2xl border border-amber-900/10 bg-gradient-to-b from-amber-50/40 to-white p-6 sm:p-10"
          >
            <div>
              <SectionTitle id="restaurants-heading">
                Restaurant &amp; dining tips
              </SectionTitle>
              <p className="mt-3 text-sm text-slate-600">
                Jump to a spot using the list at the top, or browse below.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-ama">Ama (Ramen)</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Ama Ramen Hanalei Kauai">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Excellent ramen—reserve well ahead. Or line up ~{" "}
                <strong>5:15 PM</strong> before the <strong>5:30 PM</strong> opening
                for first-come tables.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-bar-acuda">Bar Acuda</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Bar Acuda Hanalei Hawaii">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Fantastic small plates—reserve well ahead. Or line up ~{" "}
                <strong>5:15 PM</strong> before the <strong>5:30 PM</strong> opening
                for first-come tables.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-dolphin">The Dolphin</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="The Dolphin Restaurant Hanalei Kauai">
                  Google Maps
                </MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                No reservations—put your name down from <strong>4:45 PM</strong> for{" "}
                <strong>5:00 PM</strong> seating. Behind Dolphin: fresh fish, poke,
                and sushi rolls.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-bread">Hanalei Bread Company</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Hanalei Bread Company Kauai">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Opens <strong>7 AM</strong>—baked goods, coffee, smoothies,
                breakfast. Grab a loaf of sourdough in the morning.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-pats">Pat&apos;s Tacos</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query={"Pat's Tacos Hanalei Kauai"}>Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Most weekdays by the pier—great fish and kalua pork tacos.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-pizza">Hanalei Pizza</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Hanalei Pizza Shop Kauai">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Slices or whole pies to go—better than you&apos;d expect.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-kalypso">Kalypso</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Kalypso Bar Grill Hanalei">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Great casual bar food—so close we often put our name down and wait at
                home for the text.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-tahiti-nui">Tahiti Nui</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Tahiti Nui Hanalei">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Casual bar food; so close we often put our name down and wait at home
                for the text. Live music some nights—you may hear it from the house
                without even going.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-trucks">Food trucks</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Fresh Bite Hanalei food truck">Google Maps</MapsLink>{" "}
                <span className="text-slate-500">(Fresh Bite)</span>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Cluster in town—our favorite is <strong>Fresh Bite</strong>.
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-one-hotel">1 Hotel</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="1 Hotel Hanalei Bay Hawaii">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                Sushi bar with bay views—especially at sunset.{" "}
                <strong>Reservations required.</strong>
              </p>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-markets">Markets &amp; groceries</Subheading>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 marker:text-amber-800/60">
                <li>
                  <strong>Hanalei Market</strong> — great natural selection, pricier.{" "}
                  <MapsLink query="Hanalei Market Kauai">Google Maps</MapsLink>
                </li>
                <li>
                  <strong>Big Save</strong> across the street — staples.{" "}
                  <MapsLink query="Big Save Hanalei Kauai">Google Maps</MapsLink>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <Subheading id="rest-gaia-kauai">Gaia Kauai</Subheading>
              <p className="text-xs text-slate-600">
                <MapsLink query="Gaia Kauai restaurant Hawaii">Google Maps</MapsLink>
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                ~15 minutes out of town—waterfront dining (formerly Opakapaka); a fun
                excursion.
              </p>
            </div>
          </section>
        </article>

        <p className="mt-14 text-center text-xs text-slate-500">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Heil Homes
          </Link>
          {" · "}
          <Link href="/hanalei/stay" className="text-slate-600 hover:text-slate-900">
            Hanalei rental
          </Link>
        </p>
      </div>
    </>
  );
}
