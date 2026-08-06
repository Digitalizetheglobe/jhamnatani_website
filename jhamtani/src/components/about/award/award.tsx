"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AwardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Premium masked text lines reveal
    gsap.fromTo(
      ".award-animate",
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.0,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. Parallax background shifting on scroll
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "center 45%" },
      {
        backgroundPosition: "center 55%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[url('/assets/about/award.png')] bg-cover bg-center bg-no-repeat flex items-center justify-start relative overflow-hidden select-none"
    >
      {/* Solid background overlay with color #1B2026 */}
      <div className="absolute inset-0 bg-[#1B2026]/50 pointer-events-none z-0" />

      {/* Gradient overlay for high readability on the left column using #1B2026 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B2026]/85 via-[#1B2026]/40 to-transparent pointer-events-none z-0" />

      {/* Bottom blur and fade transition to blend seamlessly with the next #1B2026 section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1B2026] via-[#1B2026]0 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 grid grid-cols-12 gap-5 items-center z-10 relative">
        <div className="col-span-12 lg:col-span-6 space-y-2 text-left">
          
          {/* Main Titles with overflow-hidden mask wrappers */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <h2 className="award-animate font-serif text-[64px] md:text-[84px] leading-[0.95] text-[#9A6B4F] font-normal tracking-tight select-none">
                Awards
              </h2>
            </div>
            <div className="overflow-hidden">
              <h3 className="award-animate font-serif text-[28px] md:text-[38px] leading-tight text-[#9A6B4F] font-normal select-none">
                recognise excellence.
              </h3>
            </div>
            <div className="overflow-hidden">
              <h4 className="award-animate font-serif text-[24px] md:text-[32px] leading-tight text-[#9A6B4F] font-normal select-none">
                Reputation recognises consistency.
              </h4>
            </div>
          </div>

          {/* Paragraph Text with fade transition */}
          <div className="overflow-hidden">
            <p className="award-animate font-sans text-[15px] md:text-[16px] leading-relaxed text-[#FAF8F6]/80 max-w-lg font-light tracking-wide select-none">
              They are milestones we're proud of, but never the destination we plan for. 
              Because the recognition we value the most cannot be placed on a shelf. 
              It lives in every customer who chooses to trust us again.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
