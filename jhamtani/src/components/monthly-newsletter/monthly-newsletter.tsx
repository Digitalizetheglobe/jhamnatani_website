"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Download,
  ExternalLink,
  Calendar,
  Sparkles,
  FileText,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Mail,
  CheckCircle2,
  Award,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Book,
  File,
  LayoutGrid,
  Loader2,
} from "lucide-react";

interface NewsletterEdition {
  id: string;
  title: string;
  month: string;
  year: number;
  badge?: string;
  tagline: string;
  pdfUrl: string;
  date: string;
}

const newslettersData: NewsletterEdition[] = [
  {
    id: "july-2026",
    title: "Annual Magazine July 2026",
    month: "July",
    year: 2026,
    badge: "Special Annual Edition",
    tagline: "Celebrating 18+ Years of Milestone Excellence & Sky-High Living",
    pdfUrl: "/assets/newsletter/July-2026.pdf",
    date: "July 2026",
  },
  {
    id: "june-2026",
    title: "Monthly Buzz June 2026",
    month: "June",
    year: 2026,
    badge: "Latest Edition",
    tagline: "Summer Construction Highlights, Project Deliveries & Community Stories",
    pdfUrl: "/assets/newsletter/June-2026.pdf",
    date: "June 2026",
  },
  {
    id: "may-2026",
    title: "Monthly Buzz May 2026",
    month: "May",
    year: 2026,
    tagline: "Customer Appreciation Month, Studio Living Innovations & Site Updates",
    pdfUrl: "/assets/newsletter/May-2026.pdf",
    date: "May 2026",
  },
  {
    id: "april-2026",
    title: "Monthly Buzz April 2026",
    month: "April",
    year: 2026,
    tagline: "Q1 Milestone Reflections, Engineering Masterclass & Luxury Architecture",
    pdfUrl: "/assets/newsletter/April-2026.pdf",
    date: "April 2026",
  },
  {
    id: "march-2026",
    title: "Monthly Buzz March 2026",
    month: "March",
    year: 2026,
    tagline: "Spring Into Luxury Living: Bizcore and Elevate Project Progress",
    pdfUrl: "/assets/newsletter/March-2026.pdf",
    date: "March 2026",
  },
  {
    id: "feb-2026",
    title: "Monthly Buzz February 2026",
    month: "February",
    year: 2026,
    tagline: "The Art of Refined Living: Community Spotlights & Foundation Updates",
    pdfUrl: "/assets/newsletter/Feb-2026.pdf",
    date: "February 2026",
  },
  {
    id: "jan-2026",
    title: "Monthly Buzz January 2026",
    month: "January",
    year: 2026,
    badge: "New Year Issue",
    tagline: "Welcoming 2026: The Vision for Sustainable Living & Urban Landmarks",
    pdfUrl: "/assets/newsletter/Jan-2026.pdf",
    date: "January 2026",
  },
  {
    id: "dec-2025",
    title: "Monthly Buzz December 2025",
    month: "December",
    year: 2025,
    badge: "Year-End Special",
    tagline: "Annual Highlights 2025, Key Possession Handover Ceremonies & Events",
    pdfUrl: "/assets/newsletter/Dec-2025.pdf",
    date: "December 2025",
  },
  {
    id: "oct-2025",
    title: "Monthly Buzz October 2025",
    month: "October",
    year: 2025,
    badge: "Festive Edition",
    tagline: "Diwali Festivities at Jhamtani: Special Homebuyer Rewards & Blessings",
    pdfUrl: "/assets/newsletter/October-2025.pdf",
    date: "October 2025",
  },
  {
    id: "sep-2025",
    title: "Monthly Buzz September 2025",
    month: "September",
    year: 2025,
    tagline: "Ganesh Festival Celebrations, SpaceBiz Showroom Unveilings & Insights",
    pdfUrl: "/assets/newsletter/September-2025.pdf",
    date: "September 2025",
  },
  {
    id: "aug-2025",
    title: "Monthly Buzz August 2025",
    month: "August",
    year: 2025,
    tagline: "Independence Month Special: 1800+ Families Empowered with Dream Homes",
    pdfUrl: "/assets/newsletter/August-2025.pdf",
    date: "August 2025",
  },
  {
    id: "jul-2025",
    title: "Jhamtani Annual Buzz July 2025",
    month: "July",
    year: 2025,
    badge: "Annual Buzz",
    tagline: "17th Anniversary Commemorative Edition: Crafting Skylines with Pride",
    pdfUrl: "/assets/newsletter/July-2025.pdf",
    date: "July 2025",
  },
  {
    id: "jun-2025",
    title: "Monthly Buzz June 2025",
    month: "June",
    year: 2025,
    tagline: "Monsoon Preparedness, Eco-Friendly Construction & Project Milestones",
    pdfUrl: "/assets/newsletter/June-2025.pdf",
    date: "June 2025",
  },
  {
    id: "may-2025",
    title: "Monthly Buzz May 2025",
    month: "May",
    year: 2025,
    tagline: "Summer Construction Sprint, Structural Milestones across Ravet & Mundhwa",
    pdfUrl: "/assets/newsletter/May-2025.pdf",
    date: "May 2025",
  },
  {
    id: "apr-2025",
    title: "e-Newsletter April 2025",
    month: "April",
    year: 2025,
    tagline: "New Financial Year Kickoff: ACE Aster & ACE Atmosphere Upgrades",
    pdfUrl: "/assets/newsletter/April-2025.pdf",
    date: "April 2025",
  },
  {
    id: "mar-2025",
    title: "JTribe Monthly Buzz March 2025",
    month: "March",
    year: 2025,
    tagline: "Holistic Living & Modern Architecture at ACE Villas & ACE Abundance",
    pdfUrl: "/assets/newsletter/March-2025.pdf",
    date: "March 2025",
  },
  {
    id: "feb-2025",
    title: "e-Newsletter February 2025",
    month: "February",
    year: 2025,
    tagline: "JTribe Community Gathering: Family Carnival & Resident Interaction",
    pdfUrl: "/assets/newsletter/Feb-2025.pdf",
    date: "February 2025",
  },
  {
    id: "jan-2025",
    title: "Newsletter January 2025",
    month: "January",
    year: 2025,
    badge: "Inaugural 2025",
    tagline: "Setting The Pace for 2025: Groundbreaking Ceremonies & Project Plans",
    pdfUrl: "/assets/newsletter/Jan-2025.pdf",
    date: "January 2025",
  },
];

