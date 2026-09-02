"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SquarePen, MessageSquare, X, Send, Phone, Mail } from "lucide-react";

// Custom WhatsApp SVG Icon (Standard Filled Outline)
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

const projectsList = [
  { name: "ACE Atmosphere", location: "Ravet", type: "Residential", id: 1 },
  { name: "Jhamtani Abundance", location: "Mundhwa", type: "Residential", id: 2 },
  { name: "ACE Villas", location: "Koregaon Park NX", type: "Villas", id: 3 },
  { name: "Jhamtani Bizcore", location: "Koregaon Park NX", type: "Commercial", id: 4 },
  { name: "ACE Aster", location: "Ravet", type: "Residential", id: 5 },
];

export default function FloatingWidgets() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isChatAssistOpen, setIsChatAssistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  useEffect(() => {
    const handleOpenEnquiry = (e: Event) => {
      const customEvent = e as CustomEvent;
      const project = customEvent.detail?.project || "";
      const message = customEvent.detail?.message || "";
      setFormData((prev) => ({
        ...prev,
        ...(project ? { project } : {}),
        ...(message ? { message } : {}),
      }));
      setIsEnquiryOpen(true);
    };
    window.addEventListener("open-enquiry", handleOpenEnquiry);
    return () => window.removeEventListener("open-enquiry", handleOpenEnquiry);
  }, []);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest! We will contact you shortly about: ${formData.project || "our projects"}`);
    setIsEnquiryOpen(false);
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  const filteredProjects = projectsList.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProjectSelect = (projectId: number) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    // Find section and scroll
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. RIGHT SIDE STICKY BAR */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col bg-[#F5F2EB] shadow-2xl rounded-l-[20px] py-2 px-2 gap-2 items-center select-none">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/917447447669"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#0082c3] hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <WhatsAppIcon className="w-[20px] h-[20px]" />
          <span className="absolute right-full mr-3 bg-zinc-950 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans font-medium tracking-wide shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Divider */}
        <div className="w-7 h-[1.5px] bg-black/90" />

        {/* Search Icon */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#0082c3] hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <Search className="w-[20px] h-[20px] stroke-[1.8]" />
          <span className="absolute right-full mr-3 bg-zinc-950 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans font-medium tracking-wide shadow-lg">
            Search Projects
          </span>
        </button>

        {/* Divider */}
        <div className="w-7 h-[1.5px] bg-black/90" />

        {/* Enquiry Icon */}
        <button
          onClick={() => setIsEnquiryOpen(true)}
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#0082c3] hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <SquarePen className="w-[20px] h-[20px] stroke-[1.8]" />
          <span className="absolute right-full mr-3 bg-zinc-950 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans font-medium tracking-wide shadow-lg">
            Quick Enquiry
          </span>
        </button>
      </div>

      {/* 2. CHAT ASSIST FLOAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Assist Box */}
        <AnimatePresence>
          {isChatAssistOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950 border border-zinc-800 text-white w-72 sm:w-80 rounded-2xl shadow-2xl p-5 mb-4 text-left font-sans flex flex-col space-y-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <div className="relative w-3 h-3 bg-emerald-500 rounded-full">
                    <span className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></span>
                  </div>
                  <span className="font-semibold text-sm tracking-wide text-zinc-100">Jhamtani Support</span>
                </div>
                <button
                  onClick={() => setIsChatAssistOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Live Assistant</p>
                <p className="text-sm text-zinc-300">How can we assist you with our luxury residential & commercial spaces today?</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="https://wa.me/917447447669?text=Hi!%20I'm%20interested%20in%20Jhamtani%20Projects.%20Please%20share%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/25 px-4 py-2.5 rounded-lg text-sm transition-all font-medium cursor-pointer"
                >
                  <span className="flex items-center space-x-2">
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </span>
                  <span className="text-[10px] bg-emerald-600/25 text-emerald-300 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Fast</span>
                </a>

                <button
                  onClick={() => {
                    setIsChatAssistOpen(false);
                    setIsEnquiryOpen(true);
                  }}
                  className="flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 px-4 py-2.5 rounded-lg text-sm transition-all font-medium text-left cursor-pointer"
                >
                  <SquarePen className="w-4 h-4 text-gold" />
                  <span>Request Callback</span>
                </button>

                <div className="flex flex-col space-y-1.5 pt-1 text-xs text-zinc-500 border-t border-zinc-800/60 mt-1">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-500" />
                    <span>+91 7 447 447669</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    <span>enquiry@jhamtani.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Assist Toggle Button */}
        <button
          onClick={() => setIsChatAssistOpen(!isChatAssistOpen)}
          className="flex items-center space-x-2.5 bg-[#0082c3] text-white px-2.5 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer select-none"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="font-sans text-[13px] font-bold tracking-widest uppercase">
            CHAT ASSIST
          </span>
        </button>
      </div>

      {/* 3. SEARCH OVERLAY MODAL */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-6 backdrop-blur-md"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-3 text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="w-full max-w-3xl flex flex-col space-y-10">
              <div className="space-y-4 text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide">
                  Search Jhamtani Projects
                </h3>
                <p className="font-sans text-sm text-zinc-400">
                  Explore our luxury addresses and commercial locations across Pune
                </p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter project name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-950 border-b-2 border-zinc-800 focus:border-white py-4 pl-4 pr-12 text-xl md:text-2xl text-white placeholder-zinc-600 focus:outline-none transition-colors duration-300 font-sans"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 w-6 h-6" />
              </div>

              {/* Suggestions / Results */}
              <div className="flex flex-col space-y-4 max-h-[40vh] overflow-y-auto pr-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold font-sans">
                  {searchQuery ? "Search Results" : "Featured Projects"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => handleProjectSelect(project.id)}
                        className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-4 transition-all duration-300 cursor-pointer flex flex-col text-left group"
                      >
                        <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider font-sans mb-1">
                          {project.type}
                        </span>
                        <span className="text-white font-serif text-lg group-hover:text-gold transition-colors">
                          {project.name}
                        </span>
                        <span className="text-zinc-400 text-sm font-sans mt-0.5">
                          {project.location}, Pune
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 py-8 text-center text-zinc-600 font-sans">
                      No matching projects found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. ENQUIRY MODAL */}
      <AnimatePresence>
        {isEnquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-zinc-950 border border-zinc-800 text-white w-full max-w-2xl p-6 sm:p-10 relative shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title */}
              <div className="space-y-3 text-left mb-8">
                <h3 className="font-serif text-[28px] sm:text-[34px] leading-tight text-white">
                  Begin Your <span className="text-gold block sm:inline">Extraordinary Story</span>
                </h3>
                <p className="font-sans text-sm text-zinc-400">
                  Request a callback, project brochure, or scheduled private site tour.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleEnquirySubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Project of Interest</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white/80 focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm"
                    >
                      <option value="">Select a Project</option>
                      <option value="Ace Ayodha">Ace Ayodha (Thergaon)</option>
                      <option value="ACE Atmosphere">ACE Atmosphere (Ravet)</option>
                      <option value="Jhamtani Abundance">Jhamtani Abundance (Mundhwa)</option>
                      <option value="ACE Villas">ACE Villas (Koregaon Park NX)</option>
                      <option value="Jhamtani Bizcore">Jhamtani Bizcore (Koregaon Park NX)</option>
                      <option value="ACE Aster">ACE Aster (Ravet)</option>
                      <option value="Jhamtani Elevate">Jhamtani Elevate (Mundhwa)</option>
                      <option value="Jhamtani SpaceBiz">Jhamtani SpaceBiz (Baner)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-3 bg-white hover:bg-zinc-200 text-zinc-950 font-sans text-base font-semibold w-full py-4 rounded-lg transition-all duration-300 cursor-pointer mt-4"
                >
                  <span>SUBMIT ENQUIRY</span>
                  <Send className="w-4 h-4 fill-zinc-950" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
