"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Star, ChevronRight, Sparkles } from "lucide-react";
import {
  testimonialsData,
  TestimonialVideo,
} from "@/components/customer-testimonial/testimonial";

const projectsList = [
  "Ace Abode",
  "Ace Augusta",
  "Ace Aurum",
  "Vision Ace",
  "Ace Almighty",
  "Jhamtani Impressions",
  "Ace Aura",
];

export default function Testimonial() {
  const [selectedProject, setSelectedProject] = useState<string>("Ace Abode");
  const [activeHoverIndex, setActiveHoverIndex] = useState<number>(1);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Filter 3 latest videos for the selected project
  const projectVideos: TestimonialVideo[] = testimonialsData
    .filter((v) => v.project === selectedProject)
    .slice(0, 3);

  return (
    <section
      id="testimonial"
      className="w-full bg-[#FAF5F0] text-zinc-900 px-6 sm:px-12 lg:px-20 py-20 md:py-28 border-t border-[#A0725B]/20 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <h2 className="font-serif text-[34px] sm:text-[48px] lg:text-[54px] leading-tight text-[#A0725B] font-normal text-center">
              Their Stories. Our Legacy.
            </h2>
          </motion.div>
        </div>

        {/* Interactive 3-Card Expanding Video Showcase */}
        <div className="flex flex-col lg:flex-row gap-5 items-stretch min-h-[380px] lg:h-[460px] pt-4">
          <AnimatePresence mode="wait">
            {projectVideos.map((video, index) => {
              const isExpanded = activeHoverIndex === index;
              const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

              return (
                <motion.div
                  key={`${selectedProject}-${video.id}`}
                  layout
                  onMouseEnter={() => setActiveHoverIndex(index)}
                  onClick={() => setActiveVideoId(video.youtubeId)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                    duration: 0.4,
                  }}
                  className={`relative rounded-[32px] overflow-hidden bg-zinc-950 cursor-pointer group shadow-md hover:shadow-2xl border border-[#A0725B]/20 transition-all duration-500 flex flex-col justify-end ${
                    isExpanded
                      ? "w-full lg:flex-[2.2] min-h-[360px] lg:min-h-0"
                      : "w-full lg:flex-[1] min-h-[220px] lg:min-h-0"
                  }`}
                >
                  {/* Video Thumbnail Background */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isExpanded
                        ? "bg-gradient-to-t from-black/90 via-black/35 to-black/20"
                        : "bg-black/55 group-hover:bg-black/45"
                    }`}
                  />

                  {/* Project Tag Badge */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/75 backdrop-blur-md text-[#C5A880] border border-[#C5A880]/30 shadow-lg">
                      {video.project}
                    </span>
                  </div>

                  {/* Story Indicator (Top Right) */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[9px] uppercase font-medium tracking-wider bg-white/15 backdrop-blur-md text-white/90">
                      Story #{index + 1}
                    </span>
                  </div>

                  {/* Animated Luxury Play Button Overlay (Exact Center of Visible Video Frame) */}
                  <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      
                      {/* Ambient Glowing Radar Waves on Hover */}
                      <span
                        className={`absolute rounded-full border border-[#C5A880]/60 animate-ping pointer-events-none opacity-0 group-hover:opacity-75 transition-opacity duration-500 ${
                          isExpanded
                            ? "w-20 h-20 md:w-24 md:h-24"
                            : "w-14 h-14 md:w-16 md:h-16"
                        }`}
                      />
                      <span
                        className={`absolute rounded-full bg-[#C5A880]/20 blur-[4px] pointer-events-none scale-90 group-hover:scale-130 transition-transform duration-700 ${
                          isExpanded
                            ? "w-20 h-20 md:w-24 md:h-24"
                            : "w-14 h-14 md:w-16 md:h-16"
                        }`}
                      />

                      {/* Main Play Circle */}
                      <div
                        className={`relative rounded-full border border-white/85 group-hover:border-[#C5A880] flex items-center justify-center transition-all duration-500 backdrop-blur-md bg-black/30 group-hover:bg-[#14171C]/90 group-hover:scale-115 shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_35px_rgba(197,168,128,0.5)] ${
                          isExpanded
                            ? "w-16 h-16 md:w-20 md:h-20 opacity-100"
                            : "w-12 h-12 md:w-14 md:h-14 opacity-80 group-hover:opacity-100"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`text-white group-hover:text-[#C5A880] fill-current ml-1 transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] ${
                            isExpanded
                              ? "w-7 h-7 md:w-8 md:h-8"
                              : "w-5 h-5 md:w-6 md:h-6"
                          }`}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="relative z-10 p-6 md:p-8 space-y-2 select-none">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-[#C5A880] fill-[#C5A880]"
                        />
                      ))}
                    </div>

                    <h3
                      className={`font-serif text-white leading-snug transition-all duration-300 ${
                        isExpanded
                          ? "text-xl md:text-2xl line-clamp-2"
                          : "text-base md:text-lg line-clamp-1 opacity-90"
                      }`}
                    >
                      {video.title}
                    </h3>

                    {/* Expanded details bar */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between pt-2 text-xs text-zinc-300"
                      >
                        <span className="text-[11px] font-medium text-[#C5A880] tracking-wider uppercase">
                          {video.location}
                        </span>

                        <span className="inline-flex items-center gap-1 font-semibold text-white uppercase text-[10px] tracking-widest group-hover:text-[#C5A880] transition-colors">
                          <span>Watch Story</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#C5A880]/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#A0725B] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Iframe Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Customer Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
