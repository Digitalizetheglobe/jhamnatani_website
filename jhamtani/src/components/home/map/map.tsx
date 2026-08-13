"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface Project {
  name: string;
  image: string;
  category: string;
  details?: string;
}

interface LocationData {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  zone: "central" | "west" | "east" | "upcoming";
  projects: Project[];
}

// Data mapping Locations -> Projects -> Details
const LOCATIONS_DATA: LocationData[] = [
  {
    id: "ravet",
    name: "Ravet",
    x: 39,
    y: 44,
    zone: "west",
    projects: [
      {
        name: "Ace Abode",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Premium Residences",
        details: "Luxurious 2 & 3 BHK homes in the heart of Ravet, featuring state-of-the-art amenities and architectural excellence."
      },
      {
        name: "Abundance Eleva",
        image: "/assets/pojetcts/Abundacne_Elevaion.webp",
        category: "Elite Living",
        details: "Experience elevated lifestyles with premium high-rise residences designed for modern convenience."
      },
      {
        name: "Ace Aster",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Modern Apartments",
        details: "Stylish apartments crafted to offer maximum comfort, ventilation, and premium spatial utility."
      }
    ]
  },
  {
    id: "wakad",
    name: "Wakad",
    x: 32,
    y: 28,
    zone: "west",
    projects: [
      {
        name: "Ace Atmosphere",
        image: "/assets/pojetcts/ace_atmosphere.webp",
        category: "Premium Residences",
        details: "Spacious residential towers with top-class lifestyle amenities and excellent connectivity to IT hubs."
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
        name: "Nandan Ace",
        image: "/assets/pojetcts/nandan_ace.webp",
        category: "Luxurious Living",
        details: "An architectural marvel offering ultra-luxurious apartments in the premium locality of Baner."
      }
    ]
  },
  {
    id: "hinjawadi",
    name: "Hinjawadi IT Park",
    x: 23,
    y: 35,
    zone: "west",
    projects: [
      {
        name: "Bizcore Hinjawadi",
        image: "/assets/pojetcts/bizcore_image.webp",
        category: "Commercial Spaces",
        details: "High-end corporate offices and retail spaces designed to scale modern businesses."
      }
    ]
  },
  {
    id: "life-republic",
    name: "Life Republic",
    x: 18,
    y: 46,
    zone: "upcoming",
    projects: [
      {
        name: "Upcoming Phase 3",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Upcoming Township",
        details: "A futuristic township offering designed smart villa communities and premium nature-centric spaces."
      }
    ]
  },
  {
    id: "godrej-24",
    name: "Godrej 24",
    x: 25,
    y: 56,
    zone: "west",
    projects: [
      {
        name: "Godrej 24 Hinjewadi",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Residential Elite",
        details: "An premium smart residential concept featuring 24/7 amenities for the active professional lifestyle."
      }
    ]
  },
  {
    id: "pimple-saudagar",
    name: "Pimple Saudagar",
    x: 48,
    y: 10,
    zone: "west",
    projects: [
      {
        name: "Saudagar Landmark",
        image: "/assets/pojetcts/Abundacne_Elevaion.webp",
        category: "Premium Living",
        details: "Beautiful residences set in one of Pune's most active and family-friendly residential hubs."
      }
    ]
  },
  {
    id: "pimpri-chinchwad",
    name: "Pimpri Chinchwad",
    x: 48,
    y: 18,
    zone: "west",
    projects: [
      {
        name: "Industrial Core Tower",
        image: "/assets/pojetcts/bizcore_image.webp",
        category: "Mixed-Use Development",
        details: "Premium workspaces integrated with boutique retail stores in a bustling corporate sector."
      }
    ]
  },
  {
    id: "mca-stadium",
    name: "MCA Stadium",
    x: 64,
    y: 16,
    zone: "west",
    projects: [
      {
        name: "Stadium Arena Homes",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Premium Villas",
        details: "Luxury villas overlooking scenic highway dynamics and close proximity to the sports landmark."
      }
    ]
  },
  {
    id: "balewadi",
    name: "Balewadi High Street",
    x: 30,
    y: 20,
    zone: "west",
    projects: [
      {
        name: "Balewadi Business hub",
        image: "/assets/pojetcts/bizcore_image.webp",
        category: "Boutique Retail & Office",
        details: "An state-of-the-art business center located in Pune's most dynamic lifestyle corridor."
      }
    ]
  },
  {
    id: "mahalunge",
    name: "Mahalunge",
    x: 34,
    y: 35,
    zone: "west",
    projects: [
      {
        name: "Mahalunge Eco-Villas",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Eco Residences",
        details: "Premium eco-friendly homes blending natural river views with ultra-modern smart designs."
      }
    ]
  },
  {
    id: "shivajinagar",
    name: "Shivajinagar",
    x: 56,
    y: 35,
    zone: "central",
    projects: [
      {
        name: "Shivajinagar Central",
        image: "/assets/pojetcts/nandan_ace.webp",
        category: "Luxury Apartments",
        details: "Super-premium apartments located at the historic heart of Pune City Centre."
      }
    ]
  },
  {
    id: "kalyani-nagar",
    name: "Kalyani Nagar",
    x: 67,
    y: 31,
    zone: "central",
    projects: [
      {
        name: "Kalyani Imperial",
        image: "/assets/pojetcts/Abundacne_Elevaion.webp",
        category: "Premium Penthouses",
        details: "High-end luxury residences catering to premium urban living inside a rich green neighborhood."
      }
    ]
  },
  {
    id: "dy-patil",
    name: "DY Patil University",
    x: 70,
    y: 26,
    zone: "upcoming",
    projects: [
      {
        name: "Student Living Suites",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Upcoming Smart Suites",
        details: "Modern smart studio suites offering a vibrant co-living lifestyle concept for young professionals."
      }
    ]
  },
  {
    id: "kharadi",
    name: "Kharadi",
    x: 64,
    y: 42,
    zone: "east",
    projects: [
      {
        name: "Kharadi Tech Plaza",
        image: "/assets/pojetcts/bizcore_image.webp",
        category: "Premium Commercial",
        details: "Iconic office towers with top IT and retail brands located next to major tech hubs."
      }
    ]
  },
  {
    id: "magarpatta",
    name: "Magarpatta City",
    x: 61,
    y: 54,
    zone: "east",
    projects: [
      {
        name: "Magarpatta Rise",
        image: "/assets/pojetcts/ace_atmosphere.webp",
        category: "Smart City Living",
        details: "Eco-friendly smart apartments boasting walk-to-work culture and private lush gardens."
      }
    ]
  },
  {
    id: "hadapsar",
    name: "Hadapsar",
    x: 61,
    y: 62,
    zone: "east",
    projects: [
      {
        name: "Hadapsar Estate",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Bespoke Townhouses",
        details: "Exclusive gated enclave featuring beautifully designed, spacious luxury townhomes."
      }
    ]
  },
  {
    id: "solapur-highway",
    name: "Solapur Highway",
    x: 65,
    y: 84,
    zone: "east",
    projects: [
      {
        name: "Highway Hub Commercial",
        image: "/assets/pojetcts/bizcore_image.webp",
        category: "Commercial Spaces",
        details: "High-visibility retail and warehouse offices ideal for logistics and hypermarkets."
      }
    ]
  },
  {
    id: "manjari",
    name: "Manjari",
    x: 73,
    y: 56,
    zone: "east",
    projects: [
      {
        name: "Manjari Greenways",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Smart Family Homes",
        details: "Elegant residential community focused on community living and kids' play areas."
      }
    ]
  },
  {
    id: "godrej-greens",
    name: "Godrej River Greens",
    x: 79,
    y: 21,
    zone: "east",
    projects: [
      {
        name: "River Greens Estate",
        image: "/assets/pojetcts/Abundacne_Elevaion.webp",
        category: "Luxury Township",
        details: "Expansive township overlooking natural water bodies, integrating state of the art clubhouses."
      }
    ]
  },
  {
    id: "vtp-earth",
    name: "VTP Earth One",
    x: 82,
    y: 39,
    zone: "east",
    projects: [
      {
        name: "VTP Earth One Towers",
        image: "/assets/pojetcts/ace_atmosphere.webp",
        category: "Signature Series",
        details: "Breathtaking sky-high residences with modern glass design facades and automated features."
      }
    ]
  },
  {
    id: "gera-world",
    name: "Gera World of Joy",
    x: 80,
    y: 66,
    zone: "east",
    projects: [
      {
        name: "Gera Joy Towers",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Premium Childcentric Homes",
        details: "Award-winning child-centric residential project with academies for sports and learning."
      }
    ]
  },
  {
    id: "puraniks",
    name: "Puraniks Abitante",
    x: 70,
    y: 72,
    zone: "upcoming",
    projects: [
      {
        name: "Abitante Phase 2",
        image: "/assets/pojetcts/ace_villas.webp",
        category: "Italian Theme Living",
        details: "Vibrant Italian-themed residences that capture European lifestyle vibes in Pune."
      }
    ]
  },
  {
    id: "katraj",
    name: "Katraj",
    x: 49,
    y: 70,
    zone: "upcoming",
    projects: [
      {
        name: "Katraj Heights",
        image: "/assets/pojetcts/nandan_ace.webp",
        category: "Scenic Valley Residences",
        details: "Scenic view apartments designed with grand private balconies overlooking the Katraj lake."
      }
    ]
  },
  {
    id: "lullanagar",
    name: "Lullanagar",
    x: 50,
    y: 85,
    zone: "central",
    projects: [
      {
        name: "Lullanagar Elite",
        image: "/assets/pojetcts/Abundacne_Elevaion.webp",
        category: "Luxury Apartments",
        details: "Highly limited luxury flats with private elevator access in a classic elite locality."
      }
    ]
  },
  {
    id: "bavdhan",
    name: "Bavdhan",
    x: 41,
    y: 72,
    zone: "west",
    projects: [
      {
        name: "Bavdhan Valley View",
        image: "/assets/pojetcts/ace_atmosphere.webp",
        category: "Nature Living",
        details: "Residences surrounded by hills, yet perfectly connected to the Kothrud and Hinjawadi highways."
      }
    ]
  },
  {
    id: "sus-road",
    name: "Sus Road",
    x: 38,
    y: 83,
    zone: "west",
    projects: [
      {
        name: "Sus Smart Condos",
        image: "/assets/pojetcts/ace_aster.webp",
        category: "Contemporary Apartments",
        details: "Boutique smart apartments designed to maximize natural lighting and space layout optimization."
      }
    ]
  },
  {
    id: "nanded",
    name: "Nanded",
    x: 34,
    y: 62,
    zone: "west",
    projects: [
      {
        name: "Nanded City Living",
        image: "/assets/pojetcts/nandan_ace.webp",
        category: "Spacious Residences",
        details: "An expansive township model combining educational, recreational and luxury residential sectors."
      }
    ]
  }
];

