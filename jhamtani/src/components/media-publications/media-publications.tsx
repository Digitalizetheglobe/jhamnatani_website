"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  ArrowUpRight,
  ExternalLink,
  Calendar,
  Sparkles,
  TrendingUp,
  Award,
  Mail,
} from "lucide-react";

interface MediaArticle {
  id: number;
  publisher: string;
  category: "Featured Article" | "Press Release" | "Industry Insight";
  date: string;
  title: string;
  excerpt: string;
  image: string;
  articleUrl: string;
  publisherLogo?: string;
  readTime: string;
}

const mediaArticles: MediaArticle[] = [
  {
    id: 1,
    publisher: "BW Businessworld",
    category: "Featured Article",
    date: "May 2024",
    readTime: "4 min read",
    title:
      "Jhamtani Bizcore To ACE Atmosphere: A Look At Jhamtani's Star Properties And How They Cater To Pune's Diverse Needs",
    excerpt:
      "An in-depth feature examining Jhamtani’s landmark portfolio across Pune, focusing on visionary architectural design, Pune's first 24×7 lifestyle concept at ACE Atmosphere, and high-yielding commercial assets at Bizcore.",
    image: "https://jhamtani.com/wp-content/uploads/2024/05/BW-BUSINESSWORLD.jpg",
    articleUrl:
      "https://businessworld.in/article/jhamtani-bizcore-to-ace-atmosphere-a-look-at-jhamtanis-star-properties-and-how-they-cater-to-punes-diverse-needs-520550",
  },
  {
    id: 2,
    publisher: "The Pioneer",
    category: "Featured Article",
    date: "May 2024",
    readTime: "3 min read",
    title:
      "Jhamtani Bizcore: Beyond Bricks And Mortar — A Smart Investment Move In The Future Of Living",
    excerpt:
      "Exploring how boutique serviced studio apartments and contemporary commercial workspaces at Jhamtani Bizcore represent a game-changing asset class in Pune’s high-growth Koregaon Park NX corridor.",
    image: "https://jhamtani.com/wp-content/uploads/2024/05/the-pioneer1.jpg",
    articleUrl:
      "https://www.dailypioneer.com/2024/special/jhamtani-bizcore--beyond-bricks-and-mortar---a-smart-investment-move-in-the-future-of-living.html",
  },
];

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
      <span className="relative inline-flex items-center justify-center gap-[0.12em]" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.3em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden">
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

export default function MediaPublicationsComponent() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Featured Article", "Press Release", "Industry Insight"];

  const filteredArticles = mediaArticles.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <section className="relative w-full bg-[#FAF5F0] text-zinc-900 min-h-screen select-none overflow-hidden pb-32">
      {/* 1. Page Title Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/publication.webp"
            alt="Jhamtani Media Publications Banner"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark Overlay for readability and premium look */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <h1 className="font-serif font-light text-[40px] sm:text-[54px] lg:text-[66px] text-[#C5A880] tracking-[0.2em] leading-none uppercase">
            MEDIA PUBLICATIONS
          </h1>

          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-zinc-300 uppercase mt-5 font-light max-w-2xl leading-relaxed">
            Leading News Features, Editorials &amp; National Press Coverage
          </p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 mt-14 sm:mt-30">
        
        {/* 3. Articles Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08,
                }}
                className="group flex flex-col bg-[#F3ECE4] hover:bg-[#EFE7DE] border border-[#A0725B]/25 hover:border-[#A0725B]/60 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 justify-between"
              >
                <div>
                  {/* Article Banner Image */}
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[2024/735] overflow-hidden bg-white block cursor-pointer border-b border-[#A0725B]/20"
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={95}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-zinc-900 text-xs px-3.5 py-1.5 rounded-full font-medium shadow-md flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5 text-[#A0725B]" /> Read Article
                      </span>
                    </div>
                  </a>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 text-left space-y-4">
                    {/* Metadata Header */}
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="bg-[#A0725B] text-white text-[9px] tracking-widest font-semibold px-3 py-1 rounded-full uppercase shadow-sm">
                        {article.publisher}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-light">
                        <Calendar className="w-3.5 h-3.5 text-[#A0725B]" />
                        <span>{article.date}</span>
                        <span className="mx-1">&bull;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Headline */}
                    <a
                      href={article.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-serif text-[20px] sm:text-[22px] text-zinc-900 group-hover:text-[#A0725B] transition-colors duration-300 font-normal leading-snug cursor-pointer"
                    >
                      {article.title}
                    </a>

                    {/* Excerpt */}
                    <p className="font-sans text-[13px] text-zinc-600 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Action Button Footer */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#A0725B] text-white hover:bg-[#8C5E47] transition-all duration-300 shadow-md cursor-pointer overflow-hidden border border-[#A0725B]"
                  >
                    <WaveText text="READ FULL ARTICLE" letterDelay={15} groupHoverClass="group-hover/btn" />
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
