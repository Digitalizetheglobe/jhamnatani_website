"use client";

import Link from "next/link";

export default function Footer() {
  const quickLinksColumn1 = [
    { label: "OUR LEGACY", href: "#" },
    { label: "AWARDS & ACHIEVEMENTS", href: "#" },
    { label: "CUSTOMER TESTIMONIALS", href: "#" },
    { label: "PROJECT BROCHURES", href: "#" },
  ];

  const quickLinksColumn2 = [
    { label: "PROJECT LOCATIONS", href: "#" },
    { label: "MAHARERA", href: "#" },
    { label: "CHANNEL PARTNERS", href: "/channel-partner" },
    { label: "MEDIA PUBLICATIONS", href: "#" },
  ];

  const quickLinksColumn3 = [
    { label: "SITE UPDATES", href: "#" },
    { label: "MONTHLY NEWSLETTER", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
  ];

  const currentProjectsColumn1 = [
    { label: "ACE AYODHYA - THERGAON", href: "#" },
    { label: "JHAMTANI ABUNDANCE - MUNDHWA", href: "#" },
    { label: "ACE VILLAS - KOREGAON PARK NX", href: "#" },
    { label: "ACE ATMOSPHERE - RAVET", href: "#" },
  ];

  const currentProjectsColumn2 = [
    { label: "ACE ASTER - RAVET", href: "#" },
    { label: "JHAMTANI BIZCORE - KOREGAON PARK NX", href: "#" },
    { label: "JHAMTANI ELEVATE - MUNDHWA", href: "#" },
    { label: "JHAMTANI SPACEBIZ - BANER", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#111622] text-white border-t border-luxury-border py-16 md:py-20 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid: Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 1. Quick Links Section (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-serif text-[18px] md:text-[20px] tracking-wider text-[#C5A880] uppercase">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ul className="space-y-3">
                {quickLinksColumn1.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] font-medium text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 tracking-wider leading-relaxed block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksColumn2.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] font-medium text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 tracking-wider leading-relaxed block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksColumn3.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] font-medium text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 tracking-wider leading-relaxed block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Current Projects Section (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-serif text-[18px] md:text-[20px] tracking-wider text-[#C5A880] uppercase">
              Current Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                {currentProjectsColumn1.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] font-medium text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 tracking-wider leading-relaxed block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {currentProjectsColumn2.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-sans text-[11px] font-medium text-zinc-400 hover:text-[#C5A880] transition-colors duration-300 tracking-wider leading-relaxed block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Scroll to Top Button (2 Cols) */}
          <div className="lg:col-span-2 flex lg:justify-end justify-start">
            <style dangerouslySetInnerHTML={{__html: `
              .footer-scroll-top-circle-path {
                stroke-dasharray: 298.5;
                stroke-dashoffset: 298.5;
                transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);
              }
              .group:hover .footer-scroll-top-circle-path {
                stroke-dashoffset: 0;
              }
            `}} />
            <button
              onClick={scrollToTop}
              className="group relative w-16 h-16 rounded-full   text-[#C5A880]  flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
              {/* Border SVG overlay */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                {/* Base border (Gold/Bronze at 60% opacity) */}
                <circle
                  cx="50"
                  cy="50"
                  r="47.5"
                  className="fill-none stroke-[#C5A880]/60 stroke-[1.5]"
                />
                {/* Animated active border (White) */}
                <circle
                  cx="50"
                  cy="50"
                  r="47.5"
                  className="fill-none stroke-white stroke-[2] footer-scroll-top-circle-path"
                />
              </svg>

              <svg className="w-6 h-6 stroke-[1.8] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full border-t border-luxury-border" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          
          {/* Contact Details (Left Side) */}
          <div className="space-y-6 text-left max-w-2xl">
            <h4 className="font-serif text-[18px] tracking-wider text-[#C5A880] uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zinc-300 font-sans text-[14px]">
                <svg className="w-4 h-4 text-[#C5A880] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+917447447669" className="hover:text-[#C5A880] transition-colors">
                  +91 7447447669
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zinc-300 font-sans text-[14px]">
                <svg className="w-4.5 h-4.5 text-[#C5A880] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>
                  <strong className="text-white font-medium pr-1">HEAD OFFICE:</strong>
                  Office No. 1303/1309, Nandan Probiz, Balewadi High St., Baner, Pune, Maharashtra 411045
                </span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-300 font-sans text-[14px]">
                <svg className="w-4 h-4 text-[#C5A880] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:enquiry@jhamtani.com" className="hover:text-[#C5A880] transition-colors">
                  enquiry@jhamtani.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons (Right Side) */}
          <div className="flex items-center space-x-3 shrink-0 justify-center md:justify-end">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880]/10 text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880]/10 text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880]/10 text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300"
              aria-label="Youtube"
            >
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md border border-white/20 hover:border-[#C5A880] hover:bg-[#C5A880]/10 text-white hover:text-[#C5A880] flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 stroke-[1.8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
