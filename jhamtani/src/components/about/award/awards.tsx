"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AwardItem {
  image: string;
  line1: string;
  line2: string;
}

const awardsList: AwardItem[] = Array(6).fill({
  image: "/assets/about/awards.png",
  line1: "recognise excellence.",
  line2: "Reputation recognises consistency."
});

export default function AwardsGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered zoom-fade-up cards entrance
    gsap.fromTo(
      ".award-card",
      { y: 50, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1B2026] py-24 px-8 xl:px-16 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 relative z-10">
        
        {/* Awards 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
          {awardsList.map((award, idx) => (
            <div
              key={idx}
              className="award-card flex flex-col items-center text-center max-w-[340px] w-full group cursor-pointer"
            >
              {/* Capsule rounded image container with group hover transformations */}
              <div className="w-full aspect-[1.5] rounded-[90px] overflow-hidden border border-[#C7A189]/15 shadow-md relative bg-[#18181A] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05] group-hover:border-[#C7A189]/50 group-hover:shadow-[0_15px_35px_rgba(199,161,137,0.2)]">
                <img
                  src={award.image}
                  alt={award.line1}
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />
              </div>

              {/* Award description text with group hover color shifts */}
              <div className="mt-5 space-y-1">
                <p className="font-serif text-[17px] md:text-[18px] text-[#C7A189] font-normal leading-snug select-none transition-all duration-300 group-hover:text-[#FAF8F6]">
                  {award.line1}
                </p>
                <p className="font-serif text-[17px] md:text-[18px] text-[#C7A189] font-normal leading-snug select-none transition-all duration-300 group-hover:text-[#FAF8F6]">
                  {award.line2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Outline Button */}
        <button className="award-card border border-[#C7A189] text-[#FAF8F6] hover:bg-[#C7A189] hover:text-[#121212] px-8 py-3 rounded-full font-sans tracking-widest text-[11px] font-medium uppercase transition-all duration-300 cursor-pointer shadow-sm mt-4">
          Explore More
        </button>

      </div>
    </section>
  );
}
