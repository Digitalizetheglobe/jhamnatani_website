"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[650px] sm:min-h-[750px] lg:min-h-[850px] flex flex-col justify-between items-center overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-14"
      style={{
        background: "linear-gradient(180deg, #ccc9c6 0%, #e1dfdb 15%, #e1dfdb 85%, #ccc9c6 100%)",
      }}
    >
      {/* Upper & Bottom grey gradient shading (#ccc9c6) */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#ccc9c6] via-[#ccc9c6]/50 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#ccc9c6] via-[#ccc9c6]/50 to-transparent pointer-events-none z-0" />

      {/* Hands Clasping Image Container - Full Width Touching Screen Edges */}
      <div className="relative z-10 w-full flex-1 min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] flex items-center justify-center pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/assets/permission/hero.png"
            alt="Promises aren't written. They're practised."
            fill
            priority
            className="object-cover object-center mix-blend-multiply select-none pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Hero Headline Text */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 pb-4 sm:pb-8 lg:pb-10 mt-2">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[#9c6344] text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[62px] font-normal leading-[1.18] tracking-wide select-none"
        >
          <span className="block">Promises aren't written.</span>
          <span className="block mt-1 sm:mt-2">They're practised.</span>
        </motion.h1>
      </div>
    </section>
  );
}
