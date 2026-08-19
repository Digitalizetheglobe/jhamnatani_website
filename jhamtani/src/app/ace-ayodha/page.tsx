import Header from "@/components/header/Header";
import Hero from "@/components/ace-ayodha/hero/hero";
import Logo from "@/components/ace-ayodha/logo/logo";
import Planned from "@/components/ace-ayodha/planned/planned";
import Highlists from "@/components/ace-ayodha/highlists/highlists";
import Amenities from "@/components/ace-ayodha/amenities/amenities";
import Gallery from "@/components/ace-ayodha/gallery/gallery";
import Walkthrough from "@/components/ace-ayodha/walkthrough/wallkthrough";
import MapSection from "@/components/ace-ayodha/map/map";
import Contact from "@/components/ace-ayodha/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Ace Ayodha | Jhamtani - The Ideal Way of Living",
  description: "Experience the ideal way of living at Ace Ayodha by Jhamtani. Premium luxury residences featuring exceptional craftsmanship and architecture in Pune.",
};

export default function AceAyodhaPage() {
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
