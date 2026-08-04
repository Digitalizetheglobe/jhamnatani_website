"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      img: "/assets/image_5.webp",
      title: "Lorem ipsum dolor sit amet,",
      desc: "consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      linkText: "Lorem ipsum dolor sit amet",
    },
    {
      img: "/assets/image_6.webp",
      title: "Lorem ipsum dolor sit amet,",
      desc: "consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      linkText: "Lorem ipsum dolor sit amet",
    },
    {
      img: "/assets/image_7.webp",
      title: "Lorem ipsum dolor sit amet,",
      desc: "consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
      linkText: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section
      id="blog"
      className="w-full bg-white text-zinc-900 px-6 sm:px-12 lg:px-24 py-16 md:py-24 border-t border-luxury-border"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
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

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#f5f3f0] rounded-[32px] p-6 flex flex-col justify-between group transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-md"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden select-none cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="pt-6 flex flex-col justify-between flex-1 space-y-6 text-left">
                <div className="space-y-3">
                  <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-zinc-700">
                    <span className="font-semibold text-zinc-900">{item.title}</span> {item.desc}
                  </p>
                </div>

                {/* Footer Row */}
                <div className="flex items-center justify-between pt-2 cursor-pointer">
                  <span className="font-sans text-[13px] sm:text-[14px] text-[#a0725b] font-medium tracking-wide group-hover:underline">
                    {item.linkText}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-700 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300 cursor-pointer">
                    <ArrowRight className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
