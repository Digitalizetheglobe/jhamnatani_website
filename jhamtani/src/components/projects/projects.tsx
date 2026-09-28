"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building, Home, LayoutGrid, Sparkles, CheckCircle2, MapPin } from "lucide-react";

type ProjectCategory = "Residential" | "Commercial" | "Studio";
type ActiveTab = "ongoing" | "completed";

interface ProjectItem {
  id: number;
  title: string;
  location: string;
  type: string;
  categories: ProjectCategory[];
  image: string;
  link: string;
  isLocal: boolean;
}

interface CompletedProject {
  id: number;
  image: string;
  logo: string;
  location: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Ace Ayodhya",
    location: "Thergaon, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/ace-ayodhya/hero.webp",
    link: "/ace-ayodhya",
    isLocal: true,
  },
  {
    id: 2,
    title: "Ace Abundance",
    location: "Mundhwa, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-abundance.webp",
    link: "/ace-abundance",
    isLocal: true,
  },
  {
    id: 3,
    title: "Ace Villas",
    location: "Koregaon Park NX, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-villas.webp",
    link: "/ace-villas",
    isLocal: true,
  },
  {
    id: 4,
    title: "Ace Atmosphere",
    location: "Ravet, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-atmosphere.webp",
    link: "/ace-atmosphere",
    isLocal: true,
  },
  {
    id: 5,
    title: "Ace Aster",
    location: "Ravet, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-aster.webp",
    link: "/ace-aster",
    isLocal: true,
  },
  {
    id: 6,
    title: "Jhamtani Bizcore",
    location: "Koregaon Park NX, Pune",
    type: "Studio",
    categories: ["Studio"],
    image: "/assets/projects/jhamtani-bizcore.webp",
    link: "/jhamtani-bizcore",
    isLocal: true,
  },
  {
    id: 7,
    title: "Jhamtani Elevate",
    location: "Mundhwa, Pune",
    type: "Studio",
    categories: ["Studio"],
    image: "/assets/pojetcts/jhamtani-elevate.webp",
    link: "/jhamtani-elevate",
    isLocal: true,
  },
  {
    id: 8,
    title: "Jhamtani SpaceBiz",
    location: "Baner, Pune",
    type: "Commercial",
    categories: ["Commercial"],
    image: "/assets/pojetcts/jhamtani-spacebiz.webp",
    link: "/jhamtani-spacebiz",
    isLocal: true,
  },
];

const completedProjectLocations: Record<number, string> = {
  1: "PIMPRI",
  2: "PIMPRI",
  3: "THERGAON",
  4: "PUNAWALE",
  5: "RAVET",
  6: "Hinjewadi Phase II",
  7: "RAVET",
  8: "RAVET",
  9: "TATHAWADE",
  10: "CHOVISAWADI",
  11: "RAHATANI",
  12: "WAKAD",
  13: "WAKAD",
  14: "RAVET",
};

// Completed projects – main image + logo pairs from /assets/completed_project/
const completedProjects: CompletedProject[] = Array.from({ length: 14 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    image: `/assets/completed_project/completd_${id}.webp`,
    // Trimmed logos (transparent padding removed so the mark fills the frame)
    logo: `/assets/completed_project/logo_${id}.webp`,
    location: completedProjectLocations[id] || "",
  };
});

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/link";
}

