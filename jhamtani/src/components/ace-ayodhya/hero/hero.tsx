import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[900px] overflow-hidden bg-white select-none">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ace-ayodhya/hero.webp"
          alt="Ace Ayodhya"
          fill
          priority
          quality={100}
          style={{ objectPosition: "10% 80%" }}
          className="object-cover select-none scale-110"
        />
      </div>
    </section>
  );
}
