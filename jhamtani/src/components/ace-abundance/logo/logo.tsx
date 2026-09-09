import Image from "next/image";

export default function Logo() {
  return (
    <section className="w-full bg-[#F2EFE9] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto w-full py-12 md:py-14 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 select-none">
        {/* Left side: Ace Abundance logo */}
        <div className="relative flex items-center shrink-0">
          <Image
            src="/assets/ace-abundance/logo.webp"
            alt="ACE Abundance Logo"
            width={350}
            height={106}
            priority
            className="h-20 md:h-40 w-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Right side: Premium Residences text */}
        <div className="flex items-center text-center sm:text-left">
          <p className="font-serif font-light text-[24px] sm:text-[30px] md:text-[46px] leading-tight text-[#9A7A5A] tracking-wide">
            Ultra-Luxury 3 & 4.5 Bed Residences
          </p>
        </div>
      </div>
    </section>
  );
}
