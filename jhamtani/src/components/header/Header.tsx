"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleScroll();
    checkMobile();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const pathname = usePathname();

  const navLinks = [
    { label: "Our Story", href: "/about" },
    { label: "Our Promises", href: "/#promises" },
    { label: "Our Projects", href: "/#projects" },
    { label: "XO Series", href: "/xo" },
  ];

  // Clip path configurations for luxury transition reveal
  const clipPathOpen = isMobile
    ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    : "polygon(0% 0%, 100% 0%, 82% 100%, 0% 100%)";

  const clipPathClosed = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-luxury py-4 border-b border-luxury-border"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/assets/logo.webp"
              alt="Jhamtani Logo"
              width={145}
              height={70}
              priority
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop & Mobile Navigation (Unified to match design) */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 font-sans text-[15px] font-normal text-white/80">
              <Link 
                href="/about" 
                className={`transition-colors duration-300 ${
                  pathname === "/about" ? "text-[#C5A880] font-medium" : "hover:text-[#a0725b]"
                }`}
              >
                Our Story
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/#promises" className="hover:text-[#a0725b] transition-colors duration-300">
                Our Promises
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/#projects" className="hover:text-[#a0725b] transition-colors duration-300">
                Our Projects
              </Link>
              <span className="text-white/20">|</span>
              <Link 
                href="/xo" 
                className={`transition-colors duration-300 ${
                  pathname === "/xo" ? "text-[#C5A880] font-medium" : "hover:text-[#a0725b]"
                }`}
              >
                XO Series
              </Link>
            </nav>

            {/* Hamburger Button (Pill styled to match reference video) */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center space-x-3 border border-[#C5A880]/30 hover:border-[#C5A880] px-5 py-2.5 rounded-full text-white/90 hover:text-[#C5A880] transition-all duration-300 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="w-4 h-4" />
              <span className="font-sans text-[13px] font-medium tracking-widest uppercase">Menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Luxury Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay with slow elegant fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] cursor-pointer"
            />

            {/* Circular Close Button (Placed as a sibling to avoid clipPath cut-off, centered on boundary) */}
            <motion.button
              key="close-button"
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="fixed flex items-center justify-center cursor-pointer text-white 
                         w-14 h-14 lg:w-40 lg:h-40 z-[110]
                         right-6 top-6 lg:right-auto lg:top-[50%] lg:left-[59.15vw] lg:-translate-x-1/2 lg:-translate-y-1/2 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full relative overflow-visible pointer-events-none">
                {/* Circle outline with dashoffset closure and rotation on hover */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#C5A880"
                  strokeWidth="1"
                  fill="transparent"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "189 283", rotate: 60 }}
                  animate={
                    isCloseHovered
                      ? { strokeDasharray: "283 283", rotate: 420 }
                      : { strokeDasharray: "189 283", rotate: 60 }
                  }
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
              {/* Thin X Icon in center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 24 24" className="w-5 h-5 lg:w-9 lg:h-9 text-white/90" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </motion.button>

            {/* Drawer Panel with diagonal clip-path animation */}
            <motion.div
              initial={{ clipPath: clipPathClosed }}
              animate={{ clipPath: clipPathOpen }}
              exit={{ clipPath: clipPathClosed }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 h-screen w-full lg:w-[65vw] bg-black z-[100] flex flex-col justify-between p-8 lg:p-16 overflow-hidden border-r border-white/5"
            >
              {/* Top Bar inside Drawer */}
              <div className="flex items-center justify-between">
                <Link href="/" className="relative flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/assets/logo.webp"
                    alt="Jhamtani Logo"
                    width={145}
                    height={70}
                    priority
                    className="h-14 w-auto object-contain brightness-0 invert"
                  />
                </Link>
              </div>


              {/* Navigation Links in Center */}
              <div className="flex-1 flex flex-col justify-center pl-4 lg:pl-24 mt-12 lg:mt-0">
                <nav className="flex flex-col space-y-6 lg:space-y-8">
                  {navLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-serif text-3xl lg:text-[54px] uppercase tracking-wider block w-fit transition-all duration-300 hover:translate-x-4 ${
                            isActive ? "text-[#C5A880]" : "text-white/80 hover:text-[#C5A880]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Chat Assist at Bottom */}
              <div className="pl-4 lg:pl-24 mb-6 lg:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 border border-[#C5A880]/30 py-4 px-8 w-full lg:w-fit font-sans text-[13px] tracking-widest text-[#C5A880] hover:bg-[#C5A880] hover:text-black transition-all duration-500 rounded-none uppercase font-light"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Assist</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
