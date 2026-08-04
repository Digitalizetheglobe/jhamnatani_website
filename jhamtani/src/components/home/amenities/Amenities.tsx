"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Amenities() {
  const promises = [
    {
      title: "of a Happier Life",
      desc: "Creating homes, experiences, and relationships that make life happier in every aspect.",
      iconPath: "/assets/icon_1.png",
    },
    {
      title: "of a Greater Tomorrow",
      desc: "Making decisions today that create lasting value for generations to come.",
      iconPath: "/assets/icon_2.png",
    },
    {
      title: "of Meaningful Impact",
      desc: "Creating a positive difference in every life we touch, from our customers, our people, our partners, to our communities.",
      iconPath: "/assets/icon_3.png",
    },
    {
      title: "of Evolving Every Day",
      desc: "Never stopping the process of learning. Growing with every home, every customer, every little thing, every time.",
      iconPath: "/assets/icon_4.png",
    },
  ];

  return (
    <section
      id="promises"
      className="clear-both w-full bg-[#eeebe7] text-white px-6 sm:px-12 lg:px-24 py-20 md:py-35 border-t border-luxury-border"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="font-serif text-[32px] sm:text-[42px] leading-tight text-[#a0725b]">
              A promise isn't something we write.
              <span className="block text-[#a0725b]">It's something you live.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-[#010101]"
          >
            A promise isn't made at the end of the journey. It's reflected in every
            choice along the way. These four promises are the principles that quietly shape
            every Jhamtani development, every choice we make, every community we create,
            and every relationship we nurture.
          </motion.p>
        </div>

        {/* 4 Columns of Promises */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {promises.map((p, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* squircle card */}
                <div className="w-[230px] h-[190px] bg-transparent border border-[#0082c3] rounded-[70px] flex items-center justify-center shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 select-none">
                  <Image
                    src={p.iconPath}
                    alt={`Promise ${p.title}`}
                    width={180}
                    height={180}
                    priority
                    className="object-contain"
                  />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-[22px] md:text-[24px] leading-tight text-[#a0725b] mt-6">
                  The Promise
                  <span className="block font-serif text-[22px] md:text-[24px] mt-1 text-[#a0725b]/90">
                    {p.title}
                  </span>
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#000] mt-3 max-w-[270px]">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
