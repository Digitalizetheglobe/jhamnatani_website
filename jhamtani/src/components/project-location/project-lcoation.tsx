"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Building2, Home, Sparkles } from "lucide-react";

interface LocationItem {
  id: number;
  title: string;
  project: string;
  type: "Residential" | "Commercial";
  tag: string;
  image: string;
  mapUrl: string;
  projectLink: string;
  coordinates: string;
}

const locationsData: LocationItem[] = [
  {
    id: 1,
    title: "Thergaon, Pune",
    project: "ACE Ayodhya",
    type: "Residential",
    tag: "2 & 3 BHK Premium Residences",
    image: "/assets/ace-ayodha/hero.webp",
    mapUrl: "https://maps.app.goo.gl/xGQJPu5EGTvjVMCX8",
    projectLink: "/ace-ayodha",
    coordinates: "18.6186° N, 73.7854° E",
  },
  {
    id: 2,
    title: "Mundhwa, Pune",
    project: "ACE Abundance",
    type: "Residential",
    tag: "Signature Luxury Residences",
    image: "/assets/pojetcts/Abundacne_Elevaion.webp",
    mapUrl: "https://maps.app.goo.gl/6D4qdjPCjVYpbVHn7",
    projectLink: "/ace-abundance",
    coordinates: "18.5362° N, 73.9214° E",
  },
  {
    id: 3,
    title: "Koregaon Park NX, Pune",
    project: "ACE Villas",
    type: "Residential",
    tag: "Exclusive Luxury Estate Villas",
    image: "/assets/pojetcts/ace_villas.webp",
    mapUrl: "https://maps.app.goo.gl/a9YwRzpSVa7HMv2Z6",
    projectLink: "/ace-villas",
    coordinates: "18.5442° N, 73.9056° E",
  },
  {
    id: 4,
    title: "Upper Ravet, Pune",
    project: "ACE Atmosphere",
    type: "Residential",
    tag: "24×7 All-Day Lifestyle Landmark",
    image: "/assets/pojetcts/ace_atmosphere.webp",
    mapUrl: "https://maps.app.goo.gl/QmgpoiXuRVJrSPHK7",
    projectLink: "/ace-atmosphere",
    coordinates: "18.6538° N, 73.7388° E",
  },
  {
    id: 5,
    title: "Ravet, Pune",
    project: "ACE Aster",
    type: "Residential",
    tag: "Contemporary Family Residences",
    image: "/assets/pojetcts/ace_aster.webp",
    mapUrl: "https://maps.app.goo.gl/PpJ66RukXKwegA5r6",
    projectLink: "/ace-aster",
    coordinates: "18.6472° N, 73.7429° E",
  },
  {
    id: 6,
    title: "Koregaon Park NX, Pune",
    project: "Jhamtani Bizcore",
    type: "Residential",
    tag: "Serviced Studio Apartments & Commercial",
    image: "/assets/pojetcts/bizcore_image.webp",
    mapUrl: "https://maps.app.goo.gl/efy7ZLxVURwiotWM6",
    projectLink: "/jhamtani-bizcore",
    coordinates: "18.5412° N, 73.9088° E",
  },
  {
    id: 7,
    title: "Mundhwa, Pune",
    project: "Jhamtani Elevate",
    type: "Residential",
    tag: "Modern Co-Living & Luxury Spaces",
    image: "/assets/projects/jhamtani-elevate.jpg",
    mapUrl: "https://maps.app.goo.gl/NvMzvwJx6e4xpBxC7",
    projectLink: "/jhamtani-elevate",
    coordinates: "18.5348° N, 73.9245° E",
  },
  {
    id: 8,
    title: "Baner, Pune",
    project: "Jhamtani SpaceBiz",
    type: "Commercial",
    tag: "State-of-the-Art Commercial Hub",
    image: "/assets/projects/jhamtani-spacebiz.jpg",
    mapUrl: "https://maps.app.goo.gl/F74h2REXgdd3DVfPA",
    projectLink: "/jhamtani-spacebiz",
    coordinates: "18.5590° N, 73.7868° E",
  },
];

export default function ProjectLocation() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");

  const filteredLocations = locationsData.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-28">
      {/* 1. Page Title Hero Banner (Warm Beige Luxury Aesthetic) */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Project Locations Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Elegant Dark Bronze/Charcoal Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-serif font-light text-[42px] sm:text-[56px] lg:text-[68px] text-[#C5A880] tracking-[0.2em] leading-none uppercase">
            PROJECT LOCATIONS
          </h1>
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light">
            Strategic Residential &amp; Commercial Addresses in Pune
          </p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
        
        {/* Filter Navigation Bar (Warm Champagne Theme) */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pb-8 mb-12 sm:mb-16 border-b border-[#A0725B]/20">
          {(["All", "Residential", "Commercial"] as const).map((type) => {
            const count =
              type === "All"
                ? locationsData.length
                : locationsData.filter((i) => i.type === type).length;
            const isActive = filter === type;
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-[#A0725B] border-[#A0725B] text-white shadow-lg shadow-[#A0725B]/25"
                    : "border-[#A0725B]/30 text-zinc-700 bg-white/60 hover:bg-[#A0725B]/10 hover:border-[#A0725B] hover:text-[#A0725B]"
                }`}
              >
                {type === "Residential" && <Home className="w-3.5 h-3.5" />}
                {type === "Commercial" && <Building2 className="w-3.5 h-3.5" />}
                {type === "All" && <Sparkles className="w-3.5 h-3.5" />}
                <span>{type === "All" ? "All Locations" : type}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#A0725B]/15 text-[#A0725B]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Locations Grid (Seamless Warm Luxury Cards) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredLocations.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.05,
                }}
                className="group flex flex-col bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
              >
                {/* Visual Image Header */}
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-[16/11] overflow-hidden bg-zinc-200 block cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={`${item.project} - ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Bar on Image: Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-3 py-1 rounded-full uppercase shadow-md">
                      {item.type}
                    </span>
                  </div>

                  {/* Coordinates indicator */}
                  <div className="absolute bottom-3 left-4 z-10 text-[10px] font-mono text-white/90 tracking-wider flex items-center gap-1.5 drop-shadow-md">
                    <MapPin className="w-3 h-3 text-[#C5A880]" />
                    <span>{item.coordinates}</span>
                  </div>
                </a>

                {/* Card Content Area */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 text-left justify-between">
                  <div>
                    {/* Project Name Tag */}
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A0725B]">
                      {item.project}
                    </span>

                    {/* Location Title (Clickable to Map) */}
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-serif text-[22px] sm:text-[24px] text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 font-normal leading-snug mt-1 cursor-pointer"
                    >
                      {item.title}
                    </a>

                    {/* Subtitle / Tagline */}
                    <p className="font-sans text-[13px] text-zinc-600 font-light leading-relaxed mt-2.5 line-clamp-2">
                      {item.tag}
                    </p>
                  </div>

                  {/* Single Action Button: Direct Open Google Maps */}
                  <div className="pt-5 mt-6 border-t border-[#A0725B]/20">
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white transition-all duration-300 cursor-pointer shadow-sm group/btn"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
