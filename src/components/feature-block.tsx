import Image from "next/image";
import type { ReactNode } from "react";

type FeatureBlockProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  /** Which side the image appears on large screens */
  imageSide?: "left" | "right";
  /** Optional caption under the image */
  imageCaption?: string;
};

export function FeatureBlock({
  icon,
  title,
  children,
  imageSrc,
  imageAlt,
  imageSide = "right",
  imageCaption,
}: FeatureBlockProps) {
  const imageBlock = (
    <figure className="space-y-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 shadow-sm ring-1 ring-slate-200/60 lg:aspect-[5/4]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
      {imageCaption ? (
        <figcaption className="text-center text-[11px] tracking-wide text-slate-500">
          {imageCaption}
        </figcaption>
      ) : null}
    </figure>
  );

  const textBlock = (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex items-start gap-4">
        <span
          className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-[#f5f1ea] text-slate-700 shadow-sm"
          aria-hidden
        >
          {icon}
        </span>
        <div className="min-w-0 space-y-3">
          <h3 className="font-serif text-lg font-normal text-slate-900 sm:text-xl">
            {title}
          </h3>
          <div className="text-sm leading-relaxed text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
        {imageBlock}
      </div>
      <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
        {textBlock}
      </div>
    </div>
  );
}
