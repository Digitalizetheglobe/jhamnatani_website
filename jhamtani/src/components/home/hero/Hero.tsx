"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Mobile Banner (< 640px) - Exact 3:4 aspect ratio matching home-mobile.jpeg */}
      <div className="block sm:hidden relative w-full aspect-[3/4]">
        <Image
          src="/assets/home-mobile.jpeg"
          alt="Jhamtani - Built on Bold Promises"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle gradient overlays for header clarity & smooth transition */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Tablet Banner (640px - 1023px) - Exact 4:5 aspect ratio matching home-tab.jpeg */}
      <div className="hidden sm:block lg:hidden relative w-full aspect-[4/5]">
        <Image
          src="/assets/home-tab.jpeg"
          alt="Jhamtani - Built on Bold Promises"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Laptop / Desktop Banner (>= 1024px) - Fullscreen 16:9 display */}
      <div className="hidden lg:block relative w-full h-screen min-h-[650px]">
        <Image
          src="/assets/home-laptop.jpeg"
          alt="Jhamtani - Built on Bold Promises"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle top & bottom gradient overlays */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </section>
  );
}


