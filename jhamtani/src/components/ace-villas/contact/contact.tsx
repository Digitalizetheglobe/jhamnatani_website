"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  config: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  config?: string;
  consent?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    config: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Phone input validator: strictly allow digits only and limit length to 10
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: value }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors((prev) => ({ ...prev, consent: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    // Phone Validation (Must be exactly 10 digits)
    if (!formData.phone) {
      tempErrors.phone = "Mobile number is required.";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      tempErrors.phone = "Mobile number must be exactly 10 digits.";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Configuration Validation
    if (!formData.config) {
      tempErrors.config = "Please select a preferred configuration.";
      isValid = false;
    }

    // Consent Checkbox Validation
    if (!formData.consent) {
      tempErrors.consent = "You must agree to the terms to proceed.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          config: "",
          message: "",
          consent: false,
        });
        setErrors({});
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#EEEBE7] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-zinc-900 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif font-light text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#A0725B] tracking-wide"
          >
            Discover your private address
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14px] sm:text-[15px] text-zinc-700 leading-relaxed font-light mt-4 max-w-2xl"
          >
            Explore villa details, plans and current availability at XO Ace Villas. Our team will help you understand the residence and arrange a private project visit.
          </motion.p>
        </div>

        {/* Contact Form Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto bg-[#191F26] p-8 sm:p-12 lg:p-16 shadow-2xl text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Input Grid (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Name field */}
              <div className="flex flex-col space-y-2">
                <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-[#191F26] border ${
                    errors.name ? "border-red-500/80 focus:border-red-500" : "border-zinc-700 focus:border-[#A0725B]"
                  } px-4 py-3 rounded-sm text-white placeholder-zinc-600 focus:outline-none transition-colors text-sm font-sans`}
                />
                {errors.name && (
                  <span className="text-red-400 text-xs font-sans tracking-wide">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Mobile Number field */}
              <div className="flex flex-col space-y-2">
                <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="10-Digit Mobile Number"
                  className={`w-full bg-[#191F26] border ${
                    errors.phone ? "border-red-500/80 focus:border-red-500" : "border-zinc-700 focus:border-[#A0725B]"
                  } px-4 py-3 rounded-sm text-white placeholder-zinc-600 focus:outline-none transition-colors text-sm font-sans`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-xs font-sans tracking-wide">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col space-y-2">
                <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className={`w-full bg-[#191F26] border ${
                    errors.email ? "border-red-500/80 focus:border-red-500" : "border-zinc-700 focus:border-[#A0725B]"
                  } px-4 py-3 rounded-sm text-white placeholder-zinc-600 focus:outline-none transition-colors text-sm font-sans`}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs font-sans tracking-wide">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Configuration Dropdown */}
              <div className="flex flex-col space-y-2">
                <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                  Preferred Configuration
                </label>
                <select
                  name="config"
                  value={formData.config}
                  onChange={handleChange}
                  className={`w-full bg-[#191F26] border ${
                    errors.config ? "border-red-500/80 focus:border-red-500" : "border-zinc-700 focus:border-[#A0725B]"
                  } px-4 py-3 rounded-sm text-white/80 focus:outline-none transition-colors text-sm font-sans cursor-pointer`}
                >
                  <option value="" className="text-zinc-600">
                    Select Configuration
                  </option>
                  <option value="4 BHK Luxury Villa" className="text-white">4 BHK Luxury Villa</option>
                  <option value="5 BHK Ultra-Luxury Villa" className="text-white">5 BHK Ultra-Luxury Villa</option>
                  <option value="Bespoke Estate Villa" className="text-white">Bespoke Estate Villa</option>
                </select>
                {errors.config && (
                  <span className="text-red-400 text-xs font-sans tracking-wide">
                    {errors.config}
                  </span>
                )}
              </div>
            </div>

            {/* Message field (Full Width) */}
            <div className="flex flex-col space-y-2">
              <label className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="w-full bg-[#191F26] border border-zinc-700 focus:border-[#A0725B] px-4 py-3 rounded-sm text-white placeholder-zinc-600 focus:outline-none transition-colors text-sm font-sans resize-none"
              />
            </div>

            {/* Custom Consent Checkbox Row */}
            <div className="flex flex-col space-y-1.5 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border transition-all duration-200 rounded-sm flex items-center justify-center ${
                      formData.consent
                        ? "bg-[#A0725B] border-[#A0725B]"
                        : errors.consent
                        ? "border-red-500/80 bg-red-500/5"
                        : "border-zinc-700 group-hover:border-[#A0725B]"
                    }`}
                  >
                    {formData.consent && <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />}
                  </div>
                </div>
                <span className="text-[12px] sm:text-[13px] text-zinc-400 font-light leading-snug tracking-wide select-none">
                  I authorize Jhamtani Group and its representatives to contact me via phone calls, SMS, WhatsApp, and email regarding project updates, pricing, and marketing brochures.
                </span>
              </label>
              {errors.consent && (
                <span className="text-red-400 text-xs font-sans tracking-wide pl-8">
                  {errors.consent}
                </span>
              )}
            </div>

            {/* Centered Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-[#A0725B] text-white hover:bg-[#A0725B] hover:text-white rounded-full px-12 py-3.5 text-xs sm:text-sm tracking-widest uppercase bg-transparent cursor-pointer font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(160,114,91,0.25)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Visit Ace Villas & Logo Section */}
        <div className="mt-15 border-t border-zinc-300/40 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-12 md:gap-6">
          {/* Left Block: Site Address & RERA */}
          <div className="flex flex-col text-left space-y-6 max-w-xl w-full">
            <h3 className="font-serif font-light text-[28px] sm:text-[45px] text-[#A0725B] leading-tight tracking-wide">
              Visit XO Ace Villas
            </h3>
            
            <div className="space-y-3 font-sans text-sm text-zinc-700 leading-relaxed font-light">
              <p>
                <strong className="font-semibold text-zinc-900">Site Address : </strong>
                Koregaon Park NX, Mundhwa, Pune, Maharashtra 411036
              </p>
              <p>
                <strong className="font-semibold text-zinc-900">Contact : </strong>
                +91 73533 00533
                <span className="mx-3 text-zinc-400">|</span>
                <strong className="font-semibold text-zinc-900">Email : </strong>
                enquiry@jhamtani.com
              </p>
            </div>

            {/* RERA info */}
            <div className="flex items-start gap-4 pt-2">
              {/* RERA QR code image */}
              <Image
                src="/assets/ace-ayodha/rera.webp"
                alt="MahaRERA Registration QR Code"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain border border-zinc-200"
              />
              
              <div className="flex flex-col space-y-1 mt-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/maha-rea.png"
                    alt="MahaRERA Logo Stamp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <span className="font-sans font-bold text-[18px] sm:text-[28px] text-zinc-950 tracking-wide leading-none">
                    PR1261012600416
                  </span>
                </div>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] sm:text-[12px] text-zinc-500 hover:text-zinc-800 transition-colors font-light tracking-wide"
                >
                  https://maharera.mahaonline.gov.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Brand Logo */}
          <div className="shrink-0 flex items-center justify-center md:justify-center w-full md:w-auto mt-4 md:mt-0">
            <Image
              src="/assets/pojetcts/ace_villas_logo.webp"
              alt="ACE Villas Logo"
              width={260}
              height={100}
              className="w-auto h-20 sm:h-24 md:h-36 object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Success Modal Popup */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="bg-[#191F26] border border-zinc-800 text-white w-full max-w-md p-8 shadow-2xl rounded-sm relative text-center flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success Badge */}
              <div className="w-14 h-14 bg-[#A0725B]/20 rounded-full border border-[#A0725B]/30 flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#A0725B] stroke-[2.5]" />
              </div>

              {/* Message */}
              <h3 className="font-serif text-[24px] text-white leading-tight mb-3">
                Enquiry Submitted!
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Thank you for your interest in Ace Villas. Our luxury relationship manager will get in touch with you shortly.
              </p>

              {/* Done Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="border border-[#A0725B] text-white hover:bg-[#A0725B] hover:text-white rounded-full px-8 py-2.5 text-xs tracking-wider uppercase bg-transparent cursor-pointer font-semibold transition-colors duration-300"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
