"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  CheckCircle2,
  MapPin,
  Building2,
  Home,
  Sparkles,
  ArrowUpRight,
  X,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Check,
  Send,
  Loader2,
} from "lucide-react";

type ProjectCategory = "Residential" | "Commercial" | "Studio";

interface BrochureItem {
  id: number;
  title: string;
  location: string;
  tagline: string;
  type: ProjectCategory;
  categories: ProjectCategory[];
  logo: string;
  image: string;
  pdfUrl: string;
  projectLink: string;
}

const brochuresData: BrochureItem[] = [
  {
    id: 1,
    title: "ACE Ayodhya",
    location: "Thergaon, Pune",
    tagline: "2 & 3 BHK Premium Residences",
    type: "Residential",
    categories: ["Residential"],
    logo: "/assets/ace-ayodha/logo_1.webp",
    image: "/assets/ace-ayodha/hero.webp",
    pdfUrl: "/assets/maha-rera/ace-ayodha.pdf",
    projectLink: "/ace-ayodha",
  },
  {
    id: 2,
    title: "ACE Abundance",
    location: "Mundhwa, Pune",
    tagline: "Signature Luxury Residences",
    type: "Residential",
    categories: ["Residential"],
    logo: "/assets/pojetcts/Abundacne logo.webp",
    image: "/assets/pojetcts/Abundacne_Elevaion.webp",
    pdfUrl: "/assets/maha-rera/Ace-Abundance.pdf",
    projectLink: "/ace-abundance",
  },
  {
    id: 3,
    title: "ACE Villas",
    location: "Koregaon Park NX, Pune",
    tagline: "Bespoke Ultra-Luxury Estate Villas",
    type: "Residential",
    categories: ["Residential"],
    logo: "/assets/pojetcts/ace_villas_logo.webp",
    image: "/assets/pojetcts/ace_villas.webp",
    pdfUrl: "/assets/maha-rera/ACE-VILLAS.pdf",
    projectLink: "/ace-villas",
  },
  {
    id: 4,
    title: "ACE Atmosphere",
    location: "Upper Ravet, Pune",
    tagline: "24×7 All-Day Lifestyle Landmark",
    type: "Residential",
    categories: ["Residential"],
    logo: "/assets/pojetcts/ace_atmosphere_logo.webp",
    image: "/assets/pojetcts/ace_atmosphere.webp",
    pdfUrl: "/assets/maha-rera/ACE-ATMOSPHERE.pdf",
    projectLink: "/ace-atmosphere",
  },
  {
    id: 5,
    title: "ACE Aster",
    location: "Ravet, Pune",
    tagline: "Contemporary Family Residences",
    type: "Residential",
    categories: ["Residential"],
    logo: "/assets/pojetcts/aster_logo.webp",
    image: "/assets/pojetcts/ace_aster.webp",
    pdfUrl: "/assets/maha-rera/Ace-Aster.pdf",
    projectLink: "/ace-aster",
  },
  {
    id: 6,
    title: "Jhamtani Bizcore",
    location: "Koregaon Park NX, Pune",
    tagline: "Serviced Studio Apartments & Commercial Hub",
    type: "Studio",
    categories: ["Studio"],
    logo: "/assets/pojetcts/bizcore_logo.webp",
    image: "/assets/pojetcts/bizcore_image.webp",
    pdfUrl: "/assets/maha-rera/Jhamtani-Bizcore.pdf",
    projectLink: "/jhamtani-bizcore",
  },
  {
    id: 7,
    title: "Jhamtani Elevate",
    location: "Mundhwa, Pune",
    type: "Studio",
    categories: ["Studio"],
    tagline: "Studio Apartments in Mundhwa",
    pdfUrl: "/assets/broucher/JHAMTANI ELEVATE BROCHURE.pdf",
    image: "/assets/pojetcts/jhamtani-elevate.webp",
    logo: "/assets/pojetcts/Elevate logo.webp",
    projectLink: "/jhamtani-elevate",
  },
  {
    id: 8,
    title: "Jhamtani SpaceBiz",
    location: "Baner, Pune",
    type: "Commercial",
    categories: ["Commercial"],
    tagline: "Grade A Commercial Spaces in Baner",
    pdfUrl: "/assets/broucher/Spacebiz-Brochure-A4.pdf",
    image: "/assets/pojetcts/jhamtani-spacebiz.webp",
    logo: "/assets/pojetcts/Spacebiz logo.webp",
    projectLink: "/jhamtani-spacebiz",
  },
];

