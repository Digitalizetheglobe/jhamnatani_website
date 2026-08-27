"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  BookFlipReaderModal,
  NewsletterEdition,
  newslettersData,
} from "@/components/monthly-newsletter/monthly-newsletter";

export default function Contact() {
  const [selectedEdition, setSelectedEdition] = useState<NewsletterEdition | null>(null);

  // Featured Edition (July 2026)
  const featuredEdition: NewsletterEdition =
    newslettersData.find((n) => n.id === "july-2026") || newslettersData[0];

  // Right 4 Recent Editions (June, May, April, March 2026)
  const recentEditions: {
    edition: NewsletterEdition;
    img: string;
  }[] = [
    {
      edition: newslettersData.find((n) => n.id === "june-2026") || newslettersData[1],
      img: "/assets/newsletter/covers/june-2026.webp",
    },
    {
      edition: newslettersData.find((n) => n.id === "may-2026") || newslettersData[2],
      img: "/assets/newsletter/covers/may-2026.webp",
    },
    {
      edition: newslettersData.find((n) => n.id === "april-2026") || newslettersData[3],
      img: "/assets/newsletter/covers/april-2026.webp",
    },
    {
      edition: newslettersData.find((n) => n.id === "march-2026") || newslettersData[4],
      img: "/assets/newsletter/covers/march-2026.webp",
    },
  ];

  return (
    <div id="contact" className="w-full flex flex-col bg-white">
      {/* Media & Newsletter Spotlight (Beige/Cream Background) */}
      <section className="w-full bg-[#eeebe7] text-zinc-900 px-6 sm:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 text-left"
          >
            <h2 className="font-serif text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-[#a0725b] font-normal">
              Making Headlines for the Right Reasons
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Left Featured Newsletter Card (7/12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setSelectedEdition(featuredEdition)}
              className="lg:col-span-7 bg-white rounded-[32px] p-6 flex flex-col justify-between group transition-all duration-500 overflow-hidden text-left shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="block w-full h-full flex flex-col justify-between">
                {/* Text + Arrow Row */}
                <div className="flex justify-between items-start space-x-4 mb-6 min-w-0">
                  <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-zinc-700">
                    <span className="text-[#a0725b] font-semibold">{featuredEdition.title}:</span> {featuredEdition.tagline}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300 shrink-0 cursor-pointer shadow-sm">
                    <ArrowRight className="w-5 h-5 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Large Featured Magazine Cover Image with Badge */}
                <div className="relative w-full h-[280px] sm:h-[350px] rounded-[24px] overflow-hidden select-none bg-zinc-950 flex items-center justify-center">
                  <Image
                    src="/assets/newsletter/covers/july-2026.webp"
                    alt={featuredEdition.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-black/75 backdrop-blur-md text-[#C5A880] border border-[#C5A880]/30 shadow-md">
                      {featuredEdition.badge || "Special Edition"} • {featuredEdition.date}
                    </span>
                  </div>

                  {/* Read Flipbook Pill */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#a0725b]/90 text-white text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg group-hover:bg-[#a0725b] transition-colors">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Open Flipbook</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Feed Newsletter Cards (5/12 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {recentEditions.map(({ edition, img }, idx) => (
                <motion.div
                  key={edition.id || idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="w-full"
                >
                  <div
                    onClick={() => setSelectedEdition(edition)}
                    className="bg-white/80 hover:bg-white rounded-[24px] p-4 flex items-center space-x-4 w-full group transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md block"
                  >
                    <div className="flex items-center space-x-4 w-full">
                      {/* Real Newsletter Cover Thumbnail */}
                      <div className="relative w-[110px] h-[80px] rounded-[16px] overflow-hidden flex-shrink-0 bg-zinc-950 select-none shadow-sm border border-zinc-100">
                        <Image
                          src={img}
                          alt={edition.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                      </div>

                      {/* Text Description */}
                      <div className="text-left flex-1 min-w-0 pr-2">
                        <p className="font-sans text-[13px] sm:text-[14px] text-zinc-700 leading-snug">
                          <span className="text-[#a0725b] font-medium">{edition.title} —</span> {edition.tagline}
                        </p>
                      </div>

                      {/* Small Action Button */}
                      <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 stroke-[1.8] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Interactive 3D Flipbook Reading Popup Modal */}
      <AnimatePresence>
        {selectedEdition && (
          <BookFlipReaderModal
            edition={selectedEdition}
            onClose={() => setSelectedEdition(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
