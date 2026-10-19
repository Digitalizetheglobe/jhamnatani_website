"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allAmenities = [
  // Commercial Amenities
  { id: 1, name: "Grand Entrance Lobby", icon: "Main Entry Gateway", type: "root" },
  { id: 2, name: "Meeting & Conference Rooms", icon: "Board Room", type: "root" },
  { id: 3, name: "Open-Air 6th Floor Deck", icon: "Viewing Deck", type: "root" },
  { id: 4, name: "Breakout Zones & Lounges", icon: "lounge", type: "root" },
  { id: 5, name: "Double-Height Retail", icon: "Working ZoneCorner", type: "root" },
  { id: 6, name: "Co-Working Hub", icon: "Co-working Space", type: "root" },

  // Row 2
  { id: 7, name: "24/7 Security & CCTV", icon: "24-7-security", type: "bizcore" },
  { id: 8, name: "Smart Access Control", icon: "access-control-entry", type: "bizcore" },
  { id: 9, name: "100% DG Power Backup", icon: "generator-backup", type: "bizcore" },
  { id: 10, name: "High-Speed Wi-Fi Ready", icon: "high-speed-wifi", type: "bizcore" },
  { id: 11, name: "Terrace Dining & Café", icon: "dining-area-with-cafe", type: "bizcore" },
  { id: 12, name: "Executive Fitness Zone", icon: "state-of-the-art-gym", type: "bizcore" },

  // Row 3 (Expandable)
  { id: 13, name: "Multi-Level Parking", icon: "Fire Tender Driveway with Paving Patterns", type: "root" },
  { id: 14, name: "High-Speed Elevators", icon: "Advertisement PanelsTender Driveway with Paving Patterns", type: "root" },
  { id: 15, name: "EV Charging Infrastructure", icon: "Main Entry Gateway", type: "root" },
  { id: 16, name: "Fire Fighting & Safety", icon: "Fire Tender Driveway with Paving Patterns", type: "root" },
  { id: 17, name: "Waiting Lounge for Guests", icon: "reception-waiting-lounge", type: "bizcore" },
  { id: 18, name: "Dedicated Pantry Areas", icon: "Pantry", type: "root" },
];

export default function Amenities() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 12 items initially, show all on expand
  const visibleAmenities = isExpanded ? allAmenities : allAmenities.slice(0, 12);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const section = document.getElementById("amenities");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="amenities" className="relative w-full bg-[#FFFFFF] py-20 lg:py-28 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16">
        {/* Style block for transitioning SVG icons to brand gold (#A0725B) on hover */}
        <style dangerouslySetInnerHTML={{__html: `
          .amenity-icon-biz {
            transition: filter 0.3s ease, transform 0.5s ease-out;
          }
          .group:hover .amenity-icon-biz {
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
            className="font-sans text-[13px] sm:text-[14px] text-[#000] font-medium tracking-[0.08em] mt-6 leading-none uppercase"
          >
            Built for Ambition, Efficiency & Comfort.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed font-light mt-3 max-w-xl"
          >
            From Italian marble lobbies to an open-air 6th floor terrace deck, every facility is tailored to boost productivity and provide an exceptional client impression.
          </motion.p>
        </div>

        {/* Amenities Responsive Grid */}
        <motion.div
          layout="position"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10"
        >
          <AnimatePresence mode="popLayout">
            {visibleAmenities.map((item, idx) => {
              const iconSrc = item.type === "bizcore"
                ? `/assets/icon/bizcore/${item.icon}.svg`
                : `/assets/icon/${item.icon}.svg`;

              return (
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
                  {/* Icon Wrapper */}
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={iconSrc}
                      alt={item.name}
                      width={48}
                      height={48}
                      quality={95}
                      className="object-contain group-hover:scale-110 group-hover:rotate-3 amenity-icon-biz"
                    />
                  </div>

                  {/* Amenity Name Label */}
                  <span className="font-sans font-semibold text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.06em] text-[#A0725B] uppercase leading-tight mt-1 max-w-[150px] transition-colors duration-300 group-hover:text-zinc-900">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
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
