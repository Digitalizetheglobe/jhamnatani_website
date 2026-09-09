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
    desc: "Get initial insights into upcoming project developments before public announcements.",
    icon: Zap,
  },
  {
    title: "Pre-Launch Privileges",
    desc: "Exclusive priority inventory allocation for your clients during pre-launch phases.",
    icon: Sparkles,
  },
  {
    title: "Enhanced Brokerage",
    desc: "Tiered incentive structures and accelerated payout schedules for top partners.",
    icon: Award,
  },
  {
    title: "FOS Incentives",
    desc: "Dedicated performance bonuses and rewards for your Feet-On-Street sales force.",
    icon: TrendingUp,
  },
  {
    title: "Direct Management Access",
    desc: "Direct escalation channels and communication with Jhamtani leadership.",
    icon: ShieldCheck,
  },
  {
    title: "Marketing Support",
    desc: "Co-branded marketing collateral, digital assets, and event sponsorship support.",
    icon: Megaphone,
  },
  {
    title: "New Business Rewards",
    desc: "Special milestone bonuses and luxury rewards for new account onboarding.",
    icon: Gift,
  },
  {
    title: "Outstation Client Benefits",
    desc: "Dedicated hospitality, site visit support, and logistics for non-local buyers.",
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
            className="mb-8 px-8 py-4 rounded-2xl inline-block"
          >
            <Image
              src="/assets/channel-partner/Logo.png"
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
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#A0725B] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#A0725B]/10 border border-[#A0725B]/20 flex items-center justify-center text-[#A0725B] mb-5 group-hover:scale-110 group-hover:bg-[#A0725B] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-light text-lg sm:text-xl text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 font-light leading-relaxed mt-2.5">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    Privilege 0{index + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A0725B]/40 group-hover:bg-[#A0725B] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
