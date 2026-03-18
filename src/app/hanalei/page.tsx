import Image from "next/image";
import Link from "next/link";
import { GalleryLightbox } from "@/components/gallery-lightbox";
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

  const heroImage = "/images/hanalei/HAN-kitchen-1.jpg";

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
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 pt-8 sm:px-10">
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
      </section>
      <div className="mx-auto max-w-6xl space-y-20 pt-10 pb-10 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
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
