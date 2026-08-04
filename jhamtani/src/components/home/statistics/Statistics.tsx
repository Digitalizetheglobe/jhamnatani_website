"use client";

import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    { number: "40yrs+", label: "OF LEGACY" },
    { number: "13K+", label: "HAPPY FACES" },
    { number: "8", label: "ONGOING PROJECTS" },
    { number: "4M+", label: "SQ. FT. DELIVERED" },
    { number: "4.8M+", label: "SQ. FT. IN PIPELINE" },
    { number: "24", label: "COMPLETED PROJECTS" },
    { number: "16Yrs +", label: "IN REAL ESTATE" },
    { number: "32", label: "TOTAL PROJECTS" },
    { number: "2.4M+", label: "SQ. FT. UNDER CONSTRUCTION" },
    { number: "6.4M+", label: "SQ. FT. LAUNCHED" },
  ];

  return (
    <div className="w-full text-white flex flex-col justify-center py-4">
      <div className="flex flex-col space-y-4 md:space-y-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0.4, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px", amount: 0.5 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative flex flex-col text-left cursor-pointer py-6 px-6 rounded-2xl transition-all duration-500 ease-out hover:bg-white/[0.04] border-b border-[#a0725b]/20 last:border-b-0 overflow-hidden"
          >
            {/* White glowing indicator line on hover */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-3/4 bg-white rounded-r transition-all duration-300 ease-out shadow-[0_0_12px_#ffffff]" />

            {/* Number: Muted copper by default, turns crisp brilliant WHITE on hover */}
            <span className="font-serif text-[52px] sm:text-[64px] md:text-[72px] lg:text-[80px] font-light leading-none text-[#a0725b]/50 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-[1.02] transition-all duration-300 tracking-tight select-none">
              {stat.number}
            </span>

            {/* Label: Muted copper by default, turns bright WHITE on hover */}
            <span className="font-serif text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-tight text-[#a0725b]/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 mt-2 tracking-wider">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

