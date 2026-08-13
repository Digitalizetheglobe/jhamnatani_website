"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

  const handleSectionClick = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const targetScroll = containerTop + (index / SECTIONS.length) * containerHeight + 50;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

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
      <section className="sticky top-0 w-full text-[#2B2B2B] overflow-hidden h-screen pt-16 sm:pt-20 lg:pt-24 flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex justify-end h-full">
          <div className="w-full max-w-[640px] px-6 sm:px-10 lg:px-14 py-4 lg:py-6 flex flex-col justify-center h-full space-y-4 sm:space-y-5 overflow-y-auto lg:overflow-visible">
            {/* Top Fixed Area: Main Headline & Descriptive Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-2xl sm:text-3xl lg:text-[36px] leading-[1.15] text-[#A0725B] font-light tracking-tight"
              >
                A promise that <br />
                doesn't end at possession.
              </motion.h1>

              {/* Descriptive Text Paragraphs */}
              <motion.div
                variants={itemVariants}
                className="space-y-1.5 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed"
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

            {/* Continuous Vertical Content Accordion (Showing active + peek previews) */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {SECTIONS.map((section, idx) => {
                const isActive = idx === activeIndex;
                const isUpcoming = idx > activeIndex;

                return (
                  <motion.div
                    key={section.id}
                    layout
                    onClick={() => handleSectionClick(idx)}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className={`transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "p-3.5 sm:p-4"
                        : "p-2.5 sm:p-3"
                    }`}
                  >
                    {/* Section Header with Step Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">

                        <h2
                          className={`font-serif transition-all duration-300 ${
                            isActive
                              ? "text-base sm:text-lg lg:text-xl text-[#A0725B] font-medium"
                              : "text-sm sm:text-base text-[#2B2B2B]/80 font-normal"
                          }`}
                        >
                          {section.title}
                        </h2>
                      </div>

                      {!isActive && (
                        <span className="text-[10px] sm:text-[11px] font-sans tracking-wide text-[#A0725B]/80 uppercase font-medium">
                          {isUpcoming ? "Next Section ↓" : "Viewed ✓"}
                        </span>
                      )}
                    </div>

                    {/* Section Content Points (Expanded when active) */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 10 : 0,
                      }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#2B2B2B] font-medium pl-1">
                        {section.points.map((point, pIdx) => (
                          <motion.li
                            key={pIdx}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                            transition={{ duration: 0.3, delay: isActive ? pIdx * 0.04 : 0 }}
                            className="flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side Image Banner Stack (Layered sliding curtain reveal, zero white space) */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:h-full overflow-hidden">
          {SECTIONS.map((section, idx) => {
            const isActive = idx === activeIndex;
            const isPassed = idx < activeIndex;
            const isUpcoming = idx > activeIndex;

            return (
              <motion.div
                key={section.id}
                initial={false}
                animate={{
                  y: isUpcoming ? "100%" : "0%",
                  opacity: isUpcoming ? 0 : 1,
                  scale: isPassed ? 0.97 : 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 1, 0.5, 1],
                }}
                style={{ zIndex: idx }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                />
                {/* Visual shadow overlay at top edge of sliding layer */}
                {idx > 0 && (
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
