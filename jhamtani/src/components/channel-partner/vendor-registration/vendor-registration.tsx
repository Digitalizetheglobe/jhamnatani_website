"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
  MapPin,
  CheckCircle2,
  Check,
  Send,
  X,
  Clock,
  Handshake,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn";
}

function WaveText({ text, letterDelay = 15, groupHoverClass = "group-hover/btn" }: WaveTextProps) {
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

const vendorPillars = [
  {
    title: "Uncompromised Quality",
    desc: "Partner in crafting high-grade materials and engineering for Pune's landmark developments.",
    icon: Building2,
  },
  {
    title: "Punctual Commitments",
    desc: "Streamlined procurement workflows and dependable payment cycles you can rely on.",
    icon: Clock,
  },
  {
    title: "Long-Term Synergy",
    desc: "Expand your business footprint across our residential, commercial, and XO Series projects.",
    icon: Handshake,
  },
  {
    title: "Transparent Governance",
    desc: "Ethical onboarding, direct management interaction, and dedicated vendor support.",
    icon: ShieldCheck,
  },
];

export default function VendorRegistration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceType: "",
    firmDetails: "",
    address: "",
    consent: true,
  });

  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, "");
    if (rawVal.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: rawVal }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = "Type of Service / Products is required.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the authorization consent.";
    }

    if (!isCaptchaChecked) {
      newErrors.captcha = "Please complete the reCAPTCHA verification.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setErrors({});
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        serviceType: "",
        firmDetails: "",
        address: "",
        consent: true,
      });
      setIsCaptchaChecked(false);
    }, 300);
  };

  return (
    <section className="relative w-full bg-[#191F26] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 overflow-hidden select-none">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-[#A0725B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A0725B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & Action Button */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A0725B]/15 border border-[#A0725B]/30 text-[#A0725B] text-xs font-sans font-semibold tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A0725B] animate-pulse" />
              VENDOR REGISTRATION
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-[34px] sm:text-[44px] lg:text-[50px] leading-tight text-[#A0725B] tracking-wide"
            >
              BUILD THE PROMISE WITH US.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed font-light max-w-xl"
            >
              We’re always looking to partner with vendors who believe in quality, commitment and doing things right. Register with Jhamtani and become a part of the ecosystem shaping what comes next.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group/btn relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#A0725B] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#8C5E47] transition-all duration-300 shadow-[0_10px_25px_rgba(160,114,91,0.3)] hover:shadow-[0_15px_30px_rgba(160,114,91,0.45)] cursor-pointer overflow-hidden border border-[#A0725B]"
              >
                <FileSpreadsheet className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:scale-110" />
                <WaveText
                  text="REGISTER AS A VENDOR"
                  letterDelay={15}
                  groupHoverClass="group-hover/btn"
                />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 2x2 Vendor Pillars Feature Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
          >
            {vendorPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#A0725B]/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#A0725B]/15 border border-[#A0725B]/30 flex items-center justify-center text-[#A0725B] mb-4 group-hover:bg-[#A0725B] group-hover:text-white transition-all duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-light text-base sm:text-lg text-white group-hover:text-[#A0725B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Vendor Registration Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white text-zinc-900 rounded-3xl border border-[#A0725B]/40 shadow-2xl overflow-hidden flex flex-col my-auto z-10"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-[#A0725B]/20 bg-[#F8F6F3] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#A0725B] block">
                    VENDOR REGISTRATION
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-light">
                    BUILD THE PROMISE WITH US.
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 font-light leading-relaxed">
                    Register with Jhamtani and become a part of the ecosystem shaping what comes next.
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black transition-colors cursor-pointer"
                  aria-label="Close vendor registration modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Form */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#A0725B]/15 border border-[#A0725B] text-[#A0725B] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-light">
                      Registration Submitted Successfully
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed font-light">
                      Thank you for registering your firm with Jhamtani. Our procurement team will review your credentials and contact you for upcoming opportunities.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleCloseModal}
                        className="px-8 py-2.5 rounded-full bg-[#A0725B] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all cursor-pointer shadow-md"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Company Name & Contact Person */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            placeholder="Company Name"
                            className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border ${
                              errors.companyName ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.companyName && (
                          <p className="text-red-500 text-xs mt-1 font-light">{errors.companyName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Contact Person <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
                          <input
                            type="text"
                            value={formData.contactPerson}
                            onChange={(e) => handleChange("contactPerson", e.target.value)}
                            placeholder="Contact Person"
                            className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border ${
                              errors.contactPerson ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.contactPerson && (
                          <p className="text-red-500 text-xs mt-1 font-light">{errors.contactPerson}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email ID & Phone Number with Country Flag */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Email ID <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="Email ID"
                            className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border ${
                              errors.email ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1 font-light">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative flex items-center">
                          <div className="absolute left-3.5 flex items-center gap-1.5 z-10 pointer-events-none select-none">
                            <span className="text-sm">🇮🇳</span>
                            <span className="text-xs font-mono text-zinc-700 font-medium">+91</span>
                            <span className="text-zinc-400 text-xs">|</span>
                          </div>
                          <input
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter your phone number"
                            className={`w-full pl-24 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border ${
                              errors.phone ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                            } text-zinc-900 font-sans text-xs focus:outline-none transition-all font-mono`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 font-light">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Type of Service / Products */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                        Type of Service / Products <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0725B]" />
                        <input
                          type="text"
                          value={formData.serviceType}
                          onChange={(e) => handleChange("serviceType", e.target.value)}
                          placeholder="Type of Service / Products (e.g. Civil Construction, Electrical, Interior Design, MEP, Supplies)"
                          className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border ${
                            errors.serviceType ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                          } text-zinc-900 font-sans text-xs focus:outline-none transition-all`}
                        />
                      </div>
                      {errors.serviceType && (
                        <p className="text-red-500 text-xs mt-1 font-light">{errors.serviceType}</p>
                      )}
                    </div>

                    {/* Row 4: Tell us more about your firm & Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Tell us more about your firm
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-4 top-3 w-4 h-4 text-[#A0725B]" />
                          <textarea
                            rows={3}
                            value={formData.firmDetails}
                            onChange={(e) => handleChange("firmDetails", e.target.value)}
                            placeholder="Tell us more about your firm"
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border border-[#E0D9D0] focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all resize-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                          Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-3 w-4 h-4 text-[#A0725B]" />
                          <textarea
                            rows={3}
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            placeholder="Address"
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#F8F6F3] border border-[#E0D9D0] focus:border-[#A0725B] text-zinc-900 font-sans text-xs focus:outline-none transition-all resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Custom Consent Checkbox Row */}
                    <div className="flex flex-col space-y-1.5 pt-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-0.5">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => handleChange("consent", e.target.checked)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 border transition-all duration-200 rounded-sm flex items-center justify-center ${
                              formData.consent
                                ? "bg-[#A0725B] border-[#A0725B]"
                                : errors.consent
                                ? "border-red-500/80 bg-red-500/5"
                                : "border-zinc-400 group-hover:border-[#A0725B]"
                            }`}
                          >
                            {formData.consent && <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />}
                          </div>
                        </div>
                        <span className="text-[11px] sm:text-[12px] text-zinc-600 font-light leading-snug tracking-wide select-none">
                          I authorize Jhamtani and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                        </span>
                      </label>
                      {errors.consent && (
                        <span className="text-red-500 text-xs font-sans tracking-wide pl-8">
                          {errors.consent}
                        </span>
                      )}
                    </div>

                    {/* Captcha Component Box */}
                    <div className="pt-1">
                      <div className="inline-flex items-center justify-between p-3 bg-[#F8F8F8] border border-[#D3D3D3] rounded-md shadow-sm min-w-[280px] max-w-xs">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="recaptcha-check-modal"
                            checked={isCaptchaChecked}
                            onChange={(e) => {
                              setIsCaptchaChecked(e.target.checked);
                              if (errors.captcha) {
                                setErrors((prev) => ({ ...prev, captcha: "" }));
                              }
                            }}
                            className="w-6 h-6 border-2 border-zinc-400 rounded accent-[#A0725B] cursor-pointer"
                          />
                          <label htmlFor="recaptcha-check-modal" className="text-xs font-sans text-zinc-800 cursor-pointer select-none">
                            I'm not a robot
                          </label>
                        </div>
                        <div className="flex flex-col items-center pl-4 border-l border-zinc-200">
                          <svg className="w-5 h-5 text-blue-500 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                          </svg>
                          <span className="text-[8px] font-sans text-zinc-400 tracking-tighter mt-0.5">reCAPTCHA</span>
                        </div>
                      </div>
                      {errors.captcha && (
                        <p className="text-red-500 text-xs mt-1.5 font-light">{errors.captcha}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group/btn relative w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#A0725B] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 overflow-hidden"
                      >
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        <WaveText
                          text={isSubmitting ? "SUBMITTING..." : "REGISTER AS VENDOR"}
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
    </section>
  );
}
