"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

// Types
interface Project {
  name: string;
  image: string;
  category: string;
  details?: string;
  link: string;
}

interface LocationData {
  id: string;
  name: string;
  x: number;
  y: number;
  zone: "central" | "west" | "east" | "upcoming";
  projects: Project[];
}

interface BgDot {
  id: string;
  name: string;
  x: number;
  y: number;
}

// Interactive locations with active projects & real images
const LOCATIONS_DATA: LocationData[] = [
  {
    id: "thergaon",
    name: "Thergaon",
    x: 33,
    y: 44,
    zone: "west",
    projects: [
      {
        name: "Ace Ayodhya",
        image: "/assets/map/thergaon.png",
        category: "Premium 2 & 3 BHK Homes",
        details: "Ace Ayodhya in Thergaon - Luxurious modern residential residences with world-class amenities.",
        link: "/ace-ayodha",
      }
    ]
  },
  {
    id: "ravet",
    name: "Ravet",
    x: 39,
    y: 44,
    zone: "west",
    projects: [
      {
        name: "ACE ATMOSPHERE",
        image: "/assets/map/ravet-1.png",
        category: "Premium 3 & 4 BHK Homes",
        details: "Luxurious homes in the heart of Ravet featuring 24x7 lifestyle amenities.",
        link: "/ace-atmosphere",
      },
      {
        name: "Ace Aster",
        image: "/assets/map/ravet-2.png",
        category: "Spacious 2 & 3 BHK Homes",
        details: "Elevated lifestyles with high-rise residences designed for modern convenience.",
        link: "/ace-aster",
      }
    ]
  },
  {
    id: "mundhwa",
    name: "Mundhwa",
    x: 66,
    y: 50,
    zone: "east",
    projects: [
      {
        name: "Ace Abundance",
        image: "/assets/map/mundhwa.png",
        category: "Ultra-Luxury 3 & 4.5 Bed",
        details: "Ultra-luxurious residences in Mundhwa offering unmatched panoramic views.",
        link: "/ace-abundance",
      },
      {
        name: "Jhamtani Elevate",
        image: "/assets/map/mundhwa-2.png",
        category: "Studio Apartments",
        details: "Modern studio residences and co-living spaces in vibrant Mundhwa.",
        link: "/jhamtani-elevate",
      }
    ]
  },
  {
    id: "koregaon-park",
    name: "Koregaon Park NX",
    x: 60,
    y: 38,
    zone: "central",
    projects: [
      {
        name: "ACE Villas",
        image: "/assets/map/koregaon.png",
        category: "Ultra-Luxury Villas",
        details: "Bespoke ultra-luxury private villas in Koregaon Park NX.",
        link: "/ace-villas",
      },
      {
        name: "Jhamtani BIZCORE",
        image: "/assets/map/koregaon-2.png",
        category: "Serviced Studio Apartments",
        details: "High-yield serviced studio apartments in prime Koregaon Park NX.",
        link: "/jhamtani-bizcore",
      }
    ]
  },
  {
    id: "baner",
    name: "Baner",
    x: 46,
    y: 31,
    zone: "west",
    projects: [
      {
        name: "Jhamtani Spacebiz",
        image: "/assets/projects/jhamtani-spacebiz.jpg",
        category: "Grade A Commercial",
        details: "State-of-the-art office spaces and corporate showrooms in Baner.",
        link: "/jhamtani-spacebiz",
      }
    ]
  }
];

// Background dots — visible on map for context
const BACKGROUND_DOTS: BgDot[] = [
  { id: "wakad",            name: "Wakad",              x: 32, y: 28 },
  { id: "pimple-saudagar",  name: "Pimple Saudagar",     x: 48, y: 10 },
  { id: "pimpri-chinchwad", name: "Pimpri Chinchwad",    x: 48, y: 18 },
  { id: "mca-stadium",      name: "MCA Stadium",         x: 64, y: 16 },
  { id: "balewadi",         name: "Balewadi High Street", x: 30, y: 20 },
  { id: "mahalunge",        name: "Mahalunge",           x: 26, y: 29 },
  { id: "shivajinagar",     name: "Shivajinagar",        x: 56, y: 35 },
  { id: "kalyani-nagar",    name: "Kalyani Nagar",       x: 67, y: 31 },
  { id: "dy-patil",         name: "DY Patil University", x: 70, y: 26 },
  { id: "kharadi",          name: "Kharadi",             x: 64, y: 42 },
  { id: "magarpatta",       name: "Magarpatta City",     x: 61, y: 54 },
  { id: "hadapsar",         name: "Hadapsar",            x: 61, y: 62 },
  { id: "solapur-highway",  name: "Solapur Highway",     x: 65, y: 84 },
  { id: "manjari",          name: "Manjari",             x: 73, y: 56 },
  { id: "puraniks",         name: "Puraniks Abitante",   x: 70, y: 72 },
  { id: "katraj",           name: "Katraj",              x: 49, y: 70 },
  { id: "lullanagar",       name: "Lullanagar",          x: 50, y: 85 },
  { id: "bavdhan",          name: "Bavdhan",             x: 41, y: 72 },
  { id: "sus-road",         name: "Sus Road",            x: 38, y: 83 },
  { id: "nanded",           name: "Nanded",              x: 34, y: 62 },
];

