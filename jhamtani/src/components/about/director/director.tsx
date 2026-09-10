"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Director {
  id: string;
  name: string;
  role: string;
  qualifications?: string[];
  bio: string[];
  image: string;
  imageClass?: string;
}

const directorsData: Director[] = [
  {
    id: "parmanand",
    name: "MR. PARMANAND JHAMTANI",
    role: "Chairman",
    qualifications: [],
    bio: [
      "Long before Jhamtani became one of Pune's most respected real estate brands, Mr. Parmanand Jhamtani built his entrepreneurial journey with construction materials and steadily expanding into real estate, he laid the groundwork for an organisation built on integrity, discipline and lasting relationships. More than four decades later, while the business has evolved across residential, commercial and lifestyle ventures, the principles that guide it remain exactly as he envisioned.",
    ],
    image: "/assets/about/parmanand1.png",
    imageClass: "object-bottom",
  },
  {
    id: "anup",
    name: "MR. ANUP JHAMTANI",
    role: "Managing Director",
    qualifications: [
      "B.Tech (Marine Engineering)",
      "CREDAI Business Leadership Programme, IIM Bengaluru",
    ],
    bio: [
      "With over two decades of experience, Anup Jhamtani leadership spans strategy, acquisitions, finance, design, sales, marketing and execution - bringing together technical precision with long-term vision.",
      "Beyond the organisation, his active leadership through CREDAI Pune Metro and the Sindhi Youth Builders Association reflects his commitment to shaping not just projects, but the future of the industry itself.",
    ],
    image: "/assets/about/anup.png",
    imageClass: "object-bottom",
  },
  {
    id: "meenakshi",
    name: "MRS. MEENAKSHI JHAMTANI",
    role: "Executive Director",
    qualifications: [
      "B.E. (Engineering), MIT Pune | Former SAP Developer, IBM India",
      "Executive Programme, IIM Lucknow",
    ],
    bio: [
      "Since joining Jhamtani in 2010, Meenakshi Jhamtani has led the company's evolution into a process-driven, technology-enabled organisation. With expertise spanning finance, operations, sales, marketing and customer experience, she has strengthened every layer of the business - from ERP implementation and financial governance to CRM, J-Tribe, Hamesha Aapke Saath and the in-house design division.",
      "Her leadership ensures that every promise Jhamtani makes is backed by systems, consistency and a relentless focus on the customer.",
    ],
    image: "/assets/about/meenakshi.png",
    imageClass: "object-bottom",
  },
];

