import Image from "next/image";
import Link from "next/link";
import { getHeroSrc, getPropertyImages } from "@/lib/gallery";

const CAL_AMSTERDAM_URL =
  "https://cal.com/YOUR-CAL-USERNAME/amsterdam?embed=inline";

export default function AmsterdamPage() {
  const galleryImages = getPropertyImages("amsterdam");
  const heroSrc = getHeroSrc("amsterdam", galleryImages);

  return (
    <div className="space-y-16 text-slate-800">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <h1 className="font-serif text-2xl font-normal uppercase tracking-wide text-slate-900 sm:text-3xl">
            Our Amsterdam Penthouse
          </h1>
          <Link
            href="#gallery"
            className="inline-flex rounded-sm bg-slate-800 px-8 py-2.5 text-xs font-medium tracking-wide text-white transition hover:bg-slate-700"
          >
            View Gallery
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

      <section className="space-y-6 text-center">
        <h2 className="font-serif text-xl font-normal tracking-[0.2em] text-slate-900 sm:text-2xl">
          WETERINGSCHANS 129-3
        </h2>
        <p className="mx-auto max-w-3xl text-left text-sm leading-relaxed text-slate-600 sm:text-base">
          The two bedroom one and half bath plus attic 140 square meter sleeps 5
          comfortably. Each bedroom can be configured as one king bed or two twins
          and the attic is a perfect home for kids of all ages. The quiet and
          private apartment is located on the top floor of a canal house built in
          1885 and includes views of canals both in the front and back of the
          house.
        </p>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
            Located in the center of Amsterdam
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Our apartment is located in the center of Amsterdam, with beautiful
            views of the Rijksmuseum and convenient access to public
            transportation as well as the famed canal belt and all the
            restaurants in the Pijp neighborhood.
          </p>
        </div>
      </section>

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
