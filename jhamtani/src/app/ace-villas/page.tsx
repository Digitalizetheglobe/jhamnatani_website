import Header from "@/components/header/Header";
import Hero from "@/components/ace-villas/hero/hero";
import Logo from "@/components/ace-villas/logo/logo";
import Planned from "@/components/ace-villas/planned/planned";
import Highlists from "@/components/ace-villas/highlists/highlists";
import Amenities from "@/components/ace-villas/amenities/amenities";
import Gallery from "@/components/ace-villas/gallery/gallery";
import Walkthrough from "@/components/ace-villas/walkthrough/wallkthrough";
import MapSection from "@/components/ace-villas/map/map";
import Contact from "@/components/ace-villas/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "ACE Villas | Jhamtani - Bespoke Luxury Villas in Koregaon Park NX, Pune",
  description: "Experience ultra-luxury estate living at ACE Villas by Jhamtani. Bespoke private residences featuring timeless architecture and exceptional craftsmanship in Koregaon Park NX, Pune.",
};

export default function AceVillasPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Logo />
        <Planned />
        <Highlists />
        <Amenities />
        <Gallery />
        <Walkthrough />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
