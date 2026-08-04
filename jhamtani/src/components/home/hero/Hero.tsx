"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image_11.jpg"
          alt="Jhamtani Luxury Residence"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Deep elegant overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 z-10" />
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto w-full flex flex-col justify-end pb-20 md:pb-32 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-[42px] sm:text-[56px] md:text-[68.9px] leading-tight text-white tracking-wider max-w-4xl">
            Jhamtani
            <span className="block mt-2 font-serif text-[36px] sm:text-[48px] md:text-[68.9px] text-white">
              The Name Is A Promise
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
