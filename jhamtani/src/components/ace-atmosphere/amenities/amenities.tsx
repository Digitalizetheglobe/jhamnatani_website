"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allAmenities = [
  // Row 1
  { id: 1, name: "Yoga Zone", icon: "aerial-yog" },
  { id: 2, name: "Sky Walks", icon: "seating-area" },
  { id: 3, name: "Japanese Garden", icon: "zen-garden" },
  { id: 4, name: "Open Air Theatres", icon: "amphitheater" },
  { id: 5, name: "Temple", icon: "wellness-area" },
  // Row 2
  { id: 6, name: "Dog Park", icon: "activity-lawns" },
  { id: 7, name: "Party Lawns", icon: "activity-lawns" },
  { id: 8, name: "Zen Garden", icon: "zen-garden" },
  { id: 9, name: "Fountain", icon: "swimming-pool" },
  { id: 10, name: "Sunset Viewing Deck", icon: "open-cafeteria" },
  // Row 3
  { id: 11, name: "Reflexology Path", icon: "acupressure-pathway" },
  { id: 12, name: "Jogging Track", icon: "outdoor-gym" },
  { id: 13, name: "Multipurpose Court", icon: "multipurpose-court" },
  { id: 14, name: "Senior Citizens Park", icon: "seating-area" },
  { id: 15, name: "Library", icon: "lounge" },
  // Row 4
  { id: 16, name: "Gazebos", icon: "community-plaza" },
  { id: 17, name: "Indoor Games", icon: "indoor-games" },
  { id: 18, name: "Amphitheater", icon: "amphitheater" },
  { id: 19, name: "Kids Play Area", icon: "childrens-play-area" },
  { id: 20, name: "Youth Club", icon: "recreational-hall" },
  // Row 5
  { id: 21, name: "Mini Golf", icon: "golf-simulator" },
  { id: 22, name: "Children Forest & Kids Park", icon: "sandpit" },
  { id: 23, name: "Co-Working Space", icon: "lounge" },
];

export default function Amenities() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 12 items on initial load (2 full rows of 6 on desktop), show all 23 on expansion
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
            Curated Spaces for Every Dimension of Life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] leading-relaxed font-light mt-3 max-w-xl"
          >
            From tranquil Japanese and Zen gardens to energetic sports courts, skywalks and co-working spaces, discover thoughtfully crafted amenities for every generation.
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
                  delay: isExpanded && item.id > 12 ? (idx - 12) * 0.02 : 0,
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
