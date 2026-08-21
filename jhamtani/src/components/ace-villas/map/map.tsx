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
    category: "Koregaon Park NX",
    items: [
      {
        name: "North Main Road Avenue",
        distance: "2.5 km",
        time: "6 mins",
        query: "North Main Road, Koregaon Park, Pune",
      },
      {
        name: "Lane 5 & Lane 7 Cultural Hub",
        distance: "3.0 km",
        time: "7 mins",
        query: "Lane 7, Koregaon Park, Pune",
      },
    ],
  },
  {
    category: "Premium Lifestyle Destinations",
    items: [
      {
        name: "Phoenix Marketcity",
        distance: "5.8 km",
        time: "14 mins",
        query: "Phoenix Marketcity, Viman Nagar, Pune",
      },
      {
        name: "Amanora Mall & Town Centre",
        distance: "4.5 km",
        time: "10 mins",
        query: "Amanora Mall, Hadapsar, Pune",
      },
      {
        name: "Seasons Mall",
        distance: "4.2 km",
        time: "10 mins",
        query: "Seasons Mall, Magarpatta, Pune",
      },
    ],
  },
  {
    category: "Leading Educational Institutions",
    items: [
      {
        name: "The Kalyani School",
        distance: "3.8 km",
        time: "8 mins",
        query: "The Kalyani School, Manjri, Pune",
      },
      {
        name: "The Bishop's Co-Ed School",
        distance: "5.5 km",
        time: "12 mins",
        query: "The Bishop's Co-Ed School, Kalyani Nagar, Pune",
      },
      {
        name: "Victorious Kidss Educares",
        distance: "4.0 km",
        time: "9 mins",
        query: "Victorious Kidss Educares, Kharadi, Pune",
      },
    ],
  },
  {
    category: "Healthcare Facilities",
    items: [
      {
        name: "Manipal Hospital (Columbia Asia)",
        distance: "3.5 km",
        time: "8 mins",
        query: "Manipal Hospital Kharadi, Pune",
      },
      {
        name: "Ruby Hall Clinic",
        distance: "6.0 km",
        time: "15 mins",
        query: "Ruby Hall Clinic, Sassoon Road, Pune",
      },
      {
        name: "Jehangir Hospital",
        distance: "6.5 km",
        time: "16 mins",
        query: "Jehangir Hospital, Pune",
      },
    ],
  },
  {
    category: "Dining & Entertainment",
    items: [
      {
        name: "Koregaon Park Fine Dining Corridor",
        distance: "3.0 km",
        time: "7 mins",
        query: "Koregaon Park Restaurants, Pune",
      },
      {
        name: "Kalyani Nagar Waterfront Cafes",
        distance: "4.0 km",
        time: "9 mins",
        query: "Kalyani Nagar, Pune",
      },
      {
        name: "High Street Lounges & Bistros",
        distance: "3.2 km",
        time: "8 mins",
        query: "Koregaon Park Annexe, Pune",
      },
    ],
  },
  {
    category: "Everyday Conveniences",
    items: [
      {
        name: "Nature's Basket & Gourmet Mart",
        distance: "2.8 km",
        time: "6 mins",
        query: "Nature's Basket Koregaon Park, Pune",
      },
      {
        name: "Mundhwa Commercial Hub",
        distance: "1.5 km",
        time: "4 mins",
        query: "Mundhwa, Pune",
      },
      {
        name: "Premium Supermarkets & Essentials",
        distance: "2.0 km",
        time: "5 mins",
        query: "Mundhwa Chowk, Pune",
      },
    ],
  },
  {
    category: "Well-Connected City Access",
    items: [
      {
        name: "Magarpatta Cybercity",
        distance: "4.5 km",
        time: "10 mins",
        query: "Magarpatta Cybercity, Hadapsar, Pune",
      },
      {
        name: "Kalyani Nagar Bridge Connection",
        distance: "3.5 km",
        time: "7 mins",
        query: "Kalyani Nagar Bridge, Pune",
      },
      {
        name: "Pune International Airport",
        distance: "8.0 km",
        time: "18 mins",
        query: "Pune International Airport, Lohegaon, Pune",
      },
      {
        name: "Pune Railway Station",
        distance: "7.2 km",
        time: "16 mins",
        query: "Pune Railway Station, Pune",
      },
    ],
  },
  {
    category: "Private Villa Precinct",
    items: [
      {
        name: "Ace Villas Estate Setting",
        distance: "0.0 km",
        time: "0 mins",
        query: "Ace Villas by JHAMTANI, Koregaon Park NX, Pune",
      },
      {
        name: "Secluded Green Surroundings",
        distance: "0.5 km",
        time: "2 mins",
        query: "Mundhwa, Koregaon Park NX, Pune",
      },
    ],
  },
];

