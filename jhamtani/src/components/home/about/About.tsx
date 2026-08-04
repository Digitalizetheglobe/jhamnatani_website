"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Title */}
        <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[56px] lg:text-[62px] leading-[1.08] tracking-wide text-[#a0725b]">
          Before every brick
          <span className="block text-[#a0725b]">comes a promise.</span>
        </h2>

        {/* Description */}
        <div className="space-y-4 font-sans text-[15px] sm:text-[17px] leading-relaxed text-white/75 max-w-xl">
          <p>
            The strongest foundations are built long before construction begins.
            They're built on trust, thoughtful decisions, and an unwavering
            commitment to the people who will one day call these spaces their own.
            A name that is synonymous with the trust of thousands of residents,
            Jhamtani is Pune’s fastest-growing real estate brand.
            <Link
              href="/about"
              className="inline-block font-sans italic font-light text-[17px] text-[#c5a880] hover:text-white transition-colors duration-300 ml-1.5 underline underline-offset-4"
            >
              Read more
            </Link>
          </p>
        </div>

        {/* About Image */}
        <div className="relative w-full max-w-[420px] h-[320px] sm:h-[380px] mt-6 overflow-hidden rounded-xl border border-luxury-border shadow-2xl group">
          <Image
            src="/assets/image_3.webp"
            alt="Foundation and trust"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </div>
  );
}

