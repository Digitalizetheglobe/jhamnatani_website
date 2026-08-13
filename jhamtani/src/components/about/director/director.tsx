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
}

const directorsData: Director[] = [
  {
    id: "parmanand",
    name: "Mr. Parmanand Jhamtani",
    role: "Chairman | Founder | Entrepreneur | The Vision That Started It All",
    bio: [
      "Long before Jhamtani became one of Pune's most respected real estate brands, Mr Parmanand Jhamtani built his entrepreneurial journey on a simple belief-that trust is the strongest foundation any business can have.",
      "Beginning with construction materials and steadily expanding into real estate, he laid the groundwork for an organisation built on integrity, discipline and lasting relationships. More than four decades later, while the business has evolved across residential, commercial and lifestyle ventures, the principles that guide it remain exactly as he envisioned."
    ],
    image: "/assets/about/parmanand1.png",
  },
  {
    id: "anup",
    name: "Mr. Anup Jhamtani",
    role: "Managing Director",
    qualifications: [
      "B.Tech (Marine Engineering) | CREDAI Business Leadership Programme, IIM Bengaluru",
    ],
    bio: [
      "With over two decades of experience, Anup Jhamtani has transformed Jhamtani into one of Pune's most progressive real estate brands. His leadership spans strategy, acquisitions, finance, design, sales, marketing and execution-bringing together technical precision with long-term vision.",
      "Beyond the organisation, his active leadership through CREDAI Pune Metro and the Sindhi Youth Builders Association reflects his commitment to shaping not just projects, but the future of the industry itself. His belief is simple: every project should leave behind stronger communities, greater trust and a lasting legacy."
    ],
    image: "/assets/about/anup.png",
  },
  {
    id: "meenakshi",
    name: "Mrs. Meenakshi Jhamtani",
    role: "Executive Director",
    qualifications: [
      "B.E. (Engineering), MIT Pune | Former SAP Developer, IBM India",
      "Executive Programme, IIM Lucknow",
    ],
    bio: [
      "Since joining Jhamtani in 2010, Meenakshi Jhamtani has led the company's evolution into a process-driven, technology-enabled organisation. With expertise spanning finance, operations, sales, marketing and customer experience, she has strengthened every layer of the business-from ERP implementation and financial governance to CRM, J-Tribe, Hamesha Aapke Saath and the in-house design division.",
      "Her leadership ensures that every promise Jhamtani makes is backed by systems, consistency and a relentless focus on the customer."
    ],
    image: "/assets/about/meenakshi.png",
  },
  {
    id: "bhavna",
    name: "Mrs. Bhavna Jhamtani",
    role: "President, Jhamtani Educational Trust",
    bio: [
      "Leading social welfare, community building, and educational initiatives across Pune, Mrs. Bhavna Jhamtani embodies the compassionate heart of Jhamtani.",
      "Her work focuses on creating meaningful societal impact and nurturing future generations."
    ],
    image: "/assets/about/meenakshi.png",
  },
];

export default function DirectorSection() {
  const [activeDirectorId, setActiveDirectorId] = useState<string>("meenakshi");

  const activeDirector =
    directorsData.find((d) => d.id === activeDirectorId) || directorsData[2];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full bg-[#EEEBE7] overflow-hidden min-h-[700px] lg:min-h-[750px]">
      {/* Main content wrapper */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-36 sm:pb-44"
      >
        {/* Section Header Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-[22px] sm:text-[28px] md:text-[34px] text-[#2D2925] font-normal mb-2 sm:mb-4 tracking-tight"
        >
          The Architects Of Our Promise
        </motion.p>

        {/* Dynamic Director Name Heading */}
        <motion.div variants={itemVariants} className="overflow-hidden mb-6 sm:mb-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`name-${activeDirector.id}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif font-normal leading-[1.05] text-[#B88654]"
              style={{ fontSize: "clamp(38px, 6vw, 82px)" }}
            >
              {activeDirector.name}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Content Container (Left Bio | Right Image) */}
        <div className="relative z-30 min-h-[400px] lg:min-h-[460px]">
          {/* Left Text Content Column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeDirector.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="w-full lg:w-[50%] space-y-4 z-10 relative pr-0 lg:pr-6"
            >
              {/* Role */}
              <p className="font-sans font-bold text-[14px] sm:text-[15px] lg:text-[16px] text-[#2D2925] tracking-wide">
                {activeDirector.role}
              </p>

              {/* Qualifications */}
              {activeDirector.qualifications && activeDirector.qualifications.length > 0 && (
                <div className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#2D2925] leading-snug space-y-0.5 pt-0.5">
                  {activeDirector.qualifications.map((q, idx) => (
                    <p key={idx}>{q}</p>
                  ))}
                </div>
              )}

              {/* Bio Paragraphs */}
              <div className="space-y-4 pt-2 font-sans text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#4A443E] leading-relaxed">
                {activeDirector.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Cutout Image Column - Desktop (positioned absolutely to match PDF layout) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-desktop-${activeDirector.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="hidden lg:block absolute right-[-5%] xl:right-[-2%] top-[-150px] bottom-[-300px] w-[85%] xl:w-[80%] pointer-events-none z-[50]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={activeDirector.image}
                  alt={activeDirector.name}
                  fill
                  priority
                  sizes="(max-width: 1200px) 85vw, 1000px"
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Cutout Image Column - Mobile / Tablet */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-mobile-${activeDirector.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="lg:hidden relative w-full h-[450px] sm:h-[550px] mt-6 pointer-events-none z-20"
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
      </motion.div>

      {/* ── Bottom Floating Director Selector Capsule ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        className="absolute bottom-5 sm:bottom-6 left-0 right-0 z-30 px-3 sm:px-6 flex justify-center pointer-events-auto"
      >
        <div
          className="w-full max-w-5xl flex items-center justify-between sm:justify-around py-3 sm:py-3.5 px-3 sm:px-6 shadow-2xl overflow-x-auto no-scrollbar"
          style={{
            background: "rgba(42, 48, 54, 0.86)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {directorsData.map((d) => {
            const isActive = d.id === activeDirectorId;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDirectorId(d.id)}
                className="flex items-center space-x-3 py-1.5 px-2.5 sm:px-4 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 hover:bg-white/10 focus:outline-none"
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
                    className={`font-sans text-[12px] sm:text-[13px] font-semibold leading-tight transition-colors ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {d.name}
                  </p>
                  <p className="font-sans text-[10.5px] sm:text-[11px] text-white/60 leading-tight max-w-[150px] truncate">
                    {d.role.split("|")[0].trim()}
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

