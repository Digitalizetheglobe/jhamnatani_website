"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const SECTIONS = [
  {
    id: "the-promise",
    title: "The Promise",
    image: "/assets/permission/J-Tribe-1.png",
    points: [
      "To create communities that people are proud to belong to.",
      "Foster meaningful relationships beyond neighbours.",
      "Celebrate every milestone, every festival and every generation.",
      "Create opportunities for learning, wellness and personal growth.",
      "Build a culture where everyone feels welcomed, valued and connected.",
    ],
  },
  {
    id: "j-tribe-impact",
    title: "The J-Tribe Impact",
    image: "/assets/permission/J-Tribe-2.png",
    points: [
      "Homes that feel more human.",
      "Neighbours who become lifelong friends.",
      "Celebrations that become traditions.",
      "Communities that grow stronger together.",
      "A greater sense of belonging, every day.",
    ],
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
    setActiveIndex(0);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.5) {
      setActiveIndex(0);
    } else {
      setActiveIndex(1);
    }
  });

  const handleSectionClick = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const totalScrollable = containerHeight - window.innerHeight;
    const targetFraction = index / (SECTIONS.length - 1);
    const targetScroll = containerTop + targetFraction * totalScrollable;
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
    <div ref={containerRef} className="relative w-full bg-[#EFECE6] h-[200vh]">
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
                A home gives you an address. <br />
                A community gives you <br />
                stories to tell.
              </motion.h1>

              {/* Descriptive Text Paragraph */}
              <motion.div
                variants={itemVariants}
                className="space-y-1.5 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed"
              >
                <p>
                  J-Tribe is Jhamtani's community engagement platform, created to bring every resident together through shared experiences, celebrations, learning and meaningful interactions. It exists to ensure that every Jhamtani community is filled not just with homes, but with friendships, traditions and memories that continue to grow with time.
                </p>
              </motion.div>
            </motion.div>

            {/* Continuous Vertical Content Accordion */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {SECTIONS.map((section, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={section.id}
                    onClick={() => handleSectionClick(idx)}
                    className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer overflow-hidden py-2 sm:py-2.5"
                  >
                    {/* Section Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <h2
                          className={`font-serif transition-colors duration-500 ${
                            isActive
                              ? "text-base sm:text-lg lg:text-xl text-[#A0725B] font-medium"
                              : "text-sm sm:text-base text-[#2B2B2B]/80 font-normal"
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
                        marginTop: isActive ? 12 : 0,
                      }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#2B2B2B] font-medium pl-1">
                        {section.points.map((point, pIdx) => (
                          <motion.li
                            key={pIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                            transition={{ duration: 0.4, delay: isActive ? pIdx * 0.05 : 0, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                            <span>{point}</span>
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


