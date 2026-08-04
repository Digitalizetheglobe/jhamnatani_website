"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#about" },
    { label: "Our Promises", href: "#promises" },
    { label: "Our Projects", href: "#projects" },
    { label: "XO Series", href: "#xo-series" },
  ];

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
          <Link href="#" className="relative flex items-center">
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
              <Link href="#about" className="hover:text-gold transition-colors duration-300">
                Our Story
              </Link>
              <span className="text-white/20">|</span>
              <Link href="#promises" className="hover:text-gold transition-colors duration-300">
                Our Promises
              </Link>
              <span className="text-white/20">|</span>
              <Link href="#projects" className="hover:text-gold transition-colors duration-300">
                Our Projects
              </Link>
              <span className="text-white/20">|</span>
              <Link href="#xo-series" className="hover:text-gold transition-colors duration-300">
                XO Series
              </Link>
            </nav>

            {/* Hamburger Button (Visible on both desktop and mobile as in AI design) */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-white/90 hover:text-gold transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <Link href="#" className="relative flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/assets/logo.webp"
                    alt="Jhamtani Logo"
                    width={135}
                    height={50}
                    className="h-10 w-auto object-contain brightness-0 invert"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gold transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="mt-20 flex flex-col space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-3xl text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mb-12">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 border border-gold py-4 w-full font-sans text-xl text-gold hover:bg-gold hover:text-black transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>CHAT ASSIST</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
