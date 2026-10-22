"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  id: number;
  title: string;
  mobile: string;
  tab: string;
  laptop: string;
  laptopScale?: boolean;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Jhamtani Bizone - Kokane Chowk, Pimple Saudagar",
    mobile: "/assets/biz-one/banner-mob.png",
    tab: "/assets/biz-one/banner-tab.png",
    laptop: "/assets/biz-one/banner-laptop.jpg",
    laptopScale: true,
  },
  {
    id: 2,
    title: "Jhamtani Biz One",
    mobile: "/assets/biz-one/RS-BizOne-mobile-banner.webp",
    tab: "/assets/biz-one/RS-BizOne-tab-banner.webp",
    laptop: "/assets/biz-one/RS-BizOne-Desktop-banner.webp",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const totalSlides = bannerSlides.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="group relative w-full h-screen min-h-[850px] overflow-hidden bg-white select-none outline-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Jhamtani Biz One hero slider"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }}
    >
      {bannerSlides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <div className="block sm:hidden relative w-full h-full">
              <Image
                src={slide.mobile}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center select-none"
              />
            </div>
            <div className="hidden sm:block lg:hidden relative w-full h-full">
              <Image
                src={slide.tab}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center select-none"
              />
            </div>
            <div className="hidden lg:block relative w-full h-full">
              <Image
                src={slide.laptop}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className={`object-cover object-center select-none${
                  slide.laptopScale ? " scale-105" : ""
                }`}
              />
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#A0725B] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#A0725B] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-5 sm:bottom-7 lg:bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative overflow-hidden transition-all duration-300 rounded-full cursor-pointer h-2 ${
                isActive ? "w-10 bg-white/30" : "w-2.5 bg-white/50 hover:bg-white/90"
              }`}
            >
              {isActive && (
                <span
                  key={`bizone-progress-${currentSlide}`}
                  className="absolute inset-y-0 left-0 bg-[#A0725B] rounded-full"
                  style={{ animation: "heroProgress 5000ms linear forwards" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes heroProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}
