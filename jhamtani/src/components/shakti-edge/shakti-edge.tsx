"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POINTS = [
  "Encourage continuous learning.",
  "Empower women to lead with confidence.",
  "Create opportunities for growth at every stage.",
  "Upgrades women into higher earning roles.",
  "Develops the overall personality and confidence in working women.",
];

export default function ShaktiEdge() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="w-full bg-[#EFECE6] min-h-screen text-[#2B2B2B] pt-24 lg:pt-2 flex flex-col justify-between">
      <section className="w-full flex-1 flex flex-col lg:flex-row items-stretch">
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex justify-end items-center py-8 lg:py-12">
          <div className="w-full max-w-[640px] px-6 sm:px-10 lg:px-14 flex flex-col justify-center space-y-6 sm:space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-5"
            >


              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#A0725B] font-light tracking-tight"
              >
                Empowering Women. <br />
                Enabling Leaders.
              </motion.h1>

              {/* Descriptive Intro Paragraph */}
              <motion.p
                variants={itemVariants}
                className="font-sans text-sm sm:text-[15px] text-[#2B2B2B]/90 leading-relaxed font-light max-w-lg"
              >
                A dedicated initiative focused on empowering women across Jhamtani through workshops, learning opportunities, leadership development and meaningful conversations.
              </motion.p>
            </motion.div>

            {/* Bullet Points List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3.5 sm:space-y-4 pt-2 border-t border-[#2B2B2B]/10"
            >
              {POINTS.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-3.5 group"
                >
                  <span className="w-2 h-2 rounded-[2px] bg-[#A0725B] shrink-0 mt-2 transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-sans text-sm sm:text-[15px] text-[#2B2B2B] font-normal leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side Image Banner */}
        <div className="w-full lg:w-1/2 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[600px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[600px]"
          >
            <Image
              src="/assets/permission/03_Shakti_Edge.jpg"
              alt="Shakti Edge - Empowering Women. Enabling Leaders."
              fill
              priority
              className="object-cover object-center"
            />
            {/* Subtle shadow gradient overlay at top edge */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
