import Image from "next/image";
import Link from "next/link";
import { getHeroSrc, getPropertyImages } from "@/lib/gallery";

const CAL_HANALEI_URL =
  "https://cal.com/YOUR-CAL-USERNAME/hanalei?embed=inline";

export default function HanaleiPage() {
  const galleryImages = getPropertyImages("hanalei");
  const heroSrc = getHeroSrc("hanalei", galleryImages);

  return (
    <div className="space-y-16 text-slate-800">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <h1 className="font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
            Modern plantation cottage in Hanalei Bay.
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
            alt="Hanalei cottage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <h2 className="font-serif text-3xl font-normal text-slate-900 sm:text-4xl">
            What&apos;s inside.
          </h2>
          <p className="mt-2 text-sm text-sky-800/90">
            Exceptionally thoughtful quality and attention to detail.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-14">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">01</span>
              Two Bedroom Main House
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              The recently renovated main house includes a modern and well
              equipped kitchen with Wolf and Sub‑Zero appliances, two separate
              lanais with comfortable outdoor furniture. An oversized and private
              master bedroom and a second bedroom that can be configured as two
              twin beds or one king bed.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">02</span>
              One Bedroom Guest House
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              The lofted and detached guest house includes a king bed, extremely
              comfortable memory foam pull out couch, 55 inch LED TV, kitchenette,
              half bathroom and attached outdoor shower.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">03</span>
              Modern
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Gigabit fiber internet service, Wi‑Fi 7 mesh routers, smart locks
              and keypads, OLED TVs, Sonos sound system—stay connected if you
              can&apos;t completely put your head in the sand.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">04</span>
              Close to town and the beach
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              On a quiet cul‑de‑sac, you are a 5 minute walk to shops and
              restaurants in Hanalei town and a 10 minute walk to Hanalei Bay
              beach and surf breaks.
            </p>
          </div>
          <div className="space-y-3 sm:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">05</span>
              Sustainable
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              5 kWh solar with 2 Tesla Powerwall batteries—the house is energy
              self‑sufficient and resilient to grid interruptions common on the
              island.
            </p>
          </div>
          <div className="space-y-3 sm:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900">
              <span className="mr-2 text-slate-500">06</span>
              And more
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Split AC and Big Ass Fans in every room, Breville espresso
              machine, Weber gas grill, outdoor sand foot washer, laundry, stand
              up paddle boards and soft top surfboards for your visit.
            </p>
          </div>
        </div>
      </section>

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
