"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building, Home, LayoutGrid, Sparkles } from "lucide-react";

type ProjectCategory = "Residential" | "Commercial" | "Studio";

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

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Ace Ayodha",
    location: "Thergaon, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/ace-ayodha/hero.webp",
    link: "/ace-ayodha",
    isLocal: true,
  },
  {
    id: 2,
    title: "Ace Abundance",
    location: "Mundhwa, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-abundance.jpg",
    link: "/ace-abundance",
    isLocal: true,
  },
  {
    id: 3,
    title: "Ace Villas",
    location: "Koregaon Park NX, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-villas.jpg",
    link: "/ace-villas",
    isLocal: true,
  },
  {
    id: 4,
    title: "Ace Atmosphere",
    location: "Ravet, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-atmosphere.jpg",
    link: "/ace-atmosphere",
    isLocal: true,
  },
  {
    id: 5,
    title: "Ace Aster",
    location: "Ravet, Pune",
    type: "Residential",
    categories: ["Residential"],
    image: "/assets/projects/ace-aster.jpg",
    link: "/ace-aster",
    isLocal: true,
  },
  {
    id: 6,
    title: "Jhamtani Bizcore",
    location: "Koregaon Park NX, Pune",
    type: "Studio",
    categories: ["Studio"],
    image: "/assets/projects/jhamtani-bizcore.jpg",
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
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/projects.webp"
            alt="Jhamtani Projects Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Overlay for readability and premium look */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-serif font-light text-[46px] sm:text-[58px] lg:text-[70px] text-[#C5A880] tracking-[0.2em] leading-none uppercase">
            Projects
          </h1>
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light">
            Residential & Commercial Landmarks in Pune
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 sm:mt-20">
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

        {/* Projects Grid Container */}
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
                  {/* Status Badge */}
                  <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-3.5 py-1.5 rounded-none absolute top-4 right-4 z-10 uppercase shadow-md">
                    Ongoing
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex flex-col flex-1 p-6 sm:p-8 text-left justify-between">
                  <div>
                    {/* Category and Location Info */}
                    <span className="font-sans text-[11px] uppercase tracking-widest text-[#A0725B] font-semibold">
                      {project.type} &bull; {project.location}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif font-light text-[22px] sm:text-[24px] text-zinc-950 mt-2 leading-tight group-hover:text-[#A0725B] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* CTA Actions */}
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
      </div>
    </section>
  );
}