export default function InteractiveMap() {
  const [activeLocation, setActiveLocation] = useState<LocationData | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const buildingContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Custom Cursor Refs
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Setup cursor physics/mouse tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const dotX = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(cursorRingRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const ringY = gsap.quickTo(cursorRingRef.current, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      dotX(x);
      dotY(y);
      ringX(x);
      ringY(y);
    };

    const handleMouseEnter = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursorDotRef.current, cursorRingRef.current], {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Precise hover triggering
  const handleDotHover = (location: LocationData | null) => {
    clearHoverTimeout();

    if (location) {
      if (activeLocation?.id === location.id) return;
      
      setActiveLocation(location);
      setActiveProjectIndex(0);

      // Custom cursor feedback
      gsap.to(cursorRingRef.current, {
        scale: 1.6,
        borderColor: "#C5A880",
        backgroundColor: "rgba(197, 168, 128, 0.1)",
        duration: 0.3
      });

      // Animate building entering
      gsap.killTweensOf(buildingContainerRef.current);
      gsap.fromTo(
        buildingContainerRef.current,
        { opacity: 0, scale: 0.88, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "power3.out" }
      );

      // Animate right info card slide and fade in
      gsap.killTweensOf(cardRef.current);
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
      );
    } else {
      // Set a small delay before clearing active location to allow moving cursor to building popup
      hoverTimeoutRef.current = setTimeout(() => {
        // Animate out building
        gsap.to(buildingContainerRef.current, {
          opacity: 0,
          scale: 0.88,
          y: 15,
          duration: 0.4,
          ease: "power3.inOut"
        });

        // Animate out card
        gsap.to(cardRef.current, {
          opacity: 0,
          x: 10,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setActiveLocation(null);
          }
        });

        // Reset custom cursor
        gsap.to(cursorRingRef.current, {
          scale: 1,
          borderColor: "rgba(255, 255, 255, 0.4)",
          backgroundColor: "transparent",
          duration: 0.3
        });
      }, 150);
    }
  };

  // Switch between projects for multiple project locations
  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLocation) return;
    const len = activeLocation.projects.length;
    const newIdx = (activeProjectIndex - 1 + len) % len;

    gsap.timeline()
      .to(buildingContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => {
          setActiveProjectIndex(newIdx);
        }
      })
      .to(buildingContainerRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });

    gsap.fromTo(cardRef.current, { opacity: 0.6 }, { opacity: 1, duration: 0.4 });
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLocation) return;
    const len = activeLocation.projects.length;
    const newIdx = (activeProjectIndex + 1) % len;

    gsap.timeline()
      .to(buildingContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.25,
        ease: "power3.in",
        onComplete: () => {
          setActiveProjectIndex(newIdx);
        }
      })
      .to(buildingContainerRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      });

    gsap.fromTo(cardRef.current, { opacity: 0.6 }, { opacity: 1, duration: 0.4 });
  };

  const currentProject = activeLocation ? activeLocation.projects[activeProjectIndex] : null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden py-16 flex flex-col justify-between cursor-none select-none"
      style={{ contentVisibility: "auto" }}
    >
      {/* Custom Premium Cursor */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none absolute w-1.5 h-1.5 bg-gold rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={cursorRingRef}
        className="pointer-events-none absolute w-8 h-8 border border-white/40 rounded-full z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-transform duration-75"
      />

      {/* Title block - Bottom Left */}
      <div className="absolute bottom-12 left-8 md:left-16 z-30 pointer-events-none max-w-md">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] leading-[1.1] text-gold tracking-wide">
          The Geography of
          <span className="block mt-1">Promises Delivered!</span>
        </h2>
      </div>

      {/* Map Interactive Content Area */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto flex items-center justify-center min-h-[500px] md:min-h-[750px] px-4">
        
        {/* Map Graphics Wrapper */}
        <div className="relative w-full aspect-[16/9] max-h-[85vh] flex items-center justify-center">
          
          {/* SVG Radar rings + Rivers background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-auto"
            viewBox="0 0 1000 562.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => handleDotHover(null)}
          >
            {/* Concentric rings - Golden Warm tone matching reference */}
            <circle cx="500" cy="281.25" r="40" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.35" strokeDasharray="3 3" />
            <circle cx="500" cy="281.25" r="80" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.25" />
            <circle cx="500" cy="281.25" r="120" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="5 5" />
            <circle cx="500" cy="281.25" r="160" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.18" />
            <circle cx="500" cy="281.25" r="200" stroke="#C5A880" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="6 3" />
            <circle cx="500" cy="281.25" r="240" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.12" />
            <circle cx="500" cy="281.25" r="280" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.1" strokeDasharray="8 4" />
            <circle cx="500" cy="281.25" r="320" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.08" />
            <circle cx="500" cy="281.25" r="360" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.06" />
            <circle cx="500" cy="281.25" r="400" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.05" strokeDasharray="10 5" />
            <circle cx="500" cy="281.25" r="440" stroke="#C5A880" strokeWidth="1" strokeOpacity="0.04" />
            <circle cx="500" cy="281.25" r="480" stroke="#C5A880" strokeWidth="1" strokeOpacity="0.03" />

            {/* River Path */}
            
            
            {/* Radar Sweep lines */}
            <line x1="500" y1="281.25" x2="200" y2="100" stroke="rgba(197, 168, 128, 0.05)" strokeWidth="0.5" />
            <line x1="500" y1="281.25" x2="800" y2="450" stroke="rgba(197, 168, 128, 0.05)" strokeWidth="0.5" />
          </svg>

          {/* Pune City Centre Point */}
          <div
            className={`absolute z-10 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ${
              activeLocation ? "blur-[2px] opacity-40" : "blur-0 opacity-100"
            }`}
            style={{ left: "50%", top: "50%" }}
          >
            <span className="w-3 h-3 bg-gold rounded-full animate-ping absolute opacity-70" />
            <span className="w-2.5 h-2.5 bg-gold rounded-full relative z-10 border border-black" />
            <span className="mt-2 text-[10px] tracking-[0.25em] text-gold font-sans font-bold uppercase whitespace-nowrap">
              Pune City Centre
            </span>
          </div>

          {/* Location Dots & Labels */}
          {LOCATIONS_DATA.map((loc) => {
            const isSelfActive = activeLocation?.id === loc.id;
            const isOtherActive = activeLocation !== null && !isSelfActive;
            
            return (
              <div
                key={loc.id}
                className={`absolute z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOtherActive ? "blur-[2px] opacity-40" : "blur-0 opacity-100"
                }`}
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                {/* Micro precise hover trigger bounds directly over the dot */}
                <div
                  className="w-5 h-5 flex items-center justify-center cursor-none"
                  onMouseEnter={() => handleDotHover(loc)}
                  onMouseLeave={() => handleDotHover(null)}
                >
                  {/* Dot */}
                  <div className="relative flex items-center justify-center w-4 h-4 group pointer-events-none">
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isSelfActive
                          ? "bg-gold/20 scale-125"
                          : "bg-white/0 group-hover:bg-gold/10 group-hover:scale-110"
                      }`}
                    />
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 border border-black ${
                        isSelfActive
                          ? "bg-gold scale-125 shadow-[0_0_10px_#C5A880]"
                          : "bg-white/85 group-hover:bg-gold group-hover:scale-110"
                      }`}
                    />
                  </div>
                </div>

                {/* Label - proper gray/white color matching reference */}
                <span
                  className={`absolute top-6 left-1/2 transform -translate-x-1/2 text-[9px] tracking-widest uppercase font-sans font-medium whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    isSelfActive
                      ? "text-gold translate-y-0.5 opacity-100 font-semibold"
                      : "text-gray-300 opacity-80"
                  }`}
                >
                  {loc.name}
                </span>
              </div>
            );
          })}

          {/* BUILDING ANCHOR POPUP: emerges at the parent level relative to active coordinate */}
          {activeLocation && currentProject && (
            <div
              ref={buildingContainerRef}
              className="absolute z-40 pointer-events-auto"
              style={{
                left: `${activeLocation.x}%`,
                top: `${activeLocation.y}%`,
                transform: "translate(-50%, -100%)",
                marginTop: "-16px"
              }}
              onMouseEnter={clearHoverTimeout}
              onMouseLeave={() => handleDotHover(null)}
            >
              <div className="relative w-44 md:w-56 aspect-[3/4] bg-[#0c0c0c] rounded-lg overflow-hidden border border-luxury-border shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                <Image
                  src={currentProject.image}
                  alt={currentProject.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 176px, 224px"
                  priority
                />
                
                {/* Sub-label inside building image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent flex flex-col justify-end p-3">
                  <p className="text-[10px] tracking-wider text-gold/80 font-serif">
                    {activeLocation.name}
                  </p>
                  <h4 className="text-sm font-sans font-bold text-white tracking-wide truncate">
                    {currentProject.name}
                  </h4>
                </div>

                {/* Multi-project quick toggle inside hover popup */}
                {activeLocation.projects.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md rounded-full px-2 py-0.5 flex items-center space-x-1 border border-white/10">
                    <button
                      onClick={handlePrevProject}
                      className="text-white hover:text-gold transition-colors p-0.5"
                    >
                      <ChevronLeft size={10} />
                    </button>
                    <span className="text-[8px] font-sans font-medium text-white/90">
                      {activeProjectIndex + 1}/{activeLocation.projects.length}
                    </span>
                    <button
                      onClick={handleNextProject}
                      className="text-white hover:text-gold transition-colors p-0.5"
                    >
                      <ChevronRight size={10} />
                    </button>
                  </div>
                )}
              </div>
              {/* Visual Anchor Link Line */}
              <div className="w-[1px] h-10 bg-gradient-to-b from-luxury-border to-gold absolute left-1/2 transform -translate-x-1/2 top-full" />
            </div>
          )}
        </div>

        {/* Right-Side Project Information Box */}
        <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-30 w-72 md:w-80 pointer-events-auto">
          {activeLocation && currentProject ? (
            <div
              ref={cardRef}
              className="bg-[#0c0c0c] border border-luxury-border rounded-xl p-6 shadow-2xl flex flex-col space-y-4"
            >
              {/* Header Info */}
              <div className="flex justify-between items-start border-b border-luxury-border pb-3">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold">
                    {activeLocation.zone} Pune
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    {currentProject.name}
                  </h3>
                </div>

                {/* Project index counter */}
                {activeLocation.projects.length > 1 && (
                  <span className="text-xs font-serif text-gold/80 italic mt-1">
                    {String(activeProjectIndex + 1).padStart(2, "0")} / {String(activeLocation.projects.length).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-wider text-gold/60 font-sans block uppercase">
                  {currentProject.category}
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
                  {currentProject.details || "Part of our signature development mapping across Pune's finest real estate coordinates."}
                </p>
              </div>

              {/* Navigation Arrows (Only show if multiple projects exist) */}
              {activeLocation.projects.length > 1 && (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] text-white/40 font-light">
                    Browse Projects
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevProject}
                      className="p-1.5 rounded-full border border-luxury-border hover:border-gold hover:text-gold text-white/80 transition-all duration-300 cursor-none"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNextProject}
                      className="p-1.5 rounded-full border border-luxury-border hover:border-gold hover:text-gold text-white/80 transition-all duration-300 cursor-none"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex bg-[#0c0c0c] border border-luxury-border rounded-xl p-6 flex-col space-y-2 text-center items-center justify-center h-48 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-gold/50 animate-pulse" />
              <p className="text-xs text-white/50 font-sans tracking-wide">
                Hover over a location dot to explore projects
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Legends & Category Filters - Bottom Right */}
      <div className="absolute bottom-12 right-8 md:right-16 z-30 pointer-events-auto">
        <div className="backdrop-blur-luxury bg-black/40 border border-white/5 rounded-lg px-4 py-3 flex flex-col space-y-2 text-[10px] tracking-wider font-sans font-medium uppercase text-white/60">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full border border-black bg-gold" />
            <span>Central Pune</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full border border-black bg-white" />
            <span>West Pune</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full border border-black bg-white/40" />
            <span>East Pune</span>
          </div>
          <div className="flex items-center space-x-2 text-gold">
            <span className="w-2 h-2 rounded-full border border-black bg-gold/40 animate-pulse" />
            <span>Upcoming Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
