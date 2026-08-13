"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

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
    <div ref={containerRef} className="relative w-full bg-[#EFECE6] h-[200vh]">
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
                className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.14] text-[#A0725B] font-light tracking-tight"
              >
                A home gives you an address. <br />
                A community gives you <br />
                stories to tell.
              </motion.h1>

              {/* Descriptive Text Paragraph */}
              <motion.div
                variants={itemVariants}
                className="space-y-2 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed"
              >
                <p>
                  J-Tribe is Jhamtani's community engagement platform, created to bring every resident together through shared experiences, celebrations, learning and meaningful interactions. It exists to ensure that every Jhamtani community is filled not just with homes, but with friendships, traditions and memories that continue to grow with time.
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
                className="object-cover object-[5%_center]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

