"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Award,
  TrendingUp,
  ShieldCheck,
  Megaphone,
  Gift,
  Globe,
} from "lucide-react";

const pointers = [
  {
    title: "First-Mover Access",
    icon: Zap,
  },
  {
    title: "Pre-Launch Privileges",
    icon: Sparkles,
  },
  {
    title: "Enhanced Brokerage",
    icon: Award,
  },
  {
    title: "FOS Incentives",
    icon: TrendingUp,
  },
  {
    title: "Direct Management Access",
    icon: ShieldCheck,
  },
  {
    title: "Marketing Support",
    icon: Megaphone,
  },
  {
    title: "New Business Rewards",
    icon: Gift,
  },
  {
    title: "Outstation Client Benefits",
    icon: Globe,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export default function Yugma() {
  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#A0725B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#A0725B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Top Header Block */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* YUGMA Logo Box (Clean white crisp background for sharp logo contrast) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 px-8 rounded-2xl inline-block"
          >
            <Image
              src="/assets/channel-partner/Logo.webp"
              alt="YUGMA Associate Logo"
              width={240}
              height={100}
              className="object-contain h-16 sm:h-20 w-auto"
              priority
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif font-light text-[34px] sm:text-[46px] lg:text-[54px] leading-tight text-[#A0725B] tracking-wide"
          >
            Be a YUGMA Associate
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-xs sm:text-sm font-semibold tracking-[0.22em] text-zinc-700 uppercase mt-3"
          >
            WHERE PARTNERSHIPS GO FURTHER.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed font-light mt-6 max-w-2xl"
          >
            YUGMA Associates is Jhamtani’s inner circle of valued channel partners which is created to build stronger relationships, unlock early access and reward those who grow with us.
          </motion.p>

          {/* Highlights Tagline Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 px-6 py-2.5 rounded-full border border-[#A0725B]/40 bg-[#A0725B]/10 text-[#A0725B] font-sans text-xs sm:text-sm tracking-wide font-medium shadow-sm"
          >
            Exclusive access. &nbsp;•&nbsp; Better opportunities. &nbsp;•&nbsp; Greater rewards.
          </motion.div>
        </div>

        {/* Pointers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-16 sm:mt-20"
        >
          {pointers.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative px-5 py-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#A0725B] transition-all duration-300 flex items-center gap-3.5 shadow-sm hover:shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-[#A0725B]/10 border border-[#A0725B]/20 flex items-center justify-center text-[#A0725B] shrink-0 group-hover:scale-110 group-hover:bg-[#A0725B] group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-serif font-light text-sm sm:text-base text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center pt-14 sm:pt-20"
        >
          <button
            onClick={() => {
              const event = new CustomEvent("open-cp-modal");
              window.dispatchEvent(event);
            }}
            className="px-8 sm:px-12 py-3.5 sm:py-3 rounded-full border border-[#A0725B]/60 text-[#2B2B2B] font-serif text-base sm:text-lg md:text-xl font-light bg-[#FAF5F0] shadow-[22px_20px_32px_rgba(60,45,30,0.18)] hover:shadow-[26px_26px_40px_rgba(70,45,30,0.3)] hover:bg-[#A0725B] hover:text-white hover:border-[#A0725B] transition-all duration-300 cursor-pointer"
          >
            Be Our Business Associate. Fill in this Channel Partner Form
          </button>
        </motion.div>
      </div>
    </section>
  );
}
