"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogsData } from "@/data/blogsData";

interface WaveTextProps {
  text: string;
  letterDelay?: number;
}

function WaveText({ text, letterDelay = 20 }: WaveTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex items-center gap-[0.02em] select-none" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
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

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full bg-white text-zinc-900 px-6 sm:px-12 lg:px-24 py-16 md:py-24 border-t border-luxury-border"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 text-left"
          >
            <h2 className="font-serif text-[36px] sm:text-[44px] lg:text-[48px] leading-tight text-[#a0725b] font-normal">
              Jhamtani Perspectives
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-light max-w-xl">
              Read through the blogs that inspire ideas that build tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blogs"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 border border-[#a0725b] hover:bg-[#a0725b] hover:text-white rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#a0725b] transition-all duration-300 cursor-pointer overflow-hidden shadow-sm"
            >
              <WaveText text="VIEW ALL BLOGS" letterDelay={20} />
            </Link>
          </motion.div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.slice(0, 3).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#f5f3f0] rounded-[32px] p-6 flex flex-col justify-between group transition-all duration-500 overflow-hidden hover:shadow-lg"
            >
              <Link href={`/blogs/${item.slug}`} className="block">
                {/* Image Frame */}
                <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden select-none bg-[#e8ded6]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e: any) => {
                      e.currentTarget.src = item.fallbackImage;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-zinc-900">
                    {item.date}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-6 flex flex-col justify-between flex-1 space-y-4 text-left">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#a0725b] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-zinc-900 font-semibold group-hover:text-[#a0725b] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-zinc-600 line-clamp-3 font-light">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Footer Row */}
              <div className="pt-4 mt-4 border-t border-zinc-200 flex items-center justify-between">
                <Link
                  href={`/blogs/${item.slug}`}
                  className="font-sans text-[13px] sm:text-[14px] text-[#a0725b] font-medium tracking-wide group-hover:underline"
                >
                  Read more
                </Link>
                <Link
                  href={`/blogs/${item.slug}`}
                  className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-700 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

