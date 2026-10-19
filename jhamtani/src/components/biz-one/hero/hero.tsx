import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[850px] overflow-hidden bg-white select-none">
      <div className="absolute inset-0 z-0">
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src="/assets/biz-one/banner-mob.png"
            alt="Jhamtani Biz One - Kokane Chowk, Pimple Saudagar"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center select-none"
          />
        </div>

        <div className="hidden sm:block lg:hidden relative w-full h-full">
          <Image
            src="/assets/biz-one/banner-tab.png"
            alt="Jhamtani Biz One - Kokane Chowk, Pimple Saudagar"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center select-none"
          />
        </div>

        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/assets/biz-one/banner-laptop.jpg"
            alt="Jhamtani Biz One - Kokane Chowk, Pimple Saudagar"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center select-none scale-105"
          />
        </div>
      </div>
    </section>
  );
}
