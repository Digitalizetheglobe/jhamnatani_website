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
            src="/assets/about/hero.jpg"
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
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 backdrop-blur-md mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#C5A880] uppercase">
              HOME &nbsp;/&nbsp; MEDIA &nbsp;/&nbsp; BLOGS
            </span>
          </motion.div>

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
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#A0725B] text-white shadow-md shadow-[#A0725B]/25"
                    : "bg-[#F3ECE4] text-zinc-700 hover:bg-[#ebdccf]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF5F0] border border-[#A0725B]/25 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#A0725B] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700"
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
            <BookOpen className="w-12 h-12 text-[#ac835d] mx-auto mb-4 opacity-50" />
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
              className="px-6 py-2.5 bg-[#ac835d] text-white rounded-full text-sm font-medium hover:bg-[#8f6b49] transition-colors"
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e8ded6] flex flex-col group"
              >
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
                    <Calendar className="w-3.5 h-3.5 text-[#ac835d]" />
                    <span>{blog.date}</span>
                  </div>

                  {/* Share button */}
                  <button
                    onClick={(e) => handleShare(e, blog)}
                    aria-label="Share article"
                    title="Copy article link"
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-zinc-700 hover:text-white hover:bg-[#ac835d] flex items-center justify-center transition-colors shadow-md cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Category Pill on bottom left */}
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-[#ac835d] text-white text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full shadow-sm">
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
                        <User className="w-3.5 h-3.5 text-[#ac835d]" />
                        <span>By {blog.author}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ac835d]" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    {/* Blog Title */}
                    <h2 className="font-serif text-[20px] sm:text-[22px] text-[#1c1d21] font-semibold leading-snug group-hover:text-[#ac835d] transition-colors line-clamp-2">
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-zinc-600 text-[14px] leading-relaxed line-clamp-3 font-light">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Card Footer: Read More Link with luxury hover */}
                  <div className="pt-4 border-t border-[#f0e6dd] flex items-center justify-between">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#ac835d] group-hover:text-[#8f6b49] transition-colors"
                    >
                      <span className="tracking-wide">Read more</span>
                      <div className="w-7 h-7 rounded-full bg-[#f6ece3] flex items-center justify-center group-hover:bg-[#ac835d] group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
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
          className="relative bg-[#181d24] text-white rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-[#ac835d]/25"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#ca9d75]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ac835d]/20 border border-[#ac835d]/30 text-[#ca9d75] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stay Informed</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                Get Exclusive Real Estate Insights & Updates
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Subscribe to receive curated monthly market analyses, RERA updates,
                and new landmark launch alerts directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#ca9d75] hover:bg-[#b88c64] text-black font-semibold text-center text-sm transition-all duration-300 shadow-lg shadow-[#ca9d75]/20 flex items-center justify-center gap-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-center text-sm transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Explore All Projects</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
