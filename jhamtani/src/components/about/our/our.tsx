"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Our() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="w-full bg-[#ebe6df] text-charcoal pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl space-y-6"
        >
          <h2 className="font-serif text-[42px] sm:text-[56px] md:text-[68px] leading-tight text-[#b88654] font-normal">
            Our Story
          </h2>

          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] font-medium text-[#2b2b2b] leading-relaxed">
              Every real estate brand’s journey begins with building. Ours began by understanding it.
          </p>

          <p className="font-sans text-[15px] sm:text-[17px] md:text-[16px] text-[#2b2b2b] leading-relaxed">
            Long before Jhamtani became one of Pune’s most recognised real estate brands, our journey began with an entrepreneurial venture in construction materials. It’s where a deep appreciation for quality, craftsmanship and the countless details behind every enduring structure was developed as a mindset.
            {!isExpanded && (
              <span 
                onClick={() => setIsExpanded(true)}
                className="text-[#b88654] italic cursor-pointer hover:underline ml-1 font-semibold"
              >
                Read more
              </span>
            )}
          </p>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <p className="font-sans text-[15px] sm:text-[17px] md:text-[16px] text-[#2b2b2b] leading-relaxed">
                As our understanding evolved, so did our vision. What began with the materials that shape buildings naturally progressed into creating the buildings themselves. From thoughtfully crafted homes & landmark commercial developments, to ultra-premium residence series and Grade-A workspaces, we continue to reimagine the way Pune lives and works.
              </p>
              <p className="font-sans text-[15px] sm:text-[17px] md:text-[16px] text-[#2b2b2b] leading-relaxed">
                Today, our journey extends beyond real estate. Through Jhamtani Cera-Kraft, we bring together premium tiles, CP fittings, sanitaryware, wellness solutions and lighting under one destination, while our growing presence in solar energy reflects our commitment to building responsibly for the future.
                <span 
                  onClick={() => setIsExpanded(false)}
                  className="text-[#b88654] italic cursor-pointer hover:underline ml-1 font-semibold"
                >
                  Read less
                </span>
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Story Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[450px] sm:h-[600px] md:h-[720px] lg:h-[800px] overflow-hidden shadow-xl"
        >
          <Image
            src="/assets/about/our.png"
            alt="Our Story - Jhamtani"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
