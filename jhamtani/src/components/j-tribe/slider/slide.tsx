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
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#191F26] text-white px-6 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-[100px] pb-8 flex flex-col overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col my-auto gap-6 md:gap-8 lg:gap-12">
              {/* Header */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <span className="font-serif text-[#A0725B] text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-normal leading-none tracking-tight">
                    01
                  </span>
                  <div className="space-y-1 md:space-y-1.5">
                    <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                      Ace Cup
                    </h3>
                    <p className="font-sans text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
                      Uniting Communities Through the Love for Cricket
                    </p>
                  </div>
                </div>
                <p className="font-sans text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-4xl font-light">
                  Jhamtani's flagship community cricket tournament that brings together residents of all ages through<br className="hidden md:block"/>
                  the spirit of teamwork, healthy competition and unforgettable moments.
                </p>
              </div>

              {/* Bottom Content Area */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="md:col-span-4 space-y-4 md:space-y-5 font-sans text-xs sm:text-sm md:text-[15px] text-zinc-300 font-light">
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Builds friendships<br className="hidden sm:block" />beyond neighbours.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Celebrates teamwork<br className="hidden sm:block" />and sportsmanship.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Creates memories that<br className="hidden sm:block" />last beyond the<br className="hidden sm:block" />tournament.</span>
                  </div>
                </div>

                <div className="md:col-span-8 relative h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] max-h-[400px] w-full">
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
          {/* SLIDE 02: Gala Dinner */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] px-6 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-[100px] pb-8 flex flex-col overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col my-auto gap-6 md:gap-8 lg:gap-12">
              
              {/* Top Area: Bullets & Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="md:col-span-4 space-y-4 md:space-y-5 font-sans text-xs sm:text-sm md:text-[15px] text-[#2B2B2B] font-light">
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Celebrates every<br className="hidden sm:block" />community as one family.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Creates traditions<br className="hidden sm:block" />residents look forward to.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Strengthens bonds<br className="hidden sm:block" />through shared<br className="hidden sm:block" />celebrations.</span>
                  </div>
                </div>
                
                <div className="md:col-span-8 relative h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] max-h-[400px] w-full">
                  <Image
                    src="/assets/permission/02_Gala_Dinner.jpg"
                    alt="Gala Dinner"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Header */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <span className="font-serif text-[#A0725B] text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-normal leading-none tracking-tight">
                    02
                  </span>
                  <div className="space-y-1 md:space-y-1.5">
                    <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                      Gala Dinner
                    </h3>
                    <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm md:text-base font-semibold tracking-wide">
                      One Evening, One Community &ndash; Jhamtani Family.
                    </p>
                  </div>
                </div>
                <p className="font-sans text-[#2B2B2B]/90 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-4xl font-light">
                  A grand annual celebration that brings every resident together for an unforgettable evening of music,<br className="hidden md:block"/>
                  entertainment, food and festivities.
                </p>
              </div>
              
            </div>
          </div>

          {/* SLIDE 03: Shakti Edge */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] px-6 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-[100px] pb-8 flex flex-col overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col my-auto gap-6 md:gap-8 lg:gap-12">
              
              {/* Header & Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                <div className="md:col-span-6 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <span className="font-serif text-[#A0725B] text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-normal leading-none tracking-tight">
                      03
                    </span>
                    <div className="space-y-1 md:space-y-1.5">
                      <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                        Shakti Edge
                      </h3>
                      <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm md:text-base font-semibold tracking-wide">
                        Empowering Women.<br className="hidden sm:block" />Enabling Leaders.
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-[#2B2B2B]/90 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-lg font-light">
                    A dedicated initiative focused on empowering women<br className="hidden md:block"/>
                    across Jhamtani through workshops, learning opportunities,<br className="hidden md:block"/>
                    leadership development and meaningful conversations.
                  </p>
                </div>

                <div className="md:col-span-6 space-y-3 md:space-y-4 font-sans text-xs sm:text-sm md:text-[15px] text-[#2B2B2B] font-light">
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Encourage continuous learning.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Empower women to lead with confidence.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Create opportunities for growth at every stage.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Upgrades women into higher earning roles.</span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                    <span className="leading-relaxed">Develops the overall personality and confidence in working women.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] max-h-[400px] w-full">
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
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] px-6 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-[90px] pb-4 md:pb-6 flex flex-col overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col my-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-stretch">
                
                {/* Left Image */}
                <div className="md:col-span-5 relative h-[25vh] md:h-auto min-h-[250px] w-full">
                  <Image
                    src="/assets/permission/04_Rising_Stars.jpg"
                    alt="Rising Stars"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Right Content */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-3 lg:space-y-5 py-1">
                  
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                      <span className="font-serif text-[#A0725B] text-[70px] sm:text-[80px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-normal leading-none tracking-tight">
                        04
                      </span>
                      <div className="space-y-1">
                        <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-wide">
                          Rising Stars
                        </h3>
                        <p className="font-sans text-[#2B2B2B] text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] font-bold tracking-wide">
                          Where Dreams Find Their First Believer
                        </p>
                      </div>
                    </div>

                    <div className="mt-1 lg:mt-2 space-y-1 lg:space-y-1.5 font-sans text-[11px] sm:text-xs md:text-[12px] lg:text-[13px] text-[#2B2B2B]/90 leading-relaxed font-light pr-4">
                      <p>
                        Sometimes, the biggest journeys begin with the simplest question:<br className="hidden lg:block"/>
                        "What do you want to become?"
                      </p>
                      <p>
                        Rising Stars was born from that belief, that every child's dream deserves to be seen, celebrated,<br className="hidden xl:block"/>
                        and encouraged. What started as a simple thought soon became a promise across Jhamtani<br className="hidden xl:block"/>
                        communities, inviting children to dream bigger and wear their aspirations with pride
                      </p>
                    </div>
                  </div>

                  {/* The Promise */}
                  <div className="space-y-1 lg:space-y-1.5">
                    <h4 className="font-serif text-base md:text-lg lg:text-xl text-[#A0725B] font-light mb-1">The Promise</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 text-[11px] md:text-xs lg:text-[13px] text-[#2B2B2B]">
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                        <span>To ensure that every child feels seen.</span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                        <span>Every dream receives its first applause.</span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                        <span>Every aspiration feels valued.</span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                        <span>It becomes a part of our culture & community</span>
                      </div>
                    </div>
                  </div>

                  {/* What We Do & Our Impact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 pt-0.5">
                    <div className="space-y-1 lg:space-y-1.5">
                      <h4 className="font-serif text-base md:text-lg lg:text-xl text-[#A0725B] font-light mb-1">What We Do</h4>
                      <div className="space-y-0.5 lg:space-y-1 text-[11px] md:text-xs lg:text-[13px] text-[#2B2B2B]">
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Recognise every child's aspiration.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Celebrate dreams with personalised kits.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span className="leading-snug">Encourage confidence through meaningful<br className="hidden lg:block"/>recognition.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Involve families in every child's journey.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Inspire children to dream without limits.</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 lg:space-y-1.5">
                      <h4 className="font-serif text-base md:text-lg lg:text-xl text-[#A0725B] font-light mb-1">Our Impact</h4>
                      <div className="space-y-0.5 lg:space-y-1 text-[11px] md:text-xs lg:text-[13px] text-[#2B2B2B]">
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>600+ dreams recognised till date.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>24+ communities brought together.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Countless aspirations celebrated.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span>Stronger parent-child conversations.</span>
                        </div>
                        <div className="flex items-start gap-1.5 lg:gap-2">
                          <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#A0725B] shrink-0 mt-1.5 rounded-[1px]" />
                          <span className="leading-snug">A culture that nurtures tomorrow's<br className="hidden lg:block"/>changemakers.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 05: Other Events */}
          <div className="w-screen min-w-[100vw] h-screen shrink-0 bg-[#EFECE6] text-[#2B2B2B] px-6 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-[100px] pb-8 flex flex-col overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col my-auto gap-8 md:gap-10 lg:gap-14">
              <div className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] max-h-[500px] w-full">
                <Image
                  src="/assets/permission/05_Other_Events.jpg"
                  alt="Other Events"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 space-y-3 md:space-y-4">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <span className="font-serif text-[#A0725B] text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-normal leading-none tracking-tight">
                      05
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-serif text-[#A0725B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                        Other Events
                      </h3>
                      <p className="font-sans text-[#2B2B2B] text-xs sm:text-sm md:text-base font-semibold tracking-wide">
                        Big celebrations.<br className="hidden sm:block" />Small moments. Endless memories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 font-sans text-xs sm:text-sm md:text-[15px] text-[#2B2B2B] font-light">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Festival Celebrations</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Yoga & Wellness Sessions</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Health Camps</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Environmental Drives</span>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Cultural Evenings</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Community Get-Togethers</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
                      <span>Interactive Workshops</span>
                    </div>
                    <div className="flex items-start gap-3 md:gap-4">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A0725B] shrink-0 mt-1 md:mt-1.5 rounded-[1px]" />
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
