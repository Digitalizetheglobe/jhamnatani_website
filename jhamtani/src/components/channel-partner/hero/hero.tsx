"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full  min-h-[600px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/assets/channel-partner/hero.png"
          alt="Partnerships Built on Promise"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay for Text Legibility & Depth */}
        <div className="absolute inset-0 bg-black/55 backdrop-brightness-95" />
      </motion.div>

      {/* Centered Hero Headline */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-white text-3xl sm:text-5xl md:text-6xl lg:text-[56px] font-light leading-tight tracking-wide drop-shadow-md select-none"
        >
          Partnerships Built on Promise.
        </motion.h1>
      </div>
    </section>
  );
}
