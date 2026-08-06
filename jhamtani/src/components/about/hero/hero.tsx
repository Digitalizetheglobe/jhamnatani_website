"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const lines = [
  ["Some", "promises"],
  ["build", "homes."],
  ["Ours", "builds", "the"],
  ["legacy."],
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[800px] lg:min-h-[950px] w-full flex pt-36 sm:pt-48 lg:pt-60 overflow-hidden">
      {/* Background Image Container with horizontal flip */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ transform: "scaleX(-1)" }}
      >
        <Image
          src="/assets/about/hero.jpg"
          alt="Some promises build homes. Ours builds the legacy."
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark gradient overlay at top for navigation readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 flex justify-start">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-[38px] sm:text-[54px] md:text-[66px] lg:text-[72px] leading-[1.10] text-[#b88654] tracking-wide font-normal"
        >
          {lines.map((lineWords, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden">
              {lineWords.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  variants={wordVariants}
                  className="inline-block mr-[0.28em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </div>

    </section>
  );
}


