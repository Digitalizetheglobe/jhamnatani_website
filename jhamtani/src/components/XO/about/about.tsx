"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section 
      className="relative w-full h-screen min-h-[700px] sm:min-h-[950px] flex items-center justify-end overflow-hidden -mt-70"
    >
      {/* Background Image of Ranveer Singh (flipped horizontally, aligned top) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: " url('/assets/xo/about.png')",
          transform: "scaleX(-1) scale(1.10)",
          backgroundPosition: "-90% top"
        }}
      />

      {/* Bottom fade transition to blend seamlessly with the black background */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      {/* Content Container (Aligned to the right on desktop, centered on mobile) */}
      <div className="relative z-20 max-w-md px-6 sm:px-12 md:px-0 md:mr-16 lg:mr-24 xl:mr-70 text-left space-y-10 md:space-y-6 -mt-20">
        {/* Paragraph Block 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] md:text-[15px] leading-relaxed tracking-wide font-light space-y-3"
        >
          <p className="text-[#A0725B] font-medium">
            XO is the rarest expression of the Jhamtani philosophy.
          </p>
          <p className="text-zinc-300">
            A collection reserved for residences where architecture, craftsmanship and experience come together with uncompromising intent. Every XO is created to be remembered, not merely owned.
          </p>
        </motion.div>

        {/* Paragraph Block 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[15px] sm:text-[17px] md:text-[15px] leading-relaxed tracking-wide font-light space-y-3"
        >
          <p className="text-zinc-300">
            XO is our signature on everything we believe luxury should be-restrained, enduring and deeply considered.
          </p>
          <p className="text-[#A0725B] font-medium">
            A collection where every decision exists for one reason: to make the extraordinary feel effortless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
