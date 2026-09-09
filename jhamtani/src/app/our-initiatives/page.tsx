import Header from "@/components/header/Header";
import Hero from "@/components/permission/hero/hero";
import About from "@/components/permission/about/about";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Initiatives | Jhamtani - The Name Is A Promise",
  description: "Promises aren't written. They're practised. Explore Jhamtani's commitments, initiatives, to homeowners, quality, and legacy.",
};

export default function OurInitiativesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
