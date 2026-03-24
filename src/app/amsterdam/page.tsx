import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Flower2,
  MapPin,
  Sparkles,
  Trees,
  UtensilsCrossed,
} from "lucide-react";
import { AvailabilityBookingSection } from "@/components/availability-booking-section";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { FeatureBlock } from "@/components/feature-block";
import { getPropertyImages } from "@/lib/gallery";

/** Editorial pairings — paths must exist in gallery manifest / public */
const editorial = {
  livingTrees: "/images/amsterdam/AMS-Living-Room-2.jpg",
  diningKitchen: "/images/amsterdam/AMS-Dining-Nook.jpg",
  attic: "/images/amsterdam/AMS-Attic-2.jpg",
  rijksView: "/images/amsterdam/AMS-Rijks.jpg",
  tulips: "/images/amsterdam/flowers.jpg",
} as const;

const iconClass = "h-5 w-5 sm:h-[22px] sm:w-[22px]";

export default function AmsterdamPage() {
  const galleryImages = getPropertyImages("amsterdam");

  /** Distinct from home carousel; full-width hero using living room shot */
  const heroImage = "/images/amsterdam/AMS-Living-Room-1.jpg";

  return (
    <>
      {/* Full-width hero (same pattern as Hanalei — outside max-w-6xl) */}
      <section className="relative mb-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden bg-slate-100">
        <div className="relative h-[55vh] min-h-[360px] w-full">
          <Image
            src={heroImage}
            alt="Amsterdam penthouse"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:px-10">
              <p className="text-[11px] font-medium tracking-[0.28em] text-slate-100">
                AMSTERDAM · NOORD HOLLAND
              </p>
              <h1 className="mt-2 max-w-xl font-serif text-2xl font-normal uppercase tracking-[0.35em] text-slate-50 sm:text-3xl">
                Our Amsterdam Penthouse
              </h1>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-100/85 sm:text-sm">
                A top‑floor canal house apartment with views of the Rijksmuseum and
                surrounding canals—clean, quiet, and filled with soft northern
                light.
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
        <section className="space-y-12 lg:space-y-16">
          <header className="max-w-3xl space-y-4">
            <h2 className="font-serif text-xl font-normal tracking-[0.2em] text-slate-900 sm:text-2xl">
              WETERINGSCHANS 129-3
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              The two bedroom one and half bath plus attic, 140 square meter
              apartment sleeps five comfortably. Each bedroom can be configured as
              one king bed or two twins, and the attic is a perfect hideaway for
              kids of all ages. The quiet and private apartment is on the top floor
              of a canal house built in 1885, with views to the water both in front
              and back.
            </p>
          </header>

          <div className="space-y-16 lg:space-y-24">
            <FeatureBlock
              icon={<Trees className={iconClass} strokeWidth={1.5} />}
              title="A living room in the trees"
              imageSrc={editorial.livingTrees}
              imageAlt="Amsterdam living room with trees outside the windows"
              imageSide="right"
              imageCaption="Floor‑to‑ceiling light and a calm, layered interior"
            >
              <p>
                Floor‑to‑ceiling windows frame the canopy of the trees outside,
                filling the living room with soft northern light. Neutral tones,
                layered textures, and considered furnishings create a calm backdrop
                for long conversations or quiet reading.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<UtensilsCrossed className={iconClass} strokeWidth={1.5} />}
              title="Kitchen & dining nook"
              imageSrc={editorial.diningKitchen}
              imageAlt="Amsterdam dining nook and kitchen area"
              imageSide="left"
              imageCaption="Cook, eat, and gather at the heart of the home"
            >
              <p>
                A compact, modern kitchen flows into a bright dining nook—ideal for
                slow breakfasts before museum days and dinners after a walk along
                the canals.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<BedDouble className={iconClass} strokeWidth={1.5} />}
              title="Attic hideaway"
              imageSrc={editorial.attic}
              imageAlt="Amsterdam attic bedroom and play space"
              imageSide="right"
              imageCaption="Lofted space for kids—or anyone who wants a quiet nook"
            >
              <p>
                The attic is a favorite hideaway: a playful, flexible space that
                sleeps extra guests or doubles as a reading room with a view over
                the rooftops.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<MapPin className={iconClass} strokeWidth={1.5} />}
              title="Located in the center of Amsterdam"
              imageSrc={editorial.rijksView}
              imageAlt="View toward the Rijksmuseum from the apartment"
              imageSide="left"
              imageCaption="Museumplein, canals, and De Pijp within easy reach"
            >
              <p>
                Step outside and you&apos;re moments from the Museumplein, the
                canal belt, and the restaurants and bars of De Pijp. Trams and the
                Metro are within easy reach, but most days you&apos;ll want to walk
                or cycle—everything feels close from here.
              </p>
            </FeatureBlock>

            <FeatureBlock
              icon={<Flower2 className={iconClass} strokeWidth={1.5} />}
              title="Everyday Amsterdam, framed"
              imageSrc={editorial.tulips}
              imageAlt="Tulips and flowers in the Amsterdam apartment"
              imageSide="right"
              imageCaption="Art, tulips, and northern light echoing the city"
            >
              <p>
                From the windows you can watch boats drift by on the canals, see
                the spires of the Rijksmuseum, and catch the changing light over the
                rooftops. Inside, art, tulips, and layered materials echo the city
                beyond the glass.
              </p>
            </FeatureBlock>

            <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50/90 via-[#f5f1ea] to-slate-100/50 p-6 shadow-sm sm:p-10">
              <FeatureBlock
                icon={<Sparkles className={iconClass} strokeWidth={1.5} />}
                title="Renovated in 2023"
                imageSrc="/images/amsterdam/kitchen-1.jpg"
                imageAlt="Renovated Amsterdam kitchen"
                imageSide="left"
                imageCaption="Clean lines, modern finishes, and plenty of light"
              >
                <p>
                  Recently renovated in 2023, the apartment is clean, modern, and
                  light—ready for long stays with family or friends, with
                  everything you need for a comfortable stay in the heart of the
                  city.
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
              Recently renovated in 2023, the apartment is clean, modern, and
              light.
            </p>
          </div>
          <GalleryLightbox images={galleryImages} altPrefix="Amsterdam" />
        </section>

        <AvailabilityBookingSection propertySlug="amsterdam" />
      </div>
    </>
  );
}
