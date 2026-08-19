const fs = require('fs');
const path = require('path');

async function compressImages() {
  try {
    const sharp = require('sharp');
    const dir = path.join(__dirname, '..', 'public', 'assets', 'ace-ayodha');
    const images = ['gallery_1.jpg', 'gallery_2.jpg', 'gallery_3.jpg', 'gallery_4.jpg'];

    console.log("Starting image compression using sharp...");

    for (const imgName of images) {
      const srcPath = path.join(dir, imgName);
      if (!fs.existsSync(srcPath)) {
        console.log(`File not found: ${srcPath}`);
        continue;
      }

      const tempPath = path.join(dir, `temp_${imgName}`);
      console.log(`Compressing ${imgName}...`);

      await sharp(srcPath)
        .resize(1000) // Resize width to 1000px, height auto
        .jpeg({ quality: 80 }) // Set quality to 80%
        .toFile(tempPath);

      // Replace original file with compressed file
      fs.unlinkSync(srcPath);
      fs.renameSync(tempPath, srcPath);
      console.log(`Successfully compressed ${imgName}`);
    }
    console.log("All gallery images compressed successfully!");
  } catch (error) {
    console.error("Error compressing images:", error);
  }
}

compressImages();
