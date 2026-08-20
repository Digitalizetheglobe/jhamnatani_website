"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LocationItem {
  name: string;
  distance: string;
  time: string;
  query: string;
}

interface LocationGroup {
  category: string;
  items: LocationItem[];
}

const locationsData: LocationGroup[] = [
  {
    category: "Hospital",
    items: [
      {
        name: "Manipal Hospital, Kharadi",
        distance: "3.5 km",
        time: "9 mins",
        query: "Manipal Hospital, Kharadi, Pune",
      },
    ],
  },
  {
    category: "School",
    items: [
      {
        name: "The Orbis School",
        distance: "1.8 km",
        time: "5 mins",
        query: "The Orbis School, Keshav Nagar, Mundhwa, Pune",
      },
    ],
  },
  {
    category: "Mall & Hospitality",
    items: [
      {
        name: "Seasons Mall",
        distance: "2.2 km",
        time: "6 mins",
        query: "Seasons Mall, Magarpatta, Hadapsar, Pune",
      },
      {
        name: "Amanora Mall",
        distance: "2.3 km",
        time: "6 mins",
        query: "Amanora Mall, Hadapsar, Pune",
      },
      {
        name: "The Westin",
        distance: "3 km",
        time: "8 mins",
        query: "The Westin Pune Koregaon Park",
      },
    ],
  },
  {
    category: "Key Landmarks & Transit",
    items: [
      {
        name: "Hadapsar Railway Station",
        distance: "0.5 km",
        time: "2 mins",
        query: "Hadapsar Railway Station, Pune",
      },
      {
        name: "Kalyani Nagar Metro Station",
        distance: "4 km",
        time: "10 mins",
        query: "Kalyani Nagar Metro Station, Pune",
      },
      {
        name: "Pune Airport",
        distance: "7.5 km",
        time: "18 mins",
        query: "Pune International Airport, Lohegaon, Pune",
      },
    ],
  },
];

