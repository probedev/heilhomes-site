import Image from "next/image";
import Link from "next/link";
import { getHeroSrc, getPropertyImages } from "@/lib/gallery";

const CAL_AMSTERDAM_URL =
  "https://cal.com/YOUR-CAL-USERNAME/amsterdam?embed=inline";

export default function AmsterdamPage() {
  const galleryImages = getPropertyImages("amsterdam");
  const heroSrc = getHeroSrc("amsterdam", galleryImages);

  const detailImages = {
    living: galleryImages[1] ?? heroSrc,
    kitchen: galleryImages[10] ?? heroSrc,
    tulips: galleryImages[25] ?? heroSrc,
    attic: galleryImages[5] ?? heroSrc,
  };

  return (
    <div className="mx-auto max-w-6xl space-y-20 pt-10 pb-10 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      {/* Hero spread */}
      <section className="grid gap-10 lg:grid-cols-[1.05fr_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            AMSTERDAM · NOORD HOLLAND
          </p>
          <h1 className="font-serif text-2xl font-normal uppercase tracking-[0.35em] text-slate-900 sm:text-3xl">
            Our Amsterdam Penthouse
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A light‑filled, top‑floor canal house apartment with sweeping views of
            the Rijksmuseum and tree‑lined streets, designed for slow mornings,
            long dinners, and quiet evenings above the city.
          </p>
          <Link
            href="#gallery"
            className="inline-flex rounded-sm bg-slate-900 px-8 py-2.5 text-xs font-medium tracking-[0.2em] text-white transition hover:bg-slate-700"
          >
            VIEW GALLERY
          </Link>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-100">
          <Image
            src={heroSrc}
            alt="Amsterdam penthouse living room"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* Story row 1 */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-6">
          <h2 className="font-serif text-xl font-normal tracking-[0.2em] text-slate-900 sm:text-2xl">
            WETERINGSCHANS 129-3
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The two bedroom one and half bath plus attic, 140 square meter
            apartment sleeps five comfortably. Each bedroom can be configured as
            one king bed or two twins, and the attic is a perfect hideaway for
            kids of all ages. The quiet and private apartment is on the top floor
            of a canal house built in 1885, with views to the water both in front
            and back.
          </p>
          <article className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">01</span>
              A living room in the trees
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Floor‑to‑ceiling windows frame the canopy of the trees outside,
              filling the living room with soft northern light. Neutral tones,
              layered textures, and considered furnishings create a calm backdrop
              for long conversations or quiet reading.
            </p>
          </article>
        </div>
        <div className="grid gap-4">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={detailImages.living}
              alt="Amsterdam living room"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={detailImages.kitchen}
              alt="Amsterdam kitchen"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Story row 2 */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <Image
            src={detailImages.attic}
            alt="Amsterdam attic bedroom"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </div>
        <div className="space-y-8">
          <article className="space-y-3">
            <h2 className="font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
              Located in the center of Amsterdam
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Step outside and you&apos;re moments from the Museumplein, the
              canal belt, and the restaurants and bars of De Pijp. Trams and the
              Metro are within easy reach, but most days you&apos;ll want to walk
              or cycle—everything feels close from here.
            </p>
          </article>
          <article className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">02</span>
              Everyday Amsterdam, framed
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              From the windows you can watch boats drift by on the canals, see
              the spires of the Rijksmuseum, and catch the changing light over the
              rooftops. Inside, art, tulips, and layered materials echo the city
              beyond the glass.
            </p>
          </article>
        </div>
      </section>

      {/* Gallery grid */}
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
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden bg-slate-100"
            >
              <Image
                src={src}
                alt={`Amsterdam ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          ))}
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
            src={CAL_AMSTERDAM_URL}
            title="Amsterdam availability and booking"
            className="h-[700px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
