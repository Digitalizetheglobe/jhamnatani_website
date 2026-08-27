"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Building2,
  Home,
  Sparkles,
  Search,
  Check,
} from "lucide-react";

interface MahaReraProject {
  id: number;
  title: string;
  location: string;
  type: "Residential" | "Commercial" | "Studio";
  reraNo: string;
  pdfUrl: string;
  image: string;
  logo: string;
  description: string;
  projectLink: string;
}

const reraProjects: MahaReraProject[] = [
  {
    id: 1,
    title: "ACE Ayodhya",
    location: "Thergaon, Pune",
    type: "Residential",
    reraNo: "PR1261012600416",
    pdfUrl: "/assets/maha-rera/ace-ayodha.pdf",
    image: "/assets/ace-ayodha/hero.webp",
    logo: "/assets/ace-ayodha/logo_1.webp",
    description: "2 & 3 BHK Premium Residences in Thergaon",
    projectLink: "/ace-ayodha",
  },
  {
    id: 2,
    title: "ACE Abundance",
    location: "Mundhwa, Pune",
    type: "Residential",
    reraNo: "P52100054743",
    pdfUrl: "/assets/maha-rera/Ace-Abundance.pdf",
    image: "/assets/pojetcts/Abundacne_Elevaion.webp",
    logo: "/assets/pojetcts/Abundacne logo.webp",
    description: "Signature Statement of Luxury Living in Mundhwa",
    projectLink: "/ace-abundance",
  },
  {
    id: 3,
    title: "ACE Villas",
    location: "Koregaon Park NX, Pune",
    type: "Residential",
    reraNo: "P52100048327",
    pdfUrl: "/assets/maha-rera/ACE-VILLAS.pdf",
    image: "/assets/pojetcts/ace_villas.webp",
    logo: "/assets/pojetcts/ace_villas_logo.webp",
    description: "Bespoke Ultra-Luxury Estate Villas",
    projectLink: "/ace-villas",
  },
  {
    id: 4,
    title: "ACE Atmosphere",
    location: "Upper Ravet, Pune",
    type: "Residential",
    reraNo: "P52100051778",
    pdfUrl: "/assets/maha-rera/ACE-ATMOSPHERE.pdf",
    image: "/assets/pojetcts/ace_atmosphere.webp",
    logo: "/assets/pojetcts/ace_atmosphere_logo.webp",
    description: "Pune’s First 24×7 Active Lifestyle Concept",
    projectLink: "/ace-atmosphere",
  },
  {
    id: 5,
    title: "ACE Aster",
    location: "Ravet, Pune",
    type: "Residential",
    reraNo: "P52100077581",
    pdfUrl: "/assets/maha-rera/Ace-Aster.pdf",
    image: "/assets/pojetcts/ace_aster.webp",
    logo: "/assets/pojetcts/aster_logo.webp",
    description: "Bespoke Contemporary Family Residences in Ravet",
    projectLink: "/ace-aster",
  },
  {
    id: 6,
    title: "Jhamtani Bizcore",
    location: "Koregaon Park NX, Pune",
    type: "Studio",
    reraNo: "P52100054261",
    pdfUrl: "/assets/maha-rera/Jhamtani-Bizcore.pdf",
    image: "/assets/pojetcts/bizcore_image.webp",
    logo: "/assets/pojetcts/bizcore_logo.webp",
    description: "Serviced Studio Apartments & Commercial Hub",
    projectLink: "/jhamtani-bizcore",
  },
  {
    id: 7,
    title: "Jhamtani Elevate",
    location: "Mundhwa, Pune",
    type: "Studio",
    reraNo: "P52100078567",
    pdfUrl: "/assets/maha-rera/Jhamtani-Elevate.pdf",
    image: "/assets/pojetcts/jhamtani-elevate.webp",
    logo: "/assets/pojetcts/Elevate logo.webp",
    description: "Modern Co-Living and Luxury Residential Spaces",
    projectLink: "/jhamtani-elevate",
  },
  {
    id: 8,
    title: "Jhamtani SpaceBiz",
    location: "Baner, Pune",
    type: "Commercial",
    reraNo: "P52100054460",
    pdfUrl: "/assets/maha-rera/Jhamtani-SpaceBiz.pdf",
    image: "/assets/pojetcts/jhamtani-spacebiz.webp",
    logo: "/assets/pojetcts/Spacebiz logo.webp",
    description: "State-of-the-Art Commercial Hub & Showrooms",
    projectLink: "/jhamtani-spacebiz",
  },
];

