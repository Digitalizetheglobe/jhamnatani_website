"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen min-h-[600px] lg:min-h-[750px] flex items-center justify-start overflow-hidden"
    >
      {/* Background container that handles the horizontal flip */}
      <div className="absolute inset-0 overflow-hidden z-0" style={{ transform: "scaleX(-1)" }}>
        {/* Child background image that animates the scale (Ken Burns effect) */}
        <motion.div 
          initial={{ scale: 1.35 }}
          animate={{ scale: 1.25 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-no-repeat bg-[position:30%_98%] md:bg-[position:center_98%]"
          style={{
            backgroundImage: "url('/assets/xo/hero.png')"
          }}
        />
      </div>

      {/* Luxury gold ambient glow pulsing slowly */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-[#C5A880]/15 rounded-full blur-[130px] pointer-events-none z-0" 
      />

      {/* Content Container (shifted slightly upwards for visual alignment) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 text-left -translate-y-12 md:-translate-y-16">
        <div className="max-w-4xl">
          {/* Main Headline with Luxury Reveal Effect */}
          <h1 className="font-serif font-light text-[#A0725B] text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.1] tracking-wide mb-12 sm:mb-14 select-none">
          {/* Line 1 */}
          <div className="overflow-hidden block py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              The Promise of the
            </motion.span>
          </div>
          
          {/* Line 2 */}
          <div className="overflow-hidden block py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block font-normal"
            >
              Superiorly Rare.
            </motion.span>
          </div>
        </h1>

        {/* Logo Section with fade-up and zoom scale animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4"
        >
          <img 
            src="/assets/pojetcts/XO_logo.webp" 
            alt="XO Jhamtani Signature Series" 
            className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain filter drop-shadow-[0_4px_20px_rgba(197,168,128,0.2)] hover:scale-102 transition-transform duration-500 cursor-default"
          />
        </motion.div>
        </div>
      </div>
    </section>
  );
}
