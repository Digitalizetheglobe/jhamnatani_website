"use client";

import { useState, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  Search,
  ChevronRight,
  Upload,
  CheckCircle2,
  X,
  FileText,
} from "lucide-react";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn" | "group-hover/link";
}

function WaveText({
  text,
  letterDelay = 20,
  groupHoverClass = "group-hover",
}: WaveTextProps) {
  const hoverClass =
    groupHoverClass === "group-hover/btn"
      ? "group-hover/btn:-translate-y-full"
      : groupHoverClass === "group-hover/link"
      ? "group-hover/link:-translate-y-full"
      : "group-hover:-translate-y-full";

  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        className="relative inline-flex items-center justify-center gap-[0.08em] whitespace-nowrap shrink-0"
        aria-hidden="true"
      >
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.3em] inline-block shrink-0" />;
          }
          return (
            <span
              key={index}
              className="relative inline-flex overflow-hidden shrink-0"
            >
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

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const PROMISE_PILLARS = [
  {
    number: "01",
    title: "Purpose Over Positions",
    description:
      "Every role contributes to building homes, communities and meaningful experiences.",
  },
  {
    number: "02",
    title: "Growth Without Limits",
    description:
      "Continuous learning, mentorship and opportunities to evolve every day.",
  },
  {
    number: "03",
    title: "People Who Inspire People",
    description:
      "Work alongside passionate individuals who believe in excellence without compromise.",
  },
  {
    number: "04",
    title: "A Culture That Cares",
    description:
      "An environment built on trust, collaboration and mutual respect.",
  },
  {
    number: "05",
    title: "Empowered To Lead",
    description:
      "Initiatives like Shakti Edge and continuous development help every individual realise their potential.",
  },
];

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Project Architect & Design Lead",
    department: "Architecture & Design",
    location: "Head Office – Balewadi, Pune",
    type: "Full Time",
    experience: "5 - 8 Years",
    description:
      "Lead architectural concept detailing, master planning coordination, and aesthetic refinement across Jhamtani's premium residential and commercial landmarks.",
    responsibilities: [
      "Collaborate with principal designers and structural engineers from concept to delivery.",
      "Ensure adherence to Jhamtani's signature architectural standards and aesthetic precision.",
      "Review working drawings, MEP alignments, and landscape design integrations.",
      "Drive sustainable, future-ready design methodologies across luxury developments.",
    ],
    requirements: [
      "B.Arch / M.Arch from a recognized institute.",
      "5+ years of experience in luxury real estate developments.",
      "Proficiency in AutoCAD, Revit, SketchUp, and BIM workflows.",
      "Strong aesthetic sensibility and attention to architectural craftsmanship.",
    ],
  },
  {
    id: "job-2",
    title: "Assistant Manager – Sales & Business Development",
    department: "Sales & Marketing",
    location: "Baner / Koregaon Park NX, Pune",
    type: "Full Time",
    experience: "3 - 6 Years",
    description:
      "Drive sales engagement for premium residential & commercial projects, nurturing customer relationships and driving high-value closures.",
    responsibilities: [
      "Engage prospective homebuyers and investors with in-depth project walk-throughs.",
      "Nurture relationships with channel partners and institutional buyers.",
      "Achieve monthly and quarterly booking milestones with transparent advisory.",
      "Coordinate with CRM teams for seamless post-sales handover and support.",
    ],
    requirements: [
      "Graduate / MBA in Marketing, Real Estate, or related discipline.",
      "3+ years of proven track record in luxury or premium residential sales in Pune.",
      "Excellent communication, presentation, and negotiation skills.",
      "Customer-centric mindset aligned with Jhamtani's promise of trust.",
    ],
  },
  {
    id: "job-3",
    title: "Site Execution Engineer (Civil & Quality)",
    department: "Engineering & Construction",
    location: "Thergaon / Ravet / Mundhwa, Pune",
    type: "Full Time",
    experience: "4 - 7 Years",
    description:
      "Oversee day-to-day site execution, structural quality enforcement, and timeline milestones on-ground with zero compromise on safety.",
    responsibilities: [
      "Manage contractor teams, site labor, and daily civil construction activities.",
      "Inspect materials, concrete pourings, and structural finishes against QA/QC checklists.",
      "Ensure strict compliance with environmental and site safety protocols.",
      "Track site milestones against master schedules to ensure timely project delivery.",
    ],
    requirements: [
      "B.E. / B.Tech / Diploma in Civil Engineering.",
      "4+ years on-site execution experience in high-rise residential construction.",
      "Thorough knowledge of IS codes, structural drawings, and safety standards.",
      "Proactive problem-solving and field leadership abilities.",
    ],
  },
  {
    id: "job-4",
    title: "Customer Relationship Manager (Hamesha Aapke Saath)",
    department: "Customer Experience",
    location: "Head Office – Balewadi, Pune",
    type: "Full Time",
    experience: "3 - 5 Years",
    description:
      "Champion customer delight through every milestone—from booking, demand letters, and site visits to handover and post-possession care.",
    responsibilities: [
      "Act as dedicated single point of contact for homeowners throughout their journey.",
      "Manage documentation, agreement registrations, and payment schedule updates.",
      "Facilitate possession inspections, key handover ceremonies, and grievance resolutions.",
      "Uphold the Hamesha Aapke Saath promise of prompt, empathetic service.",
    ],
    requirements: [
      "Bachelor's degree with experience in customer experience / CRM in real estate or hospitality.",
      "Empathetic communication with strong conflict-resolution capabilities.",
      "Familiarity with CRM software (Salesforce, Farvision, or similar).",
      "Dedication to exceeding customer expectations and building lifelong trust.",
    ],
  },
  {
    id: "job-5",
    title: "Digital Marketing & Brand Communications Specialist",
    department: "Sales & Marketing",
    location: "Head Office – Balewadi, Pune",
    type: "Full Time",
    experience: "2 - 5 Years",
    description:
      "Build brand resonance through digital campaigns, performance marketing, content storytelling, and high-impact real estate brand activations.",
    responsibilities: [
      "Manage performance marketing campaigns across Meta, Google Ads, and real estate portals.",
      "Craft compelling narratives around Jhamtani's legacy, projects, and community stories.",
      "Analyze funnel metrics, cost-per-lead, and conversion performance.",
      "Coordinate with creative agencies for digital collateral, video shoots, and PR coverage.",
    ],
    requirements: [
      "Degree in Marketing, Communications, Media, or related field.",
      "2+ years experience handling real estate performance marketing and brand communication.",
      "Hands-on expertise in Google Ads, Meta Ads Manager, GA4, and SEO fundamentals.",
      "Creative storytelling flair with analytical acumen.",
    ],
  },
  {
    id: "job-6",
    title: "Talent Development & HR Executive (Shakti Edge)",
    department: "Human Resources",
    location: "Head Office – Balewadi, Pune",
    type: "Full Time",
    experience: "2 - 4 Years",
    description:
      "Power people development, employee engagement initiatives, and the Shakti Edge learning academy to nurture talent across every department.",
    responsibilities: [
      "Drive employee onboarding, continuous learning sessions, and mentorship programs.",
      "Coordinate the Shakti Edge leadership development modules and workshops.",
      "Facilitate employee well-being, recognition programs, and team-building events.",
      "Support talent acquisition and recruitment pipelines for growing business verticals.",
    ],
    requirements: [
      "MBA / Master's in Human Resource Management.",
      "2+ years of HR experience in organizational development or talent acquisition.",
      "Passionate about building people-first workplace culture and learning systems.",
      "Strong interpersonal, organizational, and empathetic leadership skills.",
    ],
  },
];

