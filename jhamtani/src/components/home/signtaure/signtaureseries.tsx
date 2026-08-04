import React from 'react';

const SignatureSeries = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen md:min-h-[140vh] font-sans bg-[#171a1f] relative overflow-hidden">


      {/* Left Content Side */}
      <div 
        className="w-full md:w-1/2 bg-[#181f27] relative flex flex-col justify-center px-8 py-20 md:px-16 lg:px-30 md:py-24  bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('')" }} 
      >

        <div className="max-w-lg z-10 relative">
          {/* Logo */}
          <div className="mb-10 md:mb-12">
            <img 
              src="/assets/pojetcts/XO_logo.webp"
              alt="XO Jhamtani Signature Series" 
              className="h-24 md:h-28 object-contain"
            />
          </div>

          {/* Headline */}
          <h2 className="text-[#f5f5f5] text-3xl md:text-4xl lg:text-[40px] font-serif font-light tracking-wide mb-10 md:mb-12 leading-[1.3]">
            Where our promise reaches its <br className="hidden md:block" /> finest expression.
          </h2>

          {/* First Paragraph */}
          <div className="mb-8 space-y-1">
            <p className="text-[13px] md:text-sm text-zinc-400 font-medium tracking-wide">
              Some homes are built to be admired.
            </p>
            <p className="text-[13px] md:text-sm text-[#C5A880] font-medium tracking-wide">
              Others are built to be admired & remembered. Forever.
            </p>
          </div>

          {/* Second Paragraph */}
          <p className="text-[12px] md:text-[13px] text-zinc-400/90 mb-10 md:mb-12 leading-relaxed font-light max-w-md">
            The finest expression of everything Jhamtani believes in- the
            XO Series represents our most considered collection of
            homes, bringing together exceptional architecture, curated
            experiences and uncompromising quality into one
            extraordinary address. Crafted with greater thought,
            greater detail and greater distinction.
          </p>

          {/* Button */}
          <div>
            <button className="border border-[#C5A880] text-[#C5A880] px-8 py-3 rounded-full text-[10px] tracking-widest uppercase hover:bg-[#C5A880] hover:text-[#171a1f] transition-all duration-300 font-semibold cursor-pointer">
              Explore The Extraordinaire
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-[120vh] bg-[#111] diagonal-clip overflow-hidden">
        <img 
          src="/assets/image_4.webp"
          alt="Signature Series Excellence" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default SignatureSeries;
