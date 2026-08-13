"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="w-full bg-[#EFECE6] text-[#2B2B2B] overflow-hidden min-h-screen lg:min-h-[860px] pt-28 sm:pt-32 lg:pt-36 flex flex-col lg:flex-row">
      {/* Left Content Area (Aligned to Header Logo line) */}
      <div className="w-full lg:w-1/2 flex justify-end">
        <div className="w-full max-w-[640px] px-6 sm:px-12 lg:px-16 py-6 lg:py-12 flex flex-col justify-between">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8 sm:space-y-10"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-[#A0725B] font-light tracking-tight"
            >
              A promise that <br />
              doesn't end at possession.
            </motion.h1>

            {/* Descriptive Text Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-3.5 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed">
              <p>The day you receive your keys isn't the end of our relationship.</p>
              <p>
                It's the beginning of another one. Whether it's assistance, support, guidance, or simply being present when you need us, Hamesha Aapke Saath ensures that every homeowner always has someone to rely on.
              </p>
              <p className="font-bold text-[#1B1B1B]">
                Because homes are built before possession. Trust is built long after it.
              </p>
            </motion.div>

            {/* Section: The Promise */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#A0725B] font-light">
                The Promise
              </h2>

              <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#2B2B2B] font-medium">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                  <span>To remain by your side, even after possession.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                  <span>To make every homeowner feel heard, supported and valued.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                  <span>To build relationships that last far beyond the handover.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Nav / Accordion Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 lg:mt-20 space-y-0"
          >
            <div className="border-t border-[#4A4A4A]/40 pt-3 pb-3">
              <h3 className="font-serif text-xl sm:text-2xl text-[#A0725B]/40 font-light cursor-pointer hover:text-[#A0725B] transition-colors duration-300">
                What We Do
              </h3>
            </div>
            <div className="border-t border-[#4A4A4A]/40 pt-3">
              <h3 className="font-serif text-xl sm:text-2xl text-[#A0725B]/30 font-light cursor-pointer hover:text-[#A0725B] transition-colors duration-300">
                Our Impact
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Image Banner (Full touch to screen) */}
      <div className="w-full lg:w-1/2 relative min-h-[500px] sm:min-h-[620px] lg:min-h-[860px]">
        <motion.div
          initial={{ scale: 1.04, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/assets/permission/hamesh-aapke-saath.png"
            alt="A promise that doesn't end at possession"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
