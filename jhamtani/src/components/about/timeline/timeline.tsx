"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════
   Constants & Types
   ═══════════════════════════════════════════════════════════ */

const VB_W = 1400;
const VB_H = 1080;

interface YearEntry {
  year: string;
  projects: string[];
  nx: number;
  ny: number;
  dx: number;
  dy?: number;
  cx: number;
  cy: number;
  above?: boolean;
  hl?: boolean;
  isVert?: boolean;
}

/* ═══════════════════════════════════════════════════════════
   Timeline Data - Symmetrical top and bottom spacing
   ═══════════════════════════════════════════════════════════ */

const years: YearEntry[] = [
  // Segment 0: Top entrance (0,160) -> (380,160)
  {
    year: "2010",
    projects: ["JHAMTANI IMPRESSIONS"],
    nx: 200, ny: 160,
    dx: 200, dy: 100,
    cx: (200 / VB_W) * 100,
    cy: (32 / VB_H) * 100,
    above: true,
    isVert: true,
  },

  // Column 1 (x=410), going down from y=160 to y=980
  {
    year: "2012",
    projects: ["ACE ALMIGHTY PHASE I"],
    nx: 410, ny: 210, dx: 470,
    cx: (470 / VB_W) * 100,
    cy: (195 / VB_H) * 100,
  },
  {
    year: "2014",
    projects: ["ACE KK ANAND", "ACE AURA"],
    nx: 410, ny: 320, dx: 470,
    cx: (470 / VB_W) * 100,
    cy: (305 / VB_H) * 100,
  },
  {
    year: "2015",
    projects: ["ACE AUGUSTA"],
    nx: 410, ny: 420, dx: 270,
    cx: (120 / VB_W) * 100,
    cy: (405 / VB_H) * 100,
  },
  {
    year: "2016",
    projects: ["ACE AURUM I"],
    nx: 410, ny: 520, dx: 470,
    cx: (470 / VB_W) * 100,
    cy: (505 / VB_H) * 100,
  },
  {
    year: "2017",
    projects: ["SHREE GANESH ACE ARCADE"],
    nx: 410, ny: 620, dx: 470,
    cx: (470 / VB_W) * 100,
    cy: (605 / VB_H) * 100,
  },
  {
    year: "2018",
    projects: ["ACE AURUM II", "ACE AASTHA A WING", "ACE AASTHA B WING", "VISION ACE PHASE I"],
    nx: 410, ny: 760, dx: 470,
    cx: (470 / VB_W) * 100,
    cy: (745 / VB_H) * 100,
  },

  // Column 2 (x=770), going up from y=980 to y=110
  {
    year: "2019",
    projects: ["ALMIGHTY COMMERCIAL", "ACE ALMIGHTY PHASE II", "VISION ACE PHASE II", "ACE ALMIGHTY SIGMA COMMERCIAL"],
    nx: 770, ny: 770, dx: 830,
    cx: (830 / VB_W) * 100,
    cy: (755 / VB_H) * 100,
  },
  {
    year: "2020",
    projects: ["ACE AURUM III"],
    nx: 770, ny: 620, dx: 830,
    cx: (830 / VB_W) * 100,
    cy: (605 / VB_H) * 100,
  },
  {
    year: "2021",
    projects: ["ACE AASTHA C WING"],
    nx: 770, ny: 480, dx: 830,
    cx: (830 / VB_W) * 100,
    cy: (465 / VB_H) * 100,
  },
  {
    year: "2022",
    projects: ["ACE ABODE", "NANDAN ACE"],
    nx: 770, ny: 320, dx: 830,
    cx: (830 / VB_W) * 100,
    cy: (305 / VB_H) * 100,
    hl: true,
  },

  // Column 3 (x=1070), going down from y=110 to y=980
  {
    year: "2023",
    projects: ["ACE ATMOSPHERE", "ACE VILLAS", "JHAMTANI SPACEBIZ"],
    nx: 1070, ny: 200, dx: 1130,
    cx: (1130 / VB_W) * 100,
    cy: (185 / VB_H) * 100,
  },
  {
    year: "2024",
    projects: ["JHAMTANI BIZCORE", "VISION ACE COMMERCIAL PHASE I"],
    nx: 1070, ny: 370, dx: 1130,
    cx: (1130 / VB_W) * 100,
    cy: (355 / VB_H) * 100,
    hl: true,
  },
  {
    year: "2025",
    projects: ["ACE ASTER", "JHAMTANI ELEVATE", "ACE ABUNDANCE"],
    nx: 1070, ny: 530, dx: 1130,
    cx: (1130 / VB_W) * 100,
    cy: (515 / VB_H) * 100,
  },
  {
    year: "2026",
    projects: [
      "ACE AYODHYA",
      "LAUNCHING NEW PROJECTS",
      "CHARHOLI",
      "PIMPLE SAUDAGAR",
      "HADAPSAR",
    ],
    nx: 1070, ny: 720, dx: 1130,
    cx: (1130 / VB_W) * 100,
    cy: (705 / VB_H) * 100,
  },
];

