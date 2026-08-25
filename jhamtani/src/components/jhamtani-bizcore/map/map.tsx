"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface LocationItem {
  name: string;
  distance: string;
  time: string;
  lat: number;
  lng: number;
  query: string;
}

interface LocationGroup {
  category: string;
  items: LocationItem[];
}

const PROJECT_COORDS: [number, number] = [18.5368, 73.9110];

const locationsData: LocationGroup[] = [
  {
    category: "Within 2 km",
    items: [
      {
        name: "Westin Hotel",
        distance: "1.2 km",
        time: "3 mins",
        lat: 18.5393,
        lng: 73.9056,
        query: "The Westin Pune Koregaon Park",
      },
      {
        name: "Passport Office",
        distance: "1.5 km",
        time: "4 mins",
        lat: 18.5348,
        lng: 73.921,
        query: "Passport Seva Kendra, Mundhwa, Pune",
      },
    ],
  },
  {
    category: "Within 4 km",
    items: [
      {
        name: "Koregaon Park",
        distance: "2.8 km",
        time: "7 mins",
        lat: 18.5362,
        lng: 73.894,
        query: "Koregaon Park, Pune",
      },
      {
        name: "Magarpatta City",
        distance: "3.2 km",
        time: "8 mins",
        lat: 18.5144,
        lng: 73.9288,
        query: "Magarpatta City, Hadapsar, Pune",
      },
      {
        name: "Seasons Mall",
        distance: "3.4 km",
        time: "9 mins",
        lat: 18.5186,
        lng: 73.9312,
        query: "Seasons Mall, Magarpatta City, Pune",
      },
    ],
  },
  {
    category: "Within 6 km",
    items: [
      {
        name: "EON IT Park",
        distance: "4.8 km",
        time: "12 mins",
        lat: 18.5516,
        lng: 73.9515,
        query: "EON Free Zone, Kharadi, Pune",
      },
      {
        name: "World Trade Center",
        distance: "5.0 km",
        time: "13 mins",
        lat: 18.5528,
        lng: 73.9502,
        query: "World Trade Center Pune, Kharadi, Pune",
      },
      {
        name: "Pune Airport",
        distance: "5.5 km",
        time: "14 mins",
        lat: 18.5822,
        lng: 73.9197,
        query: "Pune International Airport, Lohegaon, Pune",
      },
    ],
  },
];