export default function MapSection() {
  const [expandedCategory, setExpandedCategory] = useState("Hospital");
  const [selectedItem, setSelectedItem] = useState<LocationItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? "" : categoryName);
  };

  const handleItemSelect = (item: LocationItem) => {
    // Toggle selection: if clicked again, deselect and return to project-only view
    if (selectedItem?.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  // Construct Google Maps search embed URL for the selected location or project only
  const getMapEmbedUrl = () => {
    if (!selectedItem) {
      // 1. Initial State: Official Ace Abundance Google Maps Embed
      return "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121053.62412593063!2d73.928572!3d18.532257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10077a27bf5%3A0xe4ff761fd9e4426a!2sAce%20Abundance!5e0!3m2!1sen!2sus!4v1787208176730!5m2!1sen!2sus";
    }

    // 2. Interactive State: Show dynamic route directions from Ace Abundance coordinates
    const originCoords = "18.532257,73.928572";
    return `https://maps.google.com/maps?saddr=${encodeURIComponent(originCoords)}&daddr=${encodeURIComponent(selectedItem.query)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <section className="relative w-full bg-[#191F26] pt-20 select-none overflow-hidden">
      {/* Header Block */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="max-w-3xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide max-w-xl"
          >
            At the Heart of Access. Away from the Rush.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-[#EEEBE7] leading-relaxed mt-4 max-w-2xl"
          >
            Ace Abundance places some of East Pune’s most prominent lifestyle, mobility and everyday <br className="hidden sm:inline" /> destinations within easy reach.
          </motion.p>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="relative w-full flex flex-col md:block">
        {/* Full-Bleed Map Container with CSS Cropping to hide Google Top-Left Card */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[600px] lg:h-[700px] bg-zinc-950 overflow-hidden">
          {/* Google Maps Styled Dark Iframe - Shifted up to crop out Google top-left card */}
          <iframe
            key={selectedItem ? selectedItem.name : "project-only"}
            src={getMapEmbedUrl()}
            className="absolute -top-[190px] -left-[10px] w-[calc(100%+20px)] h-[calc(100%+205px)] border-0 opacity-90"
            style={{
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(110%)",
            }}
            allowFullScreen
            loading="lazy"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#191F26] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#191F26]/30 to-transparent pointer-events-none z-10" />

          {/* Dynamic Distance Overlay Card */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-6 left-6 z-40 bg-[#191F26]/95 border border-[#A0725B]/40 text-white p-5 shadow-2xl rounded-sm w-[260px] sm:w-[280px]"
              >
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#A0725B] font-semibold mb-1">
                  Distance from Project
                </div>
                <h4 className="font-serif text-[16px] sm:text-[18px] text-white leading-tight mb-3">
                  {selectedItem.name}
                </h4>
                <div className="flex items-end justify-between border-t border-white/10 pt-3">
                  <div>
                    <span className="text-[26px] sm:text-[28px] font-bold text-[#A0725B] leading-none font-sans">
                      {selectedItem.distance}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-zinc-400">Est. Travel Time</span>
                    <span className="text-[12px] text-zinc-200 font-medium">~ {selectedItem.time}</span>
                  </div>
                </div>

                {/* Reset Map Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-[11px] py-2 transition-colors cursor-pointer select-none rounded-[2px]"
                >
                  Show Project Location Only
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Accordion List Panel */}
        <div className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 lg:right-16 z-30 md:w-[360px] bg-[#F5F2EC] text-zinc-800 p-6 sm:p-8 shadow-2xl md:border md:border-white/10">
          {/* Active Mode Tag */}
          <div className="text-[10px] uppercase tracking-[0.1em] text-[#A0725B] font-bold mb-3 border-b border-[#A0725B]/20 pb-2">
            {!selectedItem ? "Showing: Project Location" : "Showing: Connection Route"}
          </div>

          <div className="flex flex-col gap-1">
            {locationsData.map((group, idx) => (
              <div key={idx} className="border-b border-[#A0725B]/20 last:border-b-0">
                {/* Category Header */}
                <button
                  onClick={() => handleCategoryClick(group.category)}
                  className="w-full flex justify-between items-center py-4 text-left outline-none cursor-pointer"
                >
                  <span className="font-serif font-light text-[17px] sm:text-[18px] text-[#A0725B] tracking-wide">
                    {group.category}
                  </span>
                  {expandedCategory === group.category ? (
                    <ChevronUp className="w-4 h-4 text-[#A0725B]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A0725B]" />
                  )}
                </button>

                {/* Accordion Expand Area */}
                <AnimatePresence initial={false}>
                  {expandedCategory === group.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 flex flex-col gap-1.5">
                        {group.items.map((item, itemIdx) => {
                          const isSelected = selectedItem?.name === item.name;
                          return (
                            <button
                              key={itemIdx}
                              onClick={() => handleItemSelect(item)}
                              className={`w-full flex justify-between items-center py-2 px-3 text-left transition-all duration-300 rounded-[2px] outline-none cursor-pointer ${
                                isSelected
                                  ? "bg-[#A0725B]/10 text-[#A0725B] font-medium"
                                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/40"
                              }`}
                            >
                              <span className="text-[13px] sm:text-[14px]">
                                {item.name}
                              </span>
                              <span
                                className={`text-[12px] pl-3 whitespace-nowrap ${
                                  isSelected ? "text-[#A0725B] font-semibold" : "text-zinc-400"
                                }`}
                              >
                                {item.distance}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Explore Location Action Button */}
          <button
            onClick={() => {
              if (!selectedItem) {
                // Dispatch custom event to trigger enquiry modal
                const event = new CustomEvent("open-enquiry", {
                  detail: { project: "Ace Abundance" },
                });
                window.dispatchEvent(event);
              } else {
                const dest = selectedItem.query;
                window.open(
                  `https://www.google.com/maps/dir/18.532257,73.928572/${encodeURIComponent(dest)}`,
                  "_blank"
                );
              }
            }}
            className="w-full mt-6 border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white rounded-full py-2.5 text-xs sm:text-sm tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(160,114,91,0.15)] active:scale-95"
          >
            {!selectedItem ? " Explore Location " : "Open Driving Directions"}
          </button>
        </div>
      </div>
    </section>
  );
}
