"use client";

import { motion } from "framer-motion";

export default function About() {
  const partnerPoints = [
    {
      title: "Trust Before Transactions",
      description:
        "Transparent communication, ethical practices and relationships built to last.",
    },
    {
      title: "Growth That Grows Together",
      description:
        "Opportunities, rewards and support that help both our partners and our brand succeed.",
    },
    {
      title: "Support at Every Step",
      description:
        "A dedicated team that stands beside you from enquiry to closure—and beyond.",
    },
    {
      title: "A Brand You Can Believe In",
      description:
        "Quality developments, timely commitments and a reputation that inspires customer confidence.",
    },
    {
      title: "Tools That Empower Success",
      description:
        "Marketing collateral, sales enablement and timely information to help you perform at your best.",
    },
    {
      title: "Recognition That Matters",
      description:
        "Celebrating your contribution through incentives, appreciation and long-term partnerships.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="w-full bg-[#EFECE6] text-[#2B2B2B] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        {/* 6 Grid Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-12 sm:gap-y-16"
        >
          {partnerPoints.map((item, index) => {
            const isLastInRow = (index + 1) % 3 === 0;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col items-center justify-start text-center px-6 sm:px-8 space-y-3.5 ${
                  !isLastInRow ? "md:border-r md:border-[#A0725B]/30" : ""
                }`}
              >
                <h3 className="font-serif text-xl sm:text-2xl text-[#A0725B] font-light leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#333333]/90 font-normal leading-relaxed max-w-xs">
                  {item.description}
                </p>
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
          className="flex justify-center pt-4"
        >
          <button className="px-8 sm:px-12 py-3.5 sm:py-2 rounded-full border border-[#A0725B]/60 text-[#2B2B2B] font-serif text-base sm:text-lg md:text-xl font-light bg-[#EFECE6] shadow-[22px_20px_32px_rgba(60,45,30,0.42)] hover:shadow-[26px_26px_40px_rgba(70,45,30,0.5)] hover:bg-[#A0725B] hover:text-white hover:border-[#A0725B] transition-all duration-300 cursor-pointer">
            Be Our Business Associate. Fill in this Channel Partner Form
          </button>
        </motion.div>
      </div>
    </section>
  );
}
