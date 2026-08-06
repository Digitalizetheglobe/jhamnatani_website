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
    role: "Chairman | Founder | Entrepreneur",
    bio: [
      "Founder and Chairman of Jhamtani Group, Mr. Parmanand Jhamtani laid the foundational principles of trust and unyielding commitment four decades ago.",
      "His visionary leadership transformed a local building materials enterprise into one of Pune's premier real estate powerhouses."
    ],
    image: "/assets/about/director.png",
  },
  {
    id: "anup",
    name: "Mr. Anup Jhamtani",
    role: "Managing Director",
    bio: [
      "Steering Jhamtani into modern luxury real estate, Mr. Anup Jhamtani has driven architectural innovation and design excellence across Pune.",
      "Under his leadership, the brand introduced signature lifestyle residences and pioneering customer-first initiatives."
    ],
    image: "/assets/about/director.png",
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
      "Her leadership ensures that every promise Jhamtani makes is backed by systems, consistency and a relentless focus on the customer.",
    ],
    image: "/assets/about/director.png",
  },
  {
    id: "bhavna",
    name: "Mrs. Bhavna Jhamtani",
    role: "President, Jhamtani Educational Trust",
    bio: [
      "Leading social welfare, community building, and educational initiatives across Pune, Mrs. Bhavna Jhamtani embodies the compassionate heart of Jhamtani.",
      "Her work focuses on creating meaningful societal impact and nurturing future generations.",
    ],
    image: "/assets/about/director.png",
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section className="relative w-full bg-[#EEEBE7] overflow-hidden" style={{ minHeight: "680px" }}>
      {/* Main content wrapper with padding-bottom to clear the bottom bar */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-32 sm:pb-40"
      >
        {/* Small subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-[22px] sm:text-[28px] md:text-[34px] text-[#4a4642] font-normal mb-3 sm:mb-4"
        >
          The Architects Of Our Promise
        </motion.p>

        {/* Director large name */}
        <motion.div variants={itemVariants} className="overflow-hidden mb-6 sm:mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`name-${activeDirector.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif font-normal leading-[1.0] text-[#b88654]"
              style={{ fontSize: "clamp(42px, 7.5vw, 100px)" }}
            >
              {activeDirector.name}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Two-column: Left text | Right image (absolute) */}
        <motion.div variants={itemVariants} className="relative">
          {/* Left text content — max ~half width */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeDirector.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-1/2 space-y-5"
            >
              {/* Role */}
              <p className="font-sans font-bold text-[15px] sm:text-[16px] text-[#2d2925]">
                {activeDirector.role}
              </p>

              {/* Qualifications */}
              {activeDirector.qualifications && (
                <div className="font-sans text-[13px] sm:text-[14px] font-bold text-[#2d2925] leading-snug -mt-2">
                  {activeDirector.qualifications.map((q, idx) => (
                    <p key={idx}>{q}</p>
                  ))}
                </div>
              )}

              {/* Bio paragraphs */}
              <div className="space-y-4 pt-2 font-sans text-[14px] sm:text-[15px] text-[#4a443e] leading-relaxed">
                {activeDirector.bio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Director image — absolutely positioned on right, overlaps name */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeDirector.id}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="hidden lg:block absolute bottom-0 right-0 w-[48%] pointer-events-none"
              style={{ top: "-120px", bottom: "-130px" }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={activeDirector.image}
                  alt={activeDirector.name}
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-mobile-${activeDirector.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden relative w-full h-72 mt-8"
            >
              <Image
                src={activeDirector.image}
                alt={activeDirector.name}
                fill
                className="object-contain object-bottom"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* ── Bottom Director Selector Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-8 flex justify-center"
      >
        <div
          className="w-full max-w-7xl flex items-center justify-around py-6 px-4 sm:px-8 shadow-xl overflow-x-auto no-scrollbar"
          style={{
            background: "rgba(25, 31, 38, 0.85)",
            backdropFilter: "blur(12px)",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {directorsData.map((d) => {
            const isActive = d.id === activeDirectorId;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDirectorId(d.id)}
                className="flex items-center space-x-3 py-2 px-3 sm:px-5 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 hover:bg-white/5"
              >
                {/* Avatar */}
                <div
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#b88654] ring-2 ring-[#b88654]"
                      : "border-white/30"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-left hidden sm:block">
                  <p className="font-sans text-[12px] sm:text-[13px] font-semibold text-white leading-tight">
                    {d.name}
                  </p>
                  <p className="font-sans text-[11px] text-white/60 leading-tight">
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
