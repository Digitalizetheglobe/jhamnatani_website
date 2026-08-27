"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AwardItem {
  id: number;
  image: string;
}

const ALL_AWARDS: AwardItem[] = [
  { id: 1, image: "/assets/awards/award1.jpeg" },
  { id: 2, image: "/assets/awards/award2.jpeg" },
  { id: 3, image: "/assets/awards/Award3.png" },
  { id: 4, image: "/assets/awards/Award4.png" },
  { id: 5, image: "/assets/awards/Award5.png" },
  { id: 6, image: "/assets/awards/Award6.png" },
  { id: 7, image: "/assets/awards/Award7.png" },
  { id: 8, image: "/assets/awards/Award8.png" },
  { id: 9, image: "/assets/awards/Award9.png" },
  { id: 10, image: "/assets/awards/Award10.png" },
  { id: 11, image: "/assets/awards/Award11.png" },
  { id: 12, image: "/assets/awards/Award12.png" },
  { id: 13, image: "/assets/awards/Award13.png" },
  { id: 14, image: "/assets/awards/Award14.png" },
  { id: 15, image: "/assets/awards/Award15.png" },
  { id: 16, image: "/assets/awards/Award16.png" },
  { id: 17, image: "/assets/awards/Award17.png" },
  { id: 18, image: "/assets/awards/Award18.png" },
  { id: 19, image: "/assets/awards/Award19.png" },
  { id: 20, image: "/assets/awards/Award20.png" },
  { id: 21, image: "/assets/awards/Award21.png" },
  { id: 22, image: "/assets/awards/Award22.png" },
  { id: 23, image: "/assets/awards/Award23.png" },
  { id: 24, image: "/assets/awards/Award24.png" },
  { id: 25, image: "/assets/awards/Award25.png" },
];

export default function AwardsGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const displayedAwards = showAll ? ALL_AWARDS : ALL_AWARDS.slice(0, 6);

  useGSAP(() => {
    gsap.fromTo(
      ".award-card",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef, dependencies: [showAll] });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1B2026] py-20 px-6 sm:px-12 lg:px-16 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 relative z-10">
        
        {/* Awards Responsive Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
          {displayedAwards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              onClick={() => setSelectedAward(award)}
              className="award-card flex flex-col items-center text-center max-w-[340px] w-full group cursor-pointer"
            >
              {/* Capsule rounded image container with luxury hover glow */}
              <div className="w-full aspect-[1.45] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden border border-[#C7A189]/20 shadow-lg relative bg-[#14171C] p-3 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:border-[#C7A189]/60 group-hover:shadow-[0_12px_30px_rgba(199,161,137,0.22)]">
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[50px] lg:rounded-[70px] overflow-hidden bg-black/40">
                  <Image
                    src={award.image}
                    alt={`Award ${award.id}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More / Show Less Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="border border-[#C7A189] text-[#FAF8F6] hover:bg-[#C7A189] hover:text-[#121212] px-9 py-3.5 rounded-full font-sans tracking-widest text-[11px] font-medium uppercase transition-all duration-300 cursor-pointer shadow-md mt-2 active:scale-95"
        >
          {showAll ? "Show Less" : `Explore All`}
        </button>

      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#1B2026] border border-[#C7A189]/30 rounded-2xl p-6 sm:p-10 flex flex-col items-center gap-6 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 text-[#FAF8F6]/70 hover:text-[#FAF8F6] text-2xl font-light w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                ✕
              </button>

              <div className="relative w-full h-[65vh] max-h-[600px]">
                <Image
                  src={selectedAward.image}
                  alt={`Award ${selectedAward.id}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
