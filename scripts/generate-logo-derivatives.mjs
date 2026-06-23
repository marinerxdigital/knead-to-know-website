import sharp from "sharp";
import { join } from "path";

const root = process.cwd();
const logoPath = join(root, "public/assets/knead-to-know/logo/KTK_NEW_LOGO_FINAL.png");
const publicDir = join(root, "public");
const cream = { r: 255, g: 253, b: 248, alpha: 1 };

const logo = sharp(logoPath);
const meta = await logo.metadata();
console.log("Logo dimensions:", meta.width, "x", meta.height);

const sizes = [
  [16, "favicon-16.png"],
  [32, "favicon-32.png"],
  [48, "favicon-48.png"],
  [180, "apple-touch-icon.png"],
  [512, "icon-512.png"],
];

for (const [size, name] of sizes) {
  await logo
    .clone()
    .resize(size, size, { fit: "contain", background: cream })
    .png()
    .toFile(join(publicDir, name));
}

const ogLogo = await logo
  .clone()
  .resize(480, 480, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: cream },
})
  .composite([{ input: ogLogo, gravity: "center" }])
  .png()
  .toFile(join(publicDir, "assets/knead-to-know/logo/og-image-1200x630.png"));

await sharp(join(publicDir, "favicon-32.png")).toFile(join(publicDir, "favicon.ico"));

console.log("Favicons and OG image generated.");