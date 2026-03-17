import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    name: "Hanalei",
    subtitle: "North Shore Kauai",
    href: "/hanalei",
    image: "/images/hanalei/hero.jpg",
    pill: "Modern plantation cottage",
  },
  {
    name: "Amsterdam",
    subtitle: "Noord Holland",
    href: "/amsterdam",
    image: "/images/amsterdam/hero.jpg",
    pill: "Central canal-house penthouse",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-amber-300">
            Vacation Rentals
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Two homes.{" "}
            <span className="text-amber-300">Endless memories.</span>
          </h1>
          <p className="max-w-xl text-balance text-base leading-relaxed text-zinc-300 sm:text-lg">
            Stay in a modern plantation cottage steps from Hanalei Bay or a
            light-filled canal-house penthouse in the heart of Amsterdam. Both
            homes are thoughtfully designed with premium amenities and plenty of
            character.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/hanalei"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-amber-200"
            >
              Explore Hanalei
            </Link>
            <Link
              href="/amsterdam"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-2 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Explore Amsterdam
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((home) => (
              <Link
                key={home.name}
                href={home.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition hover:border-amber-300/80 hover:bg-white/10"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={home.image}
                    alt={home.name}
                    fill
                    sizes="(min-width: 1024px) 240px, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-300">
                    {home.subtitle}
                  </p>
                  <p className="text-lg font-semibold">{home.name}</p>
                  <p className="text-xs text-zinc-300">{home.pill}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Why Heil Homes
          </p>
          <h2 className="text-lg font-semibold sm:text-xl">
            Thoughtful details, in both hemispheres.
          </h2>
          <p className="text-sm text-zinc-300">
            The same level of quality and care connects both properties—from
            modern appliances and fast Wi‑Fi to cozy outdoor spaces and
            walk-everywhere locations.
          </p>
        </div>
        <div className="space-y-2 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Modern & Connected</p>
          <p>
            Gigabit fiber internet, mesh Wi‑Fi, smart locks, and streaming-ready
            TVs let you stay as plugged in—or unplugged—as you want.
          </p>
        </div>
        <div className="space-y-2 text-sm text-zinc-300">
          <p className="font-semibold text-zinc-100">Designed for Real Stays</p>
          <p>
            Fully equipped kitchens, comfortable beds, and flexible sleeping
            arrangements make each home ideal for families, friends, or remote
            work.
          </p>
        </div>
      </section>
    </div>
  );
}
