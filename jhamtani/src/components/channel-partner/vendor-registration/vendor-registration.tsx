"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

export default function VendorRegistration() {
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

  const resetForm = () => {
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
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section className="relative w-full bg-[#EEEBE7] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#A0725B] uppercase"
          >
            VENDOR REGISTRATION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#2B2B2B] tracking-wide mt-3"
          >
            BUILD THE PROMISE WITH US.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-sm sm:text-base text-zinc-600 leading-relaxed font-light mt-4 max-w-2xl"
          >
            We’re always looking to partner with vendors who believe in quality, commitment and doing things right. Register with Jhamtani and become a part of the ecosystem shaping what comes next.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#A0725B]/20"
        >
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
                  onClick={resetForm}
                  className="px-8 py-2.5 rounded-full bg-[#A0725B] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all cursor-pointer shadow-md"
                >
                  Register Another Firm
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Company Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border ${
                        errors.companyName ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                      } text-zinc-900 font-sans text-sm focus:outline-none transition-all`}
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
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border ${
                        errors.contactPerson ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                      } text-zinc-900 font-sans text-sm focus:outline-none transition-all`}
                    />
                  </div>
                  {errors.contactPerson && (
                    <p className="text-red-500 text-xs mt-1 font-light">{errors.contactPerson}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email ID & Phone Number with Country Flag */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border ${
                        errors.email ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                      } text-zinc-900 font-sans text-sm focus:outline-none transition-all`}
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
                    {/* Country Code Flag Box matching screenshot */}
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
                      className={`w-full pl-24 pr-4 py-3 rounded-xl bg-[#F8F6F3] border ${
                        errors.phone ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                      } text-zinc-900 font-sans text-sm focus:outline-none transition-all font-mono`}
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
                    className={`w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border ${
                      errors.serviceType ? "border-red-500" : "border-[#E0D9D0] focus:border-[#A0725B]"
                    } text-zinc-900 font-sans text-sm focus:outline-none transition-all`}
                  />
                </div>
                {errors.serviceType && (
                  <p className="text-red-500 text-xs mt-1 font-light">{errors.serviceType}</p>
                )}
              </div>

              {/* Row 4: Tell us more about your firm & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                    Tell us more about your firm
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-3.5 w-4 h-4 text-[#A0725B]" />
                    <textarea
                      rows={4}
                      value={formData.firmDetails}
                      onChange={(e) => handleChange("firmDetails", e.target.value)}
                      placeholder="Tell us more about your firm"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border border-[#E0D9D0] focus:border-[#A0725B] text-zinc-900 font-sans text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-600 mb-1.5">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-[#A0725B]" />
                    <textarea
                      rows={4}
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      placeholder="Address"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#F8F6F3] border border-[#E0D9D0] focus:border-[#A0725B] text-zinc-900 font-sans text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Consent Checkbox Row (Same design as other site forms) */}
              <div className="flex flex-col space-y-1.5 pt-2">
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
                  <span className="text-[12px] sm:text-[13px] text-zinc-600 font-light leading-snug tracking-wide select-none">
                    I authorize Jhamtani and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-red-500 text-xs font-sans tracking-wide pl-8">
                    {errors.consent}
                  </span>
                )}
              </div>

              {/* Captcha Component Box (Matching screenshot format) */}
              <div className="pt-2">
                <div className="inline-flex items-center justify-between p-3.5 bg-[#F8F8F8] border border-[#D3D3D3] rounded-md shadow-sm min-w-[280px] max-w-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="recaptcha-check"
                      checked={isCaptchaChecked}
                      onChange={(e) => {
                        setIsCaptchaChecked(e.target.checked);
                        if (errors.captcha) {
                          setErrors((prev) => ({ ...prev, captcha: "" }));
                        }
                      }}
                      className="w-7 h-7 border-2 border-zinc-400 rounded accent-[#A0725B] cursor-pointer"
                    />
                    <label htmlFor="recaptcha-check" className="text-xs font-sans text-zinc-800 cursor-pointer select-none">
                      I'm not a robot
                    </label>
                  </div>
                  <div className="flex flex-col items-center pl-4 border-l border-zinc-200">
                    <svg className="w-6 h-6 text-blue-500 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                    <span className="text-[9px] font-sans text-zinc-400 tracking-tighter mt-0.5">reCAPTCHA</span>
                  </div>
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-xs mt-1.5 font-light">{errors.captcha}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-full bg-[#A0725B] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#8A5F4A] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 overflow-hidden"
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
        </motion.div>
      </div>
    </section>
  );
}
