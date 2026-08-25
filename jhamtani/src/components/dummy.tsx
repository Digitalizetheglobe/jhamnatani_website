"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  fallbackImage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Client Consultation",
    desc: "Expert Guidance & Strategic Design Planning",
    bullets: [
      "2D floor plans",
      "detailed elevations",
      "furniture layouts",
      "design documentation",
    ],
    image: "/assets/home_gallary1.png",
    fallbackImage: "/assets/gallery_com_1.png",
  },
  {
    id: "02",
    title: "Floor & Space Planning",
    desc: "Maximizing Functionality & Aesthetic Harmony",
    bullets: [
      "Space analysis",
      "custom layout planning",
      "ergonomic furniture arrangement",
      "traffic flow optimization",
    ],
    image: "/assets/home-gallary2.png",
    fallbackImage: "/assets/gallery_com_2.png",
  },
  {
    id: "03",
    title: "Concept Drawing",
    desc: "Translating Visions into Precise Artistic Concepts",
    bullets: [
      "2D conceptual layouts",
      "architectural floor plans",
      "detailed material elevations",
      "3D artistic concepts",
    ],
    image: "/assets/gallery_com_1.png",
    fallbackImage: "/assets/gallery_com_2.png",
  },
  {
    id: "04",
    title: "Design Management",
    desc: "End-to-End Project Supervision & Execution",
    bullets: [
      "Cross-disciplinary coordination",
      "material selection",
      "on-site supervision",
      "quality audits",
    ],
    image: "/assets/commercial1.png",
    fallbackImage: "/assets/gallery_com_1.png",
  },
  {
    id: "05",
    title: "Space Design",
    desc: "Curated Interiors Across Diverse Environments",
    bullets: [
      "Residential interiors",
      "commercial spaces",
      "hospitality environments",
      "institutional layouts",
    ],
    image: "/assets/gallery_res_1.png",
    fallbackImage: "/assets/portfolio_work1.png",
  },
  {
    id: "06",
    title: "3D Visualization",
    desc: "Photorealistic Digital Walkthroughs & Renders",
    bullets: [
      "Photorealistic 3D renders",
      "material texture visualization",
      "virtual walkthroughs",
      "lighting simulations",
    ],
    image: "/assets/gallery_com_2.png",
    fallbackImage: "/assets/portfolio_work2.png",
  },
  {
    id: "07",
    title: "Planning & Execution",
    desc: "Bridging Architectural Design & Site Realization",
    bullets: [
      "Site & contractor coordination",
      "vendor procurement",
      "strict quality control",
      "timeline tracking",
    ],
    image: "/assets/gallery_com_3.png",
    fallbackImage: "/assets/gallery_res_2.png",
  },
  {
    id: "08",
    title: "Turnkey Projects",
    desc: "Complete End-to-End Interior Realization",
    bullets: [
      "Full turnkey design",
      "complete site construction",
      "fit-out & staging",
      "key-ready handover",
    ],
    image: "/assets/home_gallary3.png",
    fallbackImage: "/assets/home_gallary1.png",
  },
];

export default function ServicesStorytelling() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 8 slides of 100vw each => total width 800vw.
  // x moves from 0% (0vw) to -87.5% (-700vw) smoothly as user scrolls through the 800vh pinned section.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87.5%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] w-full bg-[#f8f7f4]">
      {/* Sticky Fullscreen Pinned Container */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden z-20">
        <motion.div style={{ x }} className="flex w-[800vw] h-screen">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#f8f7f4] py-12 sm:py-16 lg:py-20 font-sans overflow-hidden border-b border-zinc-200/60 flex flex-col justify-between"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col justify-between">
                {/* Section Header */}
                <div className="text-center flex flex-col items-center mb-6 sm:mb-8 shrink-0">
                  <span className="text-[#B30E14] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
                    Our Services
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight flex items-baseline justify-center gap-2 flex-wrap">
                    <span className="font-allura font-normal text-zinc-900 text-4xl sm:text-5xl md:text-6xl text-[#111111] px-1">
                      Spaces
                    </span>
                    <span>We Design</span>
                  </h2>
                </div>

                {/* Content Stage */}
                <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] md:min-h-[480px] w-full flex items-center justify-center overflow-hidden my-auto">
                  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2">
                    {/* Left Column (4 cols): Number + Title at top, Description at bottom */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[200px] lg:min-h-[340px] text-left">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 tracking-tight mb-2 whitespace-normal lg:whitespace-nowrap -ml-2 lg:-ml-4">
                          {service.id} — {service.title}
                        </h3>
                      </div>
                      <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* Middle Column (5 cols): High quality interior photo */}
                    <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square max-h-[360px] sm:max-h-[420px] overflow-hidden rounded-none shadow-xl bg-zinc-100 border border-zinc-200/80">
                      <Image
                        src={
                          imgErrors[service.id]
                            ? service.fallbackImage
                            : service.image
                        }
                        alt={service.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-104 select-none"
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [service.id]: true }))
                        }
                      />
                    </div>

                    {/* Right Column (3 cols): Bullet points */}
                    <div className="lg:col-span-3 flex flex-col justify-end h-full min-h-[140px] lg:min-h-[340px] text-left">
                      <ul className="space-y-3 text-zinc-800 text-sm sm:text-base font-semibold">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B30E14] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}