"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full bg-[#14171c] text-white py-20 md:py-28 px-6 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-6 text-sm sm:text-base md:text-lg lg:text-xl font-sans text-zinc-300 leading-relaxed font-light">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The promises we give are not for the brochures or the campaigns. They are what we work for. They are why we work for.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Some promises stay with our homeowners. Some shape the way we work.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Some build stronger communities. And some inspire dreams far beyond our projects. Together, they build the kind of brand we aspire to be.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The following aren't just our initiatives. They're the many ways we choose to keep our word.
        </motion.p>
      </div>
    </section>
  );
}
