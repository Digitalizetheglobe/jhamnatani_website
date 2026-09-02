"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const amenitiesList = [
  {
    id: 1,
    name: "Serviced Studio Apartments",
    icon: "serviced-studio-apartments",
  },
  {
    id: 2,
    name: "Dedicated Work Zone",
    icon: "dedicated-work-zone",
  },
  {
    id: 3,
    name: "High-Speed Wi-Fi Connectivity",
    icon: "high-speed-wifi",
  },
  {
    id: 4,
    name: "State-of-the-Art Gym",
    icon: "state-of-the-art-gym",
  },
  {
    id: 5,
    name: "Dining Area with Café",
    icon: "dining-area-with-cafe",
  },
  {
    id: 6,
    name: "Access Control Entry",
    icon: "access-control-entry",
  },
  {
    id: 7,
    name: "24/7 Security",
    icon: "24-7-security",
  },
  {
    id: 8,
    name: "Laundromat Area",
    icon: "laundromat-area",
  },
  {
    id: 9,
    name: "Caretaker Room",
    icon: "caretaker-room",
  },
  {
    id: 10,
    name: "Reception with Waiting Lounge",
    icon: "reception-waiting-lounge",
  },
  {
    id: 11,
    name: "Generator Backup for Lift & Common Amenities",
    icon: "generator-backup",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative w-full bg-[#FFFFFF] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Style block for transitioning black SVG icons to brand gold (#A0725B) on hover */}
        <style dangerouslySetInnerHTML={{__html: `
          .amenity-icon {
            transition: filter 0.3s ease, transform 0.5s ease-out;
          }
          .group:hover .amenity-icon {
            filter: invert(53%) sepia(16%) saturate(1212%) hue-rotate(338deg) brightness(91%) contrast(85%) !important;
          }
        `}} />

        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Features
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] font-light tracking-[0.1em] mt-6 leading-none uppercase"
          >
            Designed for Modern Work and Living.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-[12px] sm:text-[13px] text-[#000] leading-relaxed font-light mt-3 max-w-xl"
          >
            Thoughtfully planned studios and shared spaces create a seamless setting for productivity, convenience and everyday comfort.
          </motion.p>
        </div>

        {/* Amenities Responsive Grid - 5 columns on desktop matching brochure layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 sm:gap-x-12 gap-y-12 lg:gap-y-16 items-start">
          {amenitiesList.slice(0, 10).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.04,
              }}
              className="flex flex-col items-center text-center gap-3 group cursor-pointer w-full"
            >
              {/* Icon Wrapper - centered on top */}
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={`/assets/icon/bizcore/${item.icon}.svg`}
                  alt={item.name}
                  width={56}
                  height={56}
                  quality={95}
                  className="object-contain group-hover:scale-110 group-hover:rotate-2 amenity-icon"
                />
              </div>

              {/* Amenity Name Label - centered on bottom in all caps */}
              <span className="font-sans font-semibold text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.06em] text-[#A0725B] uppercase leading-tight mt-1 max-w-[170px] transition-colors duration-300 group-hover:text-zinc-800">
                {item.name}
              </span>
            </motion.div>
          ))}

          {/* Centered 11th Amenity item */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 flex justify-center mt-2">
            <motion.div
              key={amenitiesList[10].id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="flex flex-col items-center text-center gap-3 group cursor-pointer max-w-[280px]"
            >
              {/* Icon Wrapper */}
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={`/assets/icon/bizcore/${amenitiesList[10].icon}.svg`}
                  alt={amenitiesList[10].name}
                  width={56}
                  height={56}
                  quality={95}
                  className="object-contain group-hover:scale-110 group-hover:rotate-2 amenity-icon"
                />
              </div>

              {/* Amenity Name Label */}
              <span className="font-sans font-semibold text-[11px] sm:text-[12px] lg:text-[13px] tracking-[0.06em] text-[#A0725B] uppercase leading-tight mt-1 max-w-[240px] transition-colors duration-300 group-hover:text-zinc-800">
                {amenitiesList[10].name}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