export default function MapSection() {
  const [expandedCategory, setExpandedCategory] = useState("Within 2 km");
  const [selectedItem, setSelectedItem] = useState<LocationItem | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const projectMarkerRef = useRef<any>(null);
  const selectedMarkerRef = useRef<any>(null);
  const polylineRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (typeof window === "undefined" || !mapContainerRef.current) return;
      const L = (await import("leaflet")).default;

      if (!isMounted) return;

      if (!mapInstanceRef.current && mapContainerRef.current) {
        // Initialize Map
        const map = L.map(mapContainerRef.current, {
          center: PROJECT_COORDS,
          zoom: 14,
          zoomControl: false,
          attributionControl: false,
        });

        // Add Dark Matter / CartoDB Dark Tiles (clean roads & water with zero commercial POIs/ad labels)
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png", {
          subdomains: "abcd",
          maxZoom: 19,
        }).addTo(map);

        // Zoom control in top-left
        L.control.zoom({ position: "topleft" }).addTo(map);

        // Project Custom Pin Icon
        const projectPinHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
            <div style="background:rgba(25,31,38,0.95);border:1px solid #A0725B;color:#FFFFFF;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 4px 15px rgba(0,0,0,0.5);margin-bottom:6px;font-family:sans-serif;letter-spacing:0.04em;">
              Jhamtani Bizcore
            </div>
            <div style="position:relative;width:24px;height:24px;background:#A0725B;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #FFFFFF;box-shadow:0 0 15px rgba(160,114,91,0.8);">
              <div style="width:8px;height:8px;background:#FFFFFF;border-radius:50%;"></div>
            </div>
          </div>
        `;

        const projectIcon = L.divIcon({
          html: projectPinHtml,
          className: "custom-project-pin",
          iconSize: [140, 60],
          iconAnchor: [70, 55],
        });

        const projectMarker = L.marker(PROJECT_COORDS, { icon: projectIcon }).addTo(map);
        projectMarkerRef.current = projectMarker;
        mapInstanceRef.current = map;
      }
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map when selectedItem changes
  useEffect(() => {
    async function updateMapMarkers() {
      if (!mapInstanceRef.current) return;
      const L = (await import("leaflet")).default;
      const map = mapInstanceRef.current;

      // Remove previous selected marker and route
      if (selectedMarkerRef.current) {
        map.removeLayer(selectedMarkerRef.current);
        selectedMarkerRef.current = null;
      }
      if (polylineRef.current) {
        map.removeLayer(polylineRef.current);
        polylineRef.current = null;
      }

      if (!selectedItem) {
        // Fly back to project location
        map.flyTo(PROJECT_COORDS, 14, { duration: 1.2 });
      } else {
        // Create selected location pin
        const targetPinHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;">
            <div style="background:#A0725B;color:#FFFFFF;padding:4px 10px;border-radius:4px;font-size:11px;font-weight:600;white-space:nowrap;box-shadow:0 4px 15px rgba(0,0,0,0.5);margin-bottom:6px;font-family:sans-serif;letter-spacing:0.04em;">
              ${selectedItem.name} (${selectedItem.distance})
            </div>
            <div style="position:relative;width:22px;height:22px;background:#FFFFFF;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #A0725B;box-shadow:0 0 15px rgba(255,255,255,0.8);">
              <div style="width:7px;height:7px;background:#A0725B;border-radius:50%;"></div>
            </div>
          </div>
        `;

        const targetIcon = L.divIcon({
          html: targetPinHtml,
          className: "custom-target-pin",
          iconSize: [160, 60],
          iconAnchor: [80, 55],
        });

        const targetMarker = L.marker([selectedItem.lat, selectedItem.lng], { icon: targetIcon }).addTo(map);
        selectedMarkerRef.current = targetMarker;

        // Draw clean connecting line between Jhamtani Bizcore and selected location
        const line = L.polyline([PROJECT_COORDS, [selectedItem.lat, selectedItem.lng]], {
          color: "#A0725B",
          weight: 2.5,
          dashArray: "6, 8",
          opacity: 0.85,
        }).addTo(map);
        polylineRef.current = line;

        // Fit bounds to show both pins comfortably
        const bounds = L.latLngBounds([PROJECT_COORDS, [selectedItem.lat, selectedItem.lng]]);
        map.flyToBounds(bounds, {
          padding: [80, 80],
          duration: 1.2,
          maxZoom: 15,
        });
      }
    }

    updateMapMarkers();
  }, [selectedItem]);

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

  return (
    <section className="relative w-full bg-[#191F26] pt-20 select-none overflow-hidden">
      {/* Header Block */}
      <div className="max-w-6xl mx-auto mb-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-3xl text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide max-w-xl"
          >
            At the Centre of Urban Opportunity.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-[#EEEBE7] leading-relaxed mt-4 max-w-2xl"
          >
            Located in Koregaon Park NX, BizCore offers convenient access to prominent business, lifestyle and commercial destinations across East Pune.
          </motion.p>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="relative w-full flex flex-col md:block">
        {/* Clean Interactive Leaflet Map */}
        <div className="relative w-full h-[360px] sm:h-[450px] md:h-[600px] lg:h-[700px] bg-[#14191F] overflow-hidden">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Vignette Gradients */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#191F26] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#191F26]/60 to-transparent pointer-events-none z-10" />

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

        {/* Accordion List Panel - Glassmorphism Effect */}
        <div className="w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 lg:right-16 z-30 md:w-[360px] bg-[#191F26]/75 backdrop-blur-xl border border-white/20 text-white p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-sm">
          {/* Active Mode Tag */}
          <div className="text-[10px] uppercase tracking-[0.1em] text-[#C5A880] font-bold mb-3 border-b border-white/15 pb-2 flex items-center justify-between">
            <span>{!selectedItem ? "Showing: Project Location" : `Showing: ${selectedItem.name}`}</span>
            <span className="w-2 h-2 rounded-full bg-[#A0725B] animate-pulse" />
          </div>

          <div className="flex flex-col gap-1">
            {locationsData.map((group, idx) => (
              <div key={idx} className="border-b border-white/10 last:border-b-0">
                {/* Category Header */}
                <button
                  onClick={() => handleCategoryClick(group.category)}
                  className="w-full flex justify-between items-center py-4 text-left outline-none cursor-pointer group"
                >
                  <span className="font-serif font-light text-[17px] sm:text-[18px] text-[#E5D2B8] group-hover:text-white transition-colors tracking-wide">
                    {group.category}
                  </span>
                  {expandedCategory === group.category ? (
                    <ChevronUp className="w-4 h-4 text-[#C5A880]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white" />
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
                                  ? "bg-[#A0725B]/30 text-[#E5D2B8] border border-[#A0725B]/50 font-semibold shadow-sm"
                                  : "text-zinc-300 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              <span className="text-[13px] sm:text-[14px]">
                                {item.name}
                              </span>
                              <span
                                className={`text-[12px] pl-3 whitespace-nowrap ${
                                  isSelected ? "text-[#E5D2B8] font-semibold" : "text-zinc-400"
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
                const event = new CustomEvent("open-enquiry", {
                  detail: { project: "Jhamtani Bizcore (Location)" },
                });
                window.dispatchEvent(event);
              } else {
                const dest = selectedItem.query;
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest)}`,
                  "_blank"
                );
              }
            }}
            className="w-full mt-6 border border-[#A0725B] text-white hover:bg-[#A0725B] hover:text-white rounded-full py-2.5 text-xs sm:text-sm tracking-wide bg-white/5 backdrop-blur-sm cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(160,114,91,0.3)] active:scale-95"
          >
            {!selectedItem ? "Explore Location" : "Open in Google Maps"}
          </button>
        </div>
      </div>
    </section>
  );
}
