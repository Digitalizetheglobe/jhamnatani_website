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
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Jhamtani - Built on Bold Promises",
    mobile: "/assets/home-banner/home-mobile.webp",
    tab: "/assets/home-banner/home-tab.webp",
    laptop: "/assets/home-banner/home-laptop.webp",
  },
  {
    id: 2,
    title: "Jhamtani - Crafting Exceptional Spaces",
    mobile: "/assets/home-banner/home-mobile2.webp",
    tab: "/assets/home-banner/home-tab2.webp",
    laptop: "/assets/home-banner/home-laptop2.webp",
  },
  {
    id: 3,
    title: "What We Build Begins With Who We Are",
    mobile: "/assets/home-banner/home-mobile3.webp",
    tab: "/assets/home-banner/home-tab3.webp",
    laptop: "/assets/home-banner/home-laptop3.webp",
  },
  {
    id: 4,
    title: "Ace Ayodhya - Choose Sukoon",
    mobile: "/assets/ace-ayodhya/RS-Ayodhya-mobile-banner.webp",
    tab: "/assets/ace-ayodhya/RS-Ayodhya-tab-banner.webp",
    laptop: "/assets/ace-ayodhya/RS-Ayodhya-Desktop-banner.webp",
  },
  {
    id: 5,
    title: "Jhamtani SpaceBiz",
    mobile: "/assets/jhamtani-spacebiz/RS-SpaceBiz-mobile-banner.webp",
    tab: "/assets/jhamtani-spacebiz/RS-SpaceBiz-tab-banner.webp",
    laptop: "/assets/jhamtani-spacebiz/RS-SpaceBiz-Desktop-banner.webp",
  },
  {
    id: 6,
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Automatic slide every 5 seconds (runs continuously)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  // Touch swipe support for mobile / tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <section className="relative w-full bg-black">
    <div
      className="group relative w-full aspect-[3/4] overflow-hidden bg-black select-none outline-none sm:aspect-[4/5] lg:aspect-[1920/1024]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Banner Slider"
    >
      {/* Slides Container */}
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
            {/* Mobile Banner (< 640px) */}
            <div className="block sm:hidden relative w-full h-full">
              <Image
                src={slide.mobile}
                alt={slide.title}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Tablet Banner (640px - 1023px) */}
            <div className="hidden sm:block lg:hidden relative w-full h-full">
              <Image
                src={slide.tab}
                alt={slide.title}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Laptop / Desktop Banner (>= 1024px) */}
            <div className="hidden lg:block relative w-full h-full">
              <Image
                src={slide.laptop}
                alt={slide.title}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        );
      })}

      {/* Light top fade so the header stays readable without covering the artwork */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none z-10" />

      {/* Navigation Arrow: Previous */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#A0725B] text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 shadow-lg cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Arrow: Next */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#A0725B] text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100 shadow-lg cursor-pointer hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-5 sm:bottom-7 lg:bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {bannerSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative overflow-hidden transition-all duration-300 rounded-full cursor-pointer h-2 ${
                isActive
                  ? "w-10 bg-white/30"
                  : "w-2.5 bg-white/50 hover:bg-white/90"
              }`}
            >
              {isActive && (
                <span
                  key={`hero-progress-${currentSlide}`}
                  className="absolute inset-y-0 left-0 bg-[#A0725B] rounded-full"
                  style={{
                    animation: "heroProgress 5000ms linear forwards",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes heroProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
    </section>
  );
}


