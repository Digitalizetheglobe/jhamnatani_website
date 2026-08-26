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
    image: "/assets/projects/jhamtani-elevate.jpg",
    link: "/jhamtani-elevate",
    isLocal: true,
  },
  {
    id: 8,
    title: "Jhamtani SpaceBiz",
    location: "Baner, Pune",
    type: "Commercial",
    categories: ["Commercial"],
    image: "/assets/projects/jhamtani-spacebiz.jpg",
    link: "/jhamtani-spacebiz",
    isLocal: true,
  },
];

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
            src="/assets/about/hero.jpg"
            alt="Jhamtani Projects Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Overlay for readability and premium look */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
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
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
              filter === "All"
                ? "bg-[#A0725B] border-[#A0725B] text-white shadow-lg shadow-amber-900/10"
                : "border-zinc-300 text-zinc-600 bg-transparent hover:border-[#A0725B] hover:text-[#A0725B]"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            All Projects
          </button>
          <button
            onClick={() => setFilter("Residential")}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
              filter === "Residential"
                ? "bg-[#A0725B] border-[#A0725B] text-white shadow-lg shadow-amber-900/10"
                : "border-zinc-300 text-zinc-600 bg-transparent hover:border-[#A0725B] hover:text-[#A0725B]"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Residential
          </button>
          <button
            onClick={() => setFilter("Commercial")}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
              filter === "Commercial"
                ? "bg-[#A0725B] border-[#A0725B] text-white shadow-lg shadow-amber-900/10"
                : "border-zinc-300 text-zinc-600 bg-transparent hover:border-[#A0725B] hover:text-[#A0725B]"
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            Commercial
          </button>
          <button
            onClick={() => setFilter("Studio")}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
              filter === "Studio"
                ? "bg-[#A0725B] border-[#A0725B] text-white shadow-lg shadow-amber-900/10"
                : "border-zinc-300 text-zinc-600 bg-transparent hover:border-[#A0725B] hover:text-[#A0725B]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Studio
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
                        className="flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#A0725B] hover:text-zinc-950 transition-colors group/link"
                      >
                        Explore Project
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleEnquireClick(project.link)}
                        className="flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#A0725B] hover:text-zinc-950 transition-colors group/link cursor-pointer bg-transparent border-0 p-0"
                      >
                        Enquire Now
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
