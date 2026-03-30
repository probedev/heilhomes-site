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
 * Bay, beach, aerials, and broader “Hanalei life” (flora, fauna, outdoor mood)
 * that aren’t interior house tours. Kept out of the main house grid.
 */
const HANALEI_BAY_BEACH_BASENAMES = new Set([
  "IMG_0575.png",
  "IMG_0063.png",
  "IMG_0255.png",
  "IMG_3078.png",
  "IMG_3829.png",
  "IMG_2943.png",
  "IMG_1366.png",
  "IMG_3363.png",
  "IMG_2706.png",
  "IMG_0590.png",
  "IMG_3502.png",
  "IMG_2141.png",
  "IMG_1340.png",
  "IMG_9857.png",
  "IMG_0593.png",
]);

const HANALEI_BAY_BEACH_BASENAMES_LOWER = new Set(
  [...HANALEI_BAY_BEACH_BASENAMES].map((f) => f.toLowerCase()),
);

/** Preferred order for the bay / nature gallery (matches former “And more…” grid, then the rest). */
const HANALEI_BAY_BEACH_PATH_ORDER: readonly string[] = [
  "/images/hanalei/IMG_3829.png",
  "/images/hanalei/IMG_1366.png",
  "/images/hanalei/IMG_3078.png",
  "/images/hanalei/IMG_0593.png",
  "/images/hanalei/IMG_3363.png",
  "/images/hanalei/IMG_0063.png",
  "/images/hanalei/IMG_2706.png",
  "/images/hanalei/IMG_0255.png",
  "/images/hanalei/IMG_0590.png",
  "/images/hanalei/IMG_9857.png",
  "/images/hanalei/IMG_2943.png",
  "/images/hanalei/IMG_3502.png",
  "/images/hanalei/IMG_2141.png",
  "/images/hanalei/IMG_1340.png",
];

export function isHanaleiBayBeachScenicImage(src: string): boolean {
  const file = src.split("/").pop() ?? "";
  if (/^DJI_/i.test(file)) return true;
  if (HANALEI_BAY_BEACH_BASENAMES_LOWER.has(file.toLowerCase())) return true;
  return false;
}

/**
 * Split Hanalei gallery: main house & grounds, bay/nature, ohana (filename key).
 * Each path appears in at most one list. Bay/nature assets never appear under
 * “Main house & property.”
 */
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
  return {
    mainHouse: mainHouse.filter((src) => !isHanaleiBayBeachScenicImage(src)),
    bayBeach,
    ohana,
  };
}

/** Curated order first, then any other bay/beach paths (e.g. DJI, wave hero) sorted by filename. */
export function sortHanaleiBayBeachGallery(paths: string[]): string[] {
  const set = new Set(paths);
  const ordered: string[] = [];
  for (const p of HANALEI_BAY_BEACH_PATH_ORDER) {
    if (set.has(p)) ordered.push(p);
  }
  const rest = paths
    .filter((p) => !ordered.includes(p))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    );
  return [...ordered, ...rest];
}
