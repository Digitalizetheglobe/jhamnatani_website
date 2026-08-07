"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
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
    <div className="w-full bg-[#191f26] text-white pb-2">
      {/* Story Section - Flush to left edge & overlapping Hero */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center mb-20">
        {/* Left Side Image (Flush to left screen edge, extending up into Hero section, horizontally flipped) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-6 relative -mt-20 sm:-mt-28 lg:-mt-10 z-30 h-[420px] sm:h-[540px] lg:h-[800px] rounded-tr-[20px] overflow-hidden shadow-2xl"
        >
          <div
            className="relative w-full h-full"
            style={{ transform: "scaleX(-1)" }}
          >
            <Image
              src="/assets/about/about.jpg"
              alt="Jhamtani Architecture"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20 space-y-8"
        >
          <motion.p
            variants={childVariants}
            className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl"
          >
            There are promises that are spoken. And then there are promises that quietly become a way of working. For over four decades, Jhamtani has belonged to the latter.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl"
          >
            Long before a foundation is excavated or a skyline begins to rise, every decision is measured against a simple question - Will this continue to matter years from today? This single question has shaped everything we've built.
            {isExpanded ? (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {" "}The 24 communities that have become home to over 13,000 families. More than 4 million square feet thoughtfully delivered. And over 6.4 million square feet envisioned for tomorrow.
              </motion.span>
            ) : (
              <span 
                onClick={() => setIsExpanded(true)}
                className="text-[#b88654] italic cursor-pointer hover:underline ml-1 font-semibold"
              >
                Read more
              </span>
            )}
          </motion.p>

          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
                Yet, these aren't the milestones that define us. They are simply the outcome of something far more enduring; a promise honoured, project after project.
                <span 
                  onClick={() => setIsExpanded(false)}
                  className="text-[#b88654] italic cursor-pointer hover:underline ml-1 font-semibold"
                >
                  Read less
                </span>
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

    </div>
  );
}
