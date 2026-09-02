"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/assets/ace-abundance/gallery/the-signature-entrance.webp",
    title: "The Signature Entrance",
  },
  {
    id: 2,
    image: "/assets/ace-abundance/gallery/the-dip-in-the-serene-blues.webp",
    title: "The Dip in the Serene Blues",
  },
  {
    id: 3,
    image: "/assets/ace-abundance/gallery/the-open-air-happiness.webp",
    title: "The Open-Air Happiness",
  },
  {
    id: 4,
    image: "/assets/ace-abundance/gallery/the-grand-terrace.webp",
    title: "The Grand Terrace",
  },
  {
    id: 5,
    image: "/assets/ace-abundance/gallery/the-zest-that-multiplies-smiles.webp",
    title: "The Zest that Multiplies Smiles",
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

  // Compute signed shortest distance between card index and active index
  const getSignedDiff = (idx: number) => {
    let diff = (idx - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const handleCardClick = (idx: number) => {
    const signedDiff = getSignedDiff(idx);
    if (signedDiff === 1) {
      handleNext();
    } else if (signedDiff === -1) {
      handlePrev();
    }
  };

  const getCardStyles = (idx: number) => {
    const signedDiff = getSignedDiff(idx);

    if (signedDiff === 0) {
      // Active center card - elevated
      return {
        x: 0,
        y: isMobile ? 0 : -25,
        scale: isMobile ? 1.0 : 1.02,
        opacity: 1,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    } else if (signedDiff === 1) {
      // Immediate right card
      return {
        x: offset,
        y: isMobile ? 0 : 25,
        scale: 0.96,
        opacity: isMobile ? 0 : 1,
        zIndex: 10,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else if (signedDiff === -1) {
      // Immediate left card
      return {
        x: -offset,
        y: isMobile ? 0 : 25,
        scale: 0.96,
        opacity: isMobile ? 0 : 1,
        zIndex: 10,
        pointerEvents: isMobile ? ("none" as const) : ("auto" as const),
      };
    } else if (signedDiff === 2) {
      // Entering / exiting offscreen right
      return {
        x: offset * 1.6,
        y: isMobile ? 0 : 25,
        scale: 0.9,
        opacity: 0,
        zIndex: 2,
        pointerEvents: "none" as const,
      };
    } else if (signedDiff === -2) {
      // Entering / exiting offscreen left
      return {
        x: -offset * 1.6,
        y: isMobile ? 0 : 25,
        scale: 0.9,
        opacity: 0,
        zIndex: 2,
        pointerEvents: "none" as const,
      };
    } else {
      // Hidden cards parked further away on their respective side
      return {
        x: signedDiff > 0 ? offset * 2.2 : -offset * 2.2,
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
            Inside a Rarer Way of Living.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            width: `${cardWidth}px`,
            height: `${cardWidth * 1.35}px`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            {galleryItems.map((item, idx) => {
              const signedDiff = getSignedDiff(idx);
              const isActive = signedDiff === 0;

              return (
                <motion.div
                  key={item.id}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    willChange: "transform, opacity",
                  }}
                  animate={getCardStyles(idx)}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 28,
                    mass: 0.8,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50 || info.velocity.x < -300) {
                      handleNext();
                    } else if (info.offset.x > 50 || info.velocity.x > 300) {
                      handlePrev();
                    }
                  }}
                  onClick={() => handleCardClick(idx)}
                  className={`overflow-hidden shadow-2xl ${
                    isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                  }`}
                >
                  {/* Using standard HTML img tag for fast caching and avoiding Next.js compiler lag */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    loading="eager"
                    draggable={false}
                  />

                  {/* White overlay for dimming inactive cards (matches design spec) */}
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
                detail: { project: "ACE Abundance (Gallery)" },
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
