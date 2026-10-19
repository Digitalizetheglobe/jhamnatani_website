import Image from "next/image";

export default function Logo() {
  return (
    <section className="w-full bg-[#F2EFE9] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto w-full py-10 md:py-14 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 lg:gap-20 select-none">
        {/* Left side: Biz One Logo */}
        <div className="relative flex items-center shrink-0">
          <Image
            src="/assets/biz-one/logo.svg"
            alt="Jhamtani Biz One Logo"
            width={240}
            height={140}
            priority
            className="h-20 md:h-24 w-auto object-contain brightness-0"
          />
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px h-16 bg-[#A0725B]/30" />

        {/* Right side: Offices & Retail Spaces text */}
        <div className="flex items-center text-center sm:text-left">
          <p className="font-serif font-light text-[24px] sm:text-[30px] md:text-[40px] leading-tight text-[#9A7A5A] tracking-wide">
            Offices & Retail Spaces
          </p>
        </div>
      </div>
    </section>
  );
}
