const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const assetsRoot = path.join(__dirname, "..", "public", "assets");

const targets = [
  // Team B&W portraits (displayed in ~400x450 cards -> 900px width is retina 2x)
  { dir: "Photos_B&W", maxWidth: 900, quality: 82 },
  // Biz-One huge 5MB-18MB PNGs/JPGs
  { dir: "biz-one", maxWidth: 1920, quality: 82 },
  // Ace Ayodhya 2MB-3.2MB webp images
  { dir: "ace-ayodhya", maxWidth: 1920, quality: 82 },
  // Permission sliders 1.4MB-20MB
  { dir: "permission", maxWidth: 1920, quality: 82 },
  // About section images
  { dir: "about", maxWidth: 1920, quality: 82 },
];

async function processFile(filePath, maxWidth, quality) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const statBefore = fs.statSync(filePath);
  // Only re-encode files larger than 350 KB
  if (statBefore.size < 350 * 1024) return;

  const tempPath = filePath + ".tmp";
  try {
    let pipeline = sharp(filePath).rotate(); // preserve EXIF orientation
    const metadata = await pipeline.metadata();

    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (ext === ".png") {
      pipeline = pipeline.png({ quality, compressionLevel: 9, palette: true });
    } else if (ext === ".webp") {
      pipeline = pipeline.webp({ quality });
    }

    await pipeline.toFile(tempPath);
    const statAfter = fs.statSync(tempPath);

    if (statAfter.size < statBefore.size) {
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      console.log(
        `Optimized ${path.relative(assetsRoot, filePath)}: ${Math.round(
          statBefore.size / 1024
        )}KB -> ${Math.round(statAfter.size / 1024)}KB`
      );
    } else {
      fs.unlinkSync(tempPath);
    }
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`Error optimizing ${filePath}:`, err.message);
  }
}

async function run() {
  for (const target of targets) {
    const fullDir = path.join(assetsRoot, target.dir);
    if (!fs.existsSync(fullDir)) continue;
    const files = fs.readdirSync(fullDir);
    for (const f of files) {
      const fullPath = path.join(fullDir, f);
      if (fs.statSync(fullPath).isFile()) {
        await processFile(fullPath, target.maxWidth, target.quality);
      }
    }
  }
}

run();

