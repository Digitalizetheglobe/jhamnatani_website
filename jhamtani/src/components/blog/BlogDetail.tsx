"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  Share2,
  CheckCircle2,
  Copy,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Building2,
  MessageSquare,
  Send,
  Sparkles,
  Tag,
  MapPin,
  FolderOpen,
  Compass,
} from "lucide-react";
import { BlogPost, blogsData, getRelatedBlogs } from "@/data/blogsData";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
  groupHoverClass?: "group-hover" | "group-hover/btn" | "group-hover/link";
}

function WaveText({ text, letterDelay = 20, groupHoverClass = "group-hover" }: WaveTextProps) {
  const hoverClass =
    groupHoverClass === "group-hover/btn"
      ? "group-hover/btn:-translate-y-full"
      : groupHoverClass === "group-hover/link"
      ? "group-hover/link:-translate-y-full"
      : "group-hover:-translate-y-full";

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex items-center justify-center gap-[0.08em] whitespace-nowrap shrink-0" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.3em] inline-block shrink-0" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden shrink-0">
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

interface BlogDetailProps {
  blog: BlogPost;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate Prev and Next posts
  const currentIndex = useMemo(() => {
    return blogsData.findIndex((b) => b.slug === blog.slug);
  }, [blog.slug]);

  const prevBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;
  const nextBlog =
    currentIndex >= 0 && currentIndex < blogsData.length - 1
      ? blogsData[currentIndex + 1]
      : null;

  // Recent Posts for the sidebar
  const recentPosts = useMemo(() => {
    return blogsData.filter((b) => b.slug !== blog.slug).slice(0, 4);
  }, [blog.slug]);

  // Unique categories
  const categoriesWithCount = useMemo(() => {
    const counts: Record<string, number> = {};
    blogsData.forEach((b) => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://jhamtani.com/blogs/${blog.slug}`;

  const handleCopyLink = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: true,
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="relative w-full bg-[#FAF5F0] text-zinc-900 overflow-hidden select-none pb-24">
      {/* 1. TOP HERO BANNER */}
      <section className="relative w-full min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex flex-col justify-center text-center px-6 overflow-hidden pt-12 pb-10">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blog.webp"
            alt="Jhamtani Blog Detail Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Charcoal/Bronze Luxury Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1.5px]" />
          {/* Subtle golden shimmer gradient line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center pt-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[26px] sm:text-[36px] lg:text-[46px] text-white tracking-wide leading-tight mb-5 max-w-3xl drop-shadow-md"
          >
            {blog.title}
          </motion.h1>

          {/* Meta Information Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 border-t border-white/20 text-xs sm:text-sm text-zinc-300"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{blog.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>By {blog.author || "admin"}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>In {blog.category}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{blog.readTime}</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT + STICKY SIDEBAR (2-COLUMN LAYOUT) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================
              LEFT COLUMN: MAIN ARTICLE (8 COLS)
             ======================================================== */}
          <article className="lg:col-span-8 space-y-10">
            {/* Featured Hero Media Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-[#A0725B]/20 bg-[#e7ddd5]">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover"
                onError={(e: any) => {
                  e.currentTarget.src = blog.fallbackImage;
                }}
              />
              {/* Date Stamp on Top Left */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-900 shadow-md flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#A0725B]" />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Main Content White Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm border border-[#A0725B]/20 space-y-8">
              
              {/* Article Header Inside Card */}
              <div className="border-b border-[#A0725B]/15 pb-6">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-zinc-900 font-semibold leading-snug">
                  {blog.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-zinc-500 mt-3">
                  <span className="text-[#A0725B] font-semibold uppercase tracking-wider">
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span>By {blog.author || "admin"}</span>
                  <span>•</span>
                  <span>In {blog.category}</span>
                </div>
              </div>

              {/* Introduction Lead with Dropcap */}
              <div className="space-y-4 text-zinc-700 text-[16px] sm:text-[17px] leading-relaxed font-light">
                {blog.intro.map((p, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "text-lg sm:text-xl font-normal text-zinc-900 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:text-[#A0725B] first-letter:mr-3 first-letter:float-left first-letter:leading-none"
                        : ""
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Article Content Sections */}
              <div className="space-y-10 pt-2">
                {blog.sections.map((section, sIdx) => (
                  <section key={sIdx} className="space-y-4">
                    {section.heading && (
                      <h3 className="font-serif text-xl sm:text-2xl text-zinc-900 font-bold tracking-tight text-[#A0725B] pt-3 border-b border-[#A0725B]/15 pb-2">
                        {section.heading}
                      </h3>
                    )}

                    {/* Paragraphs */}
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-zinc-700 text-[16px] sm:text-[17px] leading-relaxed font-light"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Bullet Points */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 my-4 pl-2">
                        {section.bulletPoints.map((item, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-zinc-700 text-[15px] sm:text-[16px] leading-relaxed font-light"
                          >
                            <div className="w-5 h-5 rounded-full bg-[#FAF5F0] text-[#A0725B] flex-shrink-0 flex items-center justify-center mt-0.5 border border-[#A0725B]/30">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout Quote Box */}
                    {section.callout && (
                      <div className="p-5 sm:p-6 my-6 rounded-2xl bg-[#FAF5F0] border-l-4 border-[#A0725B] shadow-sm">
                        <p className="text-zinc-800 font-serif italic text-base sm:text-lg leading-relaxed">
                          &ldquo;{section.callout}&rdquo;
                        </p>
                      </div>
                    )}

                    {/* Project Highlight Card */}
                    {section.projectHighlight && (
                      <div className="p-6 sm:p-7 my-6 rounded-2xl bg-[#14171C] text-white border border-[#A0725B]/30 shadow-xl relative overflow-hidden">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#A0725B]/10 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#A0725B]/20 text-[#C5A880] flex items-center justify-center">
                              <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                                {section.projectHighlight.name}
                              </h4>
                              <p className="text-xs text-[#C5A880] tracking-wide">
                                {section.projectHighlight.location}
                              </p>
                            </div>
                          </div>

                          {section.projectHighlight.size && (
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs">
                              {section.projectHighlight.size}
                            </span>
                          )}
                        </div>

                        <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                          {section.projectHighlight.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            href={section.projectHighlight.link}
                            className="group/btn relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#A0725B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer overflow-hidden border border-[#A0725B]"
                          >
                            <WaveText text="EXPLORE PROJECT" letterDelay={15} groupHoverClass="group-hover/btn" />
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                          </Link>
                          <Link
                            href="/contact"
                            className="group/btn relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase hover:border-[#A0725B] hover:text-[#C5A880] transition-all duration-300 border border-white/20 cursor-pointer overflow-hidden"
                          >
                            <WaveText text="ENQUIRE NOW" letterDelay={15} groupHoverClass="group-hover/btn" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Conclusion Section */}
              {blog.conclusion && blog.conclusion.length > 0 && (
                <div className="pt-6 border-t border-[#A0725B]/15 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-bold text-[#A0725B]">
                    {blog.conclusionHeading || "Conclusion"}
                  </h3>
                  {blog.conclusion.map((c, cIdx) => (
                    <p
                      key={cIdx}
                      className="text-zinc-700 text-[16px] sm:text-[17px] leading-relaxed font-light"
                    >
                      {c}
                    </p>
                  ))}
                </div>
              )}

              {/* FAQs Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="pt-8 border-t border-[#A0725B]/15 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#A0725B]/15 text-[#A0725B] flex items-center justify-center">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-bold">
                        Frequently Asked Questions
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Everything you need to know about {blog.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {blog.faqs.map((faq, fIdx) => {
                      const isOpen = openFaqIndex === fIdx;
                      return (
                        <div
                          key={fIdx}
                          className={`rounded-2xl transition-all duration-300 border ${
                            isOpen
                              ? "bg-[#FAF5F0] border-[#A0725B]/40 shadow-sm"
                              : "bg-[#F3ECE4]/60 border-[#A0725B]/15 hover:border-[#A0725B]/30"
                          }`}
                        >
                          <button
                            onClick={() => toggleFaq(fIdx)}
                            className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                          >
                            <span className="font-sans font-semibold text-zinc-900 text-sm sm:text-base leading-snug">
                              {faq.question}
                            </span>
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                                isOpen
                                  ? "bg-[#A0725B] text-white rotate-180"
                                  : "bg-[#A0725B]/15 text-[#A0725B]"
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 sm:px-6 pb-5 pt-1 text-zinc-600 text-sm sm:text-[15px] leading-relaxed border-t border-[#A0725B]/15 font-light">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tags & Social Share Bar */}
              <div className="pt-8 border-t border-[#A0725B]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-[#A0725B]" /> Tags:
                  </span>
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#FAF5F0] border border-[#A0725B]/20 text-zinc-700 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Social Share Icons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">
                    Share:
                  </span>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      blog.title + " - " + currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    title="Share on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title
                    )}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-800 hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    title="Share on X"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-8 h-8 rounded-full bg-[#A0725B]/15 text-[#A0725B] hover:bg-[#A0725B] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    title="Copy Link"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF5F0] border border-[#A0725B]/20 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <div className="w-14 h-14 rounded-full bg-[#A0725B] text-white flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0 shadow-md">
                  J
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 justify-center sm:justify-start">
                    <h4 className="font-serif text-lg text-zinc-900 font-semibold">
                      Jhamtani Editorial Desk
                    </h4>
                    <span className="text-[11px] text-[#A0725B] font-semibold uppercase tracking-wider bg-[#A0725B]/10 px-2 py-0.5 rounded-full">
                      Author
                    </span>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                    Dedicated to bringing home seekers, investors, and industry
                    enthusiasts authentic insights, regulatory updates, and lifestyle
                    analyses across Pune and PCMC real estate.
                  </p>
                </div>
              </div>

            </div>

            {/* PREV & NEXT POST NAVIGATION (Matching Belfort/Qode interactive styling) */}
            <div className="flex items-center justify-between gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-[#A0725B]/20 shadow-sm">
              {prevBlog ? (
                <Link
                  href={`/blogs/${prevBlog.slug}`}
                  className="group/nav flex items-center gap-3 text-left max-w-[45%]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#A0725B]/30 flex items-center justify-center text-[#A0725B] group-hover/nav:bg-[#A0725B] group-hover/nav:text-white transition-all shrink-0">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A0725B] block">
                      Prev Post
                    </span>
                    <span className="text-xs sm:text-sm font-serif text-zinc-800 group-hover/nav:text-[#A0725B] line-clamp-1 transition-colors">
                      {prevBlog.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextBlog ? (
                <Link
                  href={`/blogs/${nextBlog.slug}`}
                  className="group/nav flex items-center gap-3 text-right max-w-[45%] ml-auto"
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A0725B] block">
                      Next Post
                    </span>
                    <span className="text-xs sm:text-sm font-serif text-zinc-800 group-hover/nav:text-[#A0725B] line-clamp-1 transition-colors">
                      {nextBlog.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#A0725B]/30 flex items-center justify-center text-[#A0725B] group-hover/nav:bg-[#A0725B] group-hover/nav:text-white transition-all shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Back to All Blogs Link */}
            <div className="pt-2">
              <Link
                href="/blogs"
                className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#A0725B] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer overflow-hidden border border-[#A0725B]"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:-translate-x-1 shrink-0" />
                <WaveText text="BACK TO ALL BLOGS" letterDelay={15} groupHoverClass="group-hover/btn" />
              </Link>
            </div>
          </article>

          {/* ========================================================
              RIGHT COLUMN: STICKY SIDEBAR (4 COLS)
             ======================================================== */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            
            {/* 1. QUICK ENQUIRY FORM BOX (Matches Live Site Contact Widget) */}
            <div className="bg-[#F3ECE4] rounded-2xl p-6 sm:p-7 border border-[#A0725B]/30 shadow-md">
              <div className="border-b border-[#A0725B]/20 pb-4 mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A0725B] block">
                  EXCLUSIVE ADVISORY
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-zinc-900 font-normal mt-1">
                  Enquire About Projects
                </h4>
                <p className="text-xs text-zinc-600 font-light mt-1">
                  Get in touch with Jhamtani property specialists for site visits &amp; floorplans.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 rounded-xl bg-white border border-emerald-500/30 text-center space-y-2 text-emerald-800"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h5 className="font-serif text-lg font-semibold text-zinc-900">Enquiry Received!</h5>
                  <p className="text-xs text-zinc-600 font-light">
                    Our sales advisor will call you back shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name *"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                      placeholder="10-digit Phone Number *"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900 transition-all placeholder:text-zinc-400 font-mono"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Interested Project or Questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#A0725B]/25 focus:border-[#A0725B] focus:outline-none text-xs text-zinc-900 transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-0.5">
                    <input
                      type="checkbox"
                      id="sidebar-consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-3.5 h-3.5 accent-[#A0725B] rounded cursor-pointer shrink-0"
                    />
                    <label htmlFor="sidebar-consent" className="text-[10px] text-zinc-500 font-light leading-snug cursor-pointer select-none">
                      I authorize Jhamtani and its representative to contact me with updates via Email, SMS, WhatsApp &amp; Call (overrides DND).
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 overflow-hidden border border-[#A0725B]"
                  >
                    <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                    <WaveText text={isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"} letterDelay={15} groupHoverClass="group-hover/btn" />
                  </button>
                </form>
              )}
            </div>

            {/* 2. RECENT POSTS BOX (Matches Live Site Widget) */}
            <div className="bg-white rounded-2xl p-6 border border-[#A0725B]/20 shadow-sm space-y-4">
              <div className="border-b border-[#A0725B]/20 pb-3 flex items-center justify-between">
                <h4 className="font-serif text-lg text-zinc-900 font-semibold tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A0725B]" /> Recent Posts
                </h4>
              </div>

              <div className="divide-y divide-[#A0725B]/10 space-y-3 pt-1">
                {recentPosts.map((rPost, idx) => (
                  <Link
                    key={rPost.id}
                    href={`/blogs/${rPost.slug}`}
                    className={`group/rpost flex items-center gap-3.5 ${idx !== 0 ? "pt-3" : ""}`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden bg-[#FAF5F0] border border-[#A0725B]/20 shrink-0">
                      <Image
                        src={rPost.image}
                        alt={rPost.imageAlt}
                        fill
                        sizes="80px"
                        className="object-cover group-hover/rpost:scale-110 transition-transform duration-500"
                        onError={(e: any) => {
                          e.currentTarget.src = rPost.fallbackImage;
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-1 min-w-0">
                      <h5 className="font-serif text-xs sm:text-[13px] font-medium text-zinc-900 group-hover/rpost:text-[#A0725B] transition-colors line-clamp-2 leading-snug">
                        {rPost.title}
                      </h5>
                      <span className="text-[10px] text-zinc-500 font-light flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#A0725B]" />
                        {rPost.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. CATEGORIES BOX */}
            <div className="bg-white rounded-2xl p-6 border border-[#A0725B]/20 shadow-sm space-y-4">
              <div className="border-b border-[#A0725B]/20 pb-3">
                <h4 className="font-serif text-lg text-zinc-900 font-semibold tracking-wide flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-[#A0725B]" /> Categories
                </h4>
              </div>

              <ul className="space-y-2">
                {categoriesWithCount.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href="/blogs"
                      className="group/cat flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#FAF5F0] text-xs transition-colors"
                    >
                      <span className="text-zinc-700 group-hover/cat:text-[#A0725B] font-medium transition-colors">
                        {cat.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF5F0] group-hover/cat:bg-[#A0725B] group-hover/cat:text-white text-[#A0725B] font-semibold transition-colors border border-[#A0725B]/20">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. EXPLORE ALL PROJECTS CALLOUT BANNER */}
            <div className="rounded-2xl bg-gradient-to-br from-[#1A1F2B] to-[#0E121A] text-white p-6 border border-[#A0725B]/30 shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#A0725B]/15 rounded-full blur-2xl pointer-events-none" />
              <Compass className="w-8 h-8 text-[#C5A880] mb-3 opacity-90" />
              <h4 className="font-serif text-lg text-white font-normal leading-snug">
                Discover Jhamtani Landmarks in Pune
              </h4>
              <p className="text-xs text-zinc-400 font-light mt-1.5 mb-4 leading-relaxed">
                Villas, 2 &amp; 3 BHK luxury residences, studio suites &amp; Grade A commercial spaces.
              </p>
              <Link
                href="/projects"
                className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase bg-[#A0725B] text-white hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer overflow-hidden border border-[#A0725B]"
              >
                <WaveText text="EXPLORE ALL PROJECTS" letterDelay={15} groupHoverClass="group-hover/btn" />
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
