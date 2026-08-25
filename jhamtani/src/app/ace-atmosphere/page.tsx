import Header from "@/components/header/Header";
import Hero from "@/components/ace-atmosphere/hero/hero";
import Logo from "@/components/ace-atmosphere/logo/logo";
import Planned from "@/components/ace-atmosphere/planned/planned";
import Highlists from "@/components/ace-atmosphere/highlists/highlists";
import Amenities from "@/components/ace-atmosphere/amenities/amenities";
import Gallery from "@/components/ace-atmosphere/gallery/gallery";
import Walkthrough from "@/components/ace-atmosphere/walkthrough/wallkthrough";
import MapSection from "@/components/ace-atmosphere/map/map";
import Contact from "@/components/ace-atmosphere/contact/contact";
import Footer from "@/components/footer/Footer";


export const metadata = {
  title: "ACE Atmosphere | Jhamtani - Pune's 1st 24x7 Lifestyle Concept in Ravet",
  description: "Experience Pune's premier 24x7 lifestyle at ACE Atmosphere by Jhamtani. Luxury 2 & 3 BHK residences featuring round-the-clock amenities in Ravet, Pune.",
};

export default function AceAtmospherePage() {
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
