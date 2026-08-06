"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full bg-[#EEEBE7] overflow-hidden">
      {/* Top Content Bar */}
      <div className="max-w-7xl mx-auto  py-10 sm:py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Column: Heading Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <h2 className="font-inria font-light text-[#111111] text-3xl sm:text-4xl md:text-[42px] leading-tight tracking-wide">
            Two Signature Residences. <br />
            One Philosophy. Extraordinaire!
          </h2>
        </motion.div>

        {/* Right Column: CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 justify-start md:justify-end"
        >
          {/* Button 1: Outline with White Fill */}
          <a 
            href="#ace-abundance"
            className="inline-block px-8 py-3.5 rounded-full border border-[#A0725B] bg-white text-[#A0725B] text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.15em] hover:bg-[#A0725B] hover:text-white transition-all duration-300 select-none text-center min-w-[190px] sm:min-w-[210px] shadow-sm"
          >
            XO Ace Abundance
          </a>

          {/* Button 2: Solid Filled with White Border and Drop Shadow */}
          <a 
            href="#ace-villas"
            className="inline-block px-8 py-3.5 rounded-full bg-[#A0725B] border border-white text-white text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.15em] hover:bg-[#8C5E47] transition-all duration-300 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)] select-none text-center min-w-[190px] sm:min-w-[210px]"
          >
            XO Ace Villas
          </a>
        </motion.div>
      </div>

      {/* Bottom Full-Width Image Banner */}
      <div className="w-full overflow-hidden leading-none">
        <motion.img 
          initial={{ scale: 1.03, opacity: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/assets/xo/cta.png" 
          alt="Two Signature Residences" 
          className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[95vh] min-h-[100px] object-cover"
        />
      </div>
    </section>
  );
}
