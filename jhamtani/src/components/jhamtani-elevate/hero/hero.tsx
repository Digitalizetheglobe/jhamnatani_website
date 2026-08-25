"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const line1 = "A Smarter Way to";
  const line2 = "Own Urban Living.";

  // Framer Motion animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom luxury cubic bezier
      },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[900px] flex items-center overflow-hidden bg-white select-none">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/jhamtani-elevate/A bold address that stands tall.webp"
          alt="Jhamtani Elevate - Elevated Living in Mundhwa, Pune"
          fill
          priority
          quality={100}
          style={{ objectPosition: "center 40%" }}
          className="object-cover select-none scale-105"
        />
        {/* Soft elegant gradient overlays for readability and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex justify-start items-start h-full pt-[26vh]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-left"
        >
          <h1 className="font-serif font-normal text-[36px] sm:text-[48px] md:text-[54px] lg:text-[62px] leading-[1.1] text-white tracking-wide drop-shadow-md">
            {/* Line 1 */}
            <span className="block overflow-hidden py-1">
              <motion.span variants={textVariants} className="inline-block">
                {line1}
              </motion.span>
            </span>
            {/* Line 2 */}
            <span className="block overflow-hidden py-1">
              <motion.span variants={textVariants} className="inline-block text-[#E5D2B8]">
                {line2}
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Artist's Impression Vertical Label on the right edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center mr-2 md:mr-4 select-none pointer-events-none">
        <span 
          className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/70 font-sans font-medium uppercase whitespace-nowrap"
          style={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
        >
          Artist's Impression
        </span>
      </div>
    </section>
  );
}
