const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = 'D:/jhamnatani_website/jhamtani/public/assets/ace-ayodha';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walkDir(rootDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    const webpPath = filePath.replace(new RegExp(ext + '$', 'i'), '.webp');
    
    sharp(filePath)
      .webp({ quality: 85 })
      .toFile(webpPath)
      .then(() => {
        console.log(`Converted: ${filePath} -> ${webpPath}`);
        fs.unlinkSync(filePath); // Delete original file
        console.log(`Deleted original: ${filePath}`);
      })
      .catch(err => {
        console.error(`Failed to convert ${filePath}:`, err);
      });
  }
});
