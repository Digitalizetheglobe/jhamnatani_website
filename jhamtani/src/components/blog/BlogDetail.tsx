"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ChevronRight,
  Home,
  Share2,
  CheckCircle2,
  Copy,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Building2,
  ExternalLink,
  ShieldCheck,
  Award,
  MessageSquare,
} from "lucide-react";
import { BlogPost, getRelatedBlogs } from "@/data/blogsData";

interface BlogDetailProps {
  blog: BlogPost;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const relatedBlogs = getRelatedBlogs(blog.slug, 2);

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

  return (
    <div className="relative w-full bg-[#FAF5F0] text-zinc-900 overflow-hidden select-none pb-24">
      {/* 1. BREADCRUMBS & ARTICLE HEADER */}
      <section className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] flex flex-col justify-center text-center px-6 overflow-hidden pt-12 pb-10">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about/hero.jpg"
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

        <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C5A880]/30 backdrop-blur-md mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <Link href="/" className="text-[11px] font-medium tracking-[0.2em] text-[#C5A880] uppercase hover:underline">
              HOME
            </Link>
            <span className="text-[11px] text-[#C5A880]/60">/</span>
            <Link href="/blogs" className="text-[11px] font-medium tracking-[0.2em] text-[#C5A880] uppercase hover:underline">
              BLOGS
            </Link>
            <span className="text-[11px] text-[#C5A880]/60">/</span>
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/90 uppercase line-clamp-1 max-w-[140px] sm:max-w-xs">
              {blog.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-light text-[28px] sm:text-[38px] lg:text-[48px] text-white tracking-wide leading-tight mb-6 max-w-3xl"
          >
            {blog.title}
          </motion.h1>

          {/* Meta Information & Share */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15 text-xs sm:text-sm text-zinc-300 w-full"
          >
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>{blog.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#C5A880]" />
                <span>By {blog.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A880]" />
                <span>{blog.readTime}</span>
              </span>
            </div>

            {/* Quick Share button */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-black transition-all text-xs font-medium cursor-pointer border border-white/10"
              title="Copy Article Link"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN ARTICLE CONTAINER */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-[#e8ded6] mb-10 bg-[#e7ddd5]"
        >
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            onError={(e: any) => {
              e.currentTarget.src = blog.fallbackImage;
            }}
          />
        </motion.div>

        {/* Article Content Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-md border border-[#e8ded6] space-y-8">
          {/* Introduction Lead */}
          <div className="space-y-4 text-zinc-700 text-base sm:text-lg leading-relaxed font-light">
            {blog.intro.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "text-lg sm:text-xl font-normal text-zinc-900 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:text-[#ac835d] first-letter:mr-2 first-letter:float-left"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Article Sections */}
          <div className="space-y-10 pt-4">
            {blog.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                {section.heading && (
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1d21] font-semibold tracking-tight pt-2 border-b border-[#f0e7df] pb-2 text-[#a0725b]">
                    {section.heading}
                  </h3>
                )}

                {/* Paragraphs */}
                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-zinc-700 text-base sm:text-[17px] leading-relaxed font-light"
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
                        className="flex items-start gap-3 text-zinc-700 text-base sm:text-[16px] leading-relaxed"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#f6ede5] text-[#ac835d] flex-shrink-0 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout Quote Box */}
                {section.callout && (
                  <div className="p-5 sm:p-6 my-6 rounded-2xl bg-[#fbf6f2] border-l-4 border-[#ac835d] shadow-sm">
                    <p className="text-zinc-800 font-serif italic text-base sm:text-lg leading-relaxed">
                      "{section.callout}"
                    </p>
                  </div>
                )}

                {/* Project Highlight Card */}
                {section.projectHighlight && (
                  <div className="p-6 sm:p-7 my-6 rounded-2xl bg-[#14171C] text-white border border-[#ac835d]/30 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#ca9d75]/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#ca9d75]/20 text-[#ca9d75] flex items-center justify-center">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl sm:text-2xl text-white font-medium">
                            {section.projectHighlight.name}
                          </h4>
                          <p className="text-xs text-[#ca9d75] tracking-wide">
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ca9d75] hover:bg-[#b88c64] text-black font-semibold text-xs tracking-wide transition-all shadow-md"
                      >
                        <span>Explore Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wide transition-all border border-white/20"
                      >
                        <span>Enquire Now</span>
                      </Link>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Conclusion */}
          {blog.conclusion && blog.conclusion.length > 0 && (
            <div className="pt-6 border-t border-[#f0e7df] space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1d21] font-semibold text-[#a0725b]">
                {blog.conclusionHeading || "Conclusion"}
              </h3>
              {blog.conclusion.map((c, cIdx) => (
                <p
                  key={cIdx}
                  className="text-zinc-700 text-base sm:text-[17px] leading-relaxed font-light"
                >
                  {c}
                </p>
              ))}
            </div>
          )}

          {/* 3. INTERACTIVE FAQ ACCORDIONS */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="pt-10 border-t border-[#f0e7df] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ac835d]/15 text-[#ac835d] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-semibold">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Key answers regarding {blog.title}
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
                          ? "bg-[#fcf8f5] border-[#ac835d]/40 shadow-sm"
                          : "bg-[#faf6f2] border-[#ebdcd0] hover:border-[#ac835d]/30"
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
                              ? "bg-[#ac835d] text-white rotate-180"
                              : "bg-[#ebdcd0] text-zinc-700"
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
                            <div className="px-5 sm:px-6 pb-5 pt-1 text-zinc-600 text-sm sm:text-[15px] leading-relaxed border-t border-[#f0e6dd] font-light">
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

          {/* 4. TAGS & SOCIAL SHARE BAR */}
          <div className="pt-8 border-t border-[#f0e7df] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mr-1">
                Tags:
              </span>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#f6ece3] text-zinc-700 text-xs font-medium"
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
                className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-sm"
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
                className="w-8 h-8 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-colors shadow-sm"
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
                className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-800 hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Share on X"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877f2]/10 text-[#1877f2] hover:bg-[#1877f2] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Share on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 5. AUTHOR BIO BOX */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#faf6f2] border border-[#ebdcd0] flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-[#ac835d] text-white flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0 shadow-md">
              J
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 justify-center sm:justify-start">
                <h4 className="font-serif text-lg text-zinc-900 font-semibold">
                  Jhamtani Editorial Desk
                </h4>
                <span className="text-xs text-[#ac835d] font-medium uppercase tracking-wider">
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

        {/* 6. BACK TO BLOGS & RELATED ARTICLES */}
        <div className="mt-12 space-y-8">
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e8ded6] text-zinc-800 text-xs sm:text-sm font-medium hover:bg-[#ac835d] hover:text-white hover:border-[#ac835d] transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Blogs</span>
            </Link>
          </div>

          {relatedBlogs.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-semibold">
                Related Articles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((rBlog) => (
                  <Link
                    key={rBlog.id}
                    href={`/blogs/${rBlog.slug}`}
                    className="bg-white rounded-2xl overflow-hidden p-5 border border-[#e8ded6] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#e9dfd7]">
                      <Image
                        src={rBlog.image}
                        alt={rBlog.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e: any) => {
                          e.currentTarget.src = rBlog.fallbackImage;
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[11px] font-semibold text-zinc-900 shadow">
                        {rBlog.date}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-[#ac835d] uppercase tracking-wider">
                        {rBlog.category}
                      </span>
                      <h4 className="font-serif text-lg text-zinc-900 font-medium group-hover:text-[#ac835d] transition-colors line-clamp-2 leading-snug">
                        {rBlog.title}
                      </h4>
                      <p className="text-zinc-500 text-xs line-clamp-2 font-light">
                        {rBlog.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-2 border-t border-[#f0e6dd] flex items-center justify-between text-xs font-medium text-[#ac835d]">
                      <span>Read article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
