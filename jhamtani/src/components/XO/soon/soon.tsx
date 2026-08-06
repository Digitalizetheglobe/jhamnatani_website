"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Soon() {
  return (
    <section 
      className="relative w-full h-screen min-h-[600px] sm:min-h-[750px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image of the Section */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/assets/xo/soon.png')",
        }}
      />

      {/* Black overlay to darken the background image */}
      <div className="absolute inset-0 bg-black/80 z-10 pointer-events-none" />

      {/* Subtle overlays to blend nicely with top/bottom sections */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Ambient background glow matching the gold/brown theme */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "easeInOut" 
        }}
        className="absolute w-[400px] h-[400px] bg-[#A0725B]/10 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      {/* Centered Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        
        {/* Line 1: Top Caption */}
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-inria font-light text-[#A0725B] text-xl sm:text-2xl md:text-3xl lg:text-[34px] tracking-wide select-none"
        >
          Hadapsar Will Wear
        </motion.h3>

        {/* Line 2: The Logo Row (An [XO Logo] Soon!) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 select-none"
        >
          <span className="font-inria font-light text-[#A0725B] text-4xl sm:text-6xl md:text-7xl lg:text-[85px] leading-none tracking-wide">
            An
          </span>
          <img 
            src="/assets/pojetcts/XO_logo.webp" 
            alt="XO Logo" 
            className="h-12 sm:h-20 md:h-24 lg:h-[105px] object-contain filter drop-shadow-[0_4px_25px_rgba(160,114,91,0.3)] hover:scale-103 transition-transform duration-500 cursor-default"
          />
          <span className="font-inria font-light text-[#A0725B] text-4xl sm:text-6xl md:text-7xl lg:text-[85px] leading-none tracking-wide">
            Soon!
          </span>
        </motion.div>

        {/* Line 3: Bottom Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-light text-zinc-300 text-sm sm:text-base md:text-lg lg:text-[20px] tracking-wide select-none opacity-90"
        >
          Announcing our new XO project near Amanora.
        </motion.p>

      </div>
    </section>
  );
}