function WaveText({ text, letterDelay = 25, groupHoverClass = "group-hover" }: WaveTextProps) {
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
                className={`inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  groupHoverClass === "group-hover/link"
                    ? "group-hover/link:-translate-y-full"
                    : "group-hover:-translate-y-full"
                } will-change-transform [backface-visibility:hidden]`}
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className={`absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  groupHoverClass === "group-hover/link"
                    ? "group-hover/link:-translate-y-full"
                    : "group-hover:-translate-y-full"
                } will-change-transform [backface-visibility:hidden]`}
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

export default function ProjectsComponent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("ongoing");
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial" | "Studio">("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.categories.includes(filter);
  });

  const handleEnquireClick = (projectName: string) => {
    const event = new CustomEvent("open-enquiry", {
      detail: { project: projectName },
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative w-full bg-[#F9F1EC] min-h-screen text-zinc-900 select-none overflow-hidden pb-20">
      {/* Page Title Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/projects.webp"
            alt="Jhamtani Projects Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
          <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-serif font-light text-[46px] sm:text-[58px] lg:text-[70px] text-[#C5A880] tracking-[0.2em] leading-none uppercase">
            Projects
          </h1>
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light">
            Residential &amp; Commercial Landmarks in Pune
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-16 sm:mt-20">

        {/* ── Tab Switcher ── */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex rounded-full border border-[#a0725b]/30 bg-white/60 backdrop-blur-sm p-1 gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab("ongoing")}
              className={`px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "ongoing"
                  ? "bg-[#a0725b] text-white shadow-md"
                  : "text-[#a0725b] hover:bg-[#a0725b]/10"
              }`}
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === "completed"
                  ? "bg-[#a0725b] text-white shadow-md"
                  : "text-[#a0725b] hover:bg-[#a0725b]/10"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed Projects
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ══ ONGOING PROJECTS TAB ══ */}
          {activeTab === "ongoing" && (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Filter Navigation Bar */}
              <div className="flex justify-center items-center gap-3 sm:gap-4 border-b border-zinc-200/60 pb-6 mb-12 sm:mb-16 flex-wrap">
                <button
                  onClick={() => setFilter("All")}
                  className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer z-10 overflow-hidden ${
                    filter === "All"
                      ? "bg-[#a0725b] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#a0725b] hover:bg-[#a0725b] hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <WaveText text="ALL PROJECTS" letterDelay={20} />
                </button>
                <button
                  onClick={() => setFilter("Residential")}
                  className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer z-10 overflow-hidden ${
                    filter === "Residential"
                      ? "bg-[#a0725b] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#a0725b] hover:bg-[#a0725b] hover:text-white"
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <WaveText text="RESIDENTIAL" letterDelay={20} />
                </button>
                <button
                  onClick={() => setFilter("Commercial")}
                  className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer z-10 overflow-hidden ${
                    filter === "Commercial"
                      ? "bg-[#a0725b] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#a0725b] hover:bg-[#a0725b] hover:text-white"
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <WaveText text="COMMERCIAL" letterDelay={20} />
                </button>
                <button
                  onClick={() => setFilter("Studio")}
                  className={`group relative flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer z-10 overflow-hidden ${
                    filter === "Studio"
                      ? "bg-[#a0725b] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#a0725b] hover:bg-[#a0725b] hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <WaveText text="STUDIO" letterDelay={20} />
                </button>
              </div>

              {/* Projects Grid */}
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: idx * 0.05,
                      }}
                      className="flex flex-col bg-white border border-zinc-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group rounded-none"
                    >
                      {/* Image Wrapper */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-100">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={90}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-3.5 py-1.5 rounded-none absolute top-4 right-4 z-10 uppercase shadow-md">
                          Ongoing
                        </span>
                      </div>

                      {/* Content Block */}
                      <div className="flex flex-col flex-1 p-6 sm:p-8 text-left justify-between">
                        <div>
                          <span className="font-sans text-[11px] uppercase tracking-widest text-[#A0725B] font-semibold">
                            {project.type} &bull; {project.location}
                          </span>
                          <h3 className="font-serif font-light text-[22px] sm:text-[24px] text-zinc-950 mt-2 leading-tight group-hover:text-[#A0725B] transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>

                        <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center">
                          {project.isLocal ? (
                            <Link
                              href={project.link}
                              className="group/link flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#A0725B] hover:text-zinc-950 transition-colors cursor-pointer"
                            >
                              <WaveText text="EXPLORE PROJECT" letterDelay={20} groupHoverClass="group-hover/link" />
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </Link>
                          ) : (
                            <button
                              onClick={() => handleEnquireClick(project.link)}
                              className="group/link flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#A0725B] hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0"
                            >
                              <WaveText text="ENQUIRE NOW" letterDelay={20} groupHoverClass="group-hover/link" />
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* ══ COMPLETED PROJECTS TAB ══ */}
          {activeTab === "completed" && (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Section heading */}
              <div className="text-center mb-12 sm:mb-16">
                <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#A0725B] font-semibold mb-2">
                  Our Legacy
                </p>
                <h2 className="font-serif font-light text-[30px] sm:text-[38px] text-zinc-900 leading-snug">
                  Completed Projects
                </h2>
                <div className="mx-auto mt-4 w-16 h-[1px] bg-[#A0725B]/50" />
              </div>

              {/* Completed Projects Grid — 3-col, tall cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {completedProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: idx * 0.05,
                    }}
                    className="group overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                  >
                    {/* Project image — square, fills card edge-to-edge with no gaps */}
                    <div className="relative w-full aspect-square overflow-hidden block">
                      <Image
                        src={project.image}
                        alt={`Completed Project ${project.id}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={88}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Warm hover tint */}
                      <div className="absolute inset-0 bg-[#A0725B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[5]" />
                    </div>

                    {/* Logo & Location strip */}
                    <div className="flex flex-col items-center justify-center px-4 py-3.5 border-t border-zinc-100 bg-white">
                      <div className="relative w-full h-[52px]">
                        <Image
                          src={project.logo}
                          alt={`Project ${project.id} Logo`}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                          quality={90}
                          className="object-contain object-center"
                        />
                      </div>
                      {project.location && (
                        <div className="mt-2.5 pt-2 border-t border-zinc-100 w-full flex items-center justify-center gap-1.5 text-[#A0725B]">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-sans text-[11px] tracking-widest uppercase font-semibold text-zinc-600 group-hover:text-[#A0725B] transition-colors duration-300">
                            {project.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
