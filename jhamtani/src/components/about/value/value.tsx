"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Sprout,
  BarChart3,
  Sparkles,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

interface PromiseValue {
  id: string;
  title: string;
  quote: string;
  icon: React.ElementType;
  points: string[];
}

interface WaveTextProps {
  text: string;
  letterDelay?: number;
}

function WaveText({ text, letterDelay = 15 }: WaveTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex flex-wrap items-center gap-[0.02em] select-none" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden py-0.5 -my-0.5">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

const promisesData: PromiseValue[] = [
  {
    id: "happier-life",
    title: "The Promise of a Happier Life",
    quote: "Projects are built with concrete. Happiness is built with intent.",
    icon: UserCheck,
    points: [
      "Every decision starts with the customer.",
      "Every space is designed for everyday happiness.",
      "Every promise is honoured with care.",
      "Every relationship extends beyond possession.",
    ],
  },
  {
    id: "evolving-everyday",
    title: "The Promise of Evolving Every Day",
    quote: "The day we stop learning is the day we stop leading.",
    icon: Sprout,
    points: [
      "We learn from every experience.",
      "We improve every process.",
      "We implement feedback",
      "We never stop raising the bar.",
    ],
  },
  {
    id: "greater-tomorrow",
    title: "The Promise of a Greater Tomorrow",
    quote: "Tomorrow is built by the choices we make today.",
    icon: BarChart3,
    points: [
      "We think beyond today.",
      "We choose quality without compromise.",
      "We create value for generations.",
      "We stay ahead of the trend.",
    ],
  },
  {
    id: "meaningful-impact",
    title: "The Promise of Meaningful Impact",
    quote: "Success means little unless it makes someone's life better.",
    icon: Sparkles,
    points: [
      "We stand by our customers through every stage.",
      "We value every person behind every project.",
      "We grow stronger through lasting partnerships.",
      "We build communities, not just addresses.",
    ],
  },
];

export default function Value() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const headerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="w-full bg-[#191F26] text-white py-16 sm:py-24">
      <style dangerouslySetInnerHTML={{__html: `
        .value-arrow-circle-path {
          stroke-dasharray: 298.5;
          stroke-dashoffset: 298.5;
          transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .value-arrow-circle-path {
          stroke-dashoffset: 0;
        }
      `}} />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <motion.h2
            variants={textVariants}
            className="font-serif text-[38px] sm:text-[50px] md:text-[62px] leading-tight text-[#A0725B] font-normal"
          >
            Our Values That Enhance Our Promise
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="font-sans text-[15px] sm:text-[16px] text-white/80 leading-relaxed tracking-wide"
          >
            Every organisation speaks about values. We prefer something more demanding - ‘Promises’. At Jhamtani, every acquisition, every drawing, every approval, every interaction and every handover is measured against four promises we first made to ourselves. Not because they define what we say. Because they define what we refuse to compromise.          </motion.p>
        </motion.div>

        {/* Promises Accordion List with Only 3 Middle Dividers */}
        <div className="divide-y divide-white">
          {promisesData.map((item, index) => {
            const IconComponent = item.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Accordion Header / Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-7 sm:py-8 flex items-center justify-between text-left transition-colors duration-300 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-6 sm:space-x-8 pr-4">
                    {/* Left Line Art Icon (No background box) */}
                    <div className="flex-shrink-0 text-white/90 group-hover:text-[#A0725B] transition-colors duration-300">
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.2]" />
                    </div>

                    {/* Titles */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[30px] text-[#A0725B] font-normal leading-snug transition-colors duration-300">
                        <WaveText text={item.title} />
                      </h3>
                      <p className="font-sans text-[14px] sm:text-[15px] text-white font-normal">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Action Circle */}
                  <div
                    className={`relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#A0725B] transition-all duration-300 ${
                      isOpen ? "bg-[#A0725B] text-black group-hover:text-black rotate-180" : ""
                    }`}
                  >
                    {/* SVG Borders */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                      {/* Base gold border (hidden when active to avoid clash) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="47.5"
                        className={`fill-none stroke-[#A0725B]/70 stroke-[1.5] transition-opacity duration-300 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
                      />
                      {/* Animated active border (White) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="47.5"
                        className="fill-none stroke-white stroke-[2] value-arrow-circle-path"
                      />
                    </svg>
                    <ArrowDown className="w-5 h-5 relative z-10 transition-transform duration-300" />
                  </div>
                </button>

                {/* Expanded Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pl-16 sm:pl-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-black/20 p-6 sm:p-8 rounded-2xl border border-white/10">
                          {item.points.map((point, ptIdx) => (
                            <motion.div
                              key={ptIdx}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: ptIdx * 0.08 }}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#A0725B] mt-0.5 flex-shrink-0" />
                              <span className="font-sans text-[15px] sm:text-[16px] text-white leading-relaxed">
                                {point}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

