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
import { getPropertyImages, partitionHanaleiGallery } from "@/lib/gallery";

const CAL_HANALEI_URL =
  "https://cal.com/YOUR-CAL-USERNAME/hanalei?embed=inline";

/** Main house — paths must exist in public / manifest */
const mainEditorial = {
  kitchen: "/images/hanalei/HAN-kitchen-1.jpg",
  livingTech: "/images/hanalei/living-room-2.jpg",
} as const;

/** Ohana guest house — filenames use “ohana” so they stay visually grouped */
const ohanaEditorial = {
  living: "/images/hanalei/Ohana-living-1.jpg",
  outside1: "/images/hanalei/ohana-outside.jpeg",
  kitchenette: "/images/hanalei/ohana-kitchenette.jpg",
  outdoorShower: "/images/hanalei/outdoor-shower-1.jpg",
} as const;

const propertyEditorial = {
  outdoors: "/images/hanalei/outside-4.jpg",
  townAndBay: "/images/hanalei/DJI_0051.jpg",
  coffeeAndMore: "/images/hanalei/coffee-maker.jpg",
} as const;

const iconClass = "h-5 w-5 sm:h-[22px] sm:w-[22px]";

export default function HanaleiPage() {
  const galleryImages = getPropertyImages("hanalei");
  const { mainHouse: mainHouseGallery, ohana: ohanaGallery } =
    partitionHanaleiGallery(galleryImages);

  /** Prefer manifest path so new uploads are picked up automatically */
  const ohanaOutside2FromManifest = galleryImages.find((src) =>
    /ohana-outside2/i.test(src.split("/").pop() ?? ""),
  );

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
        <header className="max-w-2xl space-y-3">
          <h2 className="font-serif text-2xl font-normal text-slate-900 sm:text-3xl">
            What&apos;s inside.
          </h2>
          <p className="text-sm text-sky-900/90">
            The property has a <strong className="font-medium">main house</strong>{" "}
            and a detached <strong className="font-medium">ohana</strong> guest
            house—photos below are labeled so you can see which spaces belong to
            each. Some guests rent the ohana on its own; ask when you book.
          </p>
        </header>

        {/* —— Main house —— */}
        <section
          id="main-house"
          className="scroll-mt-24 space-y-10 rounded-2xl border border-amber-900/15 bg-gradient-to-b from-amber-50/50 to-[#f5f1ea]/80 p-6 shadow-sm sm:space-y-12 sm:p-10"
        >
          <div className="flex flex-wrap items-baseline gap-3 border-b border-amber-900/10 pb-4">
            <h2 className="font-serif text-xl font-normal text-slate-900 sm:text-2xl">
              Main house
            </h2>
            <span className="rounded-full bg-amber-100/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-950/90">
              Two bedrooms
            </span>
          </div>

          <div className="space-y-14 lg:space-y-20">
            <FeatureBlock
              icon={<Home className={iconClass} strokeWidth={1.5} />}
              title="Living & kitchen"
              imageSrc={mainEditorial.kitchen}
              imageAlt="Hanalei main house kitchen and living"
              imageSide="right"
              imageCaption="Main house — chef-friendly kitchen opening to the living area"
            >
              <p>
                The main house centers around a modern, chef-friendly kitchen with
                Wolf and Sub‑Zero appliances that opens onto the living room and
                dining area. Two covered lanais extend the living space outdoors,
                framing views of the garden and mountains beyond.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<Wifi className={iconClass} strokeWidth={1.5} />}
              title="Modern comforts (main house)"
              imageSrc={mainEditorial.livingTech}
              imageAlt="Hanalei main house living room with entertainment"
              imageSide="left"
              imageCaption="Main house — living spaces wired for work and downtime"
            >
              <p>
                Gigabit fiber internet, Wi‑Fi 7 mesh routers, smart locks and
                keypads, OLED TVs, and Sonos sound throughout keep everyone
                connected and entertained, whether you&apos;re working remotely or
                unwinding after a long surf.
              </p>
            </FeatureBlock>
          </div>
        </section>

        {/* —— Ohana guest house —— */}
        <section
          id="ohana-guest-house"
          className="scroll-mt-24 space-y-10 rounded-2xl border border-teal-900/15 bg-gradient-to-b from-teal-50/40 to-[#f5f1ea]/90 p-6 shadow-sm sm:space-y-12 sm:p-10"
        >
          <div className="flex flex-wrap items-baseline gap-3 border-b border-teal-900/10 pb-4">
            <h2 className="font-serif text-xl font-normal text-slate-900 sm:text-2xl">
              Ohana guest house
            </h2>
            <span className="rounded-full bg-teal-100/90 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-950/90">
              One bedroom · may rent separately
            </span>
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
            The detached ohana is its own small home: private entrance, kitchenette,
            and outdoor shower. Filenames that include{" "}
            <code className="rounded bg-slate-200/60 px-1.5 py-0.5 text-xs text-slate-800">
              ohana
            </code>{" "}
            in the gallery are always this structure—not the main house.
          </p>

          <div className="space-y-14 lg:space-y-20">
            <FeatureBlock
              icon={<DoorOpen className={iconClass} strokeWidth={1.5} />}
              title="Loft bedroom & living"
              imageSrc={ohanaEditorial.living}
              imageAlt="Hanalei ohana guest house living space"
              imageSide="right"
              imageCaption="Ohana — living and lofted bedroom"
            >
              <p>
                The lofted guest house is its own private retreat, complete with
                king bed, memory‑foam pull‑out sofa, 55&quot; TV, kitchenette,
                half bath, and an outdoor shower tucked beneath the palms.
              </p>
            </FeatureBlock>

            {/* Ohana-only photos: exteriors + key details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-900/80">
                Ohana — exteriors & details
              </h3>
              <p className="max-w-2xl text-sm text-slate-600">
                These shots are all labeled in filenames with{" "}
                <span className="font-medium text-slate-800">ohana</span> so they
                stay grouped with the guest house.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <figure className="space-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 ring-1 ring-teal-900/10">
                    <Image
                      src={ohanaEditorial.outside1}
                      alt="Ohana guest house exterior"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 28vw, 50vw"
                    />
                  </div>
                  <figcaption className="text-center text-[11px] text-slate-600">
                    <span className="font-medium text-teal-900/90">Ohana</span> —
                    exterior (ohana-outside)
                  </figcaption>
                </figure>
                {ohanaOutside2FromManifest ? (
                  <figure className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 ring-1 ring-teal-900/10">
                      <Image
                        src={ohanaOutside2FromManifest}
                        alt="Ohana guest house exterior second view"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 28vw, 50vw"
                      />
                    </div>
                    <figcaption className="text-center text-[11px] text-slate-600">
                      <span className="font-medium text-teal-900/90">Ohana</span> —
                      exterior (ohana-outside2)
                    </figcaption>
                  </figure>
                ) : null}
                <figure className="space-y-2 sm:col-span-2 lg:col-span-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 ring-1 ring-teal-900/10">
                    <Image
                      src={ohanaEditorial.kitchenette}
                      alt="Ohana kitchenette"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 28vw, 50vw"
                    />
                  </div>
                  <figcaption className="text-center text-[11px] text-slate-600">
                    <span className="font-medium text-teal-900/90">Ohana</span> —
                    kitchenette
                  </figcaption>
                </figure>
                <figure className="space-y-2 sm:col-span-2 lg:col-span-2">
                  <div className="relative aspect-[4/3] max-h-[280px] overflow-hidden rounded-sm bg-slate-100 ring-1 ring-teal-900/10 sm:max-h-none lg:aspect-[21/9]">
                    <Image
                      src={ohanaEditorial.outdoorShower}
                      alt="Ohana outdoor shower"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                    />
                  </div>
                  <figcaption className="text-center text-[11px] text-slate-600">
                    <span className="font-medium text-teal-900/90">Ohana</span> —
                    outdoor shower
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* —— Whole property —— */}
        <section
          id="property"
          className="space-y-12 lg:space-y-16"
          aria-labelledby="property-heading"
        >
          <h2
            id="property-heading"
            className="font-serif text-xl font-normal text-slate-900 sm:text-2xl"
          >
            Property &amp; location
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Solar, cooling, and neighborhood context apply to the full property—
            main house and ohana together.
          </p>

          <div className="space-y-16 lg:space-y-24">
            <FeatureBlock
              icon={<Leaf className={iconClass} strokeWidth={1.5} />}
              title="Sustainable by design"
              imageSrc={propertyEditorial.outdoors}
              imageAlt="Hanalei home exterior and grounds"
              imageSide="right"
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
              imageSrc={propertyEditorial.townAndBay}
              imageAlt="Aerial view toward Hanalei Bay and town"
              imageSide="left"
              imageCaption="Minutes from Hanalei town and the sand"
            >
              <p>
                From your front door, it&apos;s a short stroll to the cafés,
                restaurants, and shops of Hanalei town, and just a few more minutes
                until your feet hit the sand at Hanalei Bay and its legendary surf
                breaks.
              </p>
            </FeatureBlock>

            <div className="rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-50/90 via-[#f5f1ea] to-violet-100/40 p-6 shadow-sm sm:p-10">
              <FeatureBlock
                icon={<Sparkles className={iconClass} strokeWidth={1.5} />}
                title="And more…"
                imageSrc={propertyEditorial.coffeeAndMore}
                imageAlt="Breville espresso machine and kitchen amenities"
                imageSide="right"
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

        {/* Gallery — split by filename key */}
        <section id="gallery" className="scroll-mt-24 space-y-10">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
              View Gallery
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Photos are grouped: main house vs. files named with{" "}
              <span className="font-medium text-slate-800">ohana</span>.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-center font-serif text-lg text-slate-900 sm:text-xl">
                Main house &amp; property
              </h3>
              <GalleryLightbox
                images={mainHouseGallery}
                altPrefix="Hanalei · main house"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-center font-serif text-lg text-slate-900 sm:text-xl">
                Ohana guest house
              </h3>
              <p className="text-center text-xs text-slate-500">
                Every image in this grid has{" "}
                <span className="font-medium">ohana</span> in the filename.
              </p>
              <GalleryLightbox
                images={ohanaGallery}
                altPrefix="Hanalei · ohana"
              />
            </div>
          </div>
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
