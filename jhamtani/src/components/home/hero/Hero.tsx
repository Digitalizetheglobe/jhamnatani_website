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
         
        </motion.div>
      </div>
    </section>
  );
}
