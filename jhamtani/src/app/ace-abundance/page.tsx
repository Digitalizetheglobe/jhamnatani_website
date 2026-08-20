import Header from "@/components/header/Header";
import Hero from "@/components/ace-abundance/hero/hero";
import Logo from "@/components/ace-abundance/logo/logo";
import Planned from "@/components/ace-abundance/planned/planned";
import Highlists from "@/components/ace-abundance/highlists/highlists";
import Amenities from "@/components/ace-abundance/amenities/amenities";
import Gallery from "@/components/ace-abundance/gallery/gallery";
import Walkthrough from "@/components/ace-abundance/walkthrough/wallkthrough";
import MapSection from "@/components/ace-abundance/map/map";
import Contact from "@/components/ace-abundance/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Ace Abundance | Jhamtani - The Ideal Way of Living",
  description: "Experience the ideal way of living at Ace Abundance by Jhamtani. Premium luxury residences featuring exceptional craftsmanship and architecture in Pune.",
};

export default function AceAbundancePage() {
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
