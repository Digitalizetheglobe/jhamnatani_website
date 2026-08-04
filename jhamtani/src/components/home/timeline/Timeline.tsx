"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="w-full  relative border-t border-luxury-border min-h-[480px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[820px] flex items-center justify-between overflow-hidden px-6 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16"
    >
      {/* Background Graphic Image (Positioned and Aligned to the Right Side) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[82%] h-full flex justify-end items-center pointer-events-none z-10">
        <div className="relative w-full h-full">
          <Image
            src="/assets/image_16.png"
            alt="The Geography of Promises Delivered Map"
            fill
            priority
            className="object-contain object-right"
          />
        </div>
      </div>

      {/* Left Side Heading Text (Bottom-Left Alignment) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-left max-w-xs sm:max-w-md md:max-w-lg self-end pb-2 sm:pb-6 md:pb-10"
      >
        <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.08] text-[#C1AF86] tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          The Geography of
          <span className="block text-[#C1AF86]">Promises Delivered!</span>
        </h2>
      </motion.div>
    </section>
  );
}




