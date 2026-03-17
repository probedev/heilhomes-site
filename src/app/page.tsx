"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "Hanalei",
    subtitle: "North Shore Kauai",
    href: "/hanalei",
    image: "/images/hanalei/DJI_0051.jpg",
  },
  {
    name: "Amsterdam",
    subtitle: "Noord Holland",
    href: "/amsterdam",
    image: "/images/amsterdam/AMS-Living-Room-1.jpg",
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

  return (
    <Link
      href={slide.href}
      className="relative block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
    >
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <Image
          src={slide.image}
          alt={slide.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 pt-6 sm:px-12">
          <p className="text-xs font-semibold tracking-[0.4em] text-slate-100">
            {slide.subtitle.toUpperCase()}
          </p>
          <h1 className="mt-2 text-4xl font-light tracking-[0.35em] text-slate-50 sm:text-5xl">
            {slide.name.toUpperCase()}
          </h1>
          <button className="mt-6 inline-flex items-center rounded-full bg-white/90 px-6 py-2 text-xs font-semibold tracking-[0.25em] text-slate-800 shadow-sm backdrop-blur hover:bg-white">
            SEE MORE
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroCarousel />
    </div>
  );
}
