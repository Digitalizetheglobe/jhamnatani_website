import Header from "@/components/header/Header";
import Hero from "@/components/ace-aster/hero/hero";
import Logo from "@/components/ace-aster/logo/logo";
import Planned from "@/components/ace-aster/planned/planned";
import Highlists from "@/components/ace-aster/highlists/highlists";
import Amenities from "@/components/ace-aster/amenities/amenities";
import Gallery from "@/components/ace-aster/gallery/gallery";
import Walkthrough from "@/components/ace-aster/walkthrough/wallkthrough";
import MapSection from "@/components/ace-aster/map/map";
import Contact from "@/components/ace-aster/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "ACE Aster | Jhamtani - Contemporary Residences in Ravet, Pune",
  description: "Experience modern luxury living at ACE Aster by Jhamtani. Premium 2 & 3 BHK residences featuring exceptional architecture, lifestyle amenities and scenic views in Ravet, Pune.",
};

export default function AceAsterPage() {
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
