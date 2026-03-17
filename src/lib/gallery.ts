import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

export type PropertySlug = "hanalei" | "amsterdam";

/** All image paths under public/images/{slug}, sorted by filename. */
export function getPropertyImages(slug: PropertySlug): string[] {
  const dirPath = path.join(process.cwd(), "public", "images", slug);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map((f) => `/images/${slug}/${f}`);
}

/** Prefer hero.jpg for property hero; otherwise first image. */
export function getHeroSrc(slug: PropertySlug, images: string[]): string {
  const hero = images.find((src) => src.endsWith("/hero.jpg"));
  return hero ?? images[0] ?? `/images/${slug}/hero.jpg`;
}
