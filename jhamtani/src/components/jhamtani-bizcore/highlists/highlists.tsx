"use client";

import Image from "next/image";

const highlights = [
  {
    id: 1,
    title: "Demand-Led Location",
    desc: "Close to Koregaon Park NX, Mundhwa and key employment and lifestyle hubs.",
    image: "/assets/jhamtani-elevate/Built tall for those who think higher.webp",
    alt: "Operated by Colive - Jhamtani Bizcore",
  },
  {
    id: 2,
    title: "Professionally Managed",
    desc: "Operated by Colive for a seamless resident and property-management experience.",
    image: "/assets/jhamtani-elevate/Where work meets rest, seamlessly.webp",
    alt: "Prime Koregaon Park NX Hub - Jhamtani Bizcore",
  },
  {
    id: 3,
    title: "Designed for Today’s Professionals",
    desc: "Compact studios, work-friendly spaces and shared conveniences suit evolving urban lifestyles.",
    image: "/assets/jhamtani-elevate/Dine under the open sky.webp",
    alt: "Integrated Work & Lifestyle Amenities - Jhamtani Bizcore",
  },
];

export default function Highlists() {
  return (
    <section className="relative w-full bg-[#EEEBE7] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 lg:mb-20">
          <h2 className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide">
            Why Invest
          </h2>
          <p className="font-sans text-[12px] sm:text-[13px] text-[#000] font-light tracking-[0.1em] mt-6 leading-none">
            Built Around Urban Demand.
          </p>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#000] leading-relaxed font-light mt-3 max-w-xl">
            A strategic location, professional management and a format designed for today’s working professionals shape the BizCore proposition.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

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
