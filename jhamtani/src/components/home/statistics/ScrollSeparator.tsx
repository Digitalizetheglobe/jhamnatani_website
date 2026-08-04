"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSeparator() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to the viewport height center.
      const elementHeight = rect.height;
      const elementTopFromCenter = windowHeight / 2 - rect.top;
      
      const scrollPercent = Math.max(0, Math.min(1, elementTopFromCenter / elementHeight));
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={lineRef} className="relative h-full w-[1.5px] bg-[#5B584C]/30 min-h-[400px] mx-auto flex items-center justify-center">
      {/* Active filled line portion */}
      <div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#5B584C]/40 via-[#5B584C] to-[#5B584C] transition-all duration-75 ease-out"
        style={{ height: `${progress * 100}%` }}
      />

      {/* Blue capsule scrolling indicator matching requested design */}
      <motion.div
        className="absolute w-[8px] h-10 bg-[#0082c3] rounded-full shadow-[0_0_14px_rgba(0,130,195,0.9)] border border-white/30"
        style={{
          left: "50%",
          top: `${progress * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

