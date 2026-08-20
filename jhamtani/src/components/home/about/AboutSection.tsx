"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const isMouseOverRightRef = useRef(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentIndexRef = useRef(0);
  const isAnimating = useRef(false);
  const lastWheelTimeRef = useRef(0);

  const stats = [
    { number: "40+ Yrs", label: "YEARS OF LEGACY" },
    { number: "13K+", label: "HAPPY FACES" },
    { number: "8", label: "ONGOING PROJECTS" },
    { number: "24", label: "COMPLETED PROJECTS" },
    { number: "16+ Yrs", label: "IN REAL ESTATE" },
    { number: "32", label: "TOTAL PROJECTS" },
  ];

  // Progress percentage matching active item index exactly
  const activeProgressPercent =
    stats.length > 1 ? (activeIndex / (stats.length - 1)) * 100 : 0;

  // Helper function to animate scroll to a specific item index
  const animateToItem = useCallback((targetIndex: number) => {
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
    currentIndexRef.current = targetIndex;
    setActiveIndex(targetIndex);

    animate(container.scrollTop, targetScroll, {
      duration: 0.45,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (val) => {
        if (container) {
          container.scrollTop = val;
        }
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [stats.length]);

  // Track manual scroll inside container to sync active item index
  const handleStatsScroll = useCallback(() => {
    if (!statsContainerRef.current || isAnimating.current) return;
    const container = statsContainerRef.current;
    const { scrollTop, clientHeight } = container;
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
      currentIndexRef.current = closestIdx;
    }
  }, []);

  // Intercept wheel events to lock page scroll until ALL stat items are completed
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 5) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Active when section top is near viewport
      const isVisible = rect.top <= 200 && rect.bottom >= windowHeight - 200;
      if (!isVisible) return;

      // Only capture/intercept wheel events when the mouse is hovering over the right section
      if (!isMouseOverRightRef.current) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const now = Date.now();

      if (isScrollingDown) {
        // ALWAYS prevent page scroll until the last stat item (index stats.length - 1) is reached
        if (currentIndexRef.current < stats.length - 1) {
          e.preventDefault();

          if (!isAnimating.current && now - lastWheelTimeRef.current > 350) {
            lastWheelTimeRef.current = now;
            const nextIndex = currentIndexRef.current + 1;
            animateToItem(nextIndex);
          }
        }
        // When at the last stat item, allow default page scroll to proceed to next section
      } else if (isScrollingUp) {
        // ALWAYS prevent page scroll until the first stat item (index 0) is reached
        if (currentIndexRef.current > 0) {
          e.preventDefault();

          if (!isAnimating.current && now - lastWheelTimeRef.current > 350) {
            lastWheelTimeRef.current = now;
            const prevIndex = currentIndexRef.current - 1;
            animateToItem(prevIndex);
          }
        }
        // When at the first stat item, allow default page scroll to proceed to previous section
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [animateToItem, stats.length]);

  const handleItemClick = (idx: number) => {
    if (isAnimating.current) return;
    animateToItem(idx);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[#191f26] text-white py-16 md:py-24 border-t border-luxury-border overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto">
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
                className="font-serif text-[36px] sm:text-[46px] md:text-[54px] lg:text-[50px] leading-[1.08] tracking-wide text-[#a0725b]"
              >
                The Legacy of Delivering
                <span className="block text-[#a0725b]">What’s Committed</span>
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
                  A name that is synonymous with the trust of thousands of residents,
                  Jhamtani is Pune’s fastest-growing real estate brand.
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="inline-block font-sans italic font-light text-[17px] text-[#5B584C] hover:text-[#C1AF86] transition-colors duration-300 ml-1.5 underline-offset-4 cursor-pointer bg-transparent border-none p-0 align-baseline"
                    >
                      Read more
                    </button>
                  )}
                </p>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      At Jhamtani, we believe the spaces we create have the power to influence how people live,
                      work, connect and grow. This belief influences every decision we make, from where we build to
                      how we build. Because creating projects has never been our end goal; creating a better way of
                      living has.
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="inline-block font-sans italic font-light text-[17px] text-[#5B584C] hover:text-[#C1AF86] transition-colors duration-300 ml-1.5 underline-offset-4 cursor-pointer bg-transparent border-none p-0 align-baseline"
                      >
                        Read less
                      </button>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* About Image with smooth entrance & hover scale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-[420px] h-[260px] sm:h-[320px] mt-6 overflow-hidden group"
              >
                <Image
                  src="/assets/image_3.webp"
                  alt="Foundation and trust"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Middle Separator Column (Clean luxury fill line with blue capsule indicator) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center relative h-[560px]">
            <div className="relative h-full w-[1.5px] bg-[#5B584C]/30 mx-auto flex items-center justify-center">
              {/* Active filled line portion */}
              <div
                className="absolute top-0 left-0 w-full bg-[#5B584C] transition-all duration-500 ease-out"
                style={{ height: `${activeProgressPercent}%` }}
              />
              {/* Blue capsule scrolling indicator matching requested design */}
              <motion.div
                className="absolute w-[8px] h-10 bg-[#0082c3] rounded-full border border-white/30 z-10"
 
                animate={{ top: `${activeProgressPercent}%` }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>
          </div>

          {/* Right Column (Scrolling list of stats with auto-active hover glow & smooth edge fade) */}
          <div 
            className="lg:col-span-5 relative"
            onMouseEnter={() => {
              isMouseOverRightRef.current = true;
            }}
            onMouseLeave={() => {
              isMouseOverRightRef.current = false;
            }}
          >
            <div
              ref={statsContainerRef}
              onScroll={handleStatsScroll}
              className="max-h-[560px] overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]"
            >
              <div className="py-20 space-y-3">
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
                      onClick={() => handleItemClick(idx)}
                      className={`group relative flex flex-col text-left cursor-pointer py-5 px-6 transition-all duration-500 ease-out border-b border-[#a0725b]/20 last:border-b-0 overflow-hidden ${isActive ? " translate-x-2" : ""
                        }`}
                    >
                      {/* Number: Turns #C1AF86 on active/hover with smooth scaling */}
                      <span
                        className={`font-serif text-[36px] sm:text-[60px] md:text-[68px] lg:text-[76px] font-light leading-none transition-all duration-300 tracking-tight select-none ${isActive
                            ? "text-[#C1AF86] drop-shadow-[0_0_20px_rgba(193,175,134,0.5)] scale-[1.02]"
                            : "text-[#5B584C]"
                          }`}
                      >
                        {stat.number}
                      </span>

                      {/* Label */}
                      <span
                        className={`font-serif text-[15px] sm:text-[17px] md:text-[19px] font-normal leading-tight transition-all duration-300 mt-2 tracking-wider ${isActive
                            ? "text-[#C1AF86] translate-x-1"
                            : "text-[#5B584C]"
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


