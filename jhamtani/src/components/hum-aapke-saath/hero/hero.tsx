"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const SECTIONS = [
  {
    id: "the-promise",
    title: "The Promise",
    image: "/assets/permission/hamesh-aapke-saath-1.png",
    points: [
      "To remain by your side, even after possession.",
      "To make every homeowner feel heard, supported and valued.",
      "To build relationships that last far beyond the handover.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    image: "/assets/permission/hamesh-aapke-saath-2.png",
    points: [
      "Offer continued support after handover.",
      "Resolve concerns with care and speed.",
      "Stay connected throughout the homeowner journey.",
      "Have a dedicated HAS team/department and POCs",
      "Create mediums for customers/homeowners to initiate & track their complaints.",
      "Build relationships that last beyond transactions.",
    ],
  },
  {
    id: "our-impact",
    title: "Our Impact",
    image: "/assets/permission/hamesh-aapke-saath-3.png",
    points: [
      "Peace of mind beyond possession.",
      "Trusted & reliable solutions for every grievance.",
      "Lifelong homeowner relationships.",
      "A promise homeowners can always rely on.",
    ],
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.66) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

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
    <div ref={containerRef} className="relative w-full bg-[#EFECE6] h-[300vh]">
      {/* Sticky viewport container */}
      <section className="sticky top-0 w-full text-[#2B2B2B] overflow-hidden h-screen pt-20 sm:pt-24 lg:pt-28 flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex justify-end h-full">
          <div className="w-full max-w-[640px] px-6 sm:px-10 lg:px-14 py-2 lg:py-4 flex flex-col justify-center h-full space-y-4 sm:space-y-5 overflow-y-auto lg:overflow-visible">
            {/* Top Fixed Area: Main Headline & Descriptive Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.12] text-[#A0725B] font-light tracking-tight"
              >
                A promise that <br />
                doesn't end at possession.
              </motion.h1>

              {/* Descriptive Text Paragraphs */}
              <motion.div
                variants={itemVariants}
                className="space-y-2 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed"
              >
                <p>The day you receive your keys isn't the end of our relationship.</p>
                <p>
                  It's the beginning of another one. Whether it's assistance, support, guidance, or simply being present when you need us, Hamesha Aapke Saath ensures that every homeowner always has someone to rely on.
                </p>
                <p className="font-bold text-[#1B1B1B]">
                  Because homes are built before possession. Trust is built long after it.
                </p>
              </motion.div>
            </motion.div>

            {/* Dynamic Scroll Content Area (Points based on active section) */}
            <div className="pt-1 sm:pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-2.5 sm:space-y-3"
                >
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-[#A0725B] font-light">
                    {SECTIONS[activeIndex].title}
                  </h2>

                  <ul className="space-y-1.5 sm:space-y-2 font-sans text-xs sm:text-sm text-[#2B2B2B] font-medium">
                    {SECTIONS[activeIndex].points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side Image Banner (Cross-fading background per active section) */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={SECTIONS[activeIndex].image}
                alt={SECTIONS[activeIndex].title}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

