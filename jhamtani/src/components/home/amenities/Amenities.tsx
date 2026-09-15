"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Amenities() {
  const promises = [
    {
      title: "Customer Happiness",
      iconPath: "/assets/icon_1.webp",
    },
    {
      title: "Better Than Yesterday",
      iconPath: "/assets/icon_2.webp",
    },
    {
      title: "Think Long Term",
      iconPath: "/assets/icon_3.webp",
    },
    {
      title: "Positive Impact on Every Life Touched",
      iconPath: "/assets/icon_4.webp",
    },
  ];

  return (
    <section
      id="promises"
      className="clear-both w-full bg-[#eeebe7] text-white px-6 sm:px-12 lg:px-24 py-16 md:py-24 border-t border-luxury-border"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-[#a0725b]">
              A promise isn't something we write.
              <span className="block text-[#a0725b]">It's something you live.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-[#010101]"
          >
            These four promises are the principles that quietly shape
            every Jhamtani development, every choice we make, every community we create,
            and every relationship we nurture.
          </motion.p>
        </div>

        {/* 4 Columns of Promises */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {promises.map((p, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Squircle card container with theme border */}
                <div className="w-full max-w-[220px] h-[180px] bg-white/40 border border-[#a0725b]/40 rounded-[50px] flex items-center justify-center shadow-sm hover:scale-105 hover:border-[#a0725b] hover:shadow-md transition-all duration-300 select-none p-4">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    <Image
                      src={p.iconPath}
                      alt={`Promise ${p.title}`}
                      fill
                      priority
                      style={{ filter: "brightness(0) opacity(0.8)" }}
                      className={`object-contain transition-all duration-300 group-hover:scale-110 ${
                        idx === 0 ? "scale-120" : ""
                      }`}
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-[20px] md:text-[22px] leading-tight text-[#a0725b] mt-6">
                  <span className="block font-serif text-[20px] md:text-[22px] mt-1 text-[#a0725b] font-normal">
                    {p.title}
                  </span>
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