const DEPARTMENTS = [
  "All",
  "Sales & Marketing",
  "Engineering & Construction",
  "Architecture & Design",
  "Customer Experience",
  "Human Resources",
];

export default function CareerComponent() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeJobModal, setActiveJobModal] = useState<JobOpening | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [selectedJobForApply, setSelectedJobForApply] = useState<JobOpening | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    linkedin: "",
    coverNote: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileInputId = useId();

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    const matchesDept =
      selectedDept === "All" || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleOpenApply = (job?: JobOpening) => {
    if (job) {
      setSelectedJobForApply(job);
      setFormData((prev) => ({ ...prev, position: job.title }));
    } else {
      setSelectedJobForApply(null);
      setFormData((prev) => ({ ...prev, position: "General Application" }));
    }
    setActiveJobModal(null);
    setSubmitSuccess(false);
    setApplicationModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-32">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO BANNER */}
      {/* ------------------------------------------------------------- */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Careers Banner"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[36px] sm:text-[52px] lg:text-[64px] text-[#C5A880] tracking-[0.15em] leading-none uppercase"
          >
            CAREERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Build a Career That Builds Lives
          </motion.p>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. INTRODUCTION BLOCK */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 mt-14 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#A0725B] font-light leading-snug">
            Build a Career That Builds Lives.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-700 font-light leading-relaxed max-w-3xl mx-auto">
            Every role at Jhamtani contributes to something far greater than
            construction. Together, we create homes, communities and experiences
            that leave a lasting impact, while growing as individuals every step of
            the way.
          </p>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE PROMISE TO OUR PEOPLE - Symmetrical & Clean Layout */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 mt-20 sm:mt-28">
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A0725B] font-semibold">
            Our Culture &amp; Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B] font-light leading-tight">
            The Promise to Our People
          </h2>
          <div className="w-16 h-[2px] bg-[#A0725B] mx-auto mt-3" />
        </div>

        {/* Symmetrical 6-column Grid (3 on top row, 2 centered on bottom row) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-stretch"
        >
          {PROMISE_PILLARS.map((pillar, index) => {
            // Row 1 (first 3 items) span 2 columns each on large screens (total 6 cols)
            // Row 2 (last 2 items) span 3 columns each on large screens (total 6 cols, perfectly balanced!)
            const isBottomRow = index >= 3;

            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className={`group flex flex-col justify-between bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-xl p-8 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative ${
                  isBottomRow
                    ? "lg:col-span-3 md:col-span-1"
                    : "lg:col-span-2 md:col-span-1"
                }`}
              >
                <div className="space-y-4">
                  {/* Elegant Number Header */}
                  <span className="font-serif text-3xl sm:text-4xl text-[#A0725B] font-light block leading-none">
                    {pillar.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-[26px] text-[#2B2B2B] group-hover:text-[#A0725B] transition-colors duration-300 font-light leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="w-full h-[1px] bg-[#A0725B]/20 mt-6 group-hover:bg-[#A0725B]/60 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 4. CURRENT OPENINGS SECTION */}
      {/* ------------------------------------------------------------- */}
      <div id="openings" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 mt-24 sm:mt-32">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A0725B] font-semibold">
              Explore Opportunities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2B2B] font-light leading-tight">
              Current Openings
            </h2>
          </div>

          {/* General Application Button */}
          <button
            onClick={() => handleOpenApply()}
            className="group/btn relative px-6 py-2.5 rounded-full border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-widest cursor-pointer shadow-sm inline-flex items-center justify-center shrink-0"
          >
            <WaveText text="SUBMIT GENERAL CV" letterDelay={15} groupHoverClass="group-hover/btn" />
          </button>
        </div>

        {/* Filter Controls: Tabs & Search */}
        <div className="space-y-6 mb-10">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, department, location..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#F3ECE4] border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 placeholder-zinc-500 font-sans text-xs focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-900 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DEPARTMENTS.map((dept) => {
              const isActive = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`group relative px-5 sm:px-6 py-2 rounded-full font-sans text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#A0725B] text-white border border-[#A0725B] shadow-md font-medium"
                      : "bg-[#F3ECE4] text-zinc-700 hover:text-[#A0725B] border border-[#A0725B]/25 hover:border-[#A0725B]"
                  }`}
                >
                  <WaveText text={dept.toUpperCase()} letterDelay={15} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.06,
                  }}
                  className="group flex flex-col justify-between bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div className="space-y-3.5">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-zinc-600 font-sans font-medium">
                        {job.type}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2B2B2B] group-hover:text-[#A0725B] transition-colors duration-300 font-light leading-snug">
                      {job.title}
                    </h3>

                    {/* Meta info */}
                    <div className="space-y-1.5 text-xs text-zinc-600 font-sans pt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#A0725B]" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#A0725B]" />
                        <span>Experience: {job.experience}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="font-sans text-xs text-zinc-700 font-light line-clamp-3 leading-relaxed pt-1">
                      {job.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-[#A0725B]/20 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveJobModal(job)}
                      className="text-xs text-[#A0725B] hover:text-[#8A5F4A] font-sans font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleOpenApply(job)}
                      className="group/btn relative px-5 py-2 rounded-full border border-[#A0725B] bg-[#FAF5F0] text-[#A0725B] hover:bg-[#A0725B] hover:text-white transition-all duration-300 font-sans text-[11px] uppercase tracking-wider cursor-pointer shadow-sm inline-flex items-center justify-center"
                    >
                      <WaveText text="APPLY NOW" letterDelay={15} groupHoverClass="group-hover/btn" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="w-full py-16 text-center rounded-xl bg-[#F3ECE4] border border-[#A0725B]/25 space-y-3">
            <Briefcase className="w-8 h-8 text-[#A0725B] mx-auto" />
            <h3 className="font-serif text-xl text-[#2B2B2B]">No Openings Found</h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
              No positions matched your selected filter. Please reset filters or
              send us your CV.
            </p>
            <button
              onClick={() => {
                setSelectedDept("All");
                setSearchQuery("");
              }}
              className="mt-2 px-5 py-2 rounded-full border border-[#A0725B] text-[#A0725B] hover:bg-[#A0725B] hover:text-white text-xs font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-xl bg-[#F3ECE4] border border-[#A0725B]/30 space-y-5"
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] font-light">
            Don't see a suitable opening?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-700 font-light max-w-xl leading-relaxed">
            We are always interested in connecting with passionate talent. Send your
            resume directly to{" "}
            <a
              href="mailto:careers@jhamtani.com"
              className="text-[#A0725B] font-medium underline underline-offset-4 hover:text-[#8A5F4A]"
            >
              careers@jhamtani.com
            </a>{" "}
            and we will keep your profile in our talent pool.
          </p>
          <button
            onClick={() => handleOpenApply()}
            className="group/btn relative px-8 sm:px-12 py-3.5 sm:py-3 rounded-full border border-[#A0725B]/60 text-[#2B2B2B] font-serif text-base sm:text-lg font-light bg-[#FAF5F0] shadow-[12px_12px_24px_rgba(60,45,30,0.15)] hover:shadow-[16px_16px_30px_rgba(70,45,30,0.25)] hover:bg-[#A0725B] hover:text-white hover:border-[#A0725B] transition-all duration-300 cursor-pointer"
          >
            <WaveText text="Be Part of Our Journey. Submit Your CV" letterDelay={15} groupHoverClass="group-hover/btn" />
          </button>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL 1: JOB DETAILS MODAL */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeJobModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveJobModal(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#FAF5F0] text-zinc-900 rounded-2xl border border-[#A0725B]/40 shadow-2xl overflow-hidden flex flex-col my-auto z-10"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[#A0725B]/20 bg-[#F3ECE4] flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-2.5 py-0.5 rounded-full uppercase shadow-sm inline-block">
                    {activeJobModal.department}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] font-light">
                    {activeJobModal.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 font-sans pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A0725B]" />
                      {activeJobModal.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#A0725B]" />
                      {activeJobModal.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A0725B]" />
                      {activeJobModal.type}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveJobModal(null)}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#A0725B] font-semibold">
                    Role Overview
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {activeJobModal.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#A0725B] font-semibold">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {activeJobModal.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-zinc-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A0725B] shrink-0 mt-1.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-[#A0725B] font-semibold">
                    Requirements &amp; Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {activeJobModal.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-zinc-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A0725B] shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 sm:p-8 border-t border-[#A0725B]/20 bg-[#F3ECE4] flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="px-6 py-2.5 rounded-full border border-[#A0725B]/40 text-zinc-700 hover:text-black text-xs font-sans uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => handleOpenApply(activeJobModal)}
                  className="group/btn relative px-7 py-2.5 rounded-full border border-[#A0725B] bg-[#A0725B] text-white hover:bg-[#8A5F4A] transition-all duration-300 font-sans text-xs uppercase tracking-widest cursor-pointer shadow-sm inline-flex items-center justify-center"
                >
                  <WaveText text="APPLY FOR POSITION" letterDelay={15} groupHoverClass="group-hover/btn" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* MODAL 2: APPLICATION FORM MODAL */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {applicationModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplicationModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF5F0] text-zinc-900 rounded-2xl border border-[#A0725B]/40 shadow-2xl overflow-hidden flex flex-col my-auto z-10"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[#A0725B]/20 bg-[#F3ECE4] flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B] font-light">
                    Join Jhamtani
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 font-light">
                    {selectedJobForApply
                      ? `Applying for: ${selectedJobForApply.title}`
                      : "General Career Application"}
                  </p>
                </div>
                <button
                  onClick={() => setApplicationModalOpen(false)}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#A0725B]/15 border border-[#A0725B] text-[#A0725B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#2B2B2B]">
                      Application Submitted Successfully
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-700 max-w-md mx-auto leading-relaxed">
                      Thank you for your interest in building a career with Jhamtani.
                      Our Talent Acquisition team will review your profile and reach
                      out if your experience matches our requirements.
                    </p>
                    <button
                      onClick={() => setApplicationModalOpen(false)}
                      className="mt-4 px-8 py-2.5 rounded-full bg-[#A0725B] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all cursor-pointer shadow-sm"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Position */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                        Position Applying For *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.position}
                        onChange={(e) =>
                          setFormData({ ...formData, position: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                        placeholder="e.g. Senior Project Architect"
                      />
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                          placeholder="Your Full Name"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                          Experience (Years) *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                          placeholder="e.g. 5 Years"
                        />
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                        Upload Resume / CV (PDF, DOCX) *
                      </label>
                      <div className="relative border-2 border-dashed border-[#A0725B]/40 hover:border-[#A0725B] rounded-xl p-5 text-center bg-[#F3ECE4]/60 transition-colors">
                        <input
                          type="file"
                          id={fileInputId}
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResumeFile(e.target.files[0]);
                            }
                          }}
                          className="sr-only"
                          required={!resumeFile}
                        />
                        <label
                          htmlFor={fileInputId}
                          className="cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                        >
                          <Upload className="w-6 h-6 text-[#A0725B]" />
                          {resumeFile ? (
                            <div className="text-xs text-[#A0725B] font-medium flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>{resumeFile.name}</span>
                            </div>
                          ) : (
                            <>
                              <p className="font-sans text-xs text-zinc-700">
                                <span className="text-[#A0725B] font-medium underline underline-offset-2">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-[10px] text-zinc-500 font-sans">
                                Supported formats: PDF, DOC, DOCX (Max 10MB)
                              </p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Cover Note */}
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-zinc-600 mb-1">
                        Brief Note / Why Jhamtani?
                      </label>
                      <textarea
                        rows={2}
                        value={formData.coverNote}
                        onChange={(e) =>
                          setFormData({ ...formData, coverNote: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all resize-none"
                        placeholder="Tell us briefly about yourself..."
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setApplicationModalOpen(false)}
                        className="px-5 py-2.5 rounded-full border border-[#A0725B]/40 text-zinc-700 hover:text-black font-sans text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn relative px-7 py-2.5 rounded-full border border-[#A0725B] bg-[#A0725B] text-white hover:bg-[#8A5F4A] transition-all duration-300 font-sans text-xs uppercase tracking-widest cursor-pointer shadow-sm inline-flex items-center justify-center disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Submitting...</span>
                        ) : (
                          <WaveText text="SUBMIT APPLICATION" letterDelay={15} groupHoverClass="group-hover/btn" />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