export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<LocationData | null>(null);
  const [popupKey, setPopupKey] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Cursor tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const dotX = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.35, ease: "power3.out" });

    gsap.set([cursorDotRef.current, cursorRingRef.current], { xPercent: -50, yPercent: -50 });

    let visible = false;

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX); dotY(e.clientY);
      ringX(e.clientX); ringY(e.clientY);
      if (!visible) {
        visible = true;
        gsap.to([cursorDotRef.current, cursorRingRef.current], { opacity: 1, scale: 1, duration: 0.2 });
      }
    };

    const onEnter = (e: MouseEvent) => {
      dotX(e.clientX); dotY(e.clientY);
      ringX(e.clientX); ringY(e.clientY);
      visible = true;
      gsap.to([cursorDotRef.current, cursorRingRef.current], { opacity: 1, scale: 1, duration: 0.2 });
    };

    const onLeave = () => {
      visible = false;
      gsap.to([cursorDotRef.current, cursorRingRef.current], { opacity: 0, scale: 0.5, duration: 0.3 });
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Hover handler with debounce so moving onto popup card doesn't close it
  const handleEnter = (loc: LocationData) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveLocation(loc);
    setPopupKey(k => k + 1);
    gsap.to(cursorRingRef.current, {
      scale: 1.8, borderColor: "#C5A880",
      backgroundColor: "rgba(197,168,128,0.12)", duration: 0.25
    });
  };

  const handleLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveLocation(null);
      gsap.to(cursorRingRef.current, {
        scale: 1, borderColor: "rgba(255,255,255,0.4)",
        backgroundColor: "transparent", duration: 0.25
      });
    }, 280);
  };

  const handlePopupEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden py-16 flex flex-col justify-between cursor-none select-none"
    >
      {/* Fixed cursor */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed w-2 h-2 bg-gold rounded-full z-[9999] opacity-0"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed w-9 h-9 border-2 border-white/40 rounded-full z-[9999] opacity-0"
        style={{ top: 0, left: 0 }}
      />

      {/* Title block */}
      <div className="absolute bottom-12 left-8 md:left-16 z-30 pointer-events-none max-w-md">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] text-gold tracking-wide">
          The Geography of
          <span className="block mt-1">Promises Delivered!</span>
        </h2>
      </div>

      {/* Map area */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center min-h-[500px] md:min-h-[750px] px-4">
        <div className="relative w-full aspect-[16/9] max-h-[85vh]">

          {/* SVG background rings */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 562.5" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="500" cy="281.25" r="35"  stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="3 3" />
            <circle cx="500" cy="281.25" r="70"  stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.25" />
            <circle cx="500" cy="281.25" r="105" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.20" strokeDasharray="5 5" />
            <circle cx="500" cy="281.25" r="140" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.18" />
            <circle cx="500" cy="281.25" r="175" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="6 3" />
            <circle cx="500" cy="281.25" r="210" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.12" />
            <circle cx="500" cy="281.25" r="245" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.09" strokeDasharray="8 4" />
            <circle cx="500" cy="281.25" r="275" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.05" />
            <line x1="500" y1="281.25" x2="200" y2="100" stroke="rgba(197,168,128,0.05)" strokeWidth="0.5" />
            <line x1="500" y1="281.25" x2="800" y2="450" stroke="rgba(197,168,128,0.05)" strokeWidth="0.5" />
          </svg>

          {/* Pune City Centre */}
          <div
            className="absolute z-10 flex flex-col items-center pointer-events-none"
            style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}
          >
            <span className="w-3 h-3 bg-gold rounded-full animate-ping absolute opacity-70" />
            <span className="w-2.5 h-2.5 bg-gold rounded-full relative z-10 border border-black" />
            <span className="mt-2 text-[10px] tracking-[0.25em] text-gold font-sans font-bold uppercase whitespace-nowrap">
              Pune City Centre
            </span>
          </div>

          {/* ── Background dots (calm context dots) ── */}
          {BACKGROUND_DOTS.map((dot) => {
            const isAnyHovered = activeLocation !== null;
            return (
              <div
                key={dot.id}
                className="absolute z-10 pointer-events-none flex flex-col items-center gap-1 transition-all duration-300"
                style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: "translate(-50%,-50%)" }}
              >
                <span
                  className={`rounded-full border border-black/20 transition-all duration-300 ${
                    isAnyHovered
                      ? "w-1.5 h-1.5 bg-zinc-600/30 blur-[0.8px] opacity-25"
                      : "w-1.5 h-1.5 bg-white/25"
                  }`}
                />
                <span
                  className={`text-[8px] tracking-widest uppercase font-sans whitespace-nowrap transition-all duration-300 ${
                    isAnyHovered
                      ? "text-zinc-600/20 blur-[0.8px]"
                      : "text-white/30 font-light"
                  }`}
                >
                  {dot.name}
                </span>
              </div>
            );
          })}

          {/* ── Interactive project locations with blinking pulse ── */}
          {LOCATIONS_DATA.map((loc) => {
            const isActive = activeLocation?.id === loc.id;
            const isAnyHovered = activeLocation !== null;
            const isOtherHovered = isAnyHovered && !isActive;

            return (
              <div
                key={loc.id}
                className="absolute z-30 cursor-pointer"
                style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => handleEnter(loc)}
                onMouseLeave={handleLeave}
              >
                <div className="flex flex-col items-center gap-1.5 group">
                  {/* Blinking Pulsating Dot Container */}
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    {/* Continuous Blinking Radar Wave (Clarifies projects present) */}
                    <span className="absolute inset-0 rounded-full bg-[#C5A880]/30 animate-ping" />
                    <span className="absolute w-5 h-5 rounded-full bg-[#C5A880]/40 animate-pulse" />
                    
                    {/* Center Core Dot */}
                    <span
                      className={`relative z-10 rounded-full border-2 border-black transition-all duration-300 ${
                        isActive
                          ? "w-4 h-4 bg-[#C5A880] shadow-[0_0_18px_6px_rgba(197,168,128,0.9)] scale-125"
                          : isOtherHovered
                          ? "w-2.5 h-2.5 bg-[#C5A880]/40 blur-[0.5px]"
                          : "w-3 h-3 bg-[#C5A880] shadow-[0_0_12px_rgba(197,168,128,0.7)] group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Location Name Label */}
                  <span
                    className={`text-[9px] tracking-widest uppercase font-sans whitespace-nowrap transition-all duration-300 font-semibold ${
                      isActive
                        ? "text-[#C5A880] scale-110"
                        : isOtherHovered
                        ? "text-[#C5A880]/40 blur-[0.5px]"
                        : "text-[#C5A880] group-hover:text-white"
                    }`}
                  >
                    {loc.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Clean Standalone Image Popup with Direct Project Links */}
          {activeLocation && activeLocation.projects.length > 0 && (
            <div
              key={popupKey}
              className="absolute z-50 pointer-events-auto"
              style={{
                left: `${activeLocation.x}%`,
                top: `${activeLocation.y}%`,
                transform: "translate(-50%, -100%)",
                animation: "fadeSlideUp 0.3s ease-out forwards"
              }}
              onMouseEnter={handlePopupEnter}
              onMouseLeave={handleLeave}
            >
              <div className="flex flex-col items-center">
                <div className={`flex items-end gap-4 ${activeLocation.projects.length > 1 ? "flex-row" : "flex-col items-center"}`}>
                  {activeLocation.projects.filter(p => p.image).map((project, idx) => (
                    <Link
                      key={idx}
                      href={project.link}
                      className="flex flex-col items-center group/proj cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                      {/* Standalone Cutout Building Image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />

                      {/* Project Name Pill */}
                      <div className="mt-1.5 bg-black/90 border border-gold/50 group-hover/proj:border-gold group-hover/proj:bg-black px-3 py-1 rounded-full shadow-2xl transition-all">
                        <span className="text-[9px] font-sans font-semibold tracking-widest text-gold uppercase whitespace-nowrap flex items-center gap-1">
                          <span>{project.name}</span>
                          <span className="text-[10px] text-gold/70 group-hover/proj:text-gold">↗</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Center subtle pointer needle */}
                <div className="w-px h-4 bg-gradient-to-b from-gold/60 to-transparent mt-1" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-12 right-8 md:right-16 z-30 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md border border-[#C5A880]/20 rounded-xl px-4 py-3 flex flex-col gap-2 text-[10px] tracking-wider font-sans uppercase text-white/70 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A880]" />
            </span>
            <span className="text-[#C5A880] font-semibold">Jhamtani Project Hubs</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="text-zinc-400">Key City Landmarks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
