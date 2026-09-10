"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SquarePen, MessageSquare, X, Send, Phone, Mail, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import RealTimeChatAssist from "./RealTimeChatAssist";

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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  project?: string;
  consent?: string;
}

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
    consent: true,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: val }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      tempErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.project) {
      tempErrors.project = "Please select a project of interest.";
      isValid = false;
    }

    if (!formData.consent) {
      tempErrors.consent = "You must authorize communication to proceed.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

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
      setErrors({});
      setIsSubmitted(false);
      setIsEnquiryOpen(true);
    };
    const handleOpenChatAssist = () => {
      setIsChatAssistOpen(true);
    };

    window.addEventListener("open-enquiry", handleOpenEnquiry);
    window.addEventListener("open-chat-assist", handleOpenChatAssist);
    return () => {
      window.removeEventListener("open-enquiry", handleOpenEnquiry);
      window.removeEventListener("open-chat-assist", handleOpenChatAssist);
    };
  }, []);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", project: "", message: "", consent: true });
      setErrors({});
      setTimeout(() => {
        setIsEnquiryOpen(false);
        setIsSubmitted(false);
      }, 4000);
    }, 800);
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
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#A0725B] hover:scale-110 transition-all duration-200 cursor-pointer"
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
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#A0725B] hover:scale-110 transition-all duration-200 cursor-pointer"
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
          className="group relative flex items-center justify-center p-1 text-black hover:text-[#A0725B] hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <SquarePen className="w-[20px] h-[20px] stroke-[1.8]" />
          <span className="absolute right-full mr-3 bg-zinc-950 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-sans font-medium tracking-wide shadow-lg">
            Quick Enquiry
          </span>
        </button>
      </div>

      {/* 2. REAL-TIME CHAT ASSIST MODAL & LUXURY FLOAT BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Real-Time Interactive AI Concierge */}
        <RealTimeChatAssist
          isOpen={isChatAssistOpen}
          onClose={() => setIsChatAssistOpen(false)}
          onOpenEnquiry={(project, message) => {
            setFormData((prev) => ({
              ...prev,
              ...(project ? { project } : {}),
              ...(message ? { message } : {}),
            }));
            setErrors({});
            setIsSubmitted(false);
            setIsEnquiryOpen(true);
          }}
        />

        {/* Chat Assist Luxury Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsChatAssistOpen(!isChatAssistOpen)}
          className="group relative flex items-center space-x-3 bg-gradient-to-r from-[#A0725B] via-[#8C5E47] to-[#A0725B] bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(160,114,91,0.45)] border border-[#C5A880]/50 transition-all duration-500 cursor-pointer select-none"
          aria-label="Open Real-Time Chat Assist"
        >
          {/* Pulsing notification ring */}
          

          <MessageSquare className="w-4 h-4 fill-white/20 text-white group-hover:scale-110 transition-transform duration-300" />
          <span className="font-sans text-xs sm:text-[13px] font-semibold tracking-widest uppercase">
            {isChatAssistOpen ? "CLOSE ASSIST" : "CHAT ASSIST"}
          </span>
        </motion.button>
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

              {/* Content: Form or Success Card */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4 bg-zinc-900/50 rounded-2xl border border-emerald-500/30 p-8 my-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-white">
                      Enquiry Received!
                    </h4>
                    <p className="text-xs text-zinc-400 max-w-sm font-light leading-relaxed">
                      Thank you for your interest. A Jhamtani relationship manager will connect with you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsEnquiryOpen(false);
                      setIsSubmitted(false);
                    }}
                    className="mt-4 px-8 py-2.5 bg-white text-zinc-950 font-sans text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <>
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
                  <form onSubmit={handleEnquirySubmit} noValidate className="space-y-5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                          Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Full Name"
                          className={`bg-zinc-900/60 border ${
                            errors.name ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                          } px-4 py-3 rounded-lg text-white focus:outline-none transition-colors font-sans text-sm`}
                        />
                        {errors.name && (
                          <span className="text-red-400 text-xs font-sans tracking-wide">{errors.name}</span>
                        )}
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="name@example.com"
                          className={`bg-zinc-900/60 border ${
                            errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                          } px-4 py-3 rounded-lg text-white focus:outline-none transition-colors font-sans text-sm`}
                        />
                        {errors.email && (
                          <span className="text-red-400 text-xs font-sans tracking-wide">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="10-digit Mobile Number"
                          className={`bg-zinc-900/60 border ${
                            errors.phone ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                          } px-4 py-3 rounded-lg text-white focus:outline-none transition-colors font-sans text-sm font-mono`}
                        />
                        {errors.phone && (
                          <span className="text-red-400 text-xs font-sans tracking-wide">{errors.phone}</span>
                        )}
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                          Project of Interest <span className="text-red-400">*</span>
                        </label>
                        <select
                          value={formData.project}
                          onChange={(e) => handleInputChange("project", e.target.value)}
                          className={`bg-zinc-900/60 border ${
                            errors.project ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-zinc-500"
                          } px-4 py-3 rounded-lg text-white/80 focus:outline-none transition-colors font-sans text-sm cursor-pointer`}
                        >
                          <option value="" className="text-zinc-500">Select a Project</option>
                          <option value="Ace Ayodhya" className="text-white">Ace Ayodhya (Thergaon)</option>
                          <option value="ACE Atmosphere" className="text-white">ACE Atmosphere (Ravet)</option>
                          <option value="Jhamtani Abundance" className="text-white">Jhamtani Abundance (Mundhwa)</option>
                          <option value="ACE Villas" className="text-white">ACE Villas (Koregaon Park NX)</option>
                          <option value="Jhamtani Bizcore" className="text-white">Jhamtani Bizcore (Koregaon Park NX)</option>
                          <option value="ACE Aster" className="text-white">ACE Aster (Ravet)</option>
                          <option value="Jhamtani Elevate" className="text-white">Jhamtani Elevate (Mundhwa)</option>
                          <option value="Jhamtani SpaceBiz" className="text-white">Jhamtani SpaceBiz (Baner)</option>
                        </select>
                        {errors.project && (
                          <span className="text-red-400 text-xs font-sans tracking-wide">{errors.project}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label className="font-sans text-xs text-zinc-500 uppercase tracking-widest font-semibold">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Additional details or queries..."
                        className="bg-zinc-900/60 border border-zinc-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-zinc-600 transition-colors font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Unified Consent Checkbox */}
                    <div>
                      <div className="flex items-start gap-2.5 pt-1">
                        <input
                          type="checkbox"
                          id="floating-enquiry-consent"
                          checked={formData.consent}
                          onChange={(e) => handleInputChange("consent", e.target.checked)}
                          className="mt-1 w-4 h-4 accent-[#A0725B] rounded cursor-pointer shrink-0"
                        />
                        <label
                          htmlFor="floating-enquiry-consent"
                          className="text-[11px] text-zinc-400 font-light leading-relaxed cursor-pointer select-none"
                        >
                          I authorize Jhamtani and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-red-400 text-xs font-sans mt-1">{errors.consent}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center space-x-3 bg-white hover:bg-zinc-200 text-zinc-950 font-sans text-base font-semibold w-full py-4 rounded-lg transition-all duration-300 cursor-pointer mt-4 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT ENQUIRY</span>
                          <Send className="w-4 h-4 fill-zinc-950" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
