"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full bg-[#eeebe7] text-zinc-900 px-6 sm:px-12 lg:px-24 py-16 md:py-24 border-t border-luxury-border"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[54px] leading-tight text-[#a0725b] font-normal">
            Their Stories. Our Legacy.
          </h2>
          <p className="font-sans text-[12px] sm:text-[13px] text-zinc-800 font-semibold tracking-[0.2em] uppercase leading-none">
            The promise they live every day
          </p>
        </motion.div>

        {/* Visual Collage of Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-6">
          
          {/* Left Flank Card - Older Couple */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative w-full h-[320px] md:h-[450px] rounded-[36px] overflow-hidden bg-zinc-950"
          >
            <Image
              src="/assets/image_14.webp"
              alt="Testimonial Homeowners"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          </motion.div>

          {/* Center Main Frame - Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative w-full h-[320px] md:h-[450px] rounded-[36px] overflow-hidden bg-zinc-950 group cursor-pointer"
          >
            <Image
              src="/assets/image_2.webp"
              alt="Happy Family testimonial video"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-white translate-x-0.5" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Name and Rating overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-center justify-between text-white select-none">
              <div className="flex items-center w-full space-x-3">
                {/* Homeowners Name */}
                <span className="font-serif text-[14px] md:text-[15px] text-[#C5A880] tracking-wide whitespace-nowrap">
                  MR. Sandeep & MRS.Pooja Patil
                </span>
                
                {/* Horizontal Dashed Separator Line */}
                <div className="flex-grow border-b border-dashed border-[#C5A880]/30 mx-2 h-1" />
                
                {/* Stars Rating */}
                <div className="flex items-center space-x-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-[#C5A880] fill-[#C5A880]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Flank Card - Couple with Mugs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative w-full h-[320px] md:h-[450px] rounded-[36px] overflow-hidden bg-zinc-950"
          >
            <Image
              src="/assets/image_15.webp"
              alt="Testimonial Homeowners Couple"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
