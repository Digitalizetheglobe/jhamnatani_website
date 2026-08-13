import Header from "@/components/header/Header";
import Hero from "@/components/j-tribe/hero/hero";
import Slide from "@/components/j-tribe/slider/slide";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "J-Tribe | Jhamtani Community",
  description: "A home gives you an address. A community gives you stories to tell. Discover J-Tribe by Jhamtani.",
};

export default function JTribePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Slide />
      </main>
      <Footer />
    </>
  );
}
