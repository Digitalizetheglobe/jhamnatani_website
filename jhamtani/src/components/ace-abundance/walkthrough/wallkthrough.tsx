"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function Walkthrough() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scrolling when the video lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
            Experience Ace Abundance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-zinc-700 leading-relaxed font-light mt-3 max-w-xl"
          >
Take a closer look at the expansive residences, curated amenities and refined details that define this limited collection.
          </motion.p>
        </div>

        {/* Video Thumbnail Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onClick={() => setIsOpen(true)}
          className="relative w-full aspect-[2.39/1] bg-zinc-950 overflow-hidden cursor-pointer group shadow-xl"
        >
          {/* Preview Image */}
          <img
            src="/assets/ace-ayodha/gallery_1.webp"
            alt="Project Walkthrough Video Preview"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />

          {/* Vignette / Dark overlay */}
          <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/45 z-10" />

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-white/80 flex items-center justify-center bg-black/20 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Play icon (triangle) */}
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5" />
              
              {/* Subtle hover ping animation ring */}
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
            <span className="text-[8px] tracking-[0.2em] text-white/40 font-sans uppercase font-medium">
              Artistic Impression
            </span>
          </div>
        </motion.div>
      </div>

      {/* Full-Screen Video Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors cursor-pointer p-2 z-55 bg-black/40 rounded-full hover:bg-black/60 flex items-center justify-center"
              aria-label="Close walkthrough video modal"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Video Player Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="w-full max-w-5xl aspect-video bg-black shadow-2xl overflow-hidden relative z-50"
              onClick={(e) => e.stopPropagation()} // Stop click propagation to prevent closing
            >
              <video
                src="/video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
