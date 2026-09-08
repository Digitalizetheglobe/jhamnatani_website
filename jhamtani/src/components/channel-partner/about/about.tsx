"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, User, Phone, Mail, Building, FileCheck, MapPin, Briefcase, MessageSquare, Send } from "lucide-react";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn";
}

function WaveText({ text, letterDelay = 15, groupHoverClass = "group-hover" }: WaveTextProps) {
  const hoverClass =
    groupHoverClass === "group-hover/btn"
      ? "group-hover/btn:-translate-y-full"
      : "group-hover:-translate-y-full";

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex items-center justify-center gap-[0.02em] select-none" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden py-0.5 -my-0.5">
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

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firmName: "",
    contactPerson: "",
    phone: "",
    email: "",
    reraNumber: "",
    agencyType: "Individual",
    operatingCity: "Pune",
    experience: "",
    message: "",
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const partnerPoints = [
    {
      title: "Trust Before Transactions",
      description:
        "Transparent communication, ethical practices and relationships built to last.",
    },
    {
      title: "Growth That Grows Together",
      description:
        "Opportunities, rewards and support that help both our partners and our brand succeed.",
    },
    {
      title: "Support at Every Step",
      description:
        "A dedicated team that stands beside you from enquiry to closure and beyond.",
    },
    {
      title: "A Brand You Can Believe In",
      description:
        "Quality developments, timely commitments and a reputation that inspires customer confidence.",
    },
    {
      title: "Tools That Empower Success",
      description:
        "Marketing collateral, sales enablement and timely information to help you perform at your best.",
    },
    {
      title: "Recognition That Matters",
      description:
        "Celebrating your contribution through incentives, appreciation and long-term partnerships.",
    },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, "");
    if (rawVal.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: rawVal }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required.";
    } else if (formData.contactPerson.trim().length < 2) {
      newErrors.contactPerson = "Name must be at least 2 characters.";
    }

    if (!formData.phone) {
      newErrors.phone = "Mobile number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Mobile number must be exactly 10 digits.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the communication consent.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setErrors({});
      setFormData({
        firmName: "",
        contactPerson: "",
        phone: "",
        email: "",
        reraNumber: "",
        agencyType: "Individual",
        operatingCity: "Pune",
        experience: "",
        message: "",
        consent: true,
      });
    }, 300);
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
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      <section className="w-full bg-[#EFECE6] text-[#2B2B2B] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
          {/* 6 Grid Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-y-12 sm:gap-y-16"
          >
            {partnerPoints.map((item, index) => {
              const isLastInRow = (index + 1) % 3 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col items-center justify-start text-center px-6 sm:px-8 space-y-3.5 ${
                    !isLastInRow ? "md:border-r md:border-[#A0725B]/30" : ""
                  }`}
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-[#A0725B] font-light leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#333333]/90 font-normal leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center pt-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 sm:px-12 py-3.5 sm:py-3 rounded-full border border-[#A0725B]/60 text-[#2B2B2B] font-serif text-base sm:text-lg md:text-xl font-light bg-[#EFECE6] shadow-[22px_20px_32px_rgba(60,45,30,0.42)] hover:shadow-[26px_26px_40px_rgba(70,45,30,0.5)] hover:bg-[#A0725B] hover:text-white hover:border-[#A0725B] transition-all duration-300 cursor-pointer"
            >
              Be Our Business Associate. Fill in this Channel Partner Form
            </button>
          </motion.div>
        </div>
      </section>

      {/* Channel Partner Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF5F0] text-zinc-900 rounded-3xl border border-[#A0725B]/40 shadow-2xl overflow-hidden flex flex-col my-auto z-10"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[#A0725B]/20 bg-[#F3ECE4] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#A0725B] block">
                    Channel Partner Registration
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-light">
                    Be Our Business Associate
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 font-light leading-relaxed">
                    Partner with Jhamtani and build long-lasting, profitable relationships.
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#A0725B]/15 border border-[#A0725B] text-[#A0725B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-light">
                      Application Submitted Successfully
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
                      Thank you for your interest in partnering with Jhamtani. Our Channel Partner Relations team will review your application and get in touch with you shortly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleCloseModal}
                        className="px-8 py-2.5 rounded-full bg-[#A0725B] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all cursor-pointer shadow-md"
                      >
                        Done
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                    {/* Contact Person & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Contact Person Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="text"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                            placeholder="Full Name"
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                              errors.contactPerson
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#A0725B]/30 focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner`}
                          />
                        </div>
                        {errors.contactPerson && (
                          <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.contactPerson}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="10-digit Mobile Number"
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                              errors.phone
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#A0725B]/30 focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner font-mono`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email & Firm / Agency Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="name@example.com"
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border ${
                              errors.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-[#A0725B]/30 focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Firm / Agency Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="text"
                            value={formData.firmName}
                            onChange={(e) => handleInputChange("firmName", e.target.value)}
                            placeholder="e.g. Apex Realty Partners"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* MahaRERA Number & Agency Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          MahaRERA Registration No.
                        </label>
                        <div className="relative">
                          <FileCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="text"
                            value={formData.reraNumber}
                            onChange={(e) => handleInputChange("reraNumber", e.target.value)}
                            placeholder="e.g. A52100012345"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner uppercase"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Business Structure
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <select
                            value={formData.agencyType}
                            onChange={(e) => handleInputChange("agencyType", e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner"
                          >
                            <option value="Individual">Individual Channel Partner</option>
                            <option value="Proprietorship">Proprietorship Firm</option>
                            <option value="Partnership">Partnership Firm</option>
                            <option value="Private Limited">Private Limited Company</option>
                            <option value="LLP">LLP</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Operational City & Experience */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Operating City / Primary Focus
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]/70" />
                          <input
                            type="text"
                            value={formData.operatingCity}
                            onChange={(e) => handleInputChange("operatingCity", e.target.value)}
                            placeholder="e.g. Pune, Mumbai, PCMC"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                          Experience in Real Estate
                        </label>
                        <input
                          type="text"
                          value={formData.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                          placeholder="e.g. 5 Years"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Message / Remarks */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1">
                        Message / Key Specializations
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#A0725B]/70" />
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your client focus, residential/commercial focus, or previous projects..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/30 focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div>
                      <div className="flex items-start gap-3 pt-1">
                        <input
                          type="checkbox"
                          id="cp-consent"
                          checked={formData.consent}
                          onChange={(e) => handleInputChange("consent", e.target.checked)}
                          className="mt-1 w-4 h-4 accent-[#A0725B] rounded cursor-pointer shrink-0"
                        />
                        <label
                          htmlFor="cp-consent"
                          className="text-[11px] text-zinc-500 font-light leading-relaxed cursor-pointer select-none"
                        >
                          I authorize Jhamtani and its sales team to contact me regarding Channel Partner opportunities, project inventory, and commissions.
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.consent}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-[#8C5E47] transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 overflow-hidden border border-[#A0725B]"
                      >
                        <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                        <WaveText
                          text={isSubmitting ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
                          letterDelay={15}
                          groupHoverClass="group-hover/btn"
                        />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
