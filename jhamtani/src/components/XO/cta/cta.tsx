"use client";

import React from "react";
import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
}

function WaveText({ text, letterDelay = 15 }: WaveTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex flex-wrap items-center justify-center gap-[0.02em] select-none w-full" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden py-0.5 -my-0.5">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
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

export default function CTA() {
  return (
    <section className="relative w-full bg-[#EEEBE7] overflow-hidden">
      {/* Top Content Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
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
            className="group inline-block px-8 py-3.5 rounded-full border border-[#A0725B] bg-white text-[#A0725B] text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.15em] hover:bg-[#A0725B] hover:text-white transition-all duration-300 select-none text-center min-w-[190px] sm:min-w-[210px] shadow-sm"
          >
            <WaveText text="XO Ace Abundance" />
          </a>

          {/* Button 2: Solid Filled with White Border and Drop Shadow */}
          <a 
            href="#ace-villas"
            className="group inline-block px-8 py-3.5 rounded-full bg-[#A0725B] border border-white text-white text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-[0.15em] hover:bg-[#8C5E47] transition-all duration-300 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)] select-none text-center min-w-[190px] sm:min-w-[210px]"
          >
            <WaveText text="XO Ace Villas" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Full-Width Image Banner */}
      <div className="w-full overflow-hidden leading-none relative group">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          src="/assets/xo/cta.png" 
          alt="Two Signature Residences" 
          className="w-full h-[40vh] sm:h-[55vh] md:h-[60vh] lg:h-[90vh] min-h-[300px] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-103"
        />
      </div>
    </section>
  );
}
