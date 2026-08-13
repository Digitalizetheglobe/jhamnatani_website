"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Slide() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 5 slides of 100vw each => total width 500vw.
  // x moves from 0% (0vw) to -80% (-400vw) smoothly as user scrolls through the 600vh pinned section.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[600vh] w-full bg-[#191F26]">
      {/* Sticky Fullscreen Pinned Container (Locked rigidly at top 0px of viewport) */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden z-20">
        <motion.div style={{ x }} className="flex w-[500vw] h-screen">
          
          {/* SLIDE 01: Ace Cup */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#191F26] text-white pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-serif text-[#A0725B] text-5xl sm:text-6xl md:text-7xl font-normal leading-none">
                    01
                  </span>
                  <div>
                    <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl font-light">
                      Ace Cup
                    </h3>
                    <p className="font-sans text-white text-xs sm:text-sm font-semibold mt-0.5">
                      Uniting Communities Through the Love for Cricket
                    </p>
                  </div>
                </div>
                <p className="font-sans text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-3xl font-light">
                  Jhamtani's flagship community cricket tournament that brings together residents of all ages through the spirit of teamwork, healthy competition and unforgettable moments.
                </p>
              </div>

              {/* Bottom Content Area */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-white/10">
                <div className="md:col-span-4 space-y-3 font-sans text-xs sm:text-sm text-zinc-200">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Builds friendships beyond neighbours.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Celebrates teamwork and sportsmanship.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Creates memories that last beyond the tournament.</span>
                  </div>
                </div>

                <div className="md:col-span-8 relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/permission/slide_1.jpg"
                    alt="Ace Cup"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 02: Gala Dinner */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full space-y-4">
              {/* Top Area: Bullets & Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 space-y-3 font-sans text-xs sm:text-sm text-[#2B2B2B]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Celebrates every community as one family.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Creates traditions residents look forward to.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Strengthens bonds through shared celebrations.</span>
                  </div>
                </div>
                <div className="md:col-span-8 relative h-[260px] sm:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/permission/02_Gala_Dinner.jpg"
                    alt="Gala Dinner"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Header */}
              <div className="pt-4 border-t border-[#A0725B]/20">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-serif text-[#A0725B] text-5xl sm:text-6xl md:text-7xl font-normal leading-none">
                    02
                  </span>
                  <div>
                    <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl font-light">
                      Gala Dinner
                    </h3>
                    <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm font-semibold mt-0.5">
                      One Evening, One Community - Jhamtani Family.
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[#2B2B2B]/90 text-xs sm:text-sm leading-relaxed max-w-3xl font-light mt-2">
                  A grand annual celebration that brings every resident together for an unforgettable evening of music, entertainment, food and festivities.
                </p>
              </div>
            </div>
          </div>

          {/* SLIDE 03: Shakti Edge */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full space-y-4">
              {/* Header & Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-6 space-y-2">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-serif text-[#A0725B] text-5xl sm:text-6xl md:text-7xl font-normal leading-none">
                      03
                    </span>
                    <div>
                      <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl font-light">
                        Shakti Edge
                      </h3>
                      <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm font-semibold mt-0.5">
                        Empowering Women. Enabling Leaders.
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-[#2B2B2B]/90 text-xs sm:text-sm leading-relaxed font-light">
                    A dedicated initiative focused on empowering women across Jhamtani through workshops, learning opportunities, leadership development and meaningful conversations.
                  </p>
                </div>

                <div className="md:col-span-6 space-y-2 font-sans text-xs sm:text-sm text-[#2B2B2B]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Encourage continuous learning.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Empower women to lead with confidence.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Create opportunities for growth at every stage.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Upgrades women into higher earning roles.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                    <span>Develops the overall personality and confidence in working women.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative h-[240px] sm:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/permission/03_Shakti_Edge.jpg"
                  alt="Shakti Edge"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* SLIDE 04: Rising Stars */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
            <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch h-full">
                <div className="md:col-span-5 relative min-h-[260px] md:h-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/permission/04_Rising_Stars.jpg"
                    alt="Rising Stars"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif text-[#A0725B] text-5xl sm:text-6xl md:text-7xl font-normal leading-none">
                        04
                      </span>
                      <div>
                        <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide">
                          Rising Stars
                        </h3>
                        <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm font-semibold mt-0.5">
                          Where Dreams Find Their First Believer
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 mt-2 font-sans text-xs sm:text-sm text-[#2B2B2B]/90 leading-relaxed font-light">
                      <p className="italic">
                        Sometimes, the biggest journeys begin with the simplest question: "What do you want to become?"
                      </p>
                      <p>
                        Rising Stars was born from that belief, that every child's dream deserves to be seen, celebrated, and encouraged. What started as a simple thought soon became a promise across Jhamtani communities, inviting children to dream bigger and wear their aspirations with pride
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#A0725B]/20">
                    <div>
                      <h4 className="font-serif text-sm text-[#A0725B] font-light mb-1">The Promise</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#2B2B2B]">
                        <div className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                          <span>To ensure that every child feels seen.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                          <span>Every dream receives its first applause.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                          <span>Every aspiration feels valued.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                          <span>It becomes a part of our culture & community</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <h4 className="font-serif text-xs text-[#A0725B] font-light mb-1">What We Do</h4>
                        <div className="space-y-0.5 text-[10px] text-[#2B2B2B]">
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Recognise every child's aspiration.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Celebrate dreams with personalised kits.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Encourage confidence through meaningful recognition.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Involve families in every child's journey.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Inspire children to dream without limits.</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif text-xs text-[#A0725B] font-light mb-1">Our Impact</h4>
                        <div className="space-y-0.5 text-[10px] text-[#2B2B2B]">
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>600+ dreams recognised till date.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>24+ communities brought together.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Countless aspirations celebrated.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>Stronger parent-child conversations.</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="w-1 h-1 bg-[#A0725B] shrink-0 mt-1 rounded-[1px]" />
                            <span>A culture that nurtures tomorrow's changemakers.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 05: Other Events */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full space-y-4">
              <div className="relative h-[240px] sm:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/permission/05_Other_Events.jpg"
                  alt="Other Events"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-[#A0725B]/20">
                <div className="md:col-span-5 space-y-2">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-serif text-[#A0725B] text-5xl sm:text-6xl md:text-7xl font-normal leading-none">
                      05
                    </span>
                    <div>
                      <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl font-light">
                        Other Events
                      </h3>
                      <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm font-semibold mt-0.5">
                        Big celebrations. Small moments. Endless memories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs text-[#2B2B2B]">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Festival Celebrations</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Yoga & Wellness Sessions</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Health Camps</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Environmental Drives</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Cultural Evenings</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Community Get-Togethers</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Interactive Workshops</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                      <span>Family Activities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
