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
  const [projectSubIndex, setProjectSubIndex] = useState(0);
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
  const spacing = 0.25; // spacing parameter t along bezier curve

  // Bezier curve calculations dynamically based on heightRef
  const getBezierPoint = (t: number) => {
    const clampedT = Math.max(0, Math.min(1, t));
    const h = heightRef.current;
    const p0 = { x: 80, y: 0 };
    const p1 = { x: 360, y: h * 0.25 };
    const p2 = { x: 360, y: h * 0.75 };
    const p3 = { x: 80, y: h };

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

  // Scroll to a specific year milestone
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const trigger = ScrollTrigger.getById("timeline-scroll");
    if (!trigger) return;

    const start = trigger.start;
    const end = trigger.end;
    const scrollRange = end - start;
    const targetScroll = start + (index / (n - 1)) * scrollRange;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
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

    // 3. Scroll Trigger configuration for pinning
    const mainTrigger = ScrollTrigger.create({
      id: "timeline-scroll",
      trigger: containerRef.current,
      start: "top top",
      end: "+=500%", // 600vh scroll height (pins container for 5x viewport height)
      pin: true,
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        const activeProgress = p * (n - 1);
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
            const opacity = Math.max(0, 1 - dist * 2.0);
            const scale = Math.max(0.6, 1 - dist * 0.8);

            if (group) {
              gsap.set(group, { style: `opacity: ${opacity};` });
            }

            // Apply style mapping dynamically
            const isCurrent = idx === roundedIdx;
            const diff = Math.abs(idx - roundedIdx);
            const fill = isCurrent ? "#9A6B4F" : diff === 1 ? "#C7A189" : "#D8D8D8";
            const weight = isCurrent ? "600" : "300";

            gsap.set(text, { 
              style: `font-size: ${scale * 40}px; font-weight: ${weight}; fill: ${fill}; transition: fill 0.3s ease;` 
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

  // Reset project sub-index when activeIndex changes
  useEffect(() => {
    setProjectSubIndex(0);
  }, [activeIndex]);

  // Cycle through projects if there are multiple projects for the active year
  useEffect(() => {
    const projects = timelineData[activeIndex].projects;
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      // Fade out the current project name
      gsap.to(".project-item", {
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setProjectSubIndex((prev) => (prev + 1) % projects.length);
        }
      });
    }, 3200); // cycle every 3.2 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Staggered fade-in of project content (now handled by Framer Motion characters)
  useEffect(() => {
    // Empty hook to preserve structure without GSAP transition conflicts
  }, [activeIndex, projectSubIndex]);

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
        opacity: 0.35,
        fontSize: "26px",
        fontWeight: "300"
      };
    } else {
      return {
        fill: "#D8D8D8",
        opacity: 0.12,
        fontSize: "20px",
        fontWeight: "300"
      };
    }
  };

  return (
    <section ref={containerRef} className="w-full relative bg-[#FAF8F6] overflow-hidden select-none">
      
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
        <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
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
                  d={`M 80 0 C 360 ${viewportHeight * 0.25}, 360 ${viewportHeight * 0.75}, 80 ${viewportHeight}`}
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
                        opacity: Math.max(0, 1 - Math.abs(tInitial - 0.5) * 2.0),
                      }}
                    >
                      {/* Circle node dot */}
                      <circle
                        id={`dot-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={isActive ? 5 : 4}
                        fill={isActive ? "#9A6B4F" : "#D8D8D8"}
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

            {/* Right Column: Dynamic Project Content */}
            <div className="col-span-7 flex flex-col h-full pt-24 gap-6 relative">
              <div className="space-y-4">
                <h2 className="font-serif text-[38px] xl:text-[48px] leading-tight text-[#A0725B] font-normal">
                  The Timeline of <br />
                  Promises Delivered
                </h2>
              </div>

              {/* Active Year Project Title aligned horizontally with the active year in the center */}
              <div ref={projectListRef} className="absolute left-0 top-1/2 -translate-y-1/2">
                {timelineData[activeIndex].projects.length > 0 && (
                  <div
                    key={`${activeIndex}-${projectSubIndex}`}
                    className="project-item font-serif font-normal text-[20px] md:text-[30px] text-[#A0725B] tracking-wider uppercase select-none flex flex-wrap gap-[0.02em]"
                    style={{ opacity: 1 }}
                  >
                    {timelineData[activeIndex].projects[projectSubIndex].split("").map((char, index) => {
                      if (char === " ") {
                        return <span key={index} className="w-[0.25em] inline-block" />;
                      }
                      return (
                        <span key={index} className="relative inline-flex overflow-hidden py-1 -my-1">
                          <motion.span
                            initial={{ y: "115%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{
                              duration: 0.85,
                              delay: index * 0.03, // 30ms stagger per letter
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        </span>
                      );
                    })}
                  </div>
                )}
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
  );
}
