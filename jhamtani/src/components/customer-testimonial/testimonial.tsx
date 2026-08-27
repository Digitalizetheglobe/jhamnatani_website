"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  Star,
  Quote,
  Building2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Filter,
} from "lucide-react";

export interface TestimonialVideo {
  id: string;
  youtubeId: string;
  project: string;
  customerName?: string;
  title: string;
  tag: string;
  location: string;
}

export const testimonialsData: TestimonialVideo[] = [
  // Ace Abode
  {
    id: "abode-1",
    youtubeId: "UY-oDGrn8yw",
    project: "Ace Abode",
    customerName: "Homeowner Story",
    title: "Experiencing Unmatched Joy & Comfort at Ace Abode",
    tag: "Life at Ace Abode",
    location: "Ravet, Pune",
  },
  {
    id: "abode-2",
    youtubeId: "L4LOAbcec_U",
    project: "Ace Abode",
    customerName: "Happy Resident",
    title: "Modern Lifestyle & Quality Construction Testimonial",
    tag: "Customer Review",
    location: "Ravet, Pune",
  },
  {
    id: "abode-3",
    youtubeId: "nJCvMafkhi8",
    project: "Ace Abode",
    customerName: "Family Experience",
    title: "Why We Chose Ace Abode For Our Dream Home",
    tag: "Family Delight",
    location: "Ravet, Pune",
  },
  {
    id: "abode-4",
    youtubeId: "kaM5JYbsr4Q",
    project: "Ace Abode",
    customerName: "Community Member",
    title: "Smooth Handover & Transparent Process with Jhamtani",
    tag: "Trust & Transparency",
    location: "Ravet, Pune",
  },
  {
    id: "abode-5",
    youtubeId: "2hFh6LId0Xc",
    project: "Ace Abode",
    customerName: "Proud Resident",
    title: "Amenities & Community Living at Its Best",
    tag: "Living Experience",
    location: "Ravet, Pune",
  },

  // Ace Augusta
  {
    id: "augusta-1",
    youtubeId: "rurU8sdFqWk",
    project: "Ace Augusta",
    customerName: "Augusta Resident",
    title: "Elegance and Architecture That Exceeded Our Expectations",
    tag: "Architectural Excellence",
    location: "Koregaon Park NX, Pune",
  },
  {
    id: "augusta-2",
    youtubeId: "MbNT30EC3gU",
    project: "Ace Augusta",
    customerName: "Satisfied Buyer",
    title: "Peaceful Living in the Heart of the City",
    tag: "Prime Location",
    location: "Koregaon Park NX, Pune",
  },
  {
    id: "augusta-3",
    youtubeId: "3FXRbcI2A24",
    project: "Ace Augusta",
    customerName: "Homeowner",
    title: "Timely Delivery and Uncompromised Build Quality",
    tag: "Promises Delivered",
    location: "Koregaon Park NX, Pune",
  },
  {
    id: "augusta-4",
    youtubeId: "j1nWAAYBfiU",
    project: "Ace Augusta",
    customerName: "Happy Family",
    title: "A Truly Premium Residential Experience",
    tag: "Luxury Living",
    location: "Koregaon Park NX, Pune",
  },
  {
    id: "augusta-5",
    youtubeId: "xRDM9bzFWoQ",
    project: "Ace Augusta",
    customerName: "Resident Story",
    title: "From Booking to Possession: A Seamless Journey",
    tag: "Customer Care",
    location: "Koregaon Park NX, Pune",
  },

  // Ace Aurum
  {
    id: "aurum-1",
    youtubeId: "xpbrtv7LlHU",
    project: "Ace Aurum",
    customerName: "Aurum Homeowner",
    title: "Celebrating Our New Life at Ace Aurum",
    tag: "Dream Home",
    location: "Ravet, Pune",
  },
  {
    id: "aurum-2",
    youtubeId: "TS_QLTI6UaU",
    project: "Ace Aurum",
    customerName: "Resident Review",
    title: "Spacious Layouts and Wonderful Community Vibes",
    tag: "Spacious Design",
    location: "Ravet, Pune",
  },
  {
    id: "aurum-3",
    youtubeId: "a5m8sK9Xv2Y",
    project: "Ace Aurum",
    customerName: "Family Testimonial",
    title: "Safe, Serene, and Well-Connected Neighborhood",
    tag: "Family First",
    location: "Ravet, Pune",
  },
  {
    id: "aurum-4",
    youtubeId: "I8g_WGqBxBI",
    project: "Ace Aurum",
    customerName: "Homeowner Story",
    title: "Exceptional Value and Craftsmanship by Jhamtani",
    tag: "Quality Craftsmanship",
    location: "Ravet, Pune",
  },
  {
    id: "aurum-5",
    youtubeId: "Z4WiEEOKjwo",
    project: "Ace Aurum",
    customerName: "Delighted Buyer",
    title: "Top-Tier Amenities & Clubhouse Experience",
    tag: "Clubhouse & Lifestyle",
    location: "Ravet, Pune",
  },

  // Vision Ace
  {
    id: "vision-1",
    youtubeId: "q932CrNjQTg",
    project: "Vision Ace",
    customerName: "Vision Ace Resident",
    title: "World-Class Infrastructure and Thoughtful Design",
    tag: "Modern Lifestyle",
    location: "Tathawade, Pune",
  },
  {
    id: "vision-2",
    youtubeId: "giU-9U4y2yo",
    project: "Vision Ace",
    customerName: "Satisfied Buyer",
    title: "Building Lasting Relationships with Jhamtani",
    tag: "Developer Trust",
    location: "Tathawade, Pune",
  },
  {
    id: "vision-3",
    youtubeId: "lJ3fDVfCljA",
    project: "Vision Ace",
    customerName: "Happy Homeowner",
    title: "Best Investment for Our Family's Future",
    tag: "High Value Asset",
    location: "Tathawade, Pune",
  },
  {
    id: "vision-4",
    youtubeId: "fZ5HvubbKos",
    project: "Vision Ace",
    customerName: "Resident Story",
    title: "Spacious Living with Lush Green Surroundings",
    tag: "Green Community",
    location: "Tathawade, Pune",
  },
  {
    id: "vision-5",
    youtubeId: "M_-Gx0rWqKE",
    project: "Vision Ace",
    customerName: "Family Testimonial",
    title: "Flawless Customer Service and Support Throughout",
    tag: "Smooth Experience",
    location: "Tathawade, Pune",
  },
  {
    id: "vision-6",
    youtubeId: "rmwIodl0rQw",
    project: "Vision Ace",
    customerName: "Proud Resident",
    title: "A Community Where Neighbors Become Family",
    tag: "Vibrant Community",
    location: "Tathawade, Pune",
  },

  // Ace Almighty
  {
    id: "almighty-1",
    youtubeId: "AERxZAeUqh8",
    project: "Ace Almighty",
    customerName: "Almighty Resident",
    title: "Iconic Living and Supreme Location Advantage",
    tag: "Iconic Landmark",
    location: "Moshi, Pune",
  },
  {
    id: "almighty-2",
    youtubeId: "qjrSJZ53tas",
    project: "Ace Almighty",
    customerName: "Homeowner",
    title: "Delivering Everything Promised and Beyond",
    tag: "100% Commitment",
    location: "Moshi, Pune",
  },
  {
    id: "almighty-3",
    youtubeId: "Kw8-H0tGtuU",
    project: "Ace Almighty",
    customerName: "Happy Resident",
    title: "Unmatched Build Standards and Lifestyle Comfort",
    tag: "Build Quality",
    location: "Moshi, Pune",
  },

  // Jhamtani Impressions
  {
    id: "impressions-1",
    youtubeId: "U_11R-csZ8c",
    project: "Jhamtani Impressions",
    customerName: "Legacy Resident",
    title: "Our Pride and Joy: Living at Jhamtani Impressions",
    tag: "Legacy Living",
    location: "Pune",
  },
  {
    id: "impressions-2",
    youtubeId: "FNA_-yGUQu4",
    project: "Jhamtani Impressions",
    customerName: "Long-term Homeowner",
    title: "Years of Trust and Flawless Maintenance",
    tag: "Long-Term Value",
    location: "Pune",
  },
  {
    id: "impressions-3",
    youtubeId: "PbhPNwEfJKQ",
    project: "Jhamtani Impressions",
    customerName: "Resident Testimonial",
    title: "Timeless Quality and Warm Neighborhood Bonding",
    tag: "Timeless Architecture",
    location: "Pune",
  },
  {
    id: "impressions-4",
    youtubeId: "-KXOiPY-HcU",
    project: "Jhamtani Impressions",
    customerName: "Satisfied Buyer",
    title: "Why We Still Recommend Jhamtani to Everyone",
    tag: "Customer Endorsement",
    location: "Pune",
  },

  // Ace Aura
  {
    id: "aura-1",
    youtubeId: "m0vZlucUgrQ",
    project: "Ace Aura",
    customerName: "Aura Resident",
    title: "Pure Delight in Every Corner of Our Home",
    tag: "Delightful Living",
    location: "Ravet, Pune",
  },
  {
    id: "aura-2",
    youtubeId: "Mhr4z3XlbIg",
    project: "Ace Aura",
    customerName: "Homeowner Review",
    title: "A Serene Lifestyle Backed by Jhamtani's Guarantee",
    tag: "Peace of Mind",
    location: "Ravet, Pune",
  },
];

