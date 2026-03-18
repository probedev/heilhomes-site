import Image from "next/image";
import Link from "next/link";
import { getHeroSrc, getPropertyImages } from "@/lib/gallery";

const CAL_HANALEI_URL =
  "https://cal.com/YOUR-CAL-USERNAME/hanalei?embed=inline";

export default function HanaleiPage() {
  const galleryImages = getPropertyImages("hanalei");
  const heroSrc = getHeroSrc("hanalei", galleryImages);

  const detailImages = {
    living: galleryImages[1] ?? heroSrc,
    kitchen: galleryImages[3] ?? heroSrc,
    lanai: galleryImages[7] ?? heroSrc,
    bedroom: galleryImages[10] ?? heroSrc,
  };

  return (
    <div className="space-y-20 pt-10 sm:pt-16 text-slate-800">
      {/* Hero spread */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">
            HANALEI · NORTH SHORE KAUAI
          </p>
          <h1 className="font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
            Modern plantation cottage in Hanalei Bay.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Tucked into a quiet cul‑de‑sac just a short walk from the sand, this
            reimagined plantation home brings together open, breezy spaces,
            thoughtful details, and all the comforts you want after a day in the
            ocean.
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
            alt="Hanalei cottage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* Editorial story row 1 */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-normal text-slate-900 sm:text-3xl">
            What&apos;s inside.
          </h2>
          <p className="text-sm text-sky-900/90">
            Exceptionally thoughtful quality and attention to detail.
          </p>
          <div className="space-y-8">
            <article className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">
                <span className="mr-2 text-slate-400">01</span>
                Two bedroom main house
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                The main house centers around a modern, chef-friendly kitchen with
                Wolf and Sub‑Zero appliances that opens onto the living room and
                dining area. Two covered lanais extend the living space outdoors,
                framing views of the garden and mountains beyond.
              </p>
            </article>
            <article className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">
                <span className="mr-2 text-slate-400">02</span>
                One bedroom guest house
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                The detached, lofted guest house is its own private retreat,
                complete with king bed, memory‑foam pull‑out sofa, 55&quot; TV,
                kitchenette, half bath, and an outdoor shower tucked beneath the
                palms.
              </p>
            </article>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={detailImages.living}
              alt="Hanalei living room"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 100vw"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={detailImages.kitchen}
                alt="Hanalei kitchen"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 16vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={detailImages.lanai}
                alt="Hanalei lanai"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 16vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial story row 2 */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <Image
            src={detailImages.bedroom}
            alt="Hanalei master bedroom"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </div>
        <div className="space-y-8">
          <article className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">03</span>
              Modern comforts
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Gigabit fiber internet, Wi‑Fi 7 mesh routers, smart locks and
              keypads, OLED TVs, and Sonos sound throughout the home keep everyone
              connected and entertained, whether you&apos;re working remotely or
              unwinding after a long surf.
            </p>
          </article>
          <article className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">04</span>
              Sustainable by design
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              A 5 kWh solar system paired with two Tesla Powerwall batteries keeps
              the home powered and comfortable even when the island grid isn&apos;t.
              Efficient cooling and fans keep the air moving without sacrificing
              the feeling of open‑air living.
            </p>
          </article>
          <article className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">05</span>
              Steps from town and the bay
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              From your front door, it&apos;s a short stroll to the cafés,
              restaurants, and shops of Hanalei town, and just a few more minutes
              until your feet hit the sand at Hanalei Bay and its legendary surf
              breaks.
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
            Photos of the main house, guest house, and outdoor area.
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
                alt={`Hanalei ${index + 1}`}
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
            src={CAL_HANALEI_URL}
            title="Hanalei availability and booking"
            className="h-[700px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
