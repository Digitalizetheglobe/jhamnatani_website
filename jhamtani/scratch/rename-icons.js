const fs = require('fs');
const path = require('path');

const dir = 'D:/jhamnatani_website/jhamtani/public/assets/icon';

const mapping = {
  'AC Gym.svg': 'ac-gym.svg',
  'Activity Lawns.svg': 'activity-lawns.svg',
  'Acupressure Pathway.svg': 'acupressure-pathway.svg',
  'Aerial Yog.svg': 'aerial-yog.svg',
  'Amphitheater.svg': 'amphitheater.svg',
  'Box Cricket.svg': 'box-cricket.svg',
  'Cafeteria.svg': 'cafeteria.svg',
  'Charche.svg': 'creche.svg', // Renaming "Charche" to "creche"
  "Children's Play Area.svg": 'childrens-play-area.svg', // Remove apostrophe
  'Community Plaza.svg': 'community-plaza.svg',
  'Golf Simulator.svg': 'golf-simulator.svg',
  'Indoor Games.svg': 'indoor-games.svg',
  'Kids Pool.svg': 'kids-pool.svg',
  'Lounge.svg': 'lounge.svg',
  'Multipurpose Court.svg': 'multipurpose-court.svg',
  'Open Cafeteria.svg': 'open-cafeteria.svg',
  'Outdoor Gym.svg': 'outdoor-gym.svg',
  'Pickleball Court.svg': 'pickleball-court.svg',
  'Poker.svg': 'poker.svg',
  'Pool Table.svg': 'pool-table.svg',
  'Recreational Hall.svg': 'recreational-hall.svg',
  'Rock Climbing Wall.svg': 'rock-climbing-wall.svg',
  'Scribbling Wall.svg': 'scribbling-wall.svg',
  'Seating Area.svg': 'seating-area.svg',
  'Squash Court.svg': 'squash-court.svg',
  'Swimming Pool.svg': 'swimming-pool.svg',
  'Table Tennis.svg': 'table-tennis.svg',
  'Video Game Zone.svg': 'video-game-zone.svg',
  'Wellness Area.svg': 'wellness-area.svg',
  'Zen Garden.svg': 'zen-garden.svg',
  'Zumba & Aerobics AreaArea.svg': 'zumba-aerobics-area.svg', // Fix double Area
  'sandpit.svg': 'sandpit.svg'
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
      console.log(`Skipped (not in mapping): ${file}`);
    }
  });
});
