"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 25%"],
  });

  // Positioned slightly higher (-65px) initially.
  // On scroll down, it moves naturally downward with the page until it reaches 0px (target position),
  // where it becomes fixed in position for the rest of the scroll.
  const rawY = useTransform(scrollYProgress, [0, 1], [-65, 0]);
  const y = useSpring(rawY, { stiffness: 120, damping: 25, mass: 0.5 });

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
    <div ref={containerRef} className="w-full bg-[#191f26] text-white pb-2 relative z-20">
      {/* Story Section - Flush to left edge & overlapping Hero */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center mb-20">
        {/* Left Side Image (Slightly elevated, moves down into place on scroll) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          style={{ y }}
          className="lg:col-span-6 relative -mt-16 sm:-mt-24 lg:-mt-14 z-30 h-[420px] sm:h-[540px] lg:h-[800px] rounded-tr-[20px] overflow-hidden shadow-2xl"
        >
          <div
            className="relative w-full h-full"
            style={{ transform: "scaleX(-1)" }}
          >
            <Image
              src="/assets/about/about.webp"
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
          viewport={{ once: true, margin: "100px" }}
          className="lg:col-span-6 px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20 space-y-8"
        >
          <motion.p
            variants={childVariants}
            className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl"
          >
            Jhamtani brings a business legacy of more than 4 decades and over 16 years of real estate experience.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl"
          >
            The company has delivered over 3 million sq. ft. and is currently developing 4 million sq. ft. across 32+ residential, commercial, and mixed-use developments, with another 4 million sq. ft. in the immediate pipeline for launch this financial year.
            {!isExpanded && (
              <span 
                onClick={() => setIsExpanded(true)}
                className="text-[#b88654] italic cursor-pointer hover:underline ml-2 font-semibold inline-block"
              >
                Read more
              </span>
            )}
          </motion.p>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
                With over 13,000 happy faces across Pune, Jhamtani continues to expand across key growth corridors in East and West Pune.
              </p>
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
                With Ranveer Singh as its brand ambassador, Jhamtani moves into its next phase with renewed energy while remaining rooted in its core philosophy.
              </p>
              <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
                The legacy remains strong. The promise remains unchanged. The journey moves forward.
                <span 
                  onClick={() => setIsExpanded(false)}
                  className="text-[#b88654] italic cursor-pointer hover:underline ml-2 font-semibold inline-block"
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