/* ═══════════════════════════════════════════════════════════
   Trunk Path - Symmetrical Top & Bottom Curves
   ═══════════════════════════════════════════════════════════ */

const TRUNK = [
  "M 0,160", "L 380,160",
  "Q 410,160 410,190", "L 410,950",
  "Q 410,980 440,980", "L 740,980",
  "Q 770,980 770,950", "L 770,140",
  "Q 770,110 800,110", "L 1040,110",
  "Q 1070,110 1070,140", "L 1070,950",
].join(" ");

/* ═══════════════════════════════════════════════════════════
   Shared Refined Styles
   ═══════════════════════════════════════════════════════════ */

const badgeStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #C59B4E 0%, #A87F35 100%)",
  padding: "4px 14px",
  borderRadius: "4px",
  fontWeight: 700,
  fontSize: "clamp(13px, 1.1vw, 16px)",
  color: "#FFFFFF",
  letterSpacing: "1px",
  boxShadow: "0 2px 8px rgba(197, 155, 78, 0.22)",
  display: "inline-block",
};

const projStyle: React.CSSProperties = {
  fontSize: "clamp(11px, 0.85vw, 13px)",
  lineHeight: 1.4,
};

/* ═══════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════ */

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ── GSAP Scroll Animations ─────────────────────────────── */
  useGSAP(() => {
    const ctx = sectionRef.current;
    if (!ctx) return;

    /* ─── Header entrance ─── */
    const header = ctx.querySelector(".tl-header");
    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: header, start: "top 85%", once: true },
        }
      );
    }

    /* ─── Desktop serpentine animations ─── */
    const trunk = ctx.querySelector(".tl-trunk") as SVGPathElement | null;
    if (trunk) {
      const len = trunk.getTotalLength();
      gsap.set(trunk, { strokeDasharray: len, strokeDashoffset: len });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ctx.querySelector(".tl-desktop"),
          start: "top 75%",
          once: true,
        },
      });

      // 1. Smooth trunk path reveal
      tl.to(trunk, { strokeDashoffset: 0, duration: 2.4, ease: "power2.out" }, 0);

      // 2. Nodes fade & scale up smoothly
      tl.fromTo(
        ctx.querySelectorAll(".tl-node"),
        { scale: 0, opacity: 0, transformOrigin: "center center" },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        0.3
      );

      // 3. Connector lines fade in
      tl.fromTo(
        ctx.querySelectorAll(".tl-dash"),
        { opacity: 0 },
        { opacity: 0.6, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        0.5
      );

      // 4. Badges fade & slide up smoothly
      tl.fromTo(
        ctx.querySelectorAll(".tl-badge"),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: "power2.out" },
        0.6
      );

      // 5. Project text fade in
      tl.fromTo(
        ctx.querySelectorAll(".tl-projects"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: "power2.out" },
        0.8
      );
    }

    /* ─── Tablet zigzag animations ─── */
    gsap.utils.toArray<Element>(ctx.querySelectorAll(".tl-tab-item")).forEach((el, i) => {
      const isLeft = i % 2 === 0;
      gsap.fromTo(el,
        { opacity: 0, x: isLeft ? -25 : 25 },
        {
          opacity: 1, x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
    });

    // Tablet vertical line draw
    const tabLine = ctx.querySelector(".tl-tab-line") as HTMLElement | null;
    if (tabLine) {
      gsap.fromTo(tabLine,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.8, ease: "power2.out",
          scrollTrigger: { trigger: tabLine, start: "top 80%", once: true },
        }
      );
    }

    /* ─── Mobile animations ─── */
    const mobLine = ctx.querySelector(".tl-mob-line") as HTMLElement | null;
    if (mobLine) {
      gsap.fromTo(mobLine,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1, duration: 1.8, ease: "power2.out",
          scrollTrigger: { trigger: mobLine, start: "top 80%", once: true },
        }
      );
    }

    gsap.utils.toArray<Element>(ctx.querySelectorAll(".tl-mob-item")).forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
        }
      );
    });

  }, { scope: sectionRef });

  /* ── Render ─────────────────────────────────────────── */
  return (
    <section ref={sectionRef} className="w-full bg-[#EDE5D8] relative overflow-hidden select-none py-12 lg:py-15">

      {/* ════ Section Header ═════════════════════════════ */}
      <div className="tl-header text-center mb-8 px-4 opacity-0">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9A7229] tracking-tight leading-snug font-normal">
          The Timeline of <br className="hidden sm:inline" />
          <span>Promises Delivered</span>
        </h2>
      </div>

      {/* ════ Desktop Serpentine (xl+) ═══════════════════ */}
      <div
        className="tl-desktop hidden xl:block relative w-full max-w-[1400px] mx-auto"
        style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
      >
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <path className="tl-trunk" d={TRUNK} stroke="#C59B4E" strokeWidth="3" strokeLinecap="round" />

          {years.map((yr) => {
            const targetY = yr.dy !== undefined ? yr.dy : yr.ny;
            return (
              <g key={yr.year}>
                <line
                  className="tl-dash"
                  x1={yr.nx} y1={yr.ny}
                  x2={yr.dx} y2={targetY}
                  stroke="#C59B4E" strokeWidth="1.5"
                  strokeDasharray="6,4"
                  opacity={0}
                />
                <g className="tl-node">
                  <circle cx={yr.nx} cy={yr.ny} r={6} fill="#EDE5D8" stroke="#C59B4E" strokeWidth={2} />
                  <circle cx={yr.nx} cy={yr.ny} r={2.5} fill="#C59B4E" />
                </g>
              </g>
            );
          })}
        </svg>

        <div className="absolute inset-0 z-20 pointer-events-none">
          {years.map((yr) => (
            <div
              key={yr.year}
              className={`absolute pointer-events-auto transition-transform duration-300 ${
                yr.isVert ? "-translate-x-1/2 flex flex-col items-center text-center" : ""
              }`}
              style={{
                left: `${yr.cx}%`,
                top: `${yr.cy}%`,
                width: yr.isVert ? "200px" : "230px",
              }}
            >
              {/* Projects listed above for 2010 top entrance */}
              {yr.above && (
                <div className="tl-projects mb-1.5 opacity-0">
                  {yr.projects.map((p, i) => (
                    <div key={i} className="text-[#2C2C2C] font-bold uppercase tracking-wider text-[11px] lg:text-[12px] leading-tight">
                      {p}
                    </div>
                  ))}
                </div>
              )}

              {/* Year badge & milestone tag */}
              <div className={`flex items-center gap-2 ${yr.isVert ? "justify-center" : ""}`}>
                <div className="tl-badge" style={{ ...badgeStyle, opacity: 0 }}>
                  {yr.year}
                </div>
                {yr.hl && (
                  <span className="tl-badge opacity-0 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#C59B4E]/15 text-[#8B6914] border border-[#C59B4E]/30 rounded">
                    Key Milestone
                  </span>
                )}
              </div>

              {/* Projects listed below badge */}
              {!yr.above && yr.projects.length > 0 && (
                <div className="tl-projects mt-2 space-y-1 opacity-0">
                  {yr.projects.map((p, i) => {
                    const isHighlight = p === "LAUNCHING NEW PROJECTS";
                    return (
                      <div key={i}>
                        <div
                          className={`uppercase tracking-wider text-[11px] lg:text-[12px] leading-snug ${
                            isHighlight
                              ? "text-[#A87F35] font-bold tracking-widest pt-1"
                              : "text-[#2C2C2C] font-semibold"
                          }`}
                          style={projStyle}
                        >
                          {p}
                        </div>
                        {i < yr.projects.length - 1 && (
                          <div className="h-px bg-[#C59B4E]/30 mt-1" style={{ width: "80%" }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ════ Tablet Zigzag Timeline (md to xl) ═════════ */}
      <div className="hidden md:block xl:hidden w-full px-6 md:px-10 py-12">
        <div className="max-w-3xl mx-auto relative">
          <div className="tl-tab-line absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#C59B4E]/40 -translate-x-1/2" />

          <div className="relative space-y-12 md:space-y-16">
            {years.map((yr, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={yr.year} className={`tl-tab-item relative flex items-start gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-[calc(50%-24px)] ${isLeft ? "text-right" : "text-left"}`}>
                    <div className="flex items-center gap-2 mb-2 justify-end" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
                      <div className="inline-block" style={{ ...badgeStyle, fontSize: "14px" }}>
                        {yr.year}
                      </div>
                      {yr.hl && (
                        <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#C59B4E]/15 text-[#8B6914] border border-[#C59B4E]/30 rounded">
                          Key Milestone
                        </span>
                      )}
                    </div>
                    <div className="space-y-1">
                      {yr.projects.map((p, pi) => {
                        const isHighlight = p === "LAUNCHING NEW PROJECTS";
                        return (
                          <div key={pi}>
                            <div
                              className={`uppercase tracking-wider text-[12px] md:text-[13px] leading-snug ${
                                isHighlight
                                  ? "text-[#A87F35] font-bold tracking-widest pt-1"
                                  : "text-[#2C2C2C] font-semibold"
                              }`}
                            >
                              {p}
                            </div>
                            {pi < yr.projects.length - 1 && (
                              <div className={`h-px bg-[#C59B4E]/30 mt-1 ${isLeft ? "ml-auto" : ""}`} style={{ width: "70%" }} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: "20px" }}>
                    <div className="w-[14px] h-[14px] rounded-full bg-[#EDE5D8] border-[2px] border-[#C59B4E] flex items-center justify-center z-10">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#C59B4E]" />
                    </div>
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[#C59B4E]/60 ${isLeft ? "right-full mr-0.5" : "left-full ml-0.5"}`}
                      style={{ width: "28px" }}
                    />
                  </div>

                  <div className="w-[calc(50%-24px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ════ Mobile Vertical Timeline (<md) ════════════ */}
      <div className="block md:hidden w-full px-5 py-12">
        <div className="max-w-md mx-auto relative">
          <div className="tl-mob-line absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#C59B4E]/40" />

          <div className="relative space-y-8 pl-12">
            {years.map((yr) => (
              <div key={yr.year} className="tl-mob-item relative">
                <div className="tl-mob-node absolute -left-[36px] top-1 w-[14px] h-[14px] rounded-full bg-[#EDE5D8] border-[2px] border-[#C59B4E] flex items-center justify-center">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#C59B4E]" />
                </div>

                <div className="absolute -left-[22px] top-[8px] w-[22px] h-px border-t border-dashed border-[#C59B4E]/60" />

                <div className="flex items-center gap-2 mb-2">
                  <div className="inline-block" style={{ ...badgeStyle, fontSize: "13px", padding: "3px 12px" }}>
                    {yr.year}
                  </div>
                  {yr.hl && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#C59B4E]/15 text-[#8B6914] border border-[#C59B4E]/30 rounded">
                      Key Milestone
                    </span>
                  )}
                </div>

                <div className="space-y-1 mt-1">
                  {yr.projects.map((p, pi) => {
                    const isHighlight = p === "LAUNCHING NEW PROJECTS";
                    return (
                      <div key={pi}>
                        <div
                          className={`uppercase tracking-wider text-[12px] leading-snug ${
                            isHighlight
                              ? "text-[#A87F35] font-bold tracking-widest pt-1"
                              : "text-[#2C2C2C] font-semibold"
                          }`}
                        >
                          {p}
                        </div>
                        {pi < yr.projects.length - 1 && (
                          <div className="h-px bg-[#C59B4E]/30 mt-1" style={{ maxWidth: "180px" }} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
