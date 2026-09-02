"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allAmenities = [
  // Row 1
  { id: 1, name: "Main Entry Gateway", icon: "Main Entry Gateway" },
  { id: 2, name: "Kids Pool", icon: "kids-pool" },
  { id: 3, name: "Kids Play Area With Pebble Pathway", icon: "childrens-play-area" },
  { id: 4, name: "Jogging Track", icon: "Jogging Track" },
  { id: 5, name: "Water Body", icon: "Fountain" },
  { id: 6, name: "Feature Wall", icon: "Feature Wall" },

  // Row 2
  { id: 7, name: "Toilet", icon: "Toilet" },
  { id: 8, name: "Security Cabin", icon: "Security Cabin" },
  { id: 9, name: "BBQ Areas", icon: "BBQ Areas" },
  { id: 10, name: "Aster Garden", icon: "zen-garden" },
  { id: 11, name: "Gazebo Seating", icon: "Gazebo Seating" },
  { id: 12, name: "Swimming Pool With Deck", icon: "swimming-pool" },

  // Row 3
  { id: 13, name: "Lawn Pickleball Court", icon: "Lawn Pickleball Court" },
  { id: 14, name: "Changing Room And Toilet", icon: "Changing Room and Toilet" },
  { id: 15, name: "Peripheral Liner Garden", icon: "activity-lawns" },
  { id: 16, name: "Fire Tender Driveway With Paving Patterns", icon: "Fire Tender Driveway with Paving Patterns" },
  { id: 17, name: "Advertisement Panels", icon: "Advertisement PanelsTender Driveway with Paving Patterns" },
  { id: 18, name: "Rock Climbing Wall With Sand Pit", icon: "rock-climbing-wall" },

  // Row 4
  { id: 19, name: "Rest Room", icon: "Rest Room" },
  { id: 20, name: "Senior Citizen Area", icon: "Senior Citizen Area" },
  { id: 21, name: "Yoga Zumba", icon: "zumba-aerobics-area" },
  { id: 22, name: "Viewing Deck", icon: "Viewing Deck" },
  { id: 23, name: "Reading Corner", icon: "lounge" },
  { id: 24, name: "Reflexology Pathway", icon: "acupressure-pathway" },

  // Row 5
  { id: 25, name: "Working Zone", icon: "Working ZoneCorner" },
  { id: 26, name: "Game Board", icon: "indoor-games" },
  { id: 27, name: "Pergola Seating", icon: "Pergola Seating" },
  { id: 28, name: "Zen Garden", icon: "zen-garden" },
  { id: 29, name: "Club House", icon: "Club House" },
  { id: 30, name: "Multipurpose Hall", icon: "Multipurpose Hall" },

  // Row 6
  { id: 31, name: "Indoor Play Area", icon: "indoor-games" },
  { id: 32, name: "Pantry", icon: "Pantry" },
  { id: 33, name: "AC Gym", icon: "ac-gym" },
  { id: 34, name: "Steam/ Sauna (M/F)", icon: "Steam & Sauna" },
  { id: 35, name: "Outdoor Cafe Seating", icon: "open-cafeteria" },
  { id: 36, name: "Library With Cafe", icon: "Library with Cafe" },

  // Row 7
  { id: 37, name: "Society Office", icon: "Society Office" },
  { id: 38, name: "Temple", icon: "Temple" },
  { id: 39, name: "Swing Plaza", icon: "childrens-play-area" },
  { id: 40, name: "Cricket Practice Pitch", icon: "box-cricket" },
];

export default function Amenities() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 12 items on initial load (2 full rows of 6 on desktop), show all 40 on expansion
  const visibleAmenities = isExpanded ? allAmenities : allAmenities.slice(0, 12);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smooth scroll back to the top of the amenities section
      const section = document.getElementById("amenities");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="amenities" className="relative w-full bg-[#FFFFFF] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Style block for transitioning black SVG icons to brand gold (#A0725B) on hover */}
        <style dangerouslySetInnerHTML={{__html: `
          .amenity-icon {
            transition: filter 0.3s ease, transform 0.5s ease-out;
          }
          .group:hover .amenity-icon {
            filter: invert(53%) sepia(16%) saturate(1212%) hue-rotate(338deg) brightness(91%) contrast(85%) !important;
          }
        `}} />

        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Amenities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] font-light tracking-[0.1em] mt-6 leading-none"
          >
            Everyday Life, Thoughtfully Enriched.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] leading-relaxed font-light mt-3 max-w-xl"
          >
            A diverse range of indoor and outdoor experiences brings recreation, wellness, work and community life closer to home.
          </motion.p>
        </div>

        {/* Amenities Responsive Grid - 5 to 6 columns on large screens */}
        <motion.div
          layout="position"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {visibleAmenities.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isExpanded && item.id > 12 ? (idx - 12) * 0.015 : 0,
                }}
                className="flex flex-col items-center text-center gap-3 group cursor-pointer w-full"
              >
                {/* Icon Wrapper - centered on top */}
                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/assets/icon/${item.icon}.svg`}
                    alt={item.name}
                    width={50}
                    height={50}
                    quality={95}
                    className="object-contain group-hover:scale-110 group-hover:rotate-3 amenity-icon"
                  />
                </div>

                {/* Amenity Name Label - centered on bottom in all caps */}
                <span className="font-sans font-semibold text-[11px] sm:text-[13px] lg:text-[14px] tracking-[0.08em] text-[#A0725B] uppercase leading-tight mt-1 max-w-[160px] transition-colors duration-300 group-hover:text-zinc-800">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Button Container */}
        <motion.div
          layout="position"
          className="mt-16 lg:mt-24 flex justify-center"
        >
          <button
            onClick={handleToggle}
            className="group border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white rounded-full px-8 py-2.5 text-xs sm:text-sm tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(160,114,91,0.2)] active:scale-95"
          >
            {isExpanded ? "Show Less" : "View All Amenities"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
