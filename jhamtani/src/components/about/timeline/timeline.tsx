"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface TimelineData {
  year: string;
  projects: string[];
}

const timelineData: TimelineData[] = [
  { year: "2010", projects: ["JHAMTANI IMPRESSIONS"] },
  { year: "2012", projects: ["ACE ALMIGHTY PHASE I"] },
  { year: "2014", projects: ["ACE KK ANAND", "ACE AURA"] },
  { year: "2015", projects: ["ACE AUGUSTA"] },
  { year: "2016", projects: ["ACE AURUM I"] },
  { year: "2017", projects: ["SHREE GANESH ACE ARCADE"] },
  { year: "2018", projects: ["ACE AURUM II", "ACE AASTHA A WING", "ACE AASTHA B WING", "VISION ACE PHASE I"] },
  { year: "2019", projects: ["ALMIGHTY COMMERCIAL", "ACE ALMIGHTY PHASE II", "VISION ACE PHASE II", "ACE ALMIGHTY SIGMA COMMERCIAL"] },
  { year: "2020", projects: ["ACE AURUM III"] },
  { year: "2021", projects: ["ACE AASTHA C WING"] },
  { year: "2022", projects: ["ACE ABODE", "NANDAN ACE"] },
  { year: "2023", projects: ["ACE ATMOSPHERE", "ACE VILLAS", "JHAMTANI SPACEBIZ"] },
  { year: "2024", projects: ["JHAMTANI BIZCORE", "VISION ACE COMMERCIAL PHASE I", "JHAMTANI ELEVATE", "ACE ASTER"] },
  { year: "2025", projects: ["ACE ABUNDANCE"] },
  { year: "2026", projects: ["ACE AYODHYA"] }
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const activeDotRef = useRef<SVGCircleElement>(null);
  const activeDotGlowRef = useRef<SVGCircleElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  const heightRef = useRef(800);

  useEffect(() => {
    heightRef.current = window.innerHeight;
    setViewportHeight(window.innerHeight);
    const handleResize = () => {
      heightRef.current = window.innerHeight;
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const n = timelineData.length;
  const spacing = 0.15; // spacing parameter t along bezier curve

  // Bezier curve calculations dynamically based on heightRef with header clearance
  const getBezierPoint = (t: number) => {
    const clampedT = Math.max(0, Math.min(1, t));
    const h = heightRef.current;
    const topOffset = 100; // Header clearance
    const bottomOffset = 60;
    const usableHeight = Math.max(300, h - topOffset - bottomOffset);

    const p0 = { x: 80, y: topOffset };
    const p1 = { x: 360, y: topOffset + usableHeight * 0.25 };
    const p2 = { x: 360, y: topOffset + usableHeight * 0.75 };
    const p3 = { x: 80, y: h - bottomOffset };

    const x =
      Math.pow(1 - clampedT, 3) * p0.x +
      3 * Math.pow(1 - clampedT, 2) * clampedT * p1.x +
      3 * (1 - clampedT) * Math.pow(clampedT, 2) * p2.x +
      Math.pow(clampedT, 3) * p3.x;

    const y =
      Math.pow(1 - clampedT, 3) * p0.y +
      3 * Math.pow(1 - clampedT, 2) * clampedT * p1.y +
      3 * (1 - clampedT) * Math.pow(clampedT, 2) * p2.y +
      Math.pow(clampedT, 3) * p3.y;

    const dx =
      3 * Math.pow(1 - clampedT, 2) * (p1.x - p0.x) +
      6 * (1 - clampedT) * clampedT * (p2.x - p1.x) +
      3 * Math.pow(clampedT, 2) * (p3.x - p2.x);
    const dy =
      3 * Math.pow(1 - clampedT, 2) * (p1.y - p0.y) +
      6 * (1 - clampedT) * clampedT * (p2.y - p1.y) +
      3 * Math.pow(clampedT, 2) * (p3.y - p2.y);

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      angle: Number(angle.toFixed(2)),
    };
  };

  // Continuous fluid progress mapping along bezier timeline
  const getRegulatorProgress = (p: number, totalCount: number) => {
    if (p <= 0) return 0;
    if (p >= 1) return totalCount - 1;
    return p * (totalCount - 1);
  };

  const isTransitioningRef = useRef(false);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Handle wheel input: advance/rewind strictly 1 step per gesture with ultra-smooth cubic easing
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const trigger = ScrollTrigger.getById("timeline-scroll");
      if (!trigger) return;

      const currentY = window.scrollY;
      const start = trigger.start;
      const end = trigger.end;

      // Only hijack scroll when inside pinned timeline scroll bounds
      if (currentY < start - 10 || currentY > end + 10) return;

      // If already animating to a target year, block all subsequent wheel events
      if (isTransitioningRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 10) return;

      const curr = activeIndexRef.current;

      if (delta > 0 && curr < n - 1) {
        // Scroll DOWN -> advance exactly 1 year step with smooth easing
        e.preventDefault();
        const next = curr + 1;
        isTransitioningRef.current = true;

        const targetScroll = start + (next / (n - 1)) * (end - start);
        const obj = { y: window.scrollY };

        gsap.to(obj, {
          y: targetScroll,
          duration: 0.85,
          ease: "power3.inOut",
          onUpdate: () => window.scrollTo(0, obj.y),
          onComplete: () => {
            setActiveIndex(next);
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 250);
          },
        });
      } else if (delta < 0 && curr > 0) {
        // Scroll UP -> rewind exactly 1 year step with smooth easing
        e.preventDefault();
        const prev = curr - 1;
        isTransitioningRef.current = true;

        const targetScroll = start + (prev / (n - 1)) * (end - start);
        const obj = { y: window.scrollY };

        gsap.to(obj, {
          y: targetScroll,
          duration: 0.85,
          ease: "power3.inOut",
          onUpdate: () => window.scrollTo(0, obj.y),
          onComplete: () => {
            setActiveIndex(prev);
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 250);
          },
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [n]);

  // Scroll to a specific year milestone
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const trigger = ScrollTrigger.getById("timeline-scroll");
    if (!trigger) return;

    const start = trigger.start;
    const end = trigger.end;
    const scrollRange = end - start;
    const targetScroll = start + (index / (n - 1)) * scrollRange;

    isTransitioningRef.current = true;
    const obj = { y: window.scrollY };

    gsap.to(obj, {
      y: targetScroll,
      duration: 0.85,
      ease: "power3.inOut",
      onUpdate: () => window.scrollTo(0, obj.y),
      onComplete: () => {
        setActiveIndex(index);
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 250);
      },
    });
  };

  useGSAP(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // 1. Entrance draw-in of curve and items
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      }
    });

    entranceTl
      .fromTo(path,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }
      )
      .fromTo(".timeline-node",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.04, ease: "back.out(1.7)" },
        "-=0.6"
      )
      .fromTo(".timeline-year-text",
        { opacity: 0, scale: 0.5 },
        { opacity: (idx) => (idx === 0 ? 1 : 0.15), scale: (idx) => (idx === 0 ? 1.2 : 0.8), duration: 0.6, stagger: 0.03, ease: "power2.out" },
        "-=0.4"
      );

    // 2. Loop pulse animation on active dot glow
    gsap.fromTo(activeDotGlowRef.current,
      { r: 8, opacity: 0.8 },
      { r: 24, opacity: 0, duration: 1.5, repeat: -1, ease: "power1.out" }
    );

    // 3. Scroll Trigger configuration for pinning & seamless 1-to-1 scroll sync
    const mainTrigger = ScrollTrigger.create({
      id: "timeline-scroll",
      trigger: containerRef.current,
      start: "top top",
      end: "+=600%",
      pin: true,
      pinSpacing: true,
      scrub: true,
      snap: {
        snapTo: 1 / (n - 1),
        duration: { min: 0.25, max: 0.5 },
        delay: 0.05,
        ease: "power2.inOut",
      },
      onUpdate: (self) => {
        const p = self.progress;
        const activeProgress = getRegulatorProgress(p, n);
        const roundedIdx = Math.round(activeProgress);

        // Update active index state
        setActiveIndex((prev) => (prev !== roundedIdx ? roundedIdx : prev));

        // Dynamically slide all year markers along the curve
        timelineData.forEach((_, idx) => {
          const t = (idx - activeProgress) * spacing + 0.5;
          const pt = getBezierPoint(t);

          const dot = document.getElementById(`dot-${idx}`);
          const text = document.getElementById(`text-${idx}`);
          const group = document.getElementById(`group-${idx}`);

          if (dot && text) {
            // Position dot and text dynamically
            gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
            gsap.set(text, { attr: { x: pt.x + 25, y: pt.y + 8 } });

            // Rotate text tangentially
            const isNearCenter = Math.abs(t - 0.5) < 0.05;
            const r = isNearCenter ? 0 : pt.angle;
            gsap.set(text, { attr: { transform: `rotate(${r}, ${pt.x + 25}, ${pt.y + 8})` } });

            // Scale and opacity adjustments based on distance to center
            const dist = Math.abs(t - 0.5);
            const opacity = Math.max(0, 1 - dist * 1.5);
            const scale = Math.max(0.6, 1 - dist * 0.8);

            if (group) {
              gsap.set(group, { style: `opacity: ${opacity};` });
            }

            // Apply style mapping dynamically
            const isCurrent = idx === roundedIdx;
            const fill = isCurrent ? "#9A6B4F" : "#C7A189"; // active dark, others light
            const weight = isCurrent ? "600" : "300";

            gsap.set(text, { 
              style: `font-size: ${scale * 40}px; font-weight: ${weight}; fill: ${fill}; transition: fill 0.35s ease, font-size 0.35s ease;` 
            });
          }
        });

        // Loop active pulsing glow position (always fixed at center t=0.5 on desktop)
        const centerPt = getBezierPoint(0.5);
        gsap.set(activeDotRef.current, { attr: { cx: centerPt.x, cy: centerPt.y } });
        gsap.set(activeDotGlowRef.current, { attr: { cx: centerPt.x, cy: centerPt.y } });
      }
    });

    // 4. Subtle background radial gradient moving loop
    gsap.to("#bg-gradient-1", {
      x: 80,
      y: 40,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    gsap.to("#bg-gradient-2", {
      x: -60,
      y: -50,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 5. Mobile entrance animations for items
    gsap.utils.toArray(".mobile-item").forEach((item: any) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      mainTrigger.kill();
    };
  }, { scope: containerRef, dependencies: [] });

  // Compute text transformations and styling dynamically for initial render
  const getYearTextStyle = (idx: number) => {
    const diff = Math.abs(idx - activeIndex);
    if (diff === 0) {
      return {
        fill: "#9A6B4F",
        opacity: 1,
        fontSize: "44px",
        fontWeight: "600"
      };
    } else if (diff === 1) {
      return {
        fill: "#C7A189",
        opacity: 0.8,
        fontSize: "26px",
        fontWeight: "300"
      };
    } else if (diff === 2) {
      return {
        fill: "#C7A189",
        opacity: 0.5,
        fontSize: "20px",
        fontWeight: "300"
      };
    } else {
      return {
        fill: "#C7A189",
        opacity: 0.1,
        fontSize: "20px",
        fontWeight: "300"
      };
    }
  };

  return (
    <div className="w-full bg-[#FAF8F6] relative">
      <section ref={containerRef} className="w-full relative bg-[#FAF8F6] overflow-hidden select-none min-h-screen">
      
      {/* Background radial blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          id="bg-gradient-1"
          className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(199,161,137,0.06)_0%,transparent_70%)]"
        />
        <div 
          id="bg-gradient-2"
          className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(154,107,79,0.04)_0%,transparent_70%)]"
        />
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none mix-blend-overlay bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] z-10" />

      {/* Desktop Version: Sticky Scroll Scrollytelling */}
      <div className="hidden lg:block w-full h-screen relative z-20">
        <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden pt-20 pb-6">
          <div className="max-w-7xl mx-auto w-full px-8 xl:px-16 grid grid-cols-12 gap-10 items-center h-full relative">
            
            {/* Left Column: Curved SVG Timeline */}
            <div className="col-span-5 h-full flex items-center justify-start overflow-visible relative">
              <svg
                viewBox={`0 0 480 ${viewportHeight}`}
                preserveAspectRatio="xMinYMin slice"
                className="w-full h-full select-none overflow-visible"
              >
                {/* Background timeline curve path */}
                <path
                  ref={pathRef}
                  d={`M 80 100 C 360 ${100 + (viewportHeight - 160) * 0.25}, 360 ${100 + (viewportHeight - 160) * 0.75}, 80 ${viewportHeight - 60}`}
                  fill="none"
                  stroke="#C7A189"
                  strokeWidth="1.5"
                  opacity="0.3"
                />

                {/* Render sliding year markers */}
                {timelineData.map((data, idx) => {
                  const tInitial = idx * spacing + 0.5; // at progress = 0
                  const pt = getBezierPoint(tInitial);
                  const isActive = idx === activeIndex;

                  // Rotation transform matrix to align label tangentially
                  const isNearCenter = Math.abs(tInitial - 0.5) < 0.05;
                  const r = isNearCenter ? 0 : pt.angle;

                  return (
                    <g
                      key={data.year}
                      id={`group-${idx}`}
                      onClick={() => scrollToIndex(idx)}
                      className="cursor-pointer group"
                      style={{
                        opacity: Math.max(0, 1 - Math.abs(tInitial - 0.5) * 1.5),
                      }}
                    >
                      {/* Circle node dot */}
                      <circle
                        id={`dot-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={isActive ? 5 : 4}
                        fill={isActive ? "#9A6B4F" : "#C7A189"}
                        className="timeline-node transition-colors duration-300 group-hover:fill-[#9A6B4F]"
                      />

                      {/* Year text label */}
                      <text
                        id={`text-${idx}`}
                        x={pt.x + 25}
                        y={pt.y + 8}
                        transform={`rotate(${r}, ${pt.x + 25}, ${pt.y + 8})`}
                        style={getYearTextStyle(idx)}
                        className="timeline-year-text font-serif select-none"
                      >
                        {data.year}
                      </text>
                    </g>
                  );
                })}

                {/* Active travelling glowing pulse ring */}
                <circle
                  ref={activeDotGlowRef}
                  cx={getBezierPoint(0.5).x}
                  cy={getBezierPoint(0.5).y}
                  r={8}
                  fill="none"
                  stroke="#9A6B4F"
                  strokeWidth="1.5"
                />

                {/* Active travelling solid dot */}
                <circle
                  ref={activeDotRef}
                  cx={getBezierPoint(0.5).x}
                  cy={getBezierPoint(0.5).y}
                  r={7}
                  fill="#9A6B4F"
                />
              </svg>
            </div>

            {/* Right Column: Unified Integrated Project Content */}
            <div className="col-span-7 flex flex-col justify-center h-full space-y-6 lg:space-y-8 relative py-8">
              <div className="space-y-2.5">
                <span className="font-serif text-sm text-[#9A6B4F] tracking-widest uppercase block font-medium">
                  Our Journey & Promises
                </span>
                <h2 className="font-serif text-[34px] sm:text-[40px] xl:text-[46px] leading-[1.12] text-[#A0725B] font-normal">
                  The Timeline of <br />
                  Promises Delivered
                </h2>
              </div>

              {/* Active Year Projects List (Centered & aligned) */}
              <div ref={projectListRef} className="space-y-3.5 max-w-xl min-h-[150px] flex flex-col justify-center">
                {timelineData[activeIndex].projects.map((proj, projIdx) => (
                  <motion.div
                    key={`${activeIndex}-${projIdx}`}
                    initial={{ opacity: 0, x: -16, y: 8 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: projIdx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-3 font-serif font-normal text-[20px] md:text-[24px] xl:text-[28px] text-[#A0725B] tracking-wider uppercase select-none"
                  >
                    {timelineData[activeIndex].projects.length > 1 && (
                      <span className="w-2 h-2 rounded-full bg-[#A0725B] shrink-0 opacity-80" />
                    )}
                    <span>{proj}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version: Clean static vertical timeline */}
      <div className="lg:hidden w-full px-6 py-20 relative z-20">
        <div className="max-w-xl mx-auto">
          <div className="space-y-3 mb-16">
            <span className="font-serif text-[16px] text-[#9A6B4F] tracking-wider block uppercase">
              Our Journey
            </span>
            <h2 className="font-serif text-[32px] text-[#2B2B2B] leading-tight font-normal">
              The Timeline of <br />
              Promises Delivered
            </h2>
          </div>
          
          <div className="relative border-l border-[#C7A189]/40 pl-8 ml-2 space-y-12">
            {timelineData.map((data) => (
              <div
                key={data.year}
                className="mobile-item relative"
              >
                {/* Mobile Year Dot */}
                <div className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#9A6B4F] border-2 border-[#FAF8F6] shadow-sm" />
                
                <span className="font-serif text-[22px] font-semibold text-[#9A6B4F] block mb-3">
                  {data.year}
                </span>
                
                <div className="space-y-3">
                  {data.projects.map((proj) => (
                    <div
                      key={proj}
                      className="font-serif font-normal text-[17px] text-[#2B2B2B] tracking-wider uppercase pl-4 border-l border-[#C7A189]/60 py-1"
                    >
                      {proj}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  </div>
  );
}
