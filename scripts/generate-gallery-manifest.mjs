/**
 * Writes src/data/gallery-manifest.json from public/images/{hanalei,amsterdam}.
 * Run before `next build` so server code only imports this small JSON (not 250MB+ of JPEGs).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

function listImages(slug) {
  const dir = path.join(root, "public", "images", slug);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map((f) => `/images/${slug}/${f}`);
}

const manifest = {
  hanalei: listImages("hanalei"),
  amsterdam: listImages("amsterdam"),
};

const outDir = path.join(root, "src", "data");
const outFile = path.join(outDir, "gallery-manifest.json");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 0) + "\n", "utf8");
console.log(
  "gallery-manifest:",
  manifest.hanalei.length,
  "hanalei,",
  manifest.amsterdam.length,
  "amsterdam",
);
