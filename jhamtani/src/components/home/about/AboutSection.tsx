"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentIndexRef = useRef(0);
  const isAnimating = useRef(false);

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

  // Helper function to animate scroll to a specific item index
  const animateToItem = (targetIndex: number) => {
    const container = statsContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    const listEl = container.firstElementChild as HTMLElement;
    const targetChild = listEl?.children[targetIndex] as HTMLElement;

    let targetScroll = 0;
    if (targetIndex === 0) {
      targetScroll = 0;
    } else if (targetIndex === stats.length - 1) {
      targetScroll = maxScroll;
    } else if (targetChild) {
      const itemCenter = targetChild.offsetTop + targetChild.offsetHeight / 2;
      targetScroll = Math.max(0, Math.min(maxScroll, itemCenter - container.clientHeight / 2));
    }

    isAnimating.current = true;

    animate(container.scrollTop, targetScroll, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => {
        if (container) {
          container.scrollTop = val;
          handleStatsScroll();
        }
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  };

  // Track scroll position inside the right statistics box & find active item in view center
  const handleStatsScroll = () => {
    if (!statsContainerRef.current) return;
    const container = statsContainerRef.current;
    const { scrollTop, scrollHeight, clientHeight } = container;
    const totalScrollable = scrollHeight - clientHeight;
    if (totalScrollable > 0) {
      setProgress(scrollTop / totalScrollable);
    }

    const containerCenter = scrollTop + clientHeight / 2;
    const listEl = container.firstElementChild as HTMLElement;
    if (listEl) {
      const children = Array.from(listEl.children);
      let closestIdx = 0;
      let minDistance = Infinity;

      children.forEach((child, idx) => {
        const el = child as HTMLElement;
        const itemCenter = el.offsetTop + el.offsetHeight / 2;
        const dist = Math.abs(containerCenter - itemCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
      if (!isAnimating.current) {
        currentIndexRef.current = closestIdx;
      }
    }
  };

  useEffect(() => {
    handleStatsScroll();
  }, []);

  // One item per scroll tick interception
  useEffect(() => {
    const container = statsContainerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= 160 && rect.bottom >= window.innerHeight - 160;

      if (!isVisible) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown && currentIndexRef.current < stats.length - 1) {
        e.preventDefault();
        if (!isAnimating.current) {
          const nextIndex = currentIndexRef.current + 1;
          currentIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
          animateToItem(nextIndex);
        }
      } else if (isScrollingUp && currentIndexRef.current > 0) {
        e.preventDefault();
        if (!isAnimating.current) {
          const prevIndex = currentIndexRef.current - 1;
          currentIndexRef.current = prevIndex;
          setActiveIndex(prevIndex);
          animateToItem(prevIndex);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#191f26] text-white py-16 md:py-24 border-t border-luxury-border overflow-hidden"
    >
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
                className="relative w-full max-w-[420px] h-[260px] sm:h-[320px] mt-6 overflow-hidden"
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

          {/* Middle Separator Column (Smooth solid blue pill) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative h-[560px]">
            <div className="relative h-full w-[1.5px] bg-[#a0725b]/25 mx-auto flex items-center justify-center">
              {/* Active filled line portion */}
              <div
                className="absolute top-0 left-0 w-full bg-[#]"
                style={{ height: `${progress * 100}%` }}
              />

              {/* Solid blue capsule indicator (#0082c3) */}
              <div
                className="absolute left-1/2 w-[6px] h-10 bg-[#0082c3] rounded-full"
                style={{
                  top: `${progress * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>

          {/* Right Column (Scrolling list of stats with auto-active hover glow) */}
          <div className="lg:col-span-5 relative">
            <div
              ref={statsContainerRef}
              onScroll={handleStatsScroll}
              className="max-h-[560px] overflow-y-auto space-y-3 scroll-smooth [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] py-2"
            >
              <div>
                {stats.map((stat, idx) => {
                  const isActive = hoveredIdx === idx || (hoveredIdx === null && idx === activeIndex);

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`group relative flex flex-col text-left cursor-pointer py-5 px-6 rounded-2xl transition-all duration-500 ease-out border-b border-[#a0725b]/20 last:border-b-0 overflow-hidden ${
                        isActive ? " translate-x-2" : ""
                      }`}
                    >
                      {/* Number: Turns #C1AF86 on active/hover with smooth scaling */}
                      <span
                        className={`font-serif text-[36px] sm:text-[60px] md:text-[68px] lg:text-[76px] font-light leading-none transition-all duration-300 tracking-tight select-none ${
                          isActive
                            ? "text-[#C1AF86] drop-shadow-[0_0_20px_rgba(193,175,134,0.5)] scale-[1.02]"
                            : "text-[#a0725b]/50"
                        }`}
                      >
                        {stat.number}
                      </span>

                      {/* Label */}
                      <span
                        className={`font-serif text-[15px] sm:text-[17px] md:text-[19px] font-normal leading-tight transition-all duration-300 mt-2 tracking-wider ${
                          isActive
                            ? "text-[#C1AF86] translate-x-1"
                            : "text-[#a0725b]/40"
                        }`}
                      >
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
