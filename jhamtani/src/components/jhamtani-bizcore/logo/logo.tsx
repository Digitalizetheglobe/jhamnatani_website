import Image from "next/image";

export default function Logo() {
  return (
    <section className="w-full bg-[#F2EFE9] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto w-full py-14 md:py-15 px-6 sm:px-12 lg:px-5 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 lg:gap-32 select-none">
        {/* Left side: Jhamtani Bizcore logo */}
        <div className="relative flex items-center shrink-0">
          <Image
            src="/assets/pojetcts/bizcore_logo.webp"
            alt="Jhamtani Bizcore Logo"
            width={350}
            height={106}
            priority
            className="h-20 md:h-20 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Right side: Tagline text */}
        <div className="flex items-center text-center sm:text-left">
          <p className="font-serif font-light text-[24px] sm:text-[30px] md:text-[40px] leading-tight text-[#9A7A5A] tracking-wide">
            Serviced Studio Apartments in Koregaon Park NX
          </p>
        </div>
      </div>
    </section>
  );
}
