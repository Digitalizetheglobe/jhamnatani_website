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
  title: "Jhamtani ACE Aster Ravet | 2 & 3 BHK Homes in Pune",
  description:
    "Spacious 2 & 3 BHK homes in Ravet, Pune by Jhamtani Group. Explore ACE Aster and enquire today.",
  keywords: [
    "Jhamtani ACE Aster",
    "2 BHK in Ravet",
    "3 BHK flats in Ravet",
    "spacious flats Ravet",
    "Ace Aster Ravet",
  ],
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
