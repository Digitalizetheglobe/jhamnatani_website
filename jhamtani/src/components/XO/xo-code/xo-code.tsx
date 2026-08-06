"use client";

import React from "react";
import { motion } from "framer-motion";

export default function XOCode() {
  const codes = [
    {
      id: "X01",
      title: "Landmark Addresses",
      description: "The city remembers certain locations. XO begins there."
    },
    {
      id: "X02",
      title: "The Luxury of Remaining Relevant.",
      description: "Designed to outlive fashion. Built to outlast generations. Because statements shouldn't have an expiry date."
    },
    {
      id: "X03",
      title: "Grandeur Without Compromise",
      description: "Because luxury isn't measured in square feet. It's measured in freedom of expression, even for a home."
    },
    {
      id: "X04",
      title: "Uncompromising Artistry",
      description: "Deliberate design in every detail. Sourced globally, crafted locally to stand the test of time."
    },
    {
      id: "X05",
      title: "Sublime Finesse",
      description: "Seen at first glance. Admired for a lifetime. Perfection Lives In The Details."
    },
    {
      id: "X06",
      title: "Intelligent Living",
      description: "Technology that disappears into experience. Present but never intrusive."
    }
  ];

  return (
    <section className="relative w-full bg-black py-24 sm:py-32 overflow-hidden border-t border-white/[0.03]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A0725B]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-left mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-inria font-light text-[#A0725B] text-3xl sm:text-4xl md:text-[44px] mb-3"
          >
            The XO Code
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-medium"
          >
            The parameters that make XO an XO.
          </motion.p>
        </div>

        {/* XO Grid with viewport scroll-entrance reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-sm overflow-hidden"
        >
          {codes.map((item, index) => {
            // Determine responsive border styles
            const borderClasses = `
              relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 h-[380px] sm:h-[420px] overflow-hidden group bg-[#111111]/30 hover:bg-black transition-colors duration-500 cursor-default
              ${index !== 5 ? "border-b border-white/10" : ""}
              ${index % 3 !== 2 ? "md:border-r border-white/10" : ""}
            `;

            return (
              <div 
                key={item.id}
                className={borderClasses}
              >
                {/* Default Text Content (Legible on hover with premium transition) */}
                <div className="relative z-10 h-full flex flex-col justify-between transition-all duration-500 ease-in-out">
                  {/* Top: ID */}
                  <div className="font-inria text-3xl sm:text-4xl text-[#A0725B] font-light tracking-wide transition-colors duration-500 group-hover:text-white">
                    {item.id}
                  </div>

                  {/* Bottom: Title & Description */}
                  <div className="space-y-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    <h3 className="font-inria text-base sm:text-lg text-[#A0725B] font-medium leading-snug transition-colors duration-500 group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-light transition-colors duration-500 group-hover:text-zinc-100">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Image Overlay (Fades in on hover) */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  style={{
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.6) 100%), url('/assets/xo/xo_code.png')"
                  }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
