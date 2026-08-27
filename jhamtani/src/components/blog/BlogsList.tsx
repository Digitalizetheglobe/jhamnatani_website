"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowUpRight,
  Search,
  BookOpen,
  Sparkles,
  Tag,
  Share2,
  ChevronRight,
  Home,
  CheckCircle2,
  Mail,
  SlidersHorizontal,
} from "lucide-react";
import { blogsData, BlogPost } from "@/data/blogsData";

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

export default function BlogsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogsData.map((b) => b.category));
    return ["All", ...Array.from(cats)];
  }, []);

  // Filtered blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleShare = async (e: React.MouseEvent, blog: BlogPost) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blogs/${blog.slug}`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopiedId(blog.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="relative w-full bg-[#FAF5F0] text-zinc-900 overflow-hidden select-none pb-24">
      {/* 1. Page Title Hero Banner */}
      <section className="relative w-full h-[340px] sm:h-[400px] lg:h-[450px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blog.webp"
            alt="Jhamtani Blogs Hero Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Charcoal/Bronze Luxury Overlay */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
          {/* Subtle golden shimmer gradient line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[38px] sm:text-[54px] lg:text-[68px] text-[#C5A880] tracking-[0.2em] leading-none uppercase drop-shadow-sm"
          >
            BLOGS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed"
          >
            Insights, real estate guides, and market perspectives from Pune's leading landmark creators
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-black/5 p-4 sm:p-5 border border-[#A0725B]/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? blogsData.length
                  : blogsData.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;
              const label = cat === "All" ? "ALL ARTICLES" : cat.toUpperCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group relative flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-[#A0725B] cursor-pointer transition-all duration-300 z-10 overflow-hidden ${
                    isActive
                      ? "bg-[#A0725B] text-white shadow-lg shadow-amber-900/15"
                      : "bg-transparent text-[#A0725B] hover:bg-[#A0725B] hover:text-white"
                  }`}
                >
                  <WaveText text={label} letterDelay={20} />
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#A0725B]/15 text-[#A0725B] group-hover:bg-white/20 group-hover:text-white"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF5F0] border border-[#A0725B]/25 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#A0725B] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>
      </section>

      {/* 3. BLOG CARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-14 sm:py-20">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#e8ded6] p-8 shadow-sm">
            <BookOpen className="w-12 h-12 text-[#A0725B] mx-auto mb-4 opacity-50" />
            <h3 className="font-serif text-2xl text-zinc-800 mb-2">
              No Articles Found
            </h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find any articles matching your search criteria. Try
              adjusting your search keywords or category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-6 py-2.5 bg-[#A0725B] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#8C5E47] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e8ded6] flex flex-col group justify-between"
              >
                <div>
                  {/* Media Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#e9dfd7]">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e: any) => {
                        e.currentTarget.src = blog.fallbackImage;
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-900 shadow-md flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A0725B]" />
                      <span>{blog.date}</span>
                    </div>

                    {/* Share button */}
                    <button
                      onClick={(e) => handleShare(e, blog)}
                      aria-label="Share article"
                      title="Copy article link"
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-zinc-700 hover:text-white hover:bg-[#A0725B] flex items-center justify-center transition-colors shadow-md cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Category Pill on bottom left */}
                    <div className="absolute bottom-3 left-4">
                      <span className="bg-[#A0725B] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      {/* Meta Bar */}
                      <div className="flex items-center gap-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#A0725B]" />
                          <span>By {blog.author}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#A0725B]" />
                          <span>{blog.readTime}</span>
                        </span>
                      </div>

                      {/* Blog Title */}
                      <h2 className="font-serif text-[20px] sm:text-[22px] text-[#1c1d21] font-semibold leading-snug group-hover:text-[#A0725B] transition-colors line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-zinc-600 text-[14px] leading-relaxed line-clamp-3 font-light">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Read More Link with luxury hover */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-[#f0e6dd] flex items-center justify-between">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#A0725B] hover:text-[#8C5E47] transition-colors cursor-pointer"
                    >
                      <WaveText text="READ ARTICLE" letterDelay={15} groupHoverClass="group-hover/link" />
                      <div className="w-7 h-7 rounded-full bg-[#f6ece3] flex items-center justify-center group-hover/link:bg-[#A0725B] group-hover/link:text-white transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </div>
                    </Link>

                    {copiedId === blog.id && (
                      <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 animate-pulse">
                        <CheckCircle2 className="w-3 h-3" /> Link Copied!
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* 4. LUXURY NEWSLETTER & ENQUIRY CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#181d24] text-white rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-[#A0725B]/25"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A0725B]/20 border border-[#A0725B]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stay Informed</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                Get Exclusive Real Estate Insights &amp; Updates
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Subscribe to receive curated monthly market analyses, RERA updates,
                and new landmark launch alerts directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact"
                className="group/cta relative w-full py-3.5 px-6 rounded-full bg-[#C5A880] hover:bg-white text-black font-semibold text-center text-xs tracking-widest uppercase transition-all duration-300 shadow-lg flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
              >
                <WaveText text="SCHEDULE A CONSULTATION" letterDelay={15} groupHoverClass="group-hover/btn" />
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
              <Link
                href="/projects"
                className="group/proj relative w-full py-3.5 px-6 rounded-full bg-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-white font-medium text-center text-xs tracking-widest uppercase transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
              >
                <WaveText text="EXPLORE ALL PROJECTS" letterDelay={15} groupHoverClass="group-hover/btn" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
