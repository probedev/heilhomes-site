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

/**
 * Bay / beach / aerial shots that read as “location” rather than the house itself.
 * Kept out of the main house grid so interiors and grounds stay grouped together.
 * Add basenames or patterns here when new scenic assets are added.
 */
const HANALEI_BAY_BEACH_BASENAMES = new Set([
  "IMG_0575.png",
  "IMG_0063.png",
  "IMG_0255.png",
  "IMG_3078.png",
  "IMG_3829.png",
  "IMG_2943.png",
]);

export function isHanaleiBayBeachScenicImage(src: string): boolean {
  const file = src.split("/").pop() ?? "";
  if (/^DJI_/i.test(file)) return true;
  if (HANALEI_BAY_BEACH_BASENAMES.has(file)) return true;
  return false;
}

/** Split Hanalei gallery: main house & grounds, scenic bay/beach, ohana (filename key). */
export function partitionHanaleiGallery(images: string[]): {
  mainHouse: string[];
  bayBeach: string[];
  ohana: string[];
} {
  const mainHouse: string[] = [];
  const bayBeach: string[] = [];
  const ohana: string[] = [];
  for (const src of images) {
    if (isHanaleiOhanaImage(src)) ohana.push(src);
    else if (isHanaleiBayBeachScenicImage(src)) bayBeach.push(src);
    else mainHouse.push(src);
  }
  return { mainHouse, bayBeach, ohana };
}