export default function MapSection() {
  const [expandedCategory, setExpandedCategory] = useState("Koregaon Park NX");
  const [selectedItem, setSelectedItem] = useState<LocationItem | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? "" : categoryName);
  };

  const handleItemSelect = (item: LocationItem) => {
    if (selectedItem?.name === item.name) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  // Construct Google Maps search embed URL for the selected location or project only
  const getMapEmbedUrl = () => {
    if (!selectedItem) {
      // Direct high-resolution street/neighborhood view centered on Ace Villas by JHAMTANI
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.54807490616!2d73.910938!3d18.533687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c197e132ee47%3A0x288c0153695d0900!2sAce%20Villas%20by%20JHAMTANI!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin";
    }

    // Interactive State: Show dynamic route directions
    const originAddress = "Ace Villas by JHAMTANI, Koregaon Park NX, Pune";
    return `https://maps.google.com/maps?saddr=${encodeURIComponent(originAddress)}&daddr=${encodeURIComponent(selectedItem.query)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  };

  return (
    <section className="relative w-full bg-[#191F26] pt-20 select-none overflow-hidden">
      {/* Scrollbar style for accordion */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-map-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-map-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        .custom-map-scrollbar::-webkit-scrollbar-thumb {
          background: #A0725B;
          border-radius: 4px;
        }
      `}} />

      {/* Header Block */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="max-w-3xl text-left px-6 sm:px-12 lg:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Privately Placed. Effortlessly Connected
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-[#EEEBE7] leading-relaxed mt-4 max-w-xl"
          >
            Set in Koregaon Park NX, Ace Villas offers the rare advantage of a discreet villa precinct with the city’s lifestyle and everyday conveniences close at hand.
          </motion.p>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="relative w-full flex flex-col md:block">
        {/* Full-Bleed Map Container */}
        <div className="relative w-full h-[360px] sm:h-[460px] md:h-[620px] lg:h-[680px] bg-zinc-950 overflow-hidden">
          {/* Google Maps Styled Dark Iframe */}
          <iframe
            key={selectedItem ? selectedItem.name : "project-only"}
            src={getMapEmbedUrl()}
            className="absolute inset-0 w-full h-full border-0 opacity-85"
            style={{
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(110%)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#191F26] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#191F26]/40 to-transparent pointer-events-none z-10" />

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
        <div className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:right-10 lg:right-16 z-30 md:w-[360px] lg:w-[380px] max-h-[88%] flex flex-col bg-[#F5F2EC] text-zinc-800 p-5 sm:p-6 shadow-2xl md:border md:border-white/10 rounded-sm">
          {/* Active Mode Tag */}
          <div className="text-[10px] uppercase tracking-[0.1em] text-[#A0725B] font-bold mb-2.5 border-b border-[#A0725B]/20 pb-2 shrink-0">
            {!selectedItem ? "Showing: Ace Villas Location" : "Showing: Connection Route"}
          </div>

          {/* Scrollable category list */}
          <div className="flex-1 overflow-y-auto custom-map-scrollbar pr-1 flex flex-col gap-0.5">
            {locationsData.map((group, idx) => (
              <div key={idx} className="border-b border-[#A0725B]/20 last:border-b-0">
                {/* Category Header */}
                <button
                  onClick={() => handleCategoryClick(group.category)}
                  className="w-full flex justify-between items-center py-2.5 text-left outline-none cursor-pointer group"
                >
                  <span className="font-serif font-light text-[15px] sm:text-[16px] text-[#A0725B] group-hover:text-zinc-900 transition-colors tracking-wide">
                    {group.category}
                  </span>
                  {expandedCategory === group.category ? (
                    <ChevronUp className="w-4 h-4 text-[#A0725B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#A0725B] shrink-0" />
                  )}
                </button>

                {/* Accordion Expand Area */}
                <AnimatePresence initial={false}>
                  {expandedCategory === group.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2.5 flex flex-col gap-1">
                        {group.items.map((item, itemIdx) => {
                          const isSelected = selectedItem?.name === item.name;
                          return (
                            <button
                              key={itemIdx}
                              onClick={() => handleItemSelect(item)}
                              className={`w-full flex justify-between items-center py-1.5 px-2.5 text-left transition-all duration-200 rounded-[2px] outline-none cursor-pointer ${
                                isSelected
                                  ? "bg-[#A0725B]/15 text-[#A0725B] font-medium"
                                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50"
                              }`}
                            >
                              <span className="text-[12.5px] sm:text-[13px] leading-tight">
                                {item.name}
                              </span>
                              <span
                                className={`text-[11.5px] pl-2 whitespace-nowrap shrink-0 ${
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
                  detail: { project: "ACE Villas" },
                });
                window.dispatchEvent(event);
              } else {
                const dest = selectedItem.query;
                window.open(
                  `https://www.google.com/maps/dir/Ace+Villas+by+JHAMTANI,+Koregaon+Park+NX,+Pune/${encodeURIComponent(dest)}`,
                  "_blank"
                );
              }
            }}
            className="w-full mt-3.5 shrink-0 border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white rounded-full py-2 text-xs sm:text-sm tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(160,114,91,0.15)] active:scale-95"
          >
            {!selectedItem ? " Explore Location " : "Open Driving Directions"}
          </button>
        </div>
      </div>
    </section>
  );
}
