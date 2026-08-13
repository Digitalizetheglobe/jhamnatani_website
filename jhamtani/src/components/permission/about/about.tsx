"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
}

function WaveText({ text, letterDelay = 15 }: WaveTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex flex-wrap items-center justify-center gap-[0.02em] select-none" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden py-0.5 -my-0.5">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

export default function About() {
  return (
    <section className="w-full bg-[#191F26] text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Top Text Paragraphs */}
        <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base font-sans text-zinc-300/90 leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The promises we give are not for the brochures or the campaigns. They are what we work for. They are why we work for.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Some promises stay with our homeowners. Some shape the way we work.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Some build stronger communities. And some inspire dreams far beyond our projects. Together, they build the kind of brand we aspire to be.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The following aren't just our initiatives. They're the many ways we choose to keep our word.
          </motion.p>
        </div>

        {/* Initiatives Columns with Divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 sm:pt-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0"
        >
          {/* Left Initiative: Hamesha Aapke Saath */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 md:pr-12 lg:pr-16 w-full">
            <div className="relative h-20 sm:h-24 md:h-28 w-48 sm:w-60 md:w-64 flex items-center justify-center">
              <Image
                src="/assets/permission/aapke-saath.png"
                alt="Hamesha Aapke Saath"
                fill
                className="object-contain"
              />
            </div>
            <Link
              href="/hum-aapke-saath"
              className="group px-6 sm:px-7 py-2.5 rounded-full border border-[#A0725B] text-[#fff] text-[11px] sm:text-xs uppercase tracking-widest hover:bg-[#A0725B] hover:text-white transition-all duration-300 cursor-pointer inline-block"
            >
              <WaveText text="EXPLORE MORE" />
            </Link>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-[1px] h-36 bg-zinc-600/50 shrink-0 mx-4" />
          <div className="block md:hidden w-32 h-[1px] bg-zinc-600/50 my-2" />

          {/* Right Initiative: J TRIBE */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 md:pl-12 lg:pl-16 w-full">
            <div className="relative h-20 sm:h-24 md:h-28 w-48 sm:w-60 md:w-64 flex items-center justify-center">
              <Image
                src="/assets/permission/j-tribe.png"
                alt="J TRIBE"
                fill
                className="object-contain"
              />
            </div>
            <Link
              href="/j-tribe"
              className="group px-6 sm:px-7 py-2.5 rounded-full border border-[#A0725B] text-[#fff] text-[11px] sm:text-xs uppercase tracking-widest hover:bg-[#A0725B] hover:text-white transition-all duration-300 cursor-pointer inline-block"
            >
              <WaveText text="EXPLORE MORE" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

