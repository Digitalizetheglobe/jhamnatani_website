"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Timeline() {
  const locations = [
    // Top / Top-Center
    { name: "PIMPLE SAUDAGAR", top: "11%", left: "48%", isGold: false },
    { name: "PIMPRI CHINCHWAD", top: "18%", left: "53%", isGold: false },
    { name: "MCA STADIUM", top: "18%", left: "67%", isGold: false },

    // Top-Right / Right
    { name: "GODREJ RIVER GREENS", top: "20%", left: "82%", isGold: true },
    { name: "DY PATIL UNIVERSITY", top: "27%", left: "73%", isGold: false },
    { name: "KALYANI NAGAR", top: "32%", left: "69%", isGold: true },
    { name: "SHIVAJINAGAR", top: "37%", left: "58%", isGold: false },
    { name: "KHARADI", top: "43%", left: "65%", isGold: false },
    { name: "VTP EARTH ONE", top: "39%", left: "84%", isGold: false },

    // Mid-Right / Bottom-Right
    { name: "MAGARPATTA CITY", top: "53%", left: "63%", isGold: false },
    { name: "MANJARI", top: "55%", left: "75%", isGold: false },
    { name: "HADAPSAR", top: "62%", left: "63%", isGold: false },
    { name: "GERA WORLD OF JOY", top: "65%", left: "79%", isGold: true },
    { name: "PURANIKS ABITANTE", top: "71%", left: "73%", isGold: true },
    { name: "SOLAPUR HIGHWAY", top: "81%", left: "68%", isGold: false },

    // Bottom / Bottom-Left
    { name: "LULLANAGAR", top: "83%", left: "50%", isGold: false },
    { name: "KATRAJ", top: "69%", left: "51%", isGold: false },
    { name: "SUS ROAD", top: "81%", left: "37%", isGold: false },
    { name: "BAVDHAN", top: "71%", left: "40%", isGold: false },
    { name: "NANDED", top: "62%", left: "35%", isGold: false },

    // Mid-Left / Left
    { name: "GODREJ 24 HINJEWADI", top: "54%", left: "24%", isGold: true },
    { name: "LIFE REPUBLIC (Hinjewadi Phase 3)", top: "47%", left: "17%", isGold: false },
    { name: "HINJAWADI IT PARK", top: "37%", left: "23%", isGold: true },

    // Top-Left
    { name: "MAHALUNGE", top: "35%", left: "34%", isGold: false },
    { name: "WAKAD", top: "29%", left: "35%", isGold: false },
    { name: "BANER", top: "31%", left: "46%", isGold: false },
    { name: "BALEWADI HIGH STREET", top: "22%", left: "29%", isGold: false },
  ];

  return (
    <section
      id="timeline"
      className="w-full bg-[#080a0d] relative border-t border-luxury-border flex items-center justify-center overflow-hidden min-h-[600px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[950px] py-16"
    >
      {/* 1. Radar Concentric Circles Background SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg
          className="w-[1200px] h-[1200px] opacity-40"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Radar Rings */}
          <circle cx="500" cy="500" r="80" stroke="#C1AF86" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="500" cy="500" r="150" stroke="#ffffff" strokeWidth="0.8" opacity="0.15" />
          <circle cx="500" cy="500" r="230" stroke="#ffffff" strokeWidth="0.8" opacity="0.18" />
          <circle cx="500" cy="500" r="310" stroke="#ffffff" strokeWidth="0.8" opacity="0.15" />
          <circle cx="500" cy="500" r="390" stroke="#ffffff" strokeWidth="0.8" opacity="0.12" />
          <circle cx="500" cy="500" r="470" stroke="#ffffff" strokeWidth="0.8" opacity="0.1" />

          {/* Organic River Curve */}
          <path
            d="M 500 500 Q 550 400, 620 300 T 700 150 M 500 500 Q 540 600, 580 700 T 650 850"
            stroke="#ffffff"
            strokeWidth="3"
            opacity="0.15"
            strokeLinecap="round"
          />

          {/* Radar Radial Crosslines */}
          <line x1="500" y1="30" x2="500" y2="970" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
          <line x1="30" y1="500" x2="970" y2="500" stroke="#ffffff" strokeWidth="0.5" opacity="0.08" />
        </svg>
      </div>

      {/* 2. Main Rendered Map Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-none z-0">
        <Image
          src="/assets/image_16.png"
          alt="Radar Map Background"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* 3. Center Building Render & Ravet Pedestal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
        {/* Center Building Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-[180px] h-[220px] sm:w-[220px] sm:h-[260px] md:w-[260px] md:h-[300px]"
        >
          <Image
            src="/assets/image_3.png"
            alt="Ravet Luxury Tower"
            fill
            className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
          />
        </motion.div>

        {/* Base Platform & Text */}
        <div className="relative flex flex-col items-center -mt-4">
          <div className="w-[180px] sm:w-[220px] h-[3px] bg-gradient-to-r from-transparent via-[#C1AF86] to-transparent shadow-[0_0_15px_#C1AF86]" />
          <span className="font-sans text-[14px] sm:text-[16px] tracking-widest text-[#C1AF86] font-medium mt-1">
            Ravet
          </span>
        </div>

        {/* Pune City Centre Marker Label */}
        <div className="absolute -right-24 bottom-4 flex items-center space-x-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C1AF86]/30 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#C1AF86] animate-ping" />
          <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-white font-sans">
            PUNE CITY CENTRE
          </span>
        </div>
      </div>

      {/* 4. Interactive Location Dots & Labels */}
      <div className="absolute inset-0 max-w-7xl mx-auto z-10 pointer-events-none">
        {locations.map((loc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.02 }}
            className="absolute flex items-center space-x-2 translate-x-[-50%] translate-y-[-50%] pointer-events-auto cursor-pointer group"
            style={{ top: loc.top, left: loc.left }}
          >
            {/* Dot indicator */}
            <span
              className={`rounded-full transition-all duration-300 ${
                loc.isGold
                  ? "w-3 h-3 bg-[#C1AF86] shadow-[0_0_10px_#C1AF86] group-hover:scale-125"
                  : "w-2 h-2 bg-white/40 border border-white/60 group-hover:bg-[#C1AF86] group-hover:border-[#C1AF86] group-hover:scale-125"
              }`}
            />

            {/* Location Label */}
            <span
              className={`font-sans text-[10px] sm:text-[11px] md:text-[12px] tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                loc.isGold
                  ? "text-[#C1AF86] font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_8px_#C1AF86]"
                  : "text-white/60 font-normal group-hover:text-white"
              }`}
            >
              {loc.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 5. Bottom-Left Title overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 lg:bottom-16 lg:left-20 z-30 pointer-events-none text-left"
      >
        <h2 className="font-serif text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-tight text-[#C1AF86]">
          The Geography of
          <span className="block text-[#C1AF86] font-serif">Promises Delivered!</span>
        </h2>
      </motion.div>

      {/* 6. Bottom-Right Legend Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-8 right-6 sm:bottom-12 sm:left-auto sm:right-12 lg:bottom-16 lg:right-20 z-30 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 text-left font-sans text-[11px] sm:text-[12px] tracking-wider text-white/70 space-y-2.5 shadow-2xl"
      >
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full border border-white/50 bg-transparent inline-block" />
          <span className="uppercase text-white/70">CENTRAL PUNE</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full border border-white/50 bg-transparent inline-block" />
          <span className="uppercase text-white/70">WEST PUNE</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full border border-white/50 bg-transparent inline-block" />
          <span className="uppercase text-white/70">EAST PUNE</span>
        </div>
        <div className="flex items-center space-x-3 pt-1 border-t border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C1AF86] inline-block shadow-[0_0_8px_#C1AF86]" />
          <span className="uppercase text-[#C1AF86] font-medium">UPCOMING PROJECTS</span>
        </div>
      </motion.div>
    </section>
  );
}