export default function MahaReraComponent() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial" | "Studio">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyRera = (id: number, reraNo: string) => {
    navigator.clipboard.writeText(reraNo);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredProjects = reraProjects.filter((item) => {
    const matchesFilter = filter === "All" || item.type === filter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.reraNo.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-32">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[450px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani MahaRERA Certifications Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Overlay for readability and premium look */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">


          <h1 className="font-serif font-light text-[42px] sm:text-[58px] lg:text-[70px] text-[#C5A880] tracking-[0.2em] leading-none uppercase">
            MahaRERA
          </h1>

          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed">
            Official MahaRERA Registrations &amp; Compliance Certificates
          </p>
        </div>
      </div>

      {/* 2. Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
        
        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 sm:mb-14">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">100% Transparency</p>
              <p className="text-[12px] text-zinc-600 font-light">All projects registered with MahaRERA</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">Official PDF Documents</p>
              <p className="text-[12px] text-zinc-600 font-light">Direct download of verified certificates</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">Govt. Verification</p>
              <p className="text-[12px] text-zinc-600 font-light">MahaRERA online portal verified</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-8 mb-12 sm:mb-14 border-b border-[#A0725B]/20">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {(["All", "Residential", "Commercial", "Studio"] as const).map((type) => {
              const count =
                type === "All"
                  ? reraProjects.length
                  : reraProjects.filter((i) => i.type === type).length;
              const isActive = filter === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#A0725B] border-[#A0725B] text-white shadow-md shadow-[#A0725B]/20 font-semibold"
                      : "border-[#A0725B]/30 text-zinc-700 bg-white/70 hover:bg-[#A0725B]/10 hover:border-[#A0725B] hover:text-[#A0725B]"
                  }`}
                >
                  {type === "Residential" && <Home className="w-3.5 h-3.5" />}
                  {type === "Commercial" && <Building2 className="w-3.5 h-3.5" />}
                  {type === "Studio" && <Sparkles className="w-3.5 h-3.5" />}
                  {type === "All" && <Sparkles className="w-3.5 h-3.5" />}
                  <span>{type === "All" ? "All Projects" : type}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#A0725B]/15 text-[#A0725B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
            <input
              type="text"
              placeholder="Search by project or RERA no..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/80 border border-[#A0725B]/30 rounded-full focus:outline-none focus:border-[#A0725B] focus:ring-1 focus:ring-[#A0725B] text-zinc-800 placeholder:text-zinc-400 transition-all"
            />
          </div>
        </div>

        {/* 3. MahaRERA Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.05,
                }}
                className="group flex flex-col bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 justify-between"
              >
                <div>
                  {/* Visual Header with Building & Brand Logo */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-200">
                    <Image
                      src={item.image}
                      alt={`${item.title} Elevation`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={90}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none" />

                    {/* Top Type Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-3 py-1 rounded-full uppercase shadow-md">
                        {item.type}
                      </span>
                    </div>

                    {/* Certified MahaRERA Seal on Top Right */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-[#A0725B]/40 text-[#C5A880] px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider shadow-md">
                      <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                      <span>RERA Approved</span>
                    </div>

                    {/* Logo Overlay at Bottom Left of Image */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 flex items-end justify-between">
                      <div className="relative w-36 h-12">
                        <Image
                          src={item.logo}
                          alt={`${item.title} Logo`}
                          fill
                          className="object-contain object-left drop-shadow-md brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 text-left space-y-4">
                    {/* Location & Title */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A0725B]">
                        {item.location}
                      </span>
                      <h3 className="font-serif text-[22px] sm:text-[24px] text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 font-normal leading-snug mt-0.5">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[13px] text-zinc-600 font-light mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Official RERA Registration Box with One-Click Copy */}
                    <div className="p-3.5 rounded-lg bg-white/70 border border-[#A0725B]/20 flex items-center justify-between gap-3">
                      <div className="space-y-0.5">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-[#A0725B]">
                          MahaRERA Registration No.
                        </p>
                        <p className="font-mono text-xs font-semibold text-zinc-900 tracking-wider">
                          {item.reraNo}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyRera(item.id, item.reraNo)}
                        className="p-2 rounded-md hover:bg-[#A0725B]/10 text-zinc-600 hover:text-[#A0725B] transition-colors cursor-pointer shrink-0"
                        title="Copy MahaRERA Number"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="p-6 sm:p-7 pt-0 flex items-center gap-2 border-t border-[#A0725B]/15 mt-2">
                  {/* Direct Download PDF Button */}
                  <a
                    href={item.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#A0725B] hover:bg-[#8B5E48] text-white transition-all duration-300 shadow-md shadow-[#A0725B]/20 cursor-pointer group/btn whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                    <span className="whitespace-nowrap">Download PDF</span>
                  </a>

                  {/* View Certificate Online Link */}
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap"
                    title="View Document Online"
                  >
                    <span className="whitespace-nowrap">View</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-600 font-serif text-lg">No matching MahaRERA certificates found.</p>
            <button
              onClick={() => {
                setFilter("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs font-semibold uppercase bg-[#A0725B] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. Official MahaRERA Compliance Notice Box */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#F3ECE4] border border-[#A0725B]/30 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#A0725B]/15 text-[#A0725B] mx-auto flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-[20px] sm:text-[24px] text-zinc-900 font-normal">
            MahaRERA Compliance &amp; Transparency Statement
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-3xl mx-auto font-light leading-relaxed">
            All residential and commercial projects by Jhamtani are registered with the Maharashtra Real Estate Regulatory Authority (MahaRERA) in compliance with the Real Estate (Regulation and Development) Act, 2016. Details and project plans are also available on the official MahaRERA website.
          </p>
          <div className="pt-2">
            <a
              href="https://maharera.maharashtra.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A0725B] hover:text-zinc-950 underline underline-offset-4 transition-colors"
            >
              <span>Visit Official MahaRERA Portal (maharera.maharashtra.gov.in)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
