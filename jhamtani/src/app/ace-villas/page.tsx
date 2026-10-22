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
  title: "Jhamtani ACE Villas Koregaon Park NX | Luxury Villas",
  description:
    "Ultra-luxury villas in Koregaon Park NX, Pune by Jhamtani Group. Explore ACE Villas and enquire to learn more.",
  keywords: [
    "Jhamtani ACE Villas",
    "luxury villas in Koregaon Park",
    "villas in Koregaon Park NX",
    "ultra luxury villas Pune",
  ],
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
