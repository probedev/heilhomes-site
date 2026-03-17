import Image from "next/image";

const galleryImages = ["/images/amsterdam/hero.jpg"];

const CAL_AMSTERDAM_URL =
  "https://cal.com/YOUR-CAL-USERNAME/amsterdam?embed=inline";

export default function AmsterdamPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Amsterdam · Noord Holland
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Weteringschans 129‑3 · Amsterdam penthouse.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Our two bedroom, one and a half bath plus attic, 140 square meter
            penthouse sleeps five comfortably. The quiet, private apartment is
            on the top floor of a canal house built in 1885 and offers views of
            canals both in front and back.
          </p>

          <dl className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-2 sm:p-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Flexible sleeping
              </dt>
              <dd className="mt-1 text-zinc-100">
                Two bedrooms can each be configured as one king bed or two twins,
                and the attic level is a cozy hideaway for kids of all ages.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Recently renovated
              </dt>
              <dd className="mt-1 text-zinc-100">
                Fully renovated in 2023: bright, modern finishes, clean lines, and
                plenty of natural light while preserving the character of the
                original canal house.
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src={galleryImages[0]}
                alt="Amsterdam penthouse interior"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="space-y-2 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                In the center of Amsterdam
              </p>
              <p className="text-sm text-zinc-200">
                Beautiful views of the Rijksmuseum with convenient access to public
                transport, the canal belt, and all of the restaurants and cafés in
                De Pijp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold sm:text-xl">The apartment</h2>
          <p className="text-sm text-zinc-300">
            Clean, modern, and light—perfect as a home base for exploring the
            city.
          </p>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Historic canal house</p>
          <p>
            Located on the top floor of an 1885 canal house with views over the
            water in both directions and classic Amsterdam charm.
          </p>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Connected & convenient</p>
          <p>
            Easy access to trams and Metro, walkable to museums, the canal belt,
            and the restaurants, bars, and shops of De Pijp.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold sm:text-xl">Gallery</h2>
            <p className="text-sm text-zinc-300">
              A look inside the apartment and its surroundings.
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
                  alt={`Amsterdam photo ${index + 1}`}
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

