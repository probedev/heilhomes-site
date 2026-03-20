import Image from "next/image";
import Link from "next/link";
import {
  DoorOpen,
  Home,
  Leaf,
  MapPin,
  Sparkles,
  Wifi,
} from "lucide-react";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { FeatureBlock } from "@/components/feature-block";
import { getPropertyImages } from "@/lib/gallery";

const CAL_HANALEI_URL =
  "https://cal.com/YOUR-CAL-USERNAME/hanalei?embed=inline";

/** Editorial pairings — paths must exist in gallery manifest / public */
const editorial = {
  mainKitchen: "/images/hanalei/HAN-kitchen-1.jpg",
  ohanaLiving: "/images/hanalei/Ohana-living-1.jpg",
  livingTech: "/images/hanalei/living-room-2.jpg",
  outdoors: "/images/hanalei/outside-4.jpg",
  townAndBay: "/images/hanalei/DJI_0051.jpg",
  coffeeAndMore: "/images/hanalei/coffee-maker.jpg",
} as const;

const iconClass = "h-5 w-5 sm:h-[22px] sm:w-[22px]";

export default function HanaleiPage() {
  const galleryImages = getPropertyImages("hanalei");

  const heroImage = "/images/hanalei/IMG_3132.jpg";

  return (
    <>
      {/* Full-width hero spread with overlay */}
      <section className="relative mb-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden bg-slate-100">
        <div className="relative h-[55vh] min-h-[360px] w-full">
          <Image
            src={heroImage}
            alt="Hanalei cottage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 72vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:px-10">
              <p className="text-[11px] font-medium tracking-[0.28em] text-slate-100">
                HANALEI · NORTH SHORE KAUAI
              </p>
              <h1 className="mt-2 max-w-xl font-serif text-3xl font-normal tracking-tight text-slate-50 sm:text-4xl">
                Modern plantation cottage in Hanalei Bay.
              </h1>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-100/85 sm:text-sm">
                A reimagined plantation home on a quiet cul‑de‑sac, a short walk
                from town and the sand—thoughtfully designed for family, friends,
                and long stays.
              </p>
              <Link
                href="#gallery"
                className="mt-5 inline-flex rounded-full bg-white/90 px-7 py-2 text-[11px] font-semibold tracking-[0.22em] text-slate-900 shadow-sm backdrop-blur hover:bg-white"
              >
                VIEW GALLERY
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-20 pt-10 pb-10 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
        {/* What's inside — each block pairs copy with a related photo */}
        <section className="space-y-12 lg:space-y-16">
          <header className="max-w-2xl space-y-3">
            <h2 className="font-serif text-2xl font-normal text-slate-900 sm:text-3xl">
              What&apos;s inside.
            </h2>
            <p className="text-sm text-sky-900/90">
              Exceptionally thoughtful quality and attention to detail—each space
              is matched with a glimpse of the real home.
            </p>
          </header>

          <div className="space-y-16 lg:space-y-24">
            <FeatureBlock
              icon={<Home className={iconClass} strokeWidth={1.5} />}
              title="Two bedroom main house"
              imageSrc={editorial.mainKitchen}
              imageAlt="Hanalei main house kitchen and living"
              imageSide="right"
              imageCaption="Chef-friendly kitchen opening to the living area"
            >
              <p>
                The main house centers around a modern, chef-friendly kitchen with
                Wolf and Sub‑Zero appliances that opens onto the living room and
                dining area. Two covered lanais extend the living space outdoors,
                framing views of the garden and mountains beyond.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<DoorOpen className={iconClass} strokeWidth={1.5} />}
              title="One bedroom guest house"
              imageSrc={editorial.ohanaLiving}
              imageAlt="Hanalei detached guest house living space"
              imageSide="left"
              imageCaption="Private ohana living and lofted bedroom"
            >
              <p>
                The detached, lofted guest house is its own private retreat,
                complete with king bed, memory‑foam pull‑out sofa, 55&quot; TV,
                kitchenette, half bath, and an outdoor shower tucked beneath the
                palms.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<Wifi className={iconClass} strokeWidth={1.5} />}
              title="Modern comforts"
              imageSrc={editorial.livingTech}
              imageAlt="Hanalei living room with entertainment"
              imageSide="right"
              imageCaption="Living spaces wired for work and downtime"
            >
              <p>
                Gigabit fiber internet, Wi‑Fi 7 mesh routers, smart locks and
                keypads, OLED TVs, and Sonos sound throughout the home keep everyone
                connected and entertained, whether you&apos;re working remotely or
                unwinding after a long surf.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<Leaf className={iconClass} strokeWidth={1.5} />}
              title="Sustainable by design"
              imageSrc={editorial.outdoors}
              imageAlt="Hanalei home exterior and grounds"
              imageSide="left"
              imageCaption="Solar + Powerwalls keep the home comfortable off-grid"
            >
              <p>
                A 5 kWh solar system paired with two Tesla Powerwall batteries keeps
                the home powered and comfortable even when the island grid isn&apos;t.
                Efficient cooling and fans keep the air moving without sacrificing
                the feeling of open‑air living.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<MapPin className={iconClass} strokeWidth={1.5} />}
              title="Steps from town and the bay"
              imageSrc={editorial.townAndBay}
              imageAlt="Aerial view toward Hanalei Bay and town"
              imageSide="right"
              imageCaption="Minutes from Hanalei town and the sand"
            >
              <p>
                From your front door, it&apos;s a short stroll to the cafés,
                restaurants, and shops of Hanalei town, and just a few more minutes
                until your feet hit the sand at Hanalei Bay and its legendary surf
                breaks.
              </p>
            </FeatureBlock>

            {/* Migrated block 06 — “And more…” */}
            <div className="rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-50/90 via-[#f5f1ea] to-violet-100/40 p-6 shadow-sm sm:p-10">
              <FeatureBlock
                icon={<Sparkles className={iconClass} strokeWidth={1.5} />}
                title="And more…"
                imageSrc={editorial.coffeeAndMore}
                imageAlt="Breville espresso machine and kitchen amenities"
                imageSide="left"
                imageCaption="Espresso, grill, boards & beach gear"
              >
                <p>
                  New split AC units and Big Ass Fans in every room, Breville
                  automatic espresso machine, Weber gas grill, outdoor sand foot
                  washer, laundry, and stand up paddle boards and soft top surfboards
                  to use during your visit.
                </p>
              </FeatureBlock>
            </div>
          </div>
        </section>

        {/* Gallery grid with lightbox */}
        <section id="gallery" className="scroll-mt-24 space-y-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
              View Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Photos of the main house, guest house, and outdoor area.
            </p>
          </div>
          <GalleryLightbox images={galleryImages} altPrefix="Hanalei" />
        </section>

        <section className="space-y-4 rounded-sm border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
          <h2 className="font-serif text-xl text-slate-900 sm:text-2xl">
            Availability &amp; booking
          </h2>
          <p className="text-sm text-slate-600">
            Check availability and request a booking via Cal.com (link to be
            updated).
          </p>
          <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
            <iframe
              src={CAL_HANALEI_URL}
              title="Hanalei availability and booking"
              className="h-[700px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </>
  );
}
