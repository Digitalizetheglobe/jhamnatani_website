"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Building2,
  Compass,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactUsComponent() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
        consent: true,
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const experienceCentres = [
    {
      name: "ACE Ayodhya Experience Centre",
      location: "Thergaon, Pune",
      type: "Residential",
      mapUrl: "https://maps.app.goo.gl/xGQJPu5EGTvjVMCX8",
    },
    {
      name: "Mundhwa Experience Centre",
      subtext: "ACE Abundance & Jhamtani Elevate",
      location: "Mundhwa, Pune",
      type: "Residential & Studio",
      mapUrl: "https://maps.app.goo.gl/6D4qdjPCjVYpbVHn7",
    },
    {
      name: "Ravet Experience Centre",
      subtext: "ACE Atmosphere & ACE Aster",
      location: "Ravet, Pune",
      type: "Residential",
      mapUrl: "https://maps.app.goo.gl/PpJ66RukXKwegA5r6",
    },
    {
      name: "Koregaon Park NX Centre",
      subtext: "ACE Villas & Jhamtani Bizcore",
      location: "Koregaon Park NX, Pune",
      type: "Villas & Studio",
      mapUrl: "https://maps.app.goo.gl/efy7ZLxVURwiotWM6",
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none pb-24">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Contact Us Banner"
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
              HOME &nbsp;/&nbsp; CONTACT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[42px] sm:text-[56px] lg:text-[68px] text-[#C5A880] tracking-[0.2em] leading-none uppercase"
          >
            CONTACT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Connect with Jhamtani Real Estate &amp; Site Experience Centres
          </motion.p>
        </div>
      </div>

      {/* 2. Main Content: Contact Details & Form */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-14 sm:mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A0725B] block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-light leading-tight">
                Contact Details
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-light mt-3 leading-relaxed">
                Whether you are seeking your dream home, exploring high-yield commercial suites, or requesting a site visit, our dedicated property advisors are at your service.
              </p>
            </div>

            {/* Contact Items Stack */}
            <div className="space-y-4">
              {/* Head Office */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#A0725B]/20 shadow-sm hover:border-[#A0725B]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center shrink-0 border border-[#A0725B]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-serif text-base text-zinc-900 font-medium flex items-center gap-1.5">
                    <span>Head Office:</span>
                  </h4>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    Office No. 1303 / 1309, Nandan Probiz,<br />
                    Balewadi High St., Baner, Pune, Maharashtra 411045
                  </p>
                  <a
                    href="https://maps.app.goo.gl/nXNbJS46SHJopH2E7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#A0725B] hover:text-zinc-900 font-semibold pt-1 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#A0725B]/20 shadow-sm hover:border-[#A0725B]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center shrink-0 border border-[#A0725B]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-serif text-base text-zinc-900 font-medium">Email</h4>
                  <a
                    href="mailto:enquiry@jhamtani.com"
                    className="text-xs sm:text-sm text-zinc-700 hover:text-[#A0725B] font-light block transition-colors"
                  >
                    enquiry@jhamtani.com
                  </a>
                </div>
              </div>

              {/* Contact Number */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#A0725B]/20 shadow-sm hover:border-[#A0725B]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center shrink-0 border border-[#A0725B]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-serif text-base text-zinc-900 font-medium">Contact No</h4>
                  <a
                    href="tel:+917447447669"
                    className="text-xs sm:text-sm text-zinc-700 hover:text-[#A0725B] font-light block transition-colors font-mono"
                  >
                    +91 7447447669
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F3ECE4] border border-[#A0725B]/20 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center shrink-0 border border-[#A0725B]/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="font-serif text-base text-zinc-900 font-medium">Working Hours</h4>
                  <p className="text-xs text-zinc-600 font-light">
                    Monday – Saturday: 10:00 AM – 7:00 PM<br />
                    Sunday: Site Visits by Prior Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#A0725B]/25 shadow-xl text-left h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A0725B] block mb-2">
                  SEND AN ENQUIRY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-light">
                  We&apos;d Love to Hear From You
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-light mt-2 mb-8 leading-relaxed">
                  Fill in your details below and our team will get back to you promptly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-4 bg-[#FAF5F0] rounded-2xl border border-[#A0725B]/30 p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-300">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-2xl text-zinc-900">
                        Thank You for Reaching Out!
                      </h4>
                      <p className="text-xs text-zinc-600 max-w-sm font-light leading-relaxed">
                        Your message has been submitted successfully. A Jhamtani representative will contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5F0] border border-[#A0725B]/25 focus:border-[#A0725B] focus:bg-white focus:outline-none text-xs text-zinc-900 transition-all shadow-inner"
                      />
                    </div>

                    {/* Mobile & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          placeholder="10-digit Mobile"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF5F0] border border-[#A0725B]/25 focus:border-[#A0725B] focus:bg-white focus:outline-none text-xs text-zinc-900 transition-all shadow-inner font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FAF5F0] border border-[#A0725B]/25 focus:border-[#A0725B] focus:bg-white focus:outline-none text-xs text-zinc-900 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                        Your Message / Enquiry Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the project you are interested in or questions you have..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF5F0] border border-[#A0725B]/25 focus:border-[#A0725B] focus:bg-white focus:outline-none text-xs text-zinc-900 transition-all shadow-inner"
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        type="checkbox"
                        id="contact-consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-[#A0725B] rounded cursor-pointer shrink-0"
                      />
                      <label htmlFor="contact-consent" className="text-[11px] text-zinc-500 font-light leading-relaxed cursor-pointer select-none">
                        I authorize Jhamtani and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND / NDNC.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-zinc-900 transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Site Experience Centres Grid */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A0725B] block mb-2">
              SALES HUBS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-zinc-900 font-light">
              Site Experience Centres
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-light mt-2">
              Visit our project experience centres across Pune for immersive mock-up walk-throughs and advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceCentres.map((centre, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#A0725B]/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left space-y-4"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center border border-[#A0725B]/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-zinc-900 font-medium leading-snug">
                    {centre.name}
                  </h4>
                  {centre.subtext && (
                    <p className="text-[11px] text-[#A0725B] font-semibold tracking-wider uppercase">
                      {centre.subtext}
                    </p>
                  )}
                  <p className="text-xs text-zinc-500 font-light flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{centre.location}</span>
                  </p>
                </div>

                <a
                  href={centre.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A0725B] hover:text-zinc-950 font-semibold pt-2 border-t border-zinc-100 transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Full Width Google Maps Embed */}
        <div className="mt-16 sm:mt-20 rounded-3xl overflow-hidden border border-[#A0725B]/25 shadow-xl bg-white">
          <div className="p-4 sm:p-6 bg-[#F3ECE4] border-b border-[#A0725B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] text-[#A0725B] flex items-center justify-center border border-[#A0725B]/20">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base text-zinc-900 font-medium">
                  Head Office Location Map
                </h4>
                <p className="text-xs text-zinc-500 font-light">
                  Nandan Probiz, Balewadi High Street, Baner, Pune
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/nXNbJS46SHJopH2E7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#A0725B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-zinc-900 transition-colors shadow-sm cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[380px] sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30251.915505884386!2d73.782777!3d18.597043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90d89289ecf%3A0x778a4f7e7f221d94!2sJHAMTANI%20(%20HEAD%20OFFICE)!5e0!3m2!1sen!2sin!4v1713530675183!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jhamtani Head Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
