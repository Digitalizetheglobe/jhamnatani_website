"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  role?: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "darshan-teredesai",
    name: "Darshan Teredesai",
    role: "CHIEF OPERATING OFFICER",
    image: "/assets/Photos_B&W/Darshan_Teredesai_B&W.jpg",
  },
  {
    id: "dayal-jayswani",
    name: "Dayal Jayswani",
    role: "DIRECTOR - LIAISONING",
    image: "/assets/Photos_B&W/Dayal_Jayswani_B&W.jpg",
  },
  {
    id: "deepika-kalghatgi",
    name: "Deepika Kalghatgi",
    role: "VP-RESIDENTIAL SALES",
    image: "/assets/Photos_B&W/Deepika_Kalghatgi_B&W.jpg",
  },
  {
    id: "dipak-kale",
    name: "Dipak Kale",
    role: "VP-PROJECTS",
    image: "/assets/Photos_B&W/Dipak_Kale_B&W.jpg",
  },
  {
    id: "anupam-kulkarni",
    name: "Anupam Kulkarni",
    role: "VP-FINANCE & ACCOUNTS",
    image: "/assets/Photos_B&W/Anupam_Kulkarni_B&W.jpg",
  },
  {
    id: "bhavik-jain",
    name: "Bhavik Jain",
    role: "PROJECT DIRECTOR",
    image: "/assets/Photos_B&W/Bhavik_Jain_B&W.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#9A7229] tracking-tight leading-snug font-normal">
            Leadership Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative w-full aspect-[1/1.05] overflow-hidden bg-[#D8D8D8]"
            >
              {/* Member Portrait */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
              />

              {/* Bottom Dark Gradient Overlay (matching screenshot) */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0) 100%)",
                }}
              />

              {/* Name & Designation Overlay */}
              <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 text-left">
                <h3 className="font-sans text-white text-[18px] sm:text-[20px] font-bold leading-snug tracking-normal">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="font-sans text-white/90 text-[11px] sm:text-[12px] font-normal uppercase tracking-wide mt-0.5">
                    ({member.role})
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

