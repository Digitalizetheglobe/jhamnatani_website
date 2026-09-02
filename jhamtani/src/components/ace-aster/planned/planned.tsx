"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/ace-aster/a-skyline-statement-day-and-night.webp",
    alt: "A Skyline Statement, Day and Night - Ace Aster",
  },
  {
    id: 2,
    image: "/assets/ace-aster/where-the-skyline-comes-alive.webp",
    alt: "Where the Skyline Comes Alive - Ace Aster",
  },
  {
    id: 3,
    image: "/assets/ace-aster/where-evenings-unfold-beautifully.webp",
    alt: "Where Evenings Unfold Beautifully - Ace Aster",
  },
  {
    id: 4,
    image: "/assets/ace-aster/cool-waters-calmer-days.webp",
    alt: "Cool Waters, Calmer Days - Ace Aster",
  },
];

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn" | "group-hover/link";
}

function WaveText({
  text,
  letterDelay = 15,
  groupHoverClass = "group-hover/btn",
}: WaveTextProps) {
  const hoverClass =
    groupHoverClass === "group-hover/btn"
      ? "group-hover/btn:-translate-y-full"
      : groupHoverClass === "group-hover/link"
      ? "group-hover/link:-translate-y-full"
      : "group-hover:-translate-y-full";

  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        className="relative inline-flex items-center justify-center gap-[0.08em] whitespace-nowrap shrink-0"
        aria-hidden="true"
      >
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.3em] inline-block shrink-0" />;
          }
          return (
            <span
              key={index}
              className="relative inline-flex overflow-hidden shrink-0"
            >
              <span
                className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${hoverClass} will-change-transform [backface-visibility:hidden]`}
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className={`absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${hoverClass} will-change-transform [backface-visibility:hidden]`}
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

export default function Planned() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap index to always stay within bounds of slides array
  const slideIndex = Math.abs(page % slides.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  // Animation variants for smooth sliding transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleEnquiry = (action: string) => {
    const event = new CustomEvent("open-enquiry", {
      detail: {
        project: "ACE Aster",
        message: `I am interested in ${action} for ACE Aster.`,
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full bg-[#191F26] text-white overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[700px] py-15 select-none">
      <style dangerouslySetInnerHTML={{__html: `
        .hover-circle-path {
          stroke-dashoffset: 295.3;
          transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .hover-circle-path {
          stroke-dashoffset: 0 !important;
        }
      `}} />
      
      {/* Left Column: Text & Buttons */}
      <div className="w-full lg:w-1/2 flex items-center justify-end">
        <div className="w-full max-w-[640px] px-6 sm:px-12 lg:pl-16 lg:pr-12 py-16 lg:py-24 flex flex-col justify-center h-full">
          <div className="flex flex-col select-none">
            {/* Title / Heading */}
            <h2 className="font-serif font-light text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.15] text-[#A0725B] tracking-wide">
              Thoughtfully Planned<br />
              for Every Generation
            </h2>

            {/* Description Paragraph */}
            <p className="font-sans text-sm sm:text-[15px] text-zinc-400 leading-relaxed max-w-md font-light mt-8 lg:mt-10">
              Ace Aster brings together spacious homes, thoughtful amenities and a secure environment within a well-connected Ravet address.
            </p>

            {/* Premium Action Buttons - Single Line */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-3.5 mt-16 lg:mt-24 flex-nowrap overflow-x-auto lg:overflow-visible scrollbar-none">
              <button
                onClick={() => handleEnquiry("Download Brochure")}
                className="group/btn relative inline-flex items-center justify-center border border-[#A0725B] text-zinc-200 hover:text-white hover:bg-[#A0725B] rounded-full px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(160,114,91,0.3)] active:scale-95 overflow-hidden whitespace-nowrap shrink-0"
              >
                <WaveText text="Download Brochure" letterDelay={15} groupHoverClass="group-hover/btn" />
              </button>
              <button
                onClick={() => handleEnquiry("Get Cost Sheet")}
                className="group/btn relative inline-flex items-center justify-center border border-[#A0725B] text-zinc-200 hover:text-white hover:bg-[#A0725B] rounded-full px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(160,114,91,0.3)] active:scale-95 overflow-hidden whitespace-nowrap shrink-0"
              >
                <WaveText text="Get Cost Sheet" letterDelay={15} groupHoverClass="group-hover/btn" />
              </button>
              <button
                onClick={() => handleEnquiry("Schedule a Site Visit")}
                className="group/btn relative inline-flex items-center justify-center border border-[#A0725B] text-zinc-200 hover:text-white hover:bg-[#A0725B] rounded-full px-3.5 sm:px-4.5 py-2 text-[11px] sm:text-xs tracking-wide bg-transparent cursor-pointer font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(160,114,91,0.3)] active:scale-95 overflow-hidden whitespace-nowrap shrink-0"
              >
                <WaveText text="Schedule a Site Visit" letterDelay={15} groupHoverClass="group-hover/btn" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Full-Bleed Slider Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between py-8 lg:py-16 pr-0 pl-0 lg:pl-8">
        
        {/* Image Slider Frame (touches the right edge of screen) */}
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[480px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[slideIndex].image}
                alt={slides[slideIndex].alt}
                fill
                priority
                quality={95}
                className="object-cover"
              />
              
              {/* Subtle gold overlay vignette for luxury look and contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Right edge vertical Artist's Impression label */}
          <div 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none select-none"
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/60 font-sans uppercase font-medium">
              Artistic Impression
            </span>
          </div>
        </div>

        {/* Navigation Slider Controls */}
        <div className="mt-6 flex items-center gap-4 px-6 sm:px-12 lg:px-0 justify-center select-none">
          <button
            onClick={() => paginate(-1)}
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10 hover:scale-105 active:scale-95"
            aria-label="Previous Slide"
          >
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="#C5A880"
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
                className="hover-circle-path"
              />
            </svg>
            <ArrowLeft className="relative w-4 h-4 sm:w-5 sm:h-5 text-[#fff] transition-colors duration-300 group-hover:text-white z-10" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10 hover:scale-105 active:scale-95"
            aria-label="Next Slide"
          >
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="transparent"
                stroke="#C5A880"
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
                className="hover-circle-path"
              />
            </svg>
            <ArrowRight className="relative w-4 h-4 sm:w-5 sm:h-5 text-[#fff] transition-colors duration-300 group-hover:text-white z-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
