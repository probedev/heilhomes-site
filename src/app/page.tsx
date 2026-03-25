"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "Hanalei",
    subtitle: "North Shore Kauai",
    href: "/hanalei/stay",
    image: "/images/hanalei/DJI_0051.jpg",
  },
  {
    name: "Amsterdam",
    subtitle: "Noord Holland",
    href: "/amsterdam",
    image: "/images/amsterdam/hero.jpg",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  const goTo = (nextIndex: number) => {
    const total = slides.length;
    setIndex(((nextIndex % total) + total) % total);
  };

  return (
    <section className="-mx-4 sm:-mx-6 lg:-mx-8">
      <div className="relative h-[calc(100vh-80px)] min-h-[520px] w-full">
        <Link
          href={slide.href}
          className="absolute inset-0 block overflow-hidden bg-slate-100"
        >
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 pt-10 sm:px-16 md:pb-20">
            <p className="text-xs font-semibold tracking-[0.4em] text-slate-100">
              {slide.subtitle.toUpperCase()}
            </p>
            <h1 className="mt-3 text-4xl font-light tracking-[0.35em] text-slate-50 sm:text-5xl md:text-6xl">
              {slide.name.toUpperCase()}
            </h1>
            <button className="mt-8 inline-flex items-center rounded-full bg-white/90 px-7 py-2.5 text-xs font-semibold tracking-[0.25em] text-slate-800 shadow-sm backdrop-blur hover:bg-white">
              SEE MORE
            </button>
          </div>
        </Link>

        {/* Controls */}
        <button
          type="button"
          aria-label="Previous home"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur hover:bg-black/45"
          onClick={(e) => {
            e.preventDefault();
            goTo(index - 1);
          }}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next home"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur hover:bg-black/45"
          onClick={(e) => {
            e.preventDefault();
            goTo(index + 1);
          }}
        >
          ›
        </button>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={s.name}
              className={`h-2 w-2 rounded-full border border-white/70 transition ${
                i === index ? "bg-white" : "bg-transparent"
              }`}
              onClick={(e) => {
                e.preventDefault();
                goTo(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroCarousel />
    </div>
  );
}
