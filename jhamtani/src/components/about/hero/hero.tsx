"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const lines = [
  ["Some", "promises"],
  ["build", "homes."],
  ["Ours", "builds", "the"],
  ["legacy."],
];

// Pre-calculate character coordinates with global indices to ensure a seamless stagger timing
let globalCharIndex = 0;
const parsedLines = lines.map((lineWords) => {
  return lineWords.map((word) => {
    const chars = word.split("").map((char) => {
      const idx = globalCharIndex;
      globalCharIndex++;
      return { char, idx };
    });
    // Stagger delay count accounts for space character spacing
    globalCharIndex++;
    return chars;
  });
});

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
        <h1
          className="font-serif text-[38px] sm:text-[54px] md:text-[66px] lg:text-[72px] leading-[1.10] text-[#b88654] tracking-wide font-normal select-none"
        >
          {parsedLines.map((lineWords, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden py-1.5 -my-1.5">
              {lineWords.map((wordChars, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
                  {wordChars.map(({ char, idx }) => (
                    <span key={idx} className="relative inline-flex overflow-hidden">
                      <motion.span
                        initial={{ y: "115%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          duration: 1.25,
                          delay: 0.15 + idx * 0.035,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>

    </section>
  );
}


