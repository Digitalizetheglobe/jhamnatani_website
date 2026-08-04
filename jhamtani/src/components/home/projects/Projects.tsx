"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import XOSeries from "./XOSeries";

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 5;

  const projectsData = [
    {
      id: 1,
      title: "ACE Atmosphere",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_atmosphere.png",
      desc: "Pune’s first 24×7 Lifestyle with all-day open amenities.",
      logo: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/assets/pojetcts/ace_atmosphere_logo.png"
            alt="ACE Atmosphere Logo"
            width={180}
            height={100}
            priority
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Jhamtani Abundance",
      location: "Mundhwa",
      type: "Residential",
      image: "/assets/pojetcts/Abundacne_Elevaion.png",
      desc: "A signature statement of luxury residential living in Mundhwa.",
      logo: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/assets/pojetcts/Abundacne logo.png"
            alt="Abundance Logo"
            width={180}
            height={100}
            priority
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 3,
      title: "ACE Villas",
      location: "Koregaon Park NX",
      type: "Villas",
      image: "/assets/pojetcts/ace_villas.png",
      desc: "Unrivaled luxury estate villas reserved for a select few.",
      logo: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/assets/pojetcts/ace_villas_logo.png"
            alt="ACE Villas Logo"
            width={180}
            height={100}
            priority
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 4,
      title: "Jhamtani Bizcore",
      location: "Koregaon Park NX",
      type: "Commercial",
      image: "/assets/pojetcts/bizcore_image.png",
      desc: "Premium boutique office spaces and dynamic retail hubs.",
      logo: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/assets/pojetcts/bizcore_logo.png"
            alt="Jhamtani Bizcore Logo"
            width={180}
            height={100}
            priority
            className="object-contain"
          />
        </div>
      ),
    },
    {
      id: 5,
      title: "ACE Aster",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_aster.png",
      desc: "Bespoke contemporary residences crafted for absolute comfort.",
      logo: (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            src="/assets/pojetcts/aster_logo.png"
            alt="ACE Aster Logo"
            width={180}
            height={100}
            priority
            className="object-contain"
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
    <div id="projects" className="w-full flex flex-col bg-white">
      {/* 1. Iconic Lifestyles (Slider Row) */}
      <section className="w-full border-t border-luxury-border bg-[#eeebe7] py-0 overflow-hidden flex flex-col justify-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[500px] lg:h-[800px] items-stretch">
          
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
            <span className="absolute bottom-6 right-8 font-serif text-[80px] sm:text-[110px] lg:text-[140px] font-light leading-none text-white select-none tracking-tighter">
              0{activeSlide}
            </span>
          </div>

          {/* Right Panel: Branded Details Card (White Background) */}
          <div className="lg:col-span-4 bg-white flex flex-col justify-between p-6 sm:p-10 lg:p-16 text-black text-left relative min-h-[400px]">
            {/* Header Title */}
            <div className="space-y-2">
              <h2 className="font-serif text-[28px] sm:text-[34px] leading-tight text-zinc-900 font-normal">
                The Iconic Lifestyles
                <span className="block text-zinc-800 font-serif font-normal">We Created</span>
              </h2>
            </div>

            {/* Center Area: Dynamic Logo + Description */}
            <div className="my-auto py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-start justify-left min-h-[220px]"
                >
                  {activeProject.logo}
                  
                  <p className="font-sans text-[14px] lg:text-[15px] leading-relaxed text-zinc-500 mt-6 max-w-xs text-left">
                    {activeProject.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Area: Custom Nav controls & EXPLORE MORE */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 select-none">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="p-3 border border-zinc-300 hover:border-black rounded-full text-zinc-500 hover:text-black transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[1.8]" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 border border-zinc-300 hover:border-black rounded-full text-zinc-500 hover:text-black transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 stroke-[1.8]" />
                </button>
                <span className="font-sans text-sm text-[#a0725b]/70 font-semibold pl-2 whitespace-nowrap">
                  {activeSlide}/{totalSlides}
                </span>
              </div>

              <button className="px-6 py-3 border border-[#a0725b] hover:bg-[#a0725b] hover:text-white rounded-full text-xs font-bold uppercase tracking-widest text-[#a0725b] transition-all duration-300 cursor-pointer">
                EXPLORE MORE
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. XO Series (Redesigned Theme) */}
      {/* <XOSeries /> */}
    </div>
  );
}
