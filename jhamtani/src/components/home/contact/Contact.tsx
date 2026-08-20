"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest! We will contact you shortly about: ${formData.project || "our projects"}`);
  };

  const listArticles = [
    {
      img: "/assets/image_1.webp",
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "consectetuer adipiscing elit,",
    },
    {
      img: "/assets/image_8.webp",
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "consectetuer adipiscing elit,",
    },
    {
      img: "/assets/image_9.webp",
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "consectetuer adipiscing elit,",
    },
    {
      img: "/assets/image_10.webp",
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "consectetuer adipiscing elit,",
    },
  ];

  return (
    <div id="contact" className="w-full flex flex-col bg-white">
      {/* 1. Media Spotlight (Beige/Cream Background) */}
      <section className="w-full bg-[#eeebe7] text-zinc-900 px-6 sm:px-12 lg:px-24 py-16 md:py-24">
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
              Making Headlines for the Right Reasons
            </h2>
            {/* <p className="font-sans text-[14px] sm:text-[15px] text-zinc-700 leading-relaxed font-light">
              Our promises delivered that are in the media spotlight
            </p> */}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Left Featured Article Card (7/12 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white rounded-[32px] p-6 flex flex-col justify-between group transition-all duration-500 overflow-hidden text-left"
            >
              {/* Text + Arrow Row */}
              <div className="flex justify-between items-start space-x-4 mb-6 min-w-0">
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-zinc-700">
                  <span className="text-[#a0725b] font-semibold">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</span> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                </p>
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300 shrink-0 cursor-pointer">
                  <ArrowRight className="w-5 h-5 stroke-[1.8]" />
                </div>
              </div>

              {/* Large Image */}
              <div className="relative w-full h-[280px] sm:h-[350px] rounded-[24px] overflow-hidden select-none bg-zinc-900">
                <Image
                  src="/assets/image_0.webp"
                  alt="Featured Media Headline"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
              </div>
            </motion.div>

            {/* Right Feed Cards (5/12 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {listArticles.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white/80 hover:bg-white rounded-[24px] p-4 flex items-center space-x-4 w-full group transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail Image */}
                  <div className="relative w-[110px] h-[80px] rounded-[16px] overflow-hidden flex-shrink-0 bg-zinc-900 select-none">
                    <Image
                      src={item.img}
                      alt="Media Thumbnail"
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Text Description */}
                  <div className="text-left flex-1 min-w-0 pr-2">
                    <p className="font-sans text-[13px] sm:text-[14px] text-zinc-700 leading-snug">
                      <span className="text-[#a0725b] font-medium">{item.title}</span> {item.subtitle}
                    </p>
                  </div>

                  {/* Small Action Button */}
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-[#a0725b] group-hover:text-white group-hover:border-[#a0725b] transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 stroke-[1.8]" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
