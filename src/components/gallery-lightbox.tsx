"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryLightboxProps = {
  images: string[];
  altPrefix: string;
};

export function GalleryLightbox({ images, altPrefix }: GalleryLightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
      if (event.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="group relative aspect-square overflow-hidden bg-slate-100"
            onClick={() => setOpenIndex(index)}
          >
            <Image
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              fill
              className="object-cover transition duration-200 group-hover:scale-105 group-hover:brightness-110"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-40 bg-black/85">
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setOpenIndex(null)}
            aria-label="Close image"
          />
          <div className="relative z-50 flex h-full w-full flex-col items-center justify-center px-4 py-6">
            <div className="relative h-full w-full max-w-6xl">
              <Image
                src={images[openIndex]}
                alt={`${altPrefix} ${openIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 flex w-full max-w-6xl items-center justify-between text-xs text-slate-100">
              <span>
                {altPrefix} {openIndex + 1} / {images.length}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20"
                  onClick={() =>
                    setOpenIndex(
                      (openIndex - 1 + images.length) % images.length,
                    )
                  }
                >
                  ‹ Prev
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20"
                  onClick={() =>
                    setOpenIndex((openIndex + 1) % images.length)
                  }
                >
                  Next ›
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20"
                  onClick={() => setOpenIndex(null)}
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

