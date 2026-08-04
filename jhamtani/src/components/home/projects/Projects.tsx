"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 5;

  // Auto-slide every 5 seconds
  const autoAdvance = useCallback(() => {
    setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(autoAdvance, 5000);
    return () => clearInterval(timer);
  }, [autoAdvance, activeSlide]);

  const projectsData = [
    {
      id: 1,
      title: "ACE Atmosphere",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_atmosphere.webp",
      desc: "Pune’s first 24×7 Lifestyle with all-day open amenities.",
      logo: (
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/assets/pojetcts/ace_atmosphere_logo.webp"
            alt="ACE Atmosphere Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-12 sm:h-16 lg:h-18 w-auto"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Jhamtani Abundance",
      location: "Mundhwa",
      type: "Residential",
      image: "/assets/pojetcts/Abundacne_Elevaion.webp",
      desc: "A signature statement of luxury residential living in Mundhwa.",
      logo: (
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/assets/pojetcts/Abundacne logo.webp"
            alt="Abundance Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-12 sm:h-16 lg:h-18 w-auto"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "ACE Villas",
      location: "Koregaon Park NX",
      type: "Villas",
      image: "/assets/pojetcts/ace_villas.webp",
      desc: "Unrivaled luxury estate villas reserved for a select few.",
      logo: (
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/assets/pojetcts/ace_villas_logo.webp"
            alt="ACE Villas Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-12 sm:h-16 lg:h-18 w-auto"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Jhamtani Bizcore",
      location: "Koregaon Park NX",
      type: "Commercial",
      image: "/assets/pojetcts/bizcore_image.webp",
      desc: "Premium boutique office spaces and dynamic retail hubs.",
      logo: (
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/assets/pojetcts/bizcore_logo.webp"
            alt="Jhamtani Bizcore Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-12 sm:h-16 lg:h-18 w-auto"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "ACE Aster",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_aster.webp",
      desc: "Bespoke contemporary residences crafted for absolute comfort.",
      logo: (
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/assets/pojetcts/aster_logo.webp"
            alt="ACE Aster Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-12 sm:h-16 lg:h-18 w-auto"
          />
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const activeProject = projectsData[activeSlide - 1];

  return (
    <div id="projects" className="w-full flex flex-col scroll-mt-20">
      {/* 1. Iconic Lifestyles (Slider Row) */}
      <section className="w-full border-t border-luxury-border bg-[#eeebe7] py-0 overflow-hidden flex flex-col justify-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[500px] lg:h-[85vh] lg:max-h-[800px] items-stretch">
          
          {/* Left Panel: Animated Image + Floating Outlined Index */}
          <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] lg:h-full w-full overflow-hidden select-none bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Giant Numbers on bottom-right of the Image */}
            <span className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 font-serif text-[70px] sm:text-[100px] lg:text-[125px] font-light leading-none text-white select-none tracking-tighter drop-shadow-md">
              0{activeSlide}
            </span>
          </div>

          {/* Right Panel: Branded Details Card (White Background) */}
          <div className="lg:col-span-4 bg-white flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-black text-left relative min-h-[380px] lg:min-h-0 h-full">
            {/* Header Title */}
            <div className="space-y-1">
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-zinc-900 font-normal">
                The Iconic Lifestyles
                <span className="block text-zinc-800 font-serif font-normal">We Created</span>
              </h2>
            </div>

            {/* Center Area: Dynamic Logo + Description */}
            <div className="my-auto py-4 lg:py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-start justify-start min-h-[160px] lg:min-h-[180px]"
                >
                  {activeProject.logo}
                  
                  <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-zinc-600 mt-4 max-w-xs text-left">
                    {activeProject.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Area: Custom Nav controls & EXPLORE MORE */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-zinc-100 select-none">
              <div className="flex items-center space-x-2.5">
                <button
                  onClick={handlePrev}
                  className="p-2.5 sm:p-3 border border-zinc-300 hover:border-black rounded-full text-zinc-600 hover:text-black transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 sm:p-3 border border-zinc-300 hover:border-black rounded-full text-zinc-500 hover:text-black transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                </button>
                <span className="font-sans text-xs sm:text-sm text-[#a0725b] font-semibold pl-1 whitespace-nowrap">
                  {activeSlide}/{totalSlides}
                </span>
              </div>

              <button className="px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] hover:bg-[#a0725b] hover:text-white rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#a0725b] transition-all duration-300 cursor-pointer">
                EXPLORE MORE
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. XO Series (Redesigned Theme) */}
    </div>
  );
}