/* -------------------------------------------------------------
   INTERACTIVE FLIPBOOK MODAL COMPONENT (PDF.JS POWERED)
-------------------------------------------------------------- */
function BookFlipReaderModal({
  edition,
  onClose,
}: {
  edition: NewsletterEdition;
  onClose: () => void;
}) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDoublePage, setIsDoublePage] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");

  const pdfDocRef = useRef<any>(null);
  const canvasLeftRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRightRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-switch to single page on smaller screens
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 820) {
        setIsDoublePage(false);
      } else {
        setIsDoublePage(true);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Load PDF.js from CDN dynamically if not present
  useEffect(() => {
    let isMounted = true;

    const loadPdfJs = async () => {
      setIsLoading(true);

      if (!(window as any).pdfjsLib) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const pdfjsLib = (window as any).pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      try {
        const loadingTask = pdfjsLib.getDocument(edition.pdfUrl);
        const pdf = await loadingTask.promise;
        if (!isMounted) return;

        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setCurrentPage(1);
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading PDF document:", err);
        setIsLoading(false);
      }
    };

    loadPdfJs();

    return () => {
      isMounted = false;
    };
  }, [edition.pdfUrl]);

  // Render Current Page(s)
  const renderPages = useCallback(async () => {
    if (!pdfDocRef.current) return;

    try {
      const pdf = pdfDocRef.current;
      const baseScale = isDoublePage ? 1.05 * zoomLevel : 1.35 * zoomLevel;

      if (isDoublePage) {
        // Double Page Book Spread Logic:
        // Page 1 is Cover (shown on Right side or single)
        const leftPageNum = currentPage === 1 ? null : currentPage;
        const rightPageNum = currentPage === 1 ? 1 : currentPage + 1 <= numPages ? currentPage + 1 : null;

        // Render Left Page
        if (canvasLeftRef.current) {
          const canvas = canvasLeftRef.current;
          const ctx = canvas.getContext("2d");
          if (leftPageNum && leftPageNum <= numPages) {
            const page = await pdf.getPage(leftPageNum);
            const viewport = page.getViewport({ scale: baseScale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              await page.render({ canvasContext: ctx, viewport }).promise;
            }
          } else {
            // Blank left side if on page 1 (cover)
            canvas.width = 10;
            canvas.height = 10;
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }

        // Render Right Page
        if (canvasRightRef.current) {
          const canvas = canvasRightRef.current;
          const ctx = canvas.getContext("2d");
          if (rightPageNum && rightPageNum <= numPages) {
            const page = await pdf.getPage(rightPageNum);
            const viewport = page.getViewport({ scale: baseScale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              await page.render({ canvasContext: ctx, viewport }).promise;
            }
          } else {
            canvas.width = 10;
            canvas.height = 10;
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      } else {
        // Single Page Mode
        if (canvasRightRef.current) {
          const canvas = canvasRightRef.current;
          const ctx = canvas.getContext("2d");
          if (currentPage <= numPages) {
            const page = await pdf.getPage(currentPage);
            const viewport = page.getViewport({ scale: baseScale });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              await page.render({ canvasContext: ctx, viewport }).promise;
            }
          }
        }
      }
    } catch (e) {
      console.error("Page render error:", e);
    }
  }, [currentPage, isDoublePage, zoomLevel, numPages]);

  useEffect(() => {
    if (!isLoading && pdfDocRef.current) {
      renderPages();
    }
  }, [isLoading, currentPage, isDoublePage, zoomLevel, renderPages]);

  // Page Navigation Handlers
  const handlePrevPage = () => {
    setFlipDirection("prev");
    if (isDoublePage) {
      if (currentPage <= 1) return;
      if (currentPage === 2) {
        setCurrentPage(1);
      } else {
        setCurrentPage((prev) => Math.max(1, prev - 2));
      }
    } else {
      setCurrentPage((prev) => Math.max(1, prev - 1));
    }
  };

  const handleNextPage = () => {
    setFlipDirection("next");
    if (isDoublePage) {
      if (currentPage === 1) {
        if (numPages >= 2) setCurrentPage(2);
      } else {
        if (currentPage + 2 <= numPages) {
          setCurrentPage((prev) => prev + 2);
        } else if (currentPage + 1 <= numPages) {
          setCurrentPage((prev) => prev + 1);
        }
      }
    } else {
      if (currentPage < numPages) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  // Keyboard navigation (Arrow keys, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "ArrowRight") handleNextPage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const isCover = isDoublePage && currentPage === 1;
  const pageDisplayLabel = isDoublePage
    ? currentPage === 1
      ? `Cover (Page 1 of ${numPages})`
      : `Pages ${currentPage} - ${Math.min(currentPage + 1, numPages)} of ${numPages}`
    : `Page ${currentPage} of ${numPages}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between select-none ${
        isFullscreen ? "p-0" : "p-2 sm:p-4 md:p-6"
      }`}
    >
      {/* 1. Header Toolbar */}
      <div className="w-full max-w-7xl flex items-center justify-between py-2.5 px-4 sm:px-6 bg-[#121620]/95 border border-[#C5A880]/30 rounded-2xl text-white backdrop-blur-md shadow-2xl shrink-0 mb-2 sm:mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#A0725B]/25 text-[#C5A880] flex items-center justify-center border border-[#C5A880]/30">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif text-sm sm:text-base text-white font-medium line-clamp-1">
              {edition.title}
            </h4>
            <span className="text-[10px] text-[#C5A880] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span>{edition.date}</span>
              <span>&bull;</span>
              <span>3D Digital Magazine</span>
            </span>
          </div>
        </div>

        {/* Top Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={edition.pdfUrl}
            download
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#A0725B] hover:bg-[#C5A880] text-white hover:text-zinc-950 text-xs font-semibold tracking-wider transition-all duration-300 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>

          <a
            href={edition.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Open in new window"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors cursor-pointer"
            title="Close Book"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Open Book Presentation Canvas */}
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl flex-1 flex items-center justify-center overflow-auto p-2 sm:p-4 rounded-3xl bg-[#090C12] border border-[#C5A880]/20 shadow-[inset_0_4px_30px_rgba(0,0,0,0.8)]"
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-10 h-10 text-[#C5A880] animate-spin" />
            <p className="text-xs text-zinc-400 tracking-widest uppercase font-medium">
              Loading Digital Magazine &amp; Pages...
            </p>
          </div>
        ) : (
          <div className="relative flex items-center justify-center max-w-full max-h-full">
            {/* Left Page Turn Click Zone */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className={`absolute left-0 top-0 bottom-0 w-12 sm:w-16 z-30 flex items-center justify-center text-white/50 hover:text-[#C5A880] hover:bg-black/25 transition-all cursor-pointer rounded-l-2xl disabled:opacity-0 disabled:pointer-events-none group`}
              title="Previous Page"
            >
              <div className="p-2.5 rounded-full bg-black/60 group-hover:bg-[#A0725B] group-hover:text-white transition-colors shadow-lg">
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </div>
            </button>

            {/* Right Page Turn Click Zone */}
            <button
              onClick={handleNextPage}
              disabled={currentPage >= numPages}
              className={`absolute right-0 top-0 bottom-0 w-12 sm:w-16 z-30 flex items-center justify-center text-white/50 hover:text-[#C5A880] hover:bg-black/25 transition-all cursor-pointer rounded-r-2xl disabled:opacity-0 disabled:pointer-events-none group`}
              title="Next Page"
            >
              <div className="p-2.5 rounded-full bg-black/60 group-hover:bg-[#A0725B] group-hover:text-white transition-colors shadow-lg">
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </button>

            {/* Realistic 3D Book Spread Wrapper */}
            <div
              className={`relative flex items-center justify-center transition-transform duration-300 ${
                isCover ? "p-3 sm:p-5" : "p-3 sm:p-5"
              }`}
              style={{
                perspective: "1400px",
              }}
            >
              {/* Hardcover Outer Depth / Drop Shadow */}
              <div
                className={`relative flex items-stretch bg-[#151922] p-2 sm:p-3 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#C5A880]/30 transition-all duration-500 ${
                  isCover ? "max-w-[480px] sm:max-w-[560px]" : "max-w-full"
                }`}
              >
                {/* LEFT BOOK PAGE (Only shown in double-page mode when not on cover) */}
                {isDoublePage && !isCover && (
                  <motion.div
                    key={`left-${currentPage}`}
                    initial={{ opacity: 0.85, rotateY: flipDirection === "prev" ? -15 : 0 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative bg-white rounded-l-md overflow-hidden shadow-[-8px_0_20px_rgba(0,0,0,0.4)] border-r border-zinc-300"
                    style={{ transformOrigin: "right center" }}
                  >
                    {/* Left Page Edge Paper Thickness Gradient */}
                    <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
                    {/* Inner Gutter Crease Shadow */}
                    <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-black/30 via-black/10 to-transparent pointer-events-none z-10" />

                    <canvas
                      ref={canvasLeftRef}
                      className="max-h-[68vh] sm:max-h-[72vh] w-auto h-auto object-contain block bg-white"
                    />
                  </motion.div>
                )}

                {/* CENTER BOOK SPINE CREASE (When both pages visible) */}
                {isDoublePage && !isCover && (
                  <div className="w-[3px] bg-gradient-to-b from-[#8B6E52] via-[#2A1E14] to-[#8B6E52] shadow-[0_0_8px_rgba(0,0,0,0.8)] z-20 shrink-0" />
                )}

                {/* RIGHT BOOK PAGE (or Single Cover / Single Page) */}
                <motion.div
                  key={`right-${currentPage}`}
                  initial={{ opacity: 0.85, rotateY: flipDirection === "next" ? 15 : 0 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`relative bg-white overflow-hidden shadow-[8px_0_20px_rgba(0,0,0,0.4)] ${
                    isCover || !isDoublePage ? "rounded-lg" : "rounded-r-md border-l border-zinc-300"
                  }`}
                  style={{ transformOrigin: "left center" }}
                >
                  {/* Inner Gutter Crease Shadow */}
                  {isDoublePage && !isCover && (
                    <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none z-10" />
                  )}
                  {/* Right Page Edge Paper Thickness */}
                  <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />

                  <canvas
                    ref={canvasRightRef}
                    className="max-h-[68vh] sm:max-h-[72vh] w-auto h-auto object-contain block bg-white"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Floating Bottom Control & Navigation Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between gap-2 py-2 px-3 sm:px-6 bg-[#121620]/95 border border-[#C5A880]/30 rounded-full text-white backdrop-blur-lg shadow-2xl mt-2 sm:mt-3 shrink-0">
        {/* Left Side: Page Turns & Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-[#A0725B] disabled:opacity-30 disabled:pointer-events-none text-white transition-colors cursor-pointer"
            title="Previous Page (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-[11px] sm:text-xs font-medium text-zinc-200 px-2 min-w-[120px] text-center font-mono">
            {pageDisplayLabel}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= numPages}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-[#A0725B] disabled:opacity-30 disabled:pointer-events-none text-white transition-colors cursor-pointer"
            title="Next Page (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Center: Zoom Controls */}
        <div className="hidden sm:flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full border border-white/10">
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.15))}
            className="p-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] text-zinc-400 font-mono px-1">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.75, z + 0.15))}
            className="p-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Right Side: View Mode Toggle (Spread vs Single) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setIsDoublePage(!isDoublePage)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
              isDoublePage
                ? "bg-[#A0725B] border-[#A0725B] text-white"
                : "border-white/20 text-zinc-300 hover:bg-white/10"
            }`}
            title="Toggle Double Page Book Spread"
          >
            {isDoublePage ? <Book className="w-3.5 h-3.5" /> : <File className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isDoublePage ? "2-Page Spread" : "Single Page"}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------
   MAIN COMPONENT PAGE
-------------------------------------------------------------- */
export default function MonthlyNewsletterComponent() {
  const [selectedYear, setSelectedYear] = useState<"All" | "2026" | "2025">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeReaderEdition, setActiveReaderEdition] = useState<NewsletterEdition | null>(null);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredEditions = newslettersData.filter((item) => {
    const matchesYear =
      selectedYear === "All" || item.year.toString() === selectedYear;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      item.title.toLowerCase().includes(query) ||
      item.month.toLowerCase().includes(query) ||
      item.tagline.toLowerCase().includes(query) ||
      item.year.toString().includes(query);

    return matchesYear && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscriberEmail("");
      }, 4000);
    }
  };

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-16">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[450px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
            alt="Jhamtani Monthly Newsletters Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Charcoal/Bronze Luxury Overlay */}
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
              HOME &nbsp;/&nbsp; MONTHLY NEWSLETTER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[38px] sm:text-[54px] lg:text-[68px] text-[#C5A880] tracking-[0.2em] leading-none uppercase"
          >
            MONTHLY NEWSLETTERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Official Monthly Buzz, Project Milestones &amp; JTribe Community Stories
          </motion.p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 sm:mt-16">
      

        {/* 3. Filter & Search Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-8 mb-12 sm:mb-14 border-b border-[#A0725B]/20">
          {/* Year Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {(["All", "2026", "2025"] as const).map((year) => {
              const count =
                year === "All"
                  ? newslettersData.length
                  : newslettersData.filter((i) => i.year.toString() === year).length;
              const isActive = selectedYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#A0725B] border-[#A0725B] text-white shadow-md shadow-[#A0725B]/20 font-semibold"
                      : "border-[#A0725B]/30 text-zinc-700 bg-white/70 hover:bg-[#A0725B]/10 hover:border-[#A0725B] hover:text-[#A0725B]"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{year === "All" ? "All Editions" : `${year} Editions`}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/20 text-white" : "bg-[#A0725B]/15 text-[#A0725B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search month or keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-white/80 border border-[#A0725B]/25 rounded-full text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#A0725B] focus:bg-white transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 4. Newsletters Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredEditions.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.04,
                }}
                className="group flex flex-col bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 justify-between"
              >
                <div>
                  {/* 3D Magazine Cover Showcase */}
                  <div
                    onClick={() => setActiveReaderEdition(item)}
                    className="relative w-full aspect-[16/11] bg-gradient-to-br from-[#1C202A] via-[#111622] to-[#0A0D14] overflow-hidden flex items-center justify-center p-6 cursor-pointer border-b border-[#A0725B]/20 select-none group/cover"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Badge on Top Right */}
                    {item.badge && (
                      <span className="absolute top-3.5 right-3.5 z-20 bg-[#A0725B] text-white text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full shadow-md">
                        {item.badge}
                      </span>
                    )}

                    {/* 3D Book Presentation Container */}
                    <div className="relative z-10 w-44 sm:w-48 h-32 sm:h-36 bg-[#FAF5F0] text-zinc-900 rounded-r-lg rounded-l-xs p-4 shadow-[8px_12px_28px_rgba(0,0,0,0.65)] flex flex-col justify-between border-l-4 border-l-[#A0725B] group-hover/cover:scale-105 group-hover/cover:-rotate-1 transition-all duration-500">
                      {/* Spine Crease Effect */}
                      <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

                      {/* Header of Cover */}
                      <div className="flex items-center justify-between border-b border-[#A0725B]/30 pb-2">
                        <span className="font-serif text-[11px] font-bold tracking-widest text-[#A0725B] uppercase">
                          JHAMTANI
                        </span>
                        <span className="text-[9px] font-sans text-zinc-500 uppercase tracking-widest">
                          {item.year}
                        </span>
                      </div>

                      {/* Title Center */}
                      <div className="my-auto py-1 text-center">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-500 font-semibold block">
                          MONTHLY BUZZ
                        </span>
                        <h4 className="font-serif text-lg text-zinc-900 font-bold leading-tight mt-0.5">
                          {item.month}
                        </h4>
                      </div>

                      {/* Footer of Cover */}
                      <div className="flex items-center justify-between pt-1 border-t border-zinc-200/80 text-[8px] text-zinc-500 uppercase tracking-wider font-medium">
                        <span>Digital Edition</span>
                        <span className="text-[#A0725B] font-bold">Open Book &rarr;</span>
                      </div>
                    </div>

                    {/* Hover Overlay with Open Book Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0725B] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Read Book</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#A0725B]" />
                      <span>{item.date}</span>
                    </div>

                    <h3
                      onClick={() => setActiveReaderEdition(item)}
                      className="font-serif text-[20px] sm:text-[22px] text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 font-normal leading-snug cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    <p className="text-[13px] text-zinc-600 font-light leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => setActiveReaderEdition(item)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-zinc-900 transition-all duration-300 shadow-md cursor-pointer group/btn"
                  >
                    <BookOpen className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
                    <span>Open Flipbook</span>
                  </button>

                  <a
                    href={item.pdfUrl}
                    download
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold tracking-wider text-zinc-700 hover:text-[#A0725B] transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Offline</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* If no results found */}
        {filteredEditions.length === 0 && (
          <div className="text-center py-20 bg-white/60 rounded-3xl border border-[#A0725B]/20">
            <FileText className="w-12 h-12 text-[#A0725B] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-2xl text-zinc-800">No Editions Found</h3>
            <p className="text-sm text-zinc-500 mt-2 font-light">
              No monthly newsletters match your search filter &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("All");
              }}
              className="mt-5 px-6 py-2 rounded-full bg-[#A0725B] text-white text-xs tracking-wider uppercase font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* 6. Interactive 3D Flipbook / Digital Book Reader Modal */}
      <AnimatePresence>
        {activeReaderEdition && (
          <BookFlipReaderModal
            edition={activeReaderEdition}
            onClose={() => setActiveReaderEdition(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
