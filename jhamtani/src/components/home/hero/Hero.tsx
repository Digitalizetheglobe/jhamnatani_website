"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div className="block sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="/assets/home-mobile.jpeg"
            alt="Jhamtani - The Name Is A Promise"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Tablet Background */}
        <div className="hidden sm:block lg:hidden absolute inset-0 w-full h-full">
          <Image
            src="/assets/home-tab.jpeg"
            alt="Jhamtani - The Name Is A Promise"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Laptop / Desktop Background */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">
          <Image
            src="/assets/home-laptop.jpeg"
            alt="Jhamtani - The Name Is A Promise"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Deep elegant overlay gradients */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-20 max-w-6xl mx-auto w-full flex flex-col justify-end pb-20 md:pb-32 text-left">
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
