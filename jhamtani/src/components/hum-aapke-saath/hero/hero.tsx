"use client";

import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    // Force reset scroll to top when mounting
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    }
    setActiveIndex(0);

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) {
        setActiveIndex(0);
        return;
      }

      // Progress from 0 (top of container) to 1 (bottom of container)
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      if (progress < 0.33) {
        setActiveIndex(0);
      } else if (progress < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Trigger multiple frame checks on initial mount to ensure section 0 is active
    handleScroll();
    const t1 = setTimeout(handleScroll, 50);
    const t2 = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleSectionClick = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const containerHeight = containerRef.current.offsetHeight;
    const totalScrollable = containerHeight - window.innerHeight;
    const targetFractions = [0.1, 0.5, 0.9];
    const targetScroll = containerTop + targetFractions[index] * totalScrollable;
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
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
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

            {/* Continuous Vertical Content Accordion */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              {SECTIONS.map((section, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={section.id}
                    onClick={() => handleSectionClick(idx)}
                    className="group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden pb-3 sm:pb-4 border-b border-[#2B2B2B]/10 last:border-b-0"
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <h2
                          className={`font-serif transition-all duration-500 ${
                            isActive
                              ? "text-xl sm:text-2xl lg:text-[34px] text-[#A0725B] font-medium leading-tight"
                              : "text-xl sm:text-2xl lg:text-[34px] text-[#2B2B2B]/35 group-hover:text-[#2B2B2B]/65 font-light leading-tight"
                          }`}
                        >
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Section Content Points (Expanded when active) */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 14 : 0,
                      }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2.5 font-sans text-xs sm:text-[14px] text-[#2B2B2B] leading-relaxed pl-1">
                        {section.points.map((point, pIdx) => (
                          <motion.li
                            key={pIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                            transition={{ duration: 0.4, delay: isActive ? pIdx * 0.05 : 0, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A0725B] shrink-0 mt-2" />
                            <span className="font-normal">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side Image Banner Stack (Layered sliding curtain reveal) */}
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
                  scale: isPassed ? 0.95 : 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
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
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
