import React from 'react';
import Link from 'next/link';

interface WaveTextProps {
  text: string;
  letterDelay?: number;
}

function WaveText({ text, letterDelay = 15 }: WaveTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="relative inline-flex items-center gap-[0.02em] select-none" aria-hidden="true">
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="relative inline-flex overflow-hidden">
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
              <span
                className="absolute top-full left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full will-change-transform [backface-visibility:hidden]"
                style={{ transitionDelay: `${index * letterDelay}ms` }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

const SignatureSeries = () => {
  return (
    <section
      className="relative w-full min-h-[68vh] md:min-h-[72vh] font-sans overflow-hidden"
      style={{
        backgroundImage: "url('/assets/home_banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay on the left so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(18,22,28,0.92) 0%, rgba(18,22,28,0.75) 45%, rgba(18,22,28,0.10) 70%, transparent 100%)",
        }}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[68vh] md:min-h-[72vh] px-8 py-12 md:px-16 lg:px-28 md:py-14 max-w-2xl">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <img
            src="/assets/pojetcts/XO_logo.webp"
            alt="XO Jhamtani Signature Series"
            className="h-20 md:h-24 object-contain"
          />
        </div>

        {/* Headline */}
        <h2 className="text-[#f5f5f5] text-3xl md:text-4xl lg:text-[36px] font-serif font-light tracking-wide mb-6 md:mb-8 leading-[1.15]">
          Where our promise reaches its <br className="hidden md:block" /> finest expression.
        </h2>

        {/* First Paragraph */}
        <div className="mb-5 space-y-1">
          <p className="text-[13px] md:text-sm text-zinc-400 font-medium tracking-wide">
            Some homes are built to be admired.
          </p>
          <p className="text-[13px] md:text-sm text-[#C5A880] font-medium tracking-wide">
            Others are built to be admired &amp; remembered. Forever.
          </p>
        </div>

        {/* Second Paragraph */}
        <p className="text-[12px] md:text-[13px] text-zinc-400/90 mb-6 md:mb-8 leading-relaxed font-light max-w-md">
          The finest expression of everything Jhamtani believes in- the XO
          Series represents our most considered collection of homes, bringing
          together exceptional architecture, curated experiences and
          uncompromising quality into one extraordinary address.
        </p>

        {/* Button */}
        <div>
          <Link
            href="/xosignatureseries"
            className="group relative inline-flex items-center justify-center border border-[#C5A880] text-[#C5A880] px-8 py-3 rounded-full text-[10px] tracking-widest uppercase hover:bg-[#C5A880] hover:text-[#171a1f] transition-all duration-300 font-semibold cursor-pointer overflow-hidden"
          >
            <WaveText text="Explore The Extraordinaire" letterDelay={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureSeries;
