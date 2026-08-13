"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div 
        className="relative w-full min-h-[520px] sm:min-h-[650px] md:min-h-[720px] lg:min-h-[820px] flex items-center justify-end"
      >
        {/* Background Image of Ranveer Singh (flipped horizontally, shifted slightly to the right) */}
        <div 
          className="absolute inset-0 bg-cover bg-[position:35%_center] md:bg-[position:25%_center] z-0"
          style={{
            backgroundImage: "url('/assets/xo/about.png')",
            transform: "scaleX(-1)",
          }}
        />

        {/* Subtle dark vignette overlay allowing background curtains texture to remain visible */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/70 pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

        {/* Content Container (Right aligned on desktop, centered on smaller screens, shifted upwards and slightly to the left) */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex justify-center md:justify-end items-start pt-12 sm:pt-16 -translate-y-10 md:-translate-y-20 lg:-translate-y-50">
          <div className="max-w-md lg:max-w-[450px] text-left space-y-6 sm:space-y-8 -translate-x-3 md:-translate-x-8 lg:-translate-x-33">
            {/* Paragraph Block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-light space-y-2.5"
            >
              <p className="text-[#A0725B] font-medium text-sm sm:text-base md:text-[16px] leading-snug">
                XO is the rarest expression of the Jhamtani philosophy.
              </p>
              <p className="text-[#fff] sm:text-[#fff]/90 leading-relaxed font-light">
                A collection reserved for residences where architecture, craftsmanship and experience come together with uncompromising intent. Every XO is created to be remembered, not merely owned.
              </p>
            </motion.div>

            {/* Paragraph Block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans text-xs sm:text-sm md:text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-light space-y-2.5"
            >
              <p className="text-[#fff] sm:text-[#fff]/90 leading-relaxed font-light">
                XO is our signature on everything we believe luxury should be-restrained, enduring and deeply considered.
              </p>
              <p className="text-[#A0725B] font-medium text-sm sm:text-base md:text-[16px] leading-snug">
                A collection where every decision exists for one reason: to make the extraordinary feel effortless.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