export default function DirectorSection() {
  const [activeDirectorId, setActiveDirectorId] = useState<string>("anup");

  const activeDirector =
    directorsData.find((d) => d.id === activeDirectorId) || directorsData[1];

  return (
    <section className="relative w-full overflow-hidden bg-[#EEEBE7] min-h-[650px] sm:min-h-[700px] lg:min-h-[720px] xl:min-h-[700px]">
      
      {/* ── Background Image (Desktop) ── */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src="/assets/team-bg.png"
          alt="Team Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Desktop View (lg and above) ── */}
      <div className="hidden lg:block relative z-10 w-full">
        {/* Right Cutout Image Column */}
        <div className="absolute right-0 lg:right-[4%] xl:right-[8%] bottom-0 top-0 w-[52%] xl:w-[50%] flex items-end justify-center pointer-events-none z-10 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-${activeDirector.id}`}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full max-h-[680px] xl:max-h-[740px] flex items-end justify-center"
            >
              <Image
                src={activeDirector.image}
                alt={activeDirector.name}
                fill
                priority
                sizes="50vw"
                className={`object-contain object-bottom transition-transform duration-500 ${activeDirector.imageClass || ""}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Content Container - Text Column */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-10 lg:px-16 pt-16 pb-28">
          <div className="w-[50%] xl:w-[48%] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={`desktop-text-${activeDirector.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-4"
              >
                {/* Director Name */}
                <h2 className="font-serif text-[#1F1C18] text-[44px] md:text-[50px] lg:text-[56px] xl:text-[60px] font-normal tracking-wide uppercase leading-[1.08]">
                  {activeDirector.name}
                </h2>

                {/* Director Role */}
                <p className="font-sans text-[18px] md:text-[20px] lg:text-[21px] text-[#6E675F] font-normal pb-2">
                  {activeDirector.role}
                </p>

                {/* Director Qualifications */}
                {activeDirector.qualifications && activeDirector.qualifications.length > 0 && (
                  <div className="font-sans text-[14px] md:text-[14.5px] font-bold text-[#1F1C18] leading-snug space-y-0.5 pb-2">
                    {activeDirector.qualifications.map((qual, idx) => (
                      <p key={idx}>{qual}</p>
                    ))}
                  </div>
                )}

                {/* Director Bio */}
                <div className="font-sans text-[14px] lg:text-[14.5px] text-[#524C46] leading-[1.65] space-y-4 max-w-xl">
                  {activeDirector.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Mobile & Tablet View (< lg) ── */}
      <div className="lg:hidden relative z-20 w-full px-5 pt-8 pb-[380px] sm:pb-[450px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-text-${activeDirector.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center text-center max-w-md mx-auto"
          >
            {/* Header: Name & Role */}
            <h2 className="font-serif text-[26px] sm:text-[34px] text-[#1F1C18] font-normal uppercase tracking-wider text-center leading-tight mb-1">
              {activeDirector.name}
            </h2>
            <p className="font-sans text-[14px] sm:text-[16px] text-[#C9A063] font-medium text-center mb-4">
              {activeDirector.role}
            </p>

            {/* Qualifications Section with Top/Bottom Dividers */}
            {activeDirector.qualifications && activeDirector.qualifications.length > 0 && (
              <div className="w-full py-3 border-t border-b border-[#D8D2C9] my-3 text-left">
                <div className="font-sans text-[13px] sm:text-[14px] font-bold text-[#1F1C18] leading-snug space-y-1">
                  {activeDirector.qualifications.map((qual, idx) => (
                    <p key={idx}>{qual}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Bio Paragraphs */}
            <div className="w-full text-left space-y-3 pt-1 font-sans text-[13.5px] sm:text-[14px] text-[#524C46] leading-relaxed">
              {activeDirector.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Brand Watermark */}
            <div className="pt-6 text-center">
              <span className="font-serif text-[14px] tracking-[0.25em] text-[#B3A99B] uppercase font-light">
                JHAMTANI
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Cutout Image - Positioned absolute to touch bottom edge (bottom-0) */}
      <div className="lg:hidden absolute bottom-0 inset-x-0 w-full h-[370px] sm:h-[440px] flex items-end justify-center pointer-events-none z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-img-${activeDirector.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex items-end justify-center"
          >
            <Image
              src={activeDirector.image}
              alt={activeDirector.name}
              fill
              priority
              sizes="100vw"
              className="object-contain object-bottom"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Floating Bottom Director Selector Capsule (Shared) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 px-3 sm:px-6 flex justify-center pointer-events-auto"
      >
        <div
          className="w-full max-w-5xl flex items-center justify-between sm:justify-around py-3 sm:py-3.5 px-4 sm:px-8 shadow-2xl overflow-x-auto no-scrollbar"
          style={{
            background: "rgba(75, 80, 85, 0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "28px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {directorsData.map((d) => {
            const isActive = d.id === activeDirectorId;
            const displayName = d.id === "parmanand"
              ? "Mr. Parmanand Jhamtani"
              : d.id === "anup"
              ? "Mr. Anup Jhamtani"
              : "Mrs. Meenakshi Jhamtani";

            return (
              <button
                key={d.id}
                onClick={() => setActiveDirectorId(d.id)}
                className="flex items-center space-x-3 py-1.5 px-2 sm:px-3 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 bg-transparent focus:outline-none"
              >
                {/* Avatar with glowing active cyan ring */}
                <div
                  className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#38BDF8] ring-2 ring-[#38BDF8]/60 shadow-[0_0_12px_rgba(56,189,248,0.5)] scale-105"
                      : "border-white/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Name & Role Text */}
                <div className="text-left hidden sm:block">
                  <p
                    className={`font-sans text-[13px] sm:text-[14px] font-semibold leading-tight transition-colors ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {displayName}
                  </p>
                  <p className="font-sans text-[11px] sm:text-[12px] text-white/60 leading-tight mt-0.5">
                    {d.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
