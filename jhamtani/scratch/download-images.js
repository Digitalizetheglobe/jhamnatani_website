const fs = require('fs');
const path = require('path');
const https = require('https');

const outputDir = 'D:/jhamnatani_website/jhamtani/public/assets/projects';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imagesToDownload = [
  {
    url: 'https://jhamtani.com/wp-content/uploads/2025/12/ace-abundance-featured-image.jpg',
    filename: 'ace-abundance.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2024/04/Ace-Villa.jpg',
    filename: 'ace-villas.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2024/04/Ace-Atmospere.jpg',
    filename: 'ace-atmosphere.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2025/02/Budget-3-bhk-Apartment-at-ravet-4.jpg',
    filename: 'ace-aster.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2024/04/bizcorelatestbannre-12.jpg',
    filename: 'jhamtani-bizcore.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2025/05/co-living-spaces-at-pune-3.jpg',
    filename: 'jhamtani-elevate.jpg'
  },
  {
    url: 'https://jhamtani.com/wp-content/uploads/2024/04/3371_Baner-Jhamtani_Image_03_02.jpg',
    filename: 'jhamtani-spacebiz.jpg'
  }
];

function downloadImage(url, filename) {
  const filePath = path.join(outputDir, filename);
  const file = fs.createWriteStream(filePath);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}. Status code: ${response.statusCode}`);
      file.close();
      fs.unlinkSync(filePath); // Delete empty file
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
    fs.unlink(filePath, () => {});
  });
}

imagesToDownload.forEach(img => {
  downloadImage(img.url, img.filename);
});
