import Image from "next/image";

const galleryImages = ["/images/hanalei/hero.jpg"];

const CAL_HANALEI_URL =
  "https://cal.com/YOUR-CAL-USERNAME/hanalei?embed=inline";

export default function HanaleiPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Hanalei · North Shore Kauai
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Modern plantation cottage in Hanalei Bay.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Exceptionally thoughtful quality and attention to detail. A modern,
            recently renovated plantation-style home on a quiet cul‑de‑sac,
            just minutes from the shops and restaurants of Hanalei town and the
            sand of Hanalei Bay.
          </p>

          <dl className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-2 sm:p-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Main House
              </dt>
              <dd className="mt-1 text-zinc-100">
                Two bedrooms with a modern, well‑equipped kitchen (Wolf & Sub‑Zero),
                two separate lanais, and an oversized private primary bedroom. The
                second bedroom can be configured as two twins or one king.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Guest House
              </dt>
              <dd className="mt-1 text-zinc-100">
                Detached lofted one‑bedroom guest house with king bed, memory‑foam
                pull‑out couch, 55&quot; TV, kitchenette, half bath, and an attached
                outdoor shower.
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src={galleryImages[0]}
                alt="Hanalei cottage exterior"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="space-y-2 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                Steps from town & the beach
              </p>
              <p className="text-sm text-zinc-200">
                Located on a quiet cul‑de‑sac, you&apos;re a 5 minute walk to all the
                shops and restaurants in Hanalei town and a 10 minute walk to the
                beach and surf breaks of Hanalei Bay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold sm:text-xl">What&apos;s inside</h2>
          <p className="text-sm text-zinc-300">
            Modern, comfortable, and ready for everything from surf trips to
            family vacations and remote work weeks.
          </p>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Modern</p>
          <p>
            Gigabit fiber internet, Wi‑Fi 7 mesh routers, smart locks and keypads,
            OLED TVs, and Sonos sound system keep you connected if you can&apos;t
            quite put your head fully in the sand.
          </p>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Sustainable</p>
          <p>
            5 kWh solar‑powered system with two Tesla Powerwall batteries makes
            the house energy self‑sufficient and resilient to the island&apos;s
            occasional grid interruptions.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold sm:text-xl">Gallery</h2>
            <p className="text-sm text-zinc-300">
              Photos of the main house, guest house, and outdoor areas.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div
              key={src + index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={src}
                  alt={`Hanalei photo ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 320px, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold sm:text-xl">
              Availability & booking
            </h2>
            <p className="text-sm text-zinc-300">
              Use the calendar below to check availability and request a booking.
              All scheduling is handled securely via Cal.com.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
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

