const fs = require('fs');
const path = require('path');

const dir = 'D:/jhamnatani_website/jhamtani/public/assets/ace-ayodha/gallery';

const mapping = {
  'Children’s Play Garden.jpg': 'childrens-play-garden.jpg',
  'Divine Tranquility.jpeg': 'divine-tranquility.jpeg',
  'The Court in the Sky.jpg': 'the-court-in-the-sky.jpg',
  'The Elegant Kitchen.jpg': 'the-elegant-kitchen.jpg',
  'The Grand Courtyard.jpg': 'the-grand-courtyard.jpg',
  'The Indoor Play Lounge.jpg': 'the-indoor-play-lounge.jpg',
  'The Little Explorers’ Studio.jpg': 'the-little-explorers-studio.jpg',
  'The Living Lounge.jpg': 'the-living-lounge.jpg',
  'The Open-Air Lounge.jpg': 'the-open-air-lounge.jpg',
  'The Wellness Court.jpg': 'the-wellness-court.jpg',
  'The Wellness Studio.jpg': 'the-wellness-studio.jpg'
};

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const targetName = mapping[file];
    if (targetName) {
      const oldPath = path.join(dir, file);
      const newPath = path.join(dir, targetName);
      
      fs.rename(oldPath, newPath, renameErr => {
        if (renameErr) {
          console.error(`Failed to rename ${file}:`, renameErr);
        } else {
          console.log(`Renamed: ${file} -> ${targetName}`);
        }
      });
    } else {
      console.log(`Skipped: ${file}`);
    }
  });
});
