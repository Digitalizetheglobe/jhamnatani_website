"use client";
import SignatureSeries from "@/components/home/signtaure/signtaureseries";
import React from "react";

// Restored EXACT original locations (no coordinates changed!)
const locations = [
  { name: "PIMPLE SAUDAGAR", angle: 280, radius: 42, type: "upcoming", image: "/images/pune.jpg" },
  { name: "PIMPRI CHINCHWAD", angle: 290, radius: 32, type: "upcoming", image: "/images/pune.jpg" },
  { name: "MCA STADIUM", angle: 305, radius: 48, type: "west", image: "/images/pune.jpg" },
  { name: "GODREJ RIVER GREENS", angle: 315, radius: 60, type: "upcoming", image: "/images/pune.jpg" },
  { name: "DY PATIL UNIVERSITY", angle: 325, radius: 45, type: "east", image: "/images/pune.jpg" },
  { name: "KALYANI NAGAR", angle: 335, radius: 35, type: "upcoming", image: "/images/pune.jpg" },
  { name: "SHIVAJINAGAR", angle: 345, radius: 20, type: "upcoming", image: "/images/pune.jpg" },
  { name: "KHARADI", angle: 355, radius: 30, type: "east", image: "/images/pune.jpg" },
  { name: "VTP EARTH ONE", angle: 3, radius: 55, type: "east", image: "/images/pune.jpg" },
  { name: "MANJARI", angle: 15, radius: 50, type: "east", image: "/images/pune.jpg" },
  { name: "GERA WORLD OF JOY", angle: 25, radius: 65, type: "upcoming", image: "/images/pune.jpg" },
  { name: "PURANIKS ABITANTE", angle: 35, radius: 55, type: "west", image: "/images/pune.jpg" },
  { name: "MAGARPATTA CITY", angle: 22, radius: 35, type: "upcoming", image: "/images/pune.jpg" },
  { name: "HADAPSAR", angle: 38, radius: 42, type: "east", image: "/images/pune.jpg" },
  { name: "SOLAPUR HIGHWAY", angle: 55, radius: 60, type: "east", image: "/images/pune.jpg" },
  { name: "PUNE CITY CENTRE", angle: 12, radius: 15, type: "central", image: "/images/pune.jpg" },
  { name: "KATRAJ", angle: 85, radius: 35, type: "east", image: "/images/pune.jpg" },
  { name: "LULLANAGAR", angle: 80, radius: 55, type: "east", image: "/images/pune.jpg" },
  { name: "BAVDHAN", angle: 115, radius: 28, type: "west", image: "/images/pune.jpg" },
  { name: "SUS ROAD", angle: 125, radius: 48, type: "west", image: "/images/pune.jpg" },
  { name: "NANDED", angle: 145, radius: 32, type: "west", image: "/images/pune.jpg" },
  { name: "GODREJ 24 HINJEWADI", angle: 165, radius: 48, type: "west", image: "/images/pune.jpg" },
  { name: "LIFE REPUBLIC (Hinjewadi Phase 3)", angle: 185, radius: 60, type: "upcoming", image: "/images/pune.jpg" },
  { name: "HINJAWADI IT PARK", angle: 198, radius: 40, type: "upcoming", image: "/images/pune.jpg" },
  { name: "MAHALUNGE", angle: 210, radius: 18, type: "west", image: "/images/pune.jpg" },
  { name: "WAKAD", angle: 225, radius: 26, type: "west", image: "/images/pune.jpg" },
  { name: "BALEWADI HIGH STREET", angle: 240, radius: 40, type: "west", image: "/images/pune.jpg" },
  { name: "BANER", angle: 260, radius: 15, type: "west", image: "/images/pune.jpg" },
];

const rings = [10, 18, 26, 35, 45, 55, 65, 75, 85];

export default function DemoPage() {
  return (
    <>
        <SignatureSeries />

      <div className="min-h-screen bg-black text-[#888888] font-sans relative overflow-hidden flex items-center justify-center p-4 py-20">
      
      <style>{`
        @keyframes spin-cw-full {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw-full {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-cw-full-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-ccw-full-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Container for circles */}
      <div className="relative w-[95vmin] h-[95vmin] flex items-center justify-center">
        
        {/* Dark overlay curves (stylized) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%)] z-0 pointer-events-none" />

        {/* Render Decorative Rings */}
        {rings.map((radius, i) => {
          const isCW = i % 2 === 0;
          const duration = 80 + i * 15; // Outer rings spin slower
          
          return (
            <div
              key={`ring-${i}`}
              className="absolute w-full h-full pointer-events-none"
              style={{
                animation: `${isCW ? 'spin-cw-full' : 'spin-ccw-full'} ${duration}s linear infinite`
              }}
            >
              <div
                className="absolute rounded-full border border-dashed border-[#444444] opacity-70"
                style={{
                  width: `${radius * 2}%`,
                  height: `${radius * 2}%`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          );
        })}

        {/* Render Independent Locations */}
        {locations.map((loc, j) => {
          // Determine spin direction and speed based on its radius to match nearby rings
          const isCW = Math.floor(loc.radius / 10) % 2 === 0;
          const duration = 80 + (loc.radius / 10) * 15; 
          const isLeft = loc.angle > 90 && loc.angle < 270;

          return (
            <div
              key={`loc-${j}`}
              className="absolute w-full h-full pointer-events-none"
              style={{
                animation: `${isCW ? 'spin-cw-full' : 'spin-ccw-full'} ${duration}s linear infinite`
              }}
            >
              <div
                className="absolute z-10"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${loc.angle}deg) translate(${loc.radius * 0.95}vmin)`
                }}
              >
                {/* Counter spin to keep text upright as it orbits */}
                <div style={{ animation: `${isCW ? 'spin-cw-full-reverse' : 'spin-ccw-full-reverse'} ${duration}s linear infinite` }}>
                   
                   {/* Counter rotate initial angle and align text */}
                   <div 
                     style={{ 
                       transform: `rotate(-${loc.angle}deg) translate(${isLeft ? '-100%' : '0'})`,
                       marginLeft: isLeft ? '-12px' : '0' 
                     }}
                     className="flex items-center gap-2 whitespace-nowrap group relative cursor-pointer pointer-events-auto"
                   >
                      {/* Hover Image Popup */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 scale-95 group-hover:scale-100 origin-bottom">
                        <div className="w-32 h-24 md:w-40 md:h-28 relative rounded-xl overflow-hidden border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Arrow */}
                        <div className="w-3 h-3 bg-white absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45 shadow-lg"></div>
                      </div>

                      {/* If Left, text comes before dot */}
                      {isLeft && (
                        <span className="text-[9px] md:text-[11px] font-semibold tracking-wider text-[#888888] uppercase leading-tight group-hover:text-white transition-colors">
                          {loc.name}
                        </span>
                      )}

                      {/* Dot */}
                      <div
                        className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:bg-white group-hover:border-white ${
                          loc.type === "upcoming"
                            ? "bg-[#a37952]"
                            : "bg-transparent border-[2px] md:border-[3px]"
                        } ${
                          loc.type === "central"
                            ? "border-[#555555]"
                            : loc.type === "west"
                            ? "border-[#5b4e45]"
                            : loc.type === "east"
                            ? "border-[#4a4a4a]"
                            : ""
                        }`}
                      />

                      {/* If Right, text comes after dot */}
                      {!isLeft && (
                        <span className="text-[9px] md:text-[11px] font-semibold tracking-wider text-[#888888] uppercase leading-tight group-hover:text-white transition-colors">
                          {loc.name}
                        </span>
                      )}
                   </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  </>
  );
}
