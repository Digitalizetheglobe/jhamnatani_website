import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[850px] overflow-hidden bg-white select-none">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/pojetcts/ace_aster.webp"
          alt="Ace Aster"
          fill
          priority
          quality={100}
          style={{ objectPosition: "center 60%" }}
          className="object-cover select-none scale-105"
        />
      </div>
    </section>
  );
}