export default function ProjectBrochureComponent() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial" | "Studio">("All");
  const [selectedProject, setSelectedProject] = useState<BrochureItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const filteredBrochures = brochuresData.filter((item) => {
    if (filter === "All") return true;
    return item.categories.includes(filter);
  });

  const handleOpenModal = (project: BrochureItem) => {
    setSelectedProject(project);
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setIsSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and trigger direct download
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      if (selectedProject?.pdfUrl) {
        const link = document.createElement("a");
        link.href = selectedProject.pdfUrl;
        link.download = `${selectedProject.title}-Brochure.pdf`;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 900);
  };

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-28">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Download Brochure Banner"
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
              HOME &nbsp;/&nbsp; DOWNLOAD BROCHURE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[40px] sm:text-[54px] lg:text-[66px] text-[#C5A880] tracking-[0.2em] leading-none uppercase"
          >
            DOWNLOAD BROCHURE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Detailed architectural layouts, floor plans &amp; project specifications
          </motion.p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
        
        {/* Quick Highlights Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 sm:mb-14">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">Complete Masterplans</p>
              <p className="text-[12px] text-zinc-600 font-light">Accurate dimensioned unit floorplans</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">MahaRERA Approved</p>
              <p className="text-[12px] text-zinc-600 font-light">Official compliance &amp; legal specifications</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/20 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-zinc-900 uppercase">Instant PDF Access</p>
              <p className="text-[12px] text-zinc-600 font-light">High-resolution downloadable brochures</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-[#A0725B]/20">
          {(["All", "Residential", "Commercial", "Studio"] as const).map((type) => {
            const count =
              type === "All"
                ? brochuresData.length
                : brochuresData.filter((i) => i.categories.includes(type)).length;
            const isActive = filter === type;
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-[#A0725B] border-[#A0725B] text-white shadow-md shadow-[#A0725B]/20 font-semibold"
                    : "border-[#A0725B]/30 text-zinc-700 bg-white/70 hover:bg-[#A0725B]/10 hover:border-[#A0725B] hover:text-[#A0725B]"
                }`}
              >
                {type === "Residential" && <Home className="w-3.5 h-3.5" />}
                {type === "Commercial" && <Building2 className="w-3.5 h-3.5" />}
                {type === "Studio" && <Sparkles className="w-3.5 h-3.5" />}
                {type === "All" && <FileText className="w-3.5 h-3.5" />}
                <span>{type === "All" ? "All Brochures" : type}</span>
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

        {/* 3. Brochures Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredBrochures.map((item, idx) => (
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
                className="group flex flex-col bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 justify-between"
              >
                <div>
                  {/* Clean High-Contrast Logo Showcase Box */}
                  <div className="relative w-full aspect-[16/10] bg-white overflow-hidden flex items-center justify-center p-6 sm:p-8 border-b border-[#A0725B]/20">
                    {/* Centered Crisp Brand Logo */}
                    <div className="relative w-full h-full max-w-[200px] sm:max-w-[220px] max-h-[90px] sm:max-h-[105px]">
                      <Image
                        src={item.logo}
                        alt={`${item.title} Logo`}
                        fill
                        priority
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Category Pill on top-right */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex gap-1">
                      {item.categories.map((cat) => (
                        <span
                          key={cat}
                          className="bg-[#A0725B] text-white text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full shadow-sm"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left space-y-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#A0725B]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-serif text-[22px] sm:text-[24px] text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 font-normal leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-zinc-600 font-light leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-zinc-900 transition-all duration-300 shadow-md cursor-pointer group/btn"
                  >
                    <Download className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                    <span>Download Brochure</span>
                  </button>

                  <Link
                    href={item.projectLink}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold tracking-wider text-[#A0725B] hover:text-zinc-900 transition-colors cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. Instant Download & Lead Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 select-none"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#FAF5F0] border border-[#A0725B]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-left"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#EFE7DE] hover:bg-[#A0725B] hover:text-white text-zinc-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#A0725B]">
                  Official e-Brochure
                </span>
                <h3 className="font-serif text-2xl text-zinc-900">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-zinc-600 font-light">
                  {selectedProject.location} &bull; Complete floor plans &amp; specifications
                </p>
              </div>

              {isSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-6 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-300">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl text-zinc-900">
                      Download Started!
                    </h4>
                    <p className="text-xs text-zinc-600 max-w-xs font-light">
                      The official brochure for <strong>{selectedProject.title}</strong> has been downloaded to your device.
                    </p>
                  </div>
                  <div className="pt-2 w-full space-y-2">
                    <a
                      href={selectedProject.pdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-zinc-900 transition-all cursor-pointer shadow-md"
                    >
                      <Download className="w-4 h-4" /> Direct Download Again
                    </a>
                    <button
                      onClick={handleCloseModal}
                      className="w-full py-2.5 text-xs text-zinc-600 hover:text-zinc-900 font-semibold cursor-pointer uppercase tracking-wider"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form State */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900"
                      />
                    </div>
                  </div>

                  <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                    By submitting, you agree to receive project updates &amp; floor plans via Email &amp; WhatsApp.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-zinc-900 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Preparing Brochure...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Brochure Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