const projectsFilterList = [
  "All",
  "Ace Abode",
  "Ace Augusta",
  "Ace Aurum",
  "Vision Ace",
  "Ace Almighty",
  "Jhamtani Impressions",
  "Ace Aura",
];

export default function CustomerTestimonialsComponent() {
  const [selectedProject, setSelectedProject] = useState<string>("All");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const filteredVideos =
    selectedProject === "All"
      ? testimonialsData
      : testimonialsData.filter((item) => item.project === selectedProject);

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none pb-28">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Customer Testimonials Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 backdrop-blur-md mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#C5A880] uppercase">
              HOME &nbsp;/&nbsp; CUSTOMER TESTIMONIALS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[36px] sm:text-[52px] lg:text-[64px] text-[#C5A880] tracking-[0.15em] leading-none uppercase"
          >
            CUSTOMER TESTIMONIALS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Real Stories of Joy, Trust &amp; Community from 5,000+ Happy Families
          </motion.p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
        
        {/* Project Filter Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-[#A0725B]/20">
          {projectsFilterList.map((proj) => {
            const isSelected = selectedProject === proj;
            const count =
              proj === "All"
                ? testimonialsData.length
                : testimonialsData.filter((i) => i.project === proj).length;

            return (
              <button
                key={proj}
                onClick={() => setSelectedProject(proj)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#A0725B] text-white shadow-lg scale-105"
                    : "bg-[#F3ECE4] text-zinc-700 hover:bg-[#EAE0D5] hover:text-zinc-950 border border-[#A0725B]/20"
                }`}
              >
                <span>{proj}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-zinc-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Video Testimonials Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredVideos.map((item) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl bg-white border border-[#A0725B]/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Video Thumbnail Box */}
                  <div
                    onClick={() => setActiveVideoId(item.youtubeId)}
                    className="relative w-full aspect-[16/10] bg-black cursor-pointer overflow-hidden group/thumb"
                  >
                    {/* Thumbnail Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700 opacity-90 group-hover/thumb:opacity-100"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Project Tag & Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#14171C]/80 backdrop-blur-md text-[#C5A880] border border-[#C5A880]/30 shadow-md">
                        {item.project}
                      </span>
                    </div>

                    {/* Watch Video indicator */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-[10px] text-zinc-300 font-medium tracking-wider uppercase bg-black/60 px-2.5 py-1 rounded-md">
                      <span>Watch Story</span>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A0725B]">
                        {item.tag}
                      </span>

                      <h3 className="font-serif text-lg sm:text-xl text-zinc-900 font-normal leading-snug group-hover:text-[#A0725B] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-light">
                        <Building2 className="w-3.5 h-3.5 text-[#A0725B]" />
                        <span>{item.location}</span>
                      </div>

                      <button
                        onClick={() => setActiveVideoId(item.youtubeId)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#A0725B] hover:text-zinc-950 transition-colors cursor-pointer uppercase tracking-wider"
                      >
                        <span>Play</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4. Luxury Community Trust Banner */}
        <div className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1C202A] via-[#111622] to-[#0A0D14] text-white border border-[#C5A880]/30 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A0725B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C5A880]">
                JHAMTANI FAMILY
              </span>
            </div>

            <h3 className="font-serif font-light text-3xl sm:text-4xl text-white">
              Over 5,000+ Happy Families Call Jhamtani Home
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
              Every home delivered represents a fulfilled promise of luxury, architecture, and enduring community bonding across Pune.
            </p>
          </div>
        </div>

      </div>

      {/* 5. Immersive Video Modal Player */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoId(null)}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#C5A880]/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#A0725B] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Iframe Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Customer Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
