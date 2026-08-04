"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Track scroll position inside the right statistics box
  const handleStatsScroll = () => {
    if (!statsContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = statsContainerRef.current;
    const totalScrollable = scrollHeight - clientHeight;
    if (totalScrollable > 0) {
      setProgress(scrollTop / totalScrollable);
    }
  };

  useEffect(() => {
    handleStatsScroll();
  }, []);

  const stats = [
    { number: "40yrs+", label: "OF LEGACY" },
    { number: "13K+", label: "HAPPY FACES" },
    { number: "8", label: "ONGOING PROJECTS" },
    { number: "4M+", label: "SQ. FT. DELIVERED" },
    { number: "4.8M+", label: "SQ. FT. IN PIPELINE" },
    { number: "24", label: "COMPLETED PROJECTS" },
    { number: "16Yrs +", label: "IN REAL ESTATE" },
    { number: "32", label: "TOTAL PROJECTS" },
    { number: "2.4M+", label: "SQ. FT. UNDER CONSTRUCTION" },
    { number: "6.4M+", label: "SQ. FT. LAUNCHED" },
  ];

  return (
    <section className="w-full bg-[#191f26] text-white py-16 md:py-24 border-t border-luxury-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Fixed / Stationary Content with Animations) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Title with reveal animation */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-[1.08] tracking-wide text-[#a0725b]"
              >
                Before every brick
                <span className="block text-[#a0725b]">comes a promise.</span>
              </motion.h2>

              {/* Description with stagger fade-in */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-4 font-sans text-[15px] sm:text-[17px] leading-relaxed text-white/75 max-w-xl"
              >
                <p>
                  The strongest foundations are built long before construction begins.
                  They're built on trust, thoughtful decisions, and an unwavering
                  commitment to the people who will one day call these spaces their own.
                  A name that is synonymous with the trust of thousands of residents,
                  Jhamtani is Pune’s fastest-growing real estate brand.
                  <Link
                    href="/about"
                    className="inline-block font-sans italic font-light text-[17px] text-[#c5a880] hover:text-[#C1AF86] transition-colors duration-300 ml-1.5 underline underline-offset-4"
                  >
                    Read more
                  </Link>
                </p>
              </motion.div>

              {/* About Image with smooth entrance & hover scale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-[420px] h-[260px] sm:h-[320px] mt-6 overflow-hidden "
              >
                <Image
                  src="/assets/image_3.png"
                  alt="Foundation and trust"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Middle Separator Column (Animated glow pill) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative h-[560px]">
            <div className="relative h-full w-[1.5px] bg-[#a0725b]/25 mx-auto flex items-center justify-center">
              {/* Active filled line portion */}
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#a0725b]/20 via-[#C1AF86] to-[#C1AF86] transition-all duration-150 ease-out"
                style={{ height: `${progress * 100}%` }}
              />

              {/* Ambient pulsing gold capsule indicator (#C1AF86) */}
              <motion.div
                className="absolute left-1/2 w-[6px] h-12 bg-[#C1AF86] rounded-full shadow-[0_0_15px_rgba(193,175,134,0.9)]"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(193,175,134,0.6)",
                    "0 0 22px rgba(193,175,134,1)",
                    "0 0 10px rgba(193,175,134,0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  top: `${progress * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>

          {/* Right Column (Scrolling list of stats with staggered entrance & hover slide) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={statsContainerRef}
              onScroll={handleStatsScroll}
              className="max-h-[560px] overflow-y-auto space-y-3 scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] py-2"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                  whileHover={{ x: 8 }}
                  className="group relative flex flex-col text-left cursor-pointer py-5 px-6 rounded-2xl transition-all duration-500 ease-out hover:bg-[#C1AF86]/[0.05] border-b border-[#a0725b]/20 last:border-b-0 overflow-hidden"
                >
                  {/* Glowing left accent line on hover */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-3/4 bg-[#C1AF86] rounded-r transition-all duration-300 ease-out shadow-[0_0_12px_#C1AF86]" />

                  {/* Number: Turns #C1AF86 on hover with smooth scaling */}
                  <span className="font-serif text-[48px] sm:text-[60px] md:text-[68px] lg:text-[76px] font-light leading-none text-[#a0725b]/50 group-hover:text-[#C1AF86] group-hover:drop-shadow-[0_0_20px_rgba(193,175,134,0.4)] group-hover:scale-[1.02] transition-all duration-300 tracking-tight select-none">
                    {stat.number}
                  </span>

                  {/* Label */}
                  <span className="font-serif text-[15px] sm:text-[17px] md:text-[19px] font-normal leading-tight text-[#a0725b]/40 group-hover:text-[#C1AF86] group-hover:translate-x-1 transition-all duration-300 mt-2 tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



