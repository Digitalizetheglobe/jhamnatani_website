"use client";

import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "First Impressions Matter",
    desc: "The grand entrance lobby finished in Italian marble seals the deal.",
    image: "/assets/biz-one/img-01.png",
    alt: "First Impressions Matter - Jhamtani Biz One Grand Lobby",
  },
  {
    id: 2,
    title: "Make Room for Productivity",
    desc: "Achieve more with meeting & conference rooms, breakout spaces, open-air 6th floor deck.",
    image: "/assets/biz-one/img-02.png",
    alt: "Make Room for Productivity - Jhamtani Biz One Open Deck & Spaces",
  },
  {
    id: 3,
    title: "A Winning Pair",
    desc: "Dual-street exposure along with double-height retail frontage work twice as hard for you.",
    image: "/assets/biz-one/img-03.png",
    alt: "A Winning Pair - Jhamtani Biz One Dual-Street Exposure Retail",
  },
];

export default function Highlists() {
  return (
    <section className="relative w-full bg-[#EEEBE7] py-20 lg:py-28 text-zinc-900 select-none">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16">
        {/* Header Block from 3rd Fold */}
        <div className="max-w-3xl text-left mb-16 lg:mb-20">
          <h2 className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide">
            Project Highlights
          </h2>
          <p className="font-sans text-[13px] sm:text-[14px] text-[#000] font-medium tracking-[0.08em] mt-6 leading-none uppercase">
            Crafted For a Distinctive Edge.
          </p>
          <p className="font-sans text-[14px] sm:text-[15px] text-zinc-700 leading-relaxed font-light mt-3 max-w-xl">
            Strategic location complemented by smartly-designed amenities form a winning combination.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-5 items-stretch">
          {highlights.map((item) => (
            <div key={item.id} className="flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Card Image Area with overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority
                  quality={95}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Vignette Overlay for title legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Vertical label inside card image */}
                <div 
                  className="absolute right-3 bottom-6 z-10 flex items-center justify-center pointer-events-none select-none"
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)",
                  }}
                >
                  <span className="text-[8px] tracking-[0.2em] text-white/50 font-sans uppercase font-medium">
                    Artistic Impression
                  </span>
                </div>

                {/* Overlay Title */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-serif font-light text-[22px] sm:text-[26px] lg:text-[28px] text-white leading-tight tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Description Area */}
              <div className="bg-white p-6 sm:p-8 flex-grow flex flex-col justify-start">
                <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-zinc-600 font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
