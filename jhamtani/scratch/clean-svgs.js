const fs = require('fs');
const path = require('path');

const dir = 'D:/jhamnatani_website/jhamtani/public/assets/icon';

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.svg')) {
      const filePath = path.join(dir, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove any <rect ... fill="#ffffff" ... /> or <rect ... fill="white" ... /> backdrop tags
        const cleaned = content
          .replace(/<rect[^>]+fill="#ffffff"[^>]*\/>/gi, '')
          .replace(/<rect[^>]+fill="white"[^>]*\/>/gi, '');
        
        fs.writeFileSync(filePath, cleaned, 'utf8');
        console.log(`Successfully cleaned backdrop rects from: ${file}`);
      } catch (fileErr) {
        console.error(`Failed to process ${file}:`, fileErr);
      }
    }
  });
});
