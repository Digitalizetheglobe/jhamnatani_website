"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Eye,
  Camera,
  Layers,
  PhoneCall,
  SlidersHorizontal,
} from "lucide-react";

type ProjectCategory = "Residential" | "Commercial" | "Studio";

interface ProjectUpdate {
  id: string;
  title: string;
  projectName: string;
  month: string;
  tagline: string;
  location: string;
  categories: ProjectCategory[];
  link: string;
  images: string[];
}

const siteUpdatesData: ProjectUpdate[] = [
  {
    id: "ace-abode",
    title: "ACE ABODE - MAY",
    projectName: "ACE Abode",
    month: "MAY 2024",
    tagline: "Elevated Urban Living & Architectural Finesse",
    location: "Ravet, PCMC, Pune",
    categories: ["Residential"],
    link: "/projects",
    images: [
      "/assets/site-updates/ace-abode/ACE-ABODE1.webp",
      "/assets/site-updates/ace-abode/ACE-ABODE2.webp",
      "/assets/site-updates/ace-abode/ACE-ABODE3.webp",
      "/assets/site-updates/ace-abode/ACE-ABODE4.webp",
      "/assets/site-updates/ace-abode/ACE-ABODE5.webp",
    ],
  },
  {
    id: "ace-villas",
    title: "ACE VILLAS - MAY",
    projectName: "ACE Villas",
    month: "MAY 2024",
    tagline: "Bespoke Ultra-Luxury Villas & Private Sanctuaries",
    location: "Koregaon Park NX, Pune",
    categories: ["Residential"],
    link: "/ace-villas",
    images: [
      "/assets/site-updates/ace-villas/ace-villas1.webp",
      "/assets/site-updates/ace-villas/ace-villas2.webp",
      "/assets/site-updates/ace-villas/ace-villas3.webp",
    ],
  },
  {
    id: "jhamtani-spacebiz",
    title: "JHAMTANI SPACEBIZ - MAY",
    projectName: "Jhamtani SpaceBiz",
    month: "MAY 2024",
    tagline: "High-Yield Grade-A Corporate Hub & Commercial Suites",
    location: "Baner, Pune",
    categories: ["Commercial"],
    link: "/jhamtani-spacebiz",
    images: [
      "/assets/site-updates/jhamtani-spacebiz/jhamtani-spacebiz1.webp",
      "/assets/site-updates/jhamtani-spacebiz/jhamtani-spacebiz2.webp",
    ],
  },
  {
    id: "jhamtani-elevate",
    title: "JHAMTANI ELEVATE - MAY",
    projectName: "Jhamtani Elevate",
    month: "MAY 2024",
    tagline: "Smart Co-Living & Modern Studio Residences",
    location: "Mundhwa, Pune",
    categories: ["Residential", "Studio"],
    link: "/jhamtani-elevate",
    images: ["/assets/site-updates/jhamtani-elevate.webp"],
  },
  {
    id: "ace-abundance",
    title: "ACE ABUNDANCE - MAY",
    projectName: "ACE Abundance",
    month: "MAY 2024",
    tagline: "Grand Living Spaces Infused with Abundance",
    location: "Mundhwa, Pune",
    categories: ["Residential"],
    link: "/ace-abundance",
    images: ["/assets/site-updates/ace-abudenace.webp"],
  },
  {
    id: "ace-atmosphere",
    title: "ACE ATMOSPHERE - MAY",
    projectName: "ACE Atmosphere",
    month: "MAY 2024",
    tagline: "Pune's First 24×7 Active Lifestyle Concept",
    location: "Ravet, Pune",
    categories: ["Residential"],
    link: "/ace-atmosphere",
    images: [
      "/assets/site-updates/ace-atmospehere/ace-atmospehere1.webp",
      "/assets/site-updates/ace-atmospehere/ace-atmospehere2.webp",
      "/assets/site-updates/ace-atmospehere/ace-atmospehere3.webp",
      "/assets/site-updates/ace-atmospehere/ace-atmospehere4.webp",
    ],
  },
  {
    id: "ace-aster",
    title: "ACE ASTER - MAY",
    projectName: "ACE Aster",
    month: "MAY 2024",
    tagline: "Refined Modern Homes Crafted for Families",
    location: "Ravet, Pune",
    categories: ["Residential"],
    link: "/ace-aster",
    images: [
      "/assets/site-updates/ace-aster/ace-aster1.webp",
      "/assets/site-updates/ace-aster/ace-aster2.webp",
      "/assets/site-updates/ace-aster/ace-aster3.webp",
    ],
  },
  {
    id: "jhamtani-bizcore",
    title: "JHAMTANI BIZCORE - MAY",
    projectName: "Jhamtani Bizcore",
    month: "MAY 2024",
    tagline: "Serviced Studio Apartments & Commercial Workspaces",
    location: "Koregaon Park NX, Pune",
    categories: ["Studio"],
    link: "/jhamtani-bizcore",
    images: [
      "/assets/site-updates/jhamtani-bizcore/site1.webp",
      "/assets/site-updates/jhamtani-bizcore/site2.webp",
      "/assets/site-updates/jhamtani-bizcore/site3.webp",
      "/assets/site-updates/jhamtani-bizcore/site4.webp",
    ],
  },
];

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn" | "group-hover/link";
}

