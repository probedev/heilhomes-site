import galleryManifest from "@/data/gallery-manifest.json";

export type PropertySlug = "hanalei" | "amsterdam";

type Manifest = Record<PropertySlug, string[]>;

const manifest = galleryManifest as Manifest;

/** Paths from build-time manifest (keeps server bundle small on Vercel). */
export function getPropertyImages(slug: PropertySlug): string[] {
  return manifest[slug] ?? [];
}

/** Prefer hero.jpg for property hero; otherwise first image. */
export function getHeroSrc(slug: PropertySlug, images: string[]): string {
  const hero = images.find((src) => src.endsWith("/hero.jpg"));
  return hero ?? images[0] ?? `/images/${slug}/hero.jpg`;
}

/** Filename contains "ohana" (case-insensitive) → guest house; else main/property gallery. */
export function isHanaleiOhanaImage(src: string): boolean {
  const file = src.split("/").pop() ?? "";
  return /ohana/i.test(file);
}

/** Split Hanalei gallery paths for labeled lightboxes (ohana key in filenames). */
export function partitionHanaleiGallery(images: string[]): {
  mainHouse: string[];
  ohana: string[];
} {
  const mainHouse: string[] = [];
  const ohana: string[] = [];
  for (const src of images) {
    if (isHanaleiOhanaImage(src)) ohana.push(src);
    else mainHouse.push(src);
  }
  return { mainHouse, ohana };
}
