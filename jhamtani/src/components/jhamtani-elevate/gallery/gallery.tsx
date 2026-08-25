"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/assets/jhamtani-elevate/A bold address that stands tall.webp",
    title: "A Bold Address That Stands Tall",
  },
  {
    id: 2,
    image: "/assets/jhamtani-elevate/An address that commands the skyline.webp",
    title: "An Address That Commands the Skyline",
  },
  {
    id: 3,
    image: "/assets/jhamtani-elevate/Built tall for those who think higher.webp",
    title: "Built Tall for Those Who Think Higher",
  },
  {
    id: 4,
    image: "/assets/jhamtani-elevate/The first step to elevated living..webp",
    title: "The First Step to Elevated Living",
  },
  {
    id: 5,
    image: "/assets/jhamtani-elevate/Where work meets rest, seamlessly.webp",
    title: "Where Work Meets Rest, Seamlessly",
  },
  {
    id: 6,
    image: "/assets/jhamtani-elevate/Balanced for productivity and comfort.webp",
    title: "Balanced for Productivity and Comfort",
  },
  {
    id: 7,
    image: "/assets/jhamtani-elevate/Two purposes, one thoughtful design.webp",
    title: "Two Purposes, One Thoughtful Design",
  },
  {
    id: 8,
    image: "/assets/jhamtani-elevate/A personal space that adapts.webp",
    title: "A Personal Space That Adapts",
  },
  {
    id: 9,
    image: "/assets/jhamtani-elevate/A room that grows with you.webp",
    title: "A Room That Grows with You",
  },
  {
    id: 10,
    image: "/assets/jhamtani-elevate/Dine under the open sky.webp",
    title: "Dine Under the Open Sky",
  },
  {
    id: 11,
    image: "/assets/jhamtani-elevate/Good food. Better ambience.webp",
    title: "Good Food. Better Ambience",
  },
  {
    id: 12,
    image: "/assets/jhamtani-elevate/A lounge built for play.webp",
    title: "A Lounge Built for Play",
  },
  {
    id: 13,
    image: "/assets/jhamtani-elevate/A space designed for friendly competition.webp",
    title: "A Space Designed for Friendly Competition",
  },
  {
    id: 14,
    image: "/assets/jhamtani-elevate/A new icon on the city map.webp",
    title: "A New Icon on the City Map",
  },
  {
    id: 15,
    image: "/assets/jhamtani-elevate/A new icon on the city map1.webp",
    title: "A Landmark Crafted for Tomorrow",
  },
  {
    id: 16,
    image: "/assets/jhamtani-elevate/jhamtani-elevate-mundhwa.webp",
    title: "Jhamtani Elevate - Mundhwa",
  },
  {
    id: 17,
    image: "/assets/jhamtani-elevate/Elevate-Construction-Update_.jpeg",
    title: "Elevate Construction Update",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [windowWidth, setWindowWidth] = useState(1200);
  const total = galleryItems.length;

  useEffect(() => {
    // Keep track of window width to calculate responsive pixel positions
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Responsive sizing configurations
  const cardWidth = isMobile ? 280 : isTablet ? 320 : 380;
  const gap = isMobile ? 0 : isTablet ? 20 : 32;
  const offset = cardWidth + gap;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleCardClick = (idx: number) => {
    const diff = (idx - activeIndex + total) % total;
    if (diff === 1 || diff === -(total - 1)) {
      handleNext();
    } else if (diff === total - 1 || diff === -1) {
      handlePrev();
    }
  };

  const getCardStyles = (idx: number) => {
    const diff = (idx - activeIndex + total) % total;

    if (diff === 0) {
      // Active center card - shifted upward on desktop/tablet
      return {
        x: 0,
        y: isMobile ? 0 : -25,
        scale: isMobile ? 1.0 : 1.02,
        opacity: 1,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1 || diff === -(total - 1)) {
      // Right card - shifted downward on desktop/tablet to create staggered layout
      return {
        x: offset,
        y: isMobile ? 0 : 25,
        scale: 0.96,
        opacity: isMobile ? 0 : 1,
        zIndex: 10,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else if (diff === total - 1 || diff === -1) {
      // Left card - shifted downward on desktop/tablet to create staggered layout
      return {
        x: -offset,
        y: isMobile ? 0 : 25,
        scale: 0.96,
        opacity: isMobile ? 0 : 1,
        zIndex: 10,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else {
      // Offscreen / Hidden cards
      return {
        x: diff === 2 ? offset * 2 : -offset * 2,
        y: 0,
        scale: 0.8,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section className="relative w-full bg-[#191F26] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-white select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 lg:mb-30">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-zinc-400 leading-relaxed font-light mt-4 max-w-xl"
          >
            A closer look at Jhamtani Elevate.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto flex items-center justify-center transition-all duration-300"
          style={{
            width: `${cardWidth}px`,
            height: `${cardWidth * 1.35}px`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            {galleryItems.map((item, idx) => {
              const diff = (idx - activeIndex + total) % total;
              const isActive = diff === 0;

              return (
                <motion.div
                  key={item.id}
                  style={{ position: "absolute", width: "100%", height: "100%" }}
                  animate={getCardStyles(idx)}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 22,
                  }}
                  onClick={() => handleCardClick(idx)}
                  className={`overflow-hidden shadow-2xl transition-all duration-300 ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* White overlay for dimming inactive cards */}
                  <div
                    className={`absolute inset-0 bg-white transition-opacity duration-500 z-10 ${
                      isActive ? "opacity-0 pointer-events-none" : "opacity-35"
                    }`}
                  />

                  {/* Text Overlay for title legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none z-10" />

                  {/* Card Title Label (Bottom Left) */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className={`font-sans font-light text-[14px] sm:text-[16px] tracking-wide transition-colors duration-500 ${
                      isActive ? "text-white" : "text-zinc-600"
                    }`}>
                      {item.title}
                    </p>
                  </div>

                  {/* Rotated "Artistic Impression" Label */}
                  <div
                    className="absolute right-3 bottom-6 z-20 flex items-center justify-center pointer-events-none select-none"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    <span className={`text-[8px] tracking-[0.2em] font-sans uppercase font-medium transition-colors duration-500 ${
                      isActive ? "text-white/40" : "text-zinc-500/50"
                    }`}>
                      Artistic Impression
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Slider Controls Container */}
        <div className="mt-16 lg:mt-24 flex items-center justify-center gap-5 select-none">
          <style dangerouslySetInnerHTML={{__html: `
            .hover-circle-path-gallery {
              stroke-dashoffset: 295.3;
              transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .group:hover .hover-circle-path-gallery {
              stroke-dashoffset: 0 !important;
            }
          `}} />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10 hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="#A0725B"
                strokeWidth="1.5"
              />
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="white"
                strokeWidth="1.2"
                strokeDasharray="295.3"
                className="hover-circle-path-gallery"
              />
            </svg>
            <ArrowLeft className="relative w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors duration-300 z-10" />
          </button>

          {/* View More Center Button */}
          <button
            onClick={() => {
              const event = new CustomEvent("open-enquiry", {
                detail: { project: "Jhamtani Elevate (Gallery)" },
              });
              window.dispatchEvent(event);
            }}
            className="border border-[#A0725B] text-white hover:bg-[#A0725B] hover:text-white rounded-full px-8 py-2.5 text-xs sm:text-sm tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(160,114,91,0.2)] active:scale-95"
          >
            View More
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10 hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="#A0725B"
                strokeWidth="1.5"
              />
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="white"
                strokeWidth="1.2"
                strokeDasharray="295.3"
                className="hover-circle-path-gallery"
              />
            </svg>
            <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors duration-300 z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