function WaveText({ text, letterDelay = 20, groupHoverClass = "group-hover" }: WaveTextProps) {
  const hoverClass =
    groupHoverClass === "group-hover/btn"
      ? "group-hover/btn:-translate-y-full"
      : groupHoverClass === "group-hover/link"
      ? "group-hover/link:-translate-y-full"
      : "group-hover:-translate-y-full";

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex items-center justify-center gap-[0.08em] whitespace-nowrap shrink-0" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.3em] inline-block shrink-0" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden shrink-0">
              <span
                className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${hoverClass} will-change-transform [backface-visibility:hidden]`}
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className={`absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${hoverClass} will-change-transform [backface-visibility:hidden]`}
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

export default function SiteUpdatesComponent() {
  const [filterType, setFilterType] = useState<"All" | "Residential" | "Commercial" | "Studio">("All");
  const [activeProjectTab, setActiveProjectTab] = useState<string>("all");

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<ProjectUpdate | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: ProjectUpdate, index: number) => {
    setLightboxProject(project);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxProject(null);
  };

  const nextLightboxImage = useCallback(() => {
    if (!lightboxProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % lightboxProject.images.length);
  }, [lightboxProject]);

  const prevLightboxImage = useCallback(() => {
    if (!lightboxProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? lightboxProject.images.length - 1 : prev - 1
    );
  }, [lightboxProject]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextLightboxImage, prevLightboxImage]);

  const filteredProjects = siteUpdatesData.filter((project) => {
    if (filterType !== "All" && !project.categories.includes(filterType)) return false;
    if (activeProjectTab !== "all" && project.id !== activeProjectTab) return false;
    return true;
  });

  const totalPhotosCount = siteUpdatesData.reduce(
    (acc, item) => acc + item.images.length,
    0
  );

  return (
    <div className="relative w-full bg-[#FAF5F0] text-zinc-900 overflow-hidden select-none pb-24">
      {/* 1. Page Title Hero Banner */}
      <section className="relative w-full h-[340px] sm:h-[400px] lg:h-[440px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/site-updates.webp"
            alt="Jhamtani Site Updates Hero Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-[#111622]/90 backdrop-blur-[1.5px]" />
          {/* Subtle golden shimmer gradient line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[38px] sm:text-[52px] lg:text-[64px] text-[#C5A880] tracking-[0.2em] leading-none uppercase drop-shadow-sm"
          >
            SITE UPDATES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[12px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Real-time on-ground construction milestones &amp; engineering progress across Pune
          </motion.p>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-7 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#F3ECE4] border border-[#A0725B]/25 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-[#A0725B]/15">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Active Sites</p>
              <p className="font-serif text-lg font-bold text-zinc-900">8 Projects</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-[#A0725B]/15">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Latest Cycle</p>
              <p className="font-serif text-lg font-bold text-zinc-900">May 2024</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-[#A0725B]/15">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Visual Logs</p>
              <p className="font-serif text-lg font-bold text-zinc-900">{totalPhotosCount} HD Photos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-[#A0725B]/15">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Milestone Pace</p>
              <p className="font-serif text-lg font-bold text-emerald-800">100% On-Track</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Luxury Interactive Filter & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 sm:mt-14">
        <div className="flex flex-col items-center space-y-6 pb-8 border-b border-[#A0725B]/20">
          
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: "ALL", value: "All", count: siteUpdatesData.length },
              {
                label: "RESIDENTIAL",
                value: "Residential",
                count: siteUpdatesData.filter((p) => p.categories.includes("Residential")).length,
              },
              {
                label: "COMMERCIAL",
                value: "Commercial",
                count: siteUpdatesData.filter((p) => p.categories.includes("Commercial")).length,
              },
              {
                label: "STUDIO",
                value: "Studio",
                count: siteUpdatesData.filter((p) => p.categories.includes("Studio")).length,
              },
            ].map((tab) => {
              const isActive = filterType === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => {
                    setFilterType(tab.value as any);
                    setActiveProjectTab("all");
                  }}
                  className={`group relative flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-[#A0725B] cursor-pointer transition-all duration-300 z-10 overflow-hidden ${
                    isActive
                      ? "bg-[#A0725B] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                  }`}
                >
                  <WaveText text={tab.label} letterDelay={20} />
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#A0725B]/15 text-[#A0725B] group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Jump Strip */}
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl px-2 py-1">
              <span className="text-[11px] font-semibold text-[#A0725B] uppercase tracking-widest mr-1 flex items-center gap-1.5 whitespace-nowrap">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Direct Jump:
              </span>
              
              <button
                onClick={() => {
                  setActiveProjectTab("all");
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
                className={`group relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border border-[#A0725B] overflow-hidden ${
                  activeProjectTab === "all"
                    ? "bg-[#A0725B] text-white shadow-sm"
                    : "bg-transparent text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                }`}
              >
                <WaveText text="ALL PROJECTS" letterDelay={15} />
              </button>

              {siteUpdatesData
                .filter((p) => filterType === "All" || p.categories.includes(filterType))
                .map((project) => {
                  const isSelected = activeProjectTab === project.id;
                  return (
                    <button
                      key={project.id}
                      onClick={() => {
                        setActiveProjectTab(project.id);
                        const el = document.getElementById(project.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={`group relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer border border-[#A0725B] overflow-hidden ${
                        isSelected
                          ? "bg-[#A0725B] text-white shadow-sm"
                          : "bg-transparent text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                      }`}
                    >
                      <WaveText text={project.projectName.toUpperCase()} letterDelay={15} />
                    </button>
                  );
                })}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Projects Showcase List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12 space-y-16 sm:space-y-20">
        {filteredProjects.map((project, projectIdx) => (
          <motion.section
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: projectIdx * 0.05 }}
            className="group relative bg-[#F3ECE4] border border-[#A0725B]/25 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 mb-8 border-b border-[#A0725B]/20">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#A0725B] text-white">
                    <Sparkles className="w-3 h-3" /> {project.month}
                  </span>
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center text-[10px] uppercase font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-[#A0725B]/15 text-[#A0725B] border border-[#A0725B]/30"
                    >
                      {cat}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1 text-[11px] text-zinc-600 font-medium px-2.5 py-0.5 rounded-full bg-white/70 border border-zinc-200">
                    <MapPin className="w-3 h-3 text-[#A0725B]" /> {project.location}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-light">
                    &bull; {project.images.length} {project.images.length > 1 ? "Photos" : "Photo"}
                  </span>
                </div>

                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] text-zinc-900 font-normal tracking-wide">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-zinc-600 font-light tracking-wide">
                  {project.tagline}
                </p>
              </div>

              {/* Action Link to Project Page */}
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href={project.link}
                  className="group/btn relative inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer overflow-hidden border border-[#A0725B]"
                >
                  <WaveText text="EXPLORE PROJECT" letterDelay={15} groupHoverClass="group-hover/btn" />
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Slider or Single Showcase */}
            {project.images.length === 1 ? (
              /* Single Image Featured Showcase */
              <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-md group/single bg-zinc-900 border border-[#A0725B]/20">
                <div
                  onClick={() => openLightbox(project, 0)}
                  className="relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-pointer overflow-hidden"
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} Construction Update`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover transition-transform duration-700 ease-out group-hover/single:scale-104"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover/single:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover/single:opacity-100 transition-all duration-300 bg-white/95 text-zinc-900 text-xs px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/single:translate-y-0">
                      <Maximize2 className="w-4 h-4 text-[#A0725B]" /> Click to Zoom Fullscreen
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[11px] font-medium tracking-wide">
                    Live Progress &bull; 1 / 1
                  </div>
                </div>
              </div>
            ) : (
              /* Multi-Image Interactive Slider */
              <ProjectSlider
                project={project}
                onOpenLightbox={(idx) => openLightbox(project, idx)}
              />
            )}
          </motion.section>
        ))}
      </div>

      {/* 5. Construction Quality & Site Visit Consultation Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-20">
        <div className="relative rounded-3xl bg-[#111622] text-white p-8 sm:p-12 lg:p-14 overflow-hidden border border-[#C5A880]/30 shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A0725B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-[10px] tracking-[0.25em] font-semibold text-[#C5A880] uppercase bg-[#C5A880]/10 px-3 py-1 rounded-full border border-[#C5A880]/25 inline-block">
                On-Ground Transparency &amp; Rigorous Quality
              </span>
              <h3 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-white font-normal leading-tight">
                Schedule a Personalized Site Visit &amp; Walkthrough
              </h3>
              <p className="font-sans text-xs sm:text-[14px] text-zinc-300 font-light leading-relaxed max-w-2xl">
                Witness our precision craftsmanship firsthand. Our project engineers and relationship managers are available on-site across all Pune locations for guided inspections and architectural briefings.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="tel:+917447447669"
                className="group/call relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#C5A880] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all duration-300 shadow-md cursor-pointer overflow-hidden"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <WaveText text="CALL +91 7447447669" letterDelay={15} groupHoverClass="group-hover/btn" />
              </a>
              <Link
                href="/channel-partner"
                className="group/req relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 hover:border-[#C5A880] hover:text-[#C5A880] text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <WaveText text="REQUEST INSPECTION PASS" letterDelay={15} groupHoverClass="group-hover/btn" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
          >
            {/* Lightbox Top Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-mono tracking-widest text-[#C5A880] uppercase">
                  {lightboxProject.month} &bull; Photo {currentImageIndex + 1} of{" "}
                  {lightboxProject.images.length}
                </p>
                <h3 className="font-serif text-lg sm:text-xl text-white">
                  {lightboxProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Main Image Display */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={lightboxProject.images[currentImageIndex]}
                      alt={`${lightboxProject.title} Milestone Photo ${currentImageIndex + 1}`}
                      fill
                      priority
                      quality={95}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Nav Overlay */}
              {lightboxProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#A0725B] text-white border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg z-20"
                    aria-label="Previous Photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#A0725B] text-white border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg z-20"
                    aria-label="Next Photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Bottom Thumbnail Strip */}
            {lightboxProject.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
                {lightboxProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      idx === currentImageIndex
                        ? "border-[#C5A880] scale-105 shadow-md"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="thumbnail"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Slider Subcomponent for Multi-Image Projects
// -------------------------------------------------------------
function ProjectSlider({
  project,
  onOpenLightbox,
}: {
  project: ProjectUpdate;
  onOpenLightbox: (index: number) => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate slide index
    const approxIndex = Math.round(scrollLeft / (clientWidth / 2 || 1));
    setCurrentSlide(Math.min(approxIndex, project.images.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [project]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector("div[data-card]")?.clientWidth || 360;
    const scrollAmount = direction === "left" ? -(cardWidth + 16) : cardWidth + 16;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Slider Controls Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Swipe or Scroll to Explore ({project.images.length} Updates)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border border-[#A0725B]/40 flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? "text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                : "opacity-35 cursor-not-allowed text-zinc-400"
            }`}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border border-[#A0725B]/40 flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? "text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                : "opacity-35 cursor-not-allowed text-zinc-400"
            }`}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-3 -mx-2 px-2"
      >
        {project.images.map((imgSrc, idx) => (
          <div
            key={idx}
            data-card="true"
            onClick={() => onOpenLightbox(idx)}
            className="group/card relative flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-[#A0725B]/20 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer snap-start"
          >
            <Image
              src={imgSrc}
              alt={`${project.projectName} Update View ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
              className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-106"
            />

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <span className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full shadow-md">
                  <Eye className="w-4 h-4 text-[#C5A880]" />
                </span>
              </div>
              <div className="flex items-center justify-between text-white text-xs">
                <span className="font-serif tracking-wider font-normal">
                  View Full Resolution
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-mono">
                  {idx + 1} / {project.images.length}
                </span>
              </div>
            </div>

            {/* Static Index Badge */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase border border-white/10 group-hover/card:opacity-0 transition-opacity">
              Log #{idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
