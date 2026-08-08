"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(1);
  const prevSlideRef = useRef(1);
  const isTransitioning = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = 5;

  // Auto-slide every 6 seconds
  const autoAdvance = useCallback(() => {
    if (isTransitioning.current) return;
    setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(autoAdvance, 6000);
    return () => clearInterval(timer);
  }, [autoAdvance, activeSlide]);

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioning.current) return;
    const btn = e.currentTarget;

    gsap.timeline({
      onComplete: () => {
        setActiveSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
      }
    })
    .to(btn, { scale: 0.92, duration: 0.08, ease: "power2.out" })
    .to(btn, { scale: 1.0, duration: 0.12, ease: "power2.inOut" });
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTransitioning.current) return;
    const btn = e.currentTarget;

    gsap.timeline({
      onComplete: () => {
        setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
      }
    })
    .to(btn, { scale: 0.92, duration: 0.08, ease: "power2.out" })
    .to(btn, { scale: 1.0, duration: 0.12, ease: "power2.inOut" });
  };

  const projectsData = [
    {
      id: 1,
      title: "ACE Atmosphere",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_atmosphere.webp",
      desc: "Pune’s first 24×7 Lifestyle with all-day open amenities.",
      logo: "/assets/pojetcts/ace_atmosphere_logo.webp",
    },
    {
      id: 2,
      title: "Jhamtani Abundance",
      location: "Mundhwa",
      type: "Residential",
      image: "/assets/pojetcts/Abundacne_Elevaion.webp",
      desc: "A signature statement of luxury residential living in Mundhwa.",
      logo: "/assets/pojetcts/Abundacne logo.webp",
    },
    {
      id: 3,
      title: "ACE Villas",
      location: "Koregaon Park NX",
      type: "Villas",
      image: "/assets/pojetcts/ace_villas.webp",
      desc: "Unrivaled luxury estate villas reserved for a select few.",
      logo: "/assets/pojetcts/ace_villas_logo.webp",
    },
    {
      id: 4,
      title: "Jhamtani Bizcore",
      location: "Koregaon Park NX",
      type: "Commercial",
      image: "/assets/pojetcts/bizcore_image.webp",
      desc: "Premium boutique office spaces and dynamic retail hubs.",
      logo: "/assets/pojetcts/bizcore_logo.webp",
    },
    {
      id: 5,
      title: "ACE Aster",
      location: "Ravet",
      type: "Residential",
      image: "/assets/pojetcts/ace_aster.webp",
      desc: "Bespoke contemporary residences crafted for absolute comfort.",
      logo: "/assets/pojetcts/aster_logo.webp",
    },
  ];

  useGSAP(() => {
    const prev = prevSlideRef.current;
    const current = activeSlide;
    if (prev === current) return;

    isTransitioning.current = true;

    // Determine direction
    let dir: 'next' | 'prev' = 'next';
    if (current === 1 && prev === totalSlides) {
      dir = 'next';
    } else if (current === totalSlides && prev === 1) {
      dir = 'prev';
    } else if (current > prev) {
      dir = 'next';
    } else {
      dir = 'prev';
    }

    // Select elements
    const fromSlide = containerRef.current?.querySelector(`#slide-img-container-${prev}`) as HTMLElement;
    const toSlide = containerRef.current?.querySelector(`#slide-img-container-${current}`) as HTMLElement;
    const fromImage = fromSlide?.querySelector('.slide-img-inner') as HTMLElement;
    const toImage = toSlide?.querySelector('.slide-img-inner') as HTMLElement;

    const fromContent = containerRef.current?.querySelector(`#slide-content-${prev}`) as HTMLElement;
    const toContent = containerRef.current?.querySelector(`#slide-content-${current}`) as HTMLElement;

    const fromNumber = containerRef.current?.querySelector(`#slide-number-${prev}`) as HTMLElement;
    const toNumber = containerRef.current?.querySelector(`#slide-number-${current}`) as HTMLElement;

    if (!fromSlide || !toSlide) {
      prevSlideRef.current = current;
      isTransitioning.current = false;
      return;
    }

    // Kill any active transitions
    gsap.killTweensOf([
      fromSlide, toSlide, fromImage, toImage,
      fromContent, toContent, fromNumber, toNumber
    ]);

    // Set initial positions
    const startX = dir === 'next' ? 100 : -100;
    const startImgX = dir === 'next' ? -20 : 20;

    gsap.set(toSlide, {
      xPercent: startX,
      opacity: 1,
      zIndex: 10,
    });
    // Start at scale 1.0 and zoom IN during transition
    gsap.set(toImage, {
      xPercent: startImgX,
      scale: 1.0,
    });
    gsap.set(fromSlide, { zIndex: 5 });

    gsap.set(toContent, {
      opacity: 0,
      y: 30,
      zIndex: 10,
    });
    gsap.set(fromContent, { zIndex: 5 });

    gsap.set(toNumber, {
      opacity: 0,
      y: dir === 'next' ? 50 : -50,
      zIndex: 10,
    });
    gsap.set(fromNumber, { zIndex: 5 });

    const tl = gsap.timeline({
      onComplete: () => {
        // Cleanup after transition
        gsap.set(fromSlide, { opacity: 0, xPercent: 0 });
        gsap.set(toSlide, { zIndex: 10, xPercent: 0 });
        
        gsap.set(fromContent, { opacity: 0, y: 0 });
        gsap.set(toContent, { zIndex: 10, y: 0 });

        gsap.set(fromNumber, { opacity: 0, y: 0 });
        gsap.set(toNumber, { zIndex: 10, y: 0 });

        // Keep the active slide zoomed in, reset the outgoing one
        gsap.set(fromImage, { scale: 1.0, xPercent: 0 });
        gsap.set(toImage, { scale: 1.12, xPercent: 0 });

        prevSlideRef.current = current;
        isTransitioning.current = false;
      }
    });

    // 1. Slide transitions (Left panel container) - Creates the boundary slide
    tl.to(fromSlide, {
      xPercent: dir === 'next' ? -100 : 100,
      duration: 1.3,
      ease: "power4.inOut"
    }, 0);

    tl.to(toSlide, {
      xPercent: 0,
      duration: 1.3,
      ease: "power4.inOut"
    }, 0);

    // 2. Parallax sliding (Mirror effect) & Zoom In
    tl.to(fromImage, {
      xPercent: dir === 'next' ? 20 : -20,
      scale: 1.0, // Zoom out the leaving image
      duration: 1.3,
      ease: "power4.inOut"
    }, 0);

    tl.to(toImage, {
      xPercent: 0,
      scale: 1.12, // Zoom IN the entering image
      duration: 1.8, // Slower duration for a soft zoom-in settle
      ease: "power3.out"
    }, 0);

    // Dim the previous slide
    tl.to(fromSlide, {
      opacity: 0.5,
      duration: 1.3,
      ease: "power4.inOut"
    }, 0);

    // 3. Right panel text details fade & slide
    tl.to(fromContent, {
      opacity: 0,
      y: -20,
      duration: 0.35,
      ease: "power2.in"
    }, 0);

    tl.to(toContent, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, 0.4);

    // 4. Slide giant number transition
    tl.to(fromNumber, {
      opacity: 0,
      y: dir === 'next' ? -50 : 50,
      duration: 0.35,
      ease: "power2.in"
    }, 0);

    tl.to(toNumber, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, 0.4);

  }, { dependencies: [activeSlide], scope: containerRef });

  return (
    <div id="projects" ref={containerRef} className="w-full flex flex-col scroll-mt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .hover-circle-path {
          stroke-dashoffset: 295.3;
          transition: stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .group:hover .hover-circle-path {
          stroke-dashoffset: 0 !important;
        }
      `}} />
      {/* 1. Iconic Lifestyles (Slider Row) */}
      <section className="w-full border-t border-luxury-border bg-[#f5f3ef] py-0 overflow-hidden flex flex-col justify-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-[500px] lg:h-[85vh] lg:max-h-[800px] items-stretch">
          
          {/* Left Panel: Animated Image + Floating Outlined Index */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-full w-full overflow-hidden select-none bg-zinc-900">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                id={`slide-img-container-${idx + 1}`}
                className={`absolute inset-0 w-full h-full overflow-hidden ${
                  idx + 1 === activeSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
              >
                <div className="slide-img-inner absolute inset-0 w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Giant Numbers on bottom-right of the Image */}
            <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 z-20 overflow-hidden h-[70px] sm:h-[100px] lg:h-[125px] w-[150px] sm:w-[200px] pointer-events-none select-none">
              {projectsData.map((project, idx) => (
                <span
                  key={project.id}
                  id={`slide-number-${idx + 1}`}
                  className={`absolute bottom-0 right-0 font-serif text-[70px] sm:text-[100px] lg:text-[70px] font-light leading-none text-white select-none tracking-tighter drop-shadow-md transition-opacity duration-300 ${
                    idx + 1 === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  0{idx + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Right Panel: Branded Details Card (Warm Beige Background) */}
          <div className="lg:col-span-4 bg-[#f5f3ef] flex flex-col justify-between p-6 sm:p-8 lg:p-10 text-black text-left relative min-h-[380px] lg:min-h-0 h-full">
            {/* Header Title */}
            <div className="space-y-1">
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-zinc-900 font-normal">
                The Iconic Lifestyles
                <span className="block text-zinc-800 font-serif font-normal">We Created</span>
              </h2>
            </div>

            {/* Center Area: Dynamic Logo + Description */}
            <div className="my-auto py-4 lg:py-6 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] w-full">
              {projectsData.map((project, idx) => (
                <div
                  key={project.id}
                  id={`slide-content-${idx + 1}`}
                  className={`absolute inset-x-0 top-0 flex flex-col items-start justify-start w-full transition-opacity duration-300 ${
                    idx + 1 === activeSlide ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative w-56 sm:w-64 lg:w-72 h-28 sm:h-36 lg:h-40">
                    <Image
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      fill
                      priority
                      className="object-contain object-left"
                    />
                  </div>
                  
                  <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-zinc-600 mt-4 max-w-xs text-left">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Area: Custom Nav controls & EXPLORE MORE */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4 border-t border-zinc-200 select-none">
              <div className="flex items-center space-x-2.5">
                <button
                  onClick={handlePrev}
                  className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10"
                  aria-label="Previous slide"
                >
                  <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="transparent"
                      stroke="#A0725B"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="transparent"
                      stroke="black"
                      strokeWidth="1.2"
                      strokeDasharray="295.3"
                      className="hover-circle-path"
                    />
                  </svg>
                  <ChevronLeft className="relative w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-[#A0725B] transition-colors duration-300 group-hover:text-#a0725b z-10" />
                </button>
                <button
                  onClick={handleNext}
                  className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-none select-none transition-all duration-300 z-10"
                  aria-label="Next slide"
                >
                  <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="transparent"
                      stroke="#A0725B"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="transparent"
                      stroke="black"
                      strokeWidth="1.2"
                      strokeDasharray="295.3"
                      className="hover-circle-path"
                    />
                  </svg>
                  <ChevronRight className="relative w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-[#A0725B] transition-colors duration-300 group-hover:text-#a0725b z-10" />
                </button>
                <span className="font-sans text-xs sm:text-sm text-[#a0725b] font-semibold pl-1 whitespace-nowrap z-10">
                  {activeSlide}/{totalSlides}
                </span>
              </div>
              <button className="group relative flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 border border-[#a0725b] hover:bg-[#a0725b] hover:text-white rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#a0725b] transition-all duration-300 cursor-pointer z-10 overflow-hidden">
                <span className="sr-only">EXPLORE MORE</span>
                <span className="relative flex items-center gap-[0.12em]" aria-hidden="true">
                  {"EXPLORE MORE".split("").map((char, index) => {
                    if (char === " ") {
                      return <span key={index} className="w-[0.3em] inline-block" />;
                    }
                    return (
                      <span key={index} className="relative inline-flex overflow-hidden">
                        <span
                          className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                          style={{ transitionDelay: `${index * 25}ms` }}
                        >
                          {char}
                        </span>
                        <span
                          className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                          style={{ transitionDelay: `${index * 25}ms` }}
                        >
                          {char}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. XO Series (Redesigned Theme) */}
    </div>
  );
}
