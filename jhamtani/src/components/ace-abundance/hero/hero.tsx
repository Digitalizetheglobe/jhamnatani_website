import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[900px] overflow-hidden bg-[#14191F] select-none">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ace-abundance/Abundacne_Elevaion.webp"
          alt="Ace Abundance"
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
