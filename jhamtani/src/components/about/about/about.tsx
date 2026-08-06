"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutContent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const values = [
    {
      title: "Uncompromising Quality",
      description:
        "Every structure built under the Jhamtani banner reflects precision engineering, top-tier materials, and meticulous craftsmanship.",
      number: "01",
    },
    {
      title: "Customer-Centric Philosophy",
      description:
        "We prioritize the needs, comfort, and aspirations of our homeowners, ensuring complete transparency and peace of mind.",
      number: "02",
    },
    {
      title: "Timely Delivery",
      description:
        "Respecting time and commitments is fundamental to our promise. We deliver projects with strict adherence to timelines.",
      number: "03",
    },
    {
      title: "Innovative Architecture",
      description:
        "Blending modern luxury with functional living spaces, our designs create timeless landmarks across Pune.",
      number: "04",
    },
  ];

  return (
    <div className="w-full bg-[#191f26] text-white pb-2">
      {/* Story Section - Flush to left edge & overlapping Hero */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center mb-20">
        {/* Left Side Image (Flush to left screen edge, extending up into Hero section, horizontally flipped) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 2 , x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20 space-y-8"
        >
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
            There are promises that are spoken. And then there are promises that quietly become a way of working. For over four decades, Jhamtani has belonged to the latter.
          </p>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] text-white/85 leading-relaxed tracking-wide max-w-xl">
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
          </p>

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
