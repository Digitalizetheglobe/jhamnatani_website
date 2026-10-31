"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export default function Walkthrough() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Project Walkthrough
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] font-light tracking-[0.1em] mt-6 leading-none"
          >
            Experience Ace Ayodhya.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-zinc-700 leading-relaxed font-light mt-3 max-w-xl"
          >
            Take a closer look at the architecture, design, and thoughtfully planned spaces created for an elevated living experience.
          </motion.p>
        </div>

        {/* Video Container - Inline Exact Size */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-[2.39/1] bg-zinc-950 overflow-hidden shadow-xl"
        >
          {!isPlaying ? (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer group"
            >
              {/* Preview Image */}
              <img
                src="https://img.youtube.com/vi/z_nZd-89ACs/maxresdefault.jpg"
                alt="Project Walkthrough Video Preview - Ace Ayodhya"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Vignette / Dark overlay */}
              <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/35 z-10" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-white/80 flex items-center justify-center bg-black/20 hover:bg-white/10 transition-colors duration-300"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5" />
                  <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Artistic Impression tag inside thumbnail */}
              <div
                className="absolute right-3 bottom-6 z-20 flex items-center justify-center pointer-events-none select-none"
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                <span className="text-[8px] tracking-[0.2em] text-white/60 font-sans uppercase font-medium">
                  Artistic Impression
                </span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full bg-black">
              {/* Close Button to return to thumbnail preview */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* In-place YouTube Video Embed */}
              <iframe
                src="https://www.youtube.com/embed/z_nZd-89ACs?autoplay=1&rel=0"
                title="Ace Ayodhya Project Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

