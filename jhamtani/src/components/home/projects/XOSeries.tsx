"use client";
import SignatureSeries from "@/components/home/signtaure/signtaureseries";
import React from "react";

// Restored EXACT original locations (no coordinates changed!)
const locations = [
  { name: "PIMPLE SAUDAGAR", angle: 280, radius: 42, type: "upcoming", image: "/images/pune.webp" },
  { name: "PIMPRI CHINCHWAD", angle: 290, radius: 32, type: "upcoming", image: "/images/pune.webp" },
  { name: "MCA STADIUM", angle: 305, radius: 48, type: "west", image: "/images/pune.webp" },
  { name: "GODREJ RIVER GREENS", angle: 315, radius: 60, type: "upcoming", image: "/images/pune.webp" },
  { name: "DY PATIL UNIVERSITY", angle: 325, radius: 45, type: "east", image: "/images/pune.webp" },
  { name: "KALYANI NAGAR", angle: 335, radius: 35, type: "upcoming", image: "/images/pune.webp" },
  { name: "SHIVAJINAGAR", angle: 345, radius: 20, type: "upcoming", image: "/images/pune.webp" },
  { name: "KHARADI", angle: 355, radius: 30, type: "east", image: "/images/pune.webp" },
  { name: "VTP EARTH ONE", angle: 3, radius: 55, type: "east", image: "/images/pune.webp" },
  { name: "MANJARI", angle: 15, radius: 50, type: "east", image: "/images/pune.webp" },
  { name: "GERA WORLD OF JOY", angle: 25, radius: 65, type: "upcoming", image: "/images/pune.webp" },
  { name: "PURANIKS ABITANTE", angle: 35, radius: 55, type: "west", image: "/images/pune.webp" },
  { name: "MAGARPATTA CITY", angle: 22, radius: 35, type: "upcoming", image: "/images/pune.webp" },
  { name: "HADAPSAR", angle: 38, radius: 42, type: "east", image: "/images/pune.webp" },
  { name: "SOLAPUR HIGHWAY", angle: 55, radius: 60, type: "east", image: "/images/pune.webp" },
  { name: "PUNE CITY CENTRE", angle: 12, radius: 15, type: "central", image: "/images/pune.webp" },
  { name: "KATRAJ", angle: 85, radius: 35, type: "east", image: "/images/pune.webp" },
  { name: "LULLANAGAR", angle: 80, radius: 55, type: "east", image: "/images/pune.webp" },
  { name: "BAVDHAN", angle: 115, radius: 28, type: "west", image: "/images/pune.webp" },
  { name: "SUS ROAD", angle: 125, radius: 48, type: "west", image: "/images/pune.webp" },
  { name: "NANDED", angle: 145, radius: 32, type: "west", image: "/images/pune.webp" },
  { name: "GODREJ 24 HINJEWADI", angle: 165, radius: 48, type: "west", image: "/images/pune.webp" },
  { name: "LIFE REPUBLIC (Hinjewadi Phase 3)", angle: 185, radius: 60, type: "upcoming", image: "/images/pune.webp" },
  { name: "HINJAWADI IT PARK", angle: 198, radius: 40, type: "upcoming", image: "/images/pune.webp" },
  { name: "MAHALUNGE", angle: 210, radius: 18, type: "west", image: "/images/pune.webp" },
  { name: "WAKAD", angle: 225, radius: 26, type: "west", image: "/images/pune.webp" },
  { name: "BALEWADI HIGH STREET", angle: 240, radius: 40, type: "west", image: "/images/pune.webp" },
  { name: "BANER", angle: 260, radius: 15, type: "west", image: "/images/pune.webp" },
];

const rings = [10, 18, 26, 35, 45, 55, 65, 75, 85];

export default function DemoPage() {
  return (
    <>
        <SignatureSeries />
  </>
  );
}
