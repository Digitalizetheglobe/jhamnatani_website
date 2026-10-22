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
  title: "Jhamtani ACE Atmosphere Ravet | 3 & 4 BHK Homes Pune",
  description:
    "Premium 3 & 4 BHK homes in Ravet, Pune by Jhamtani Group. Explore ACE Atmosphere and enquire today.",
  keywords: [
    "Jhamtani ACE Atmosphere",
    "3 BHK in Ravet",
    "4 BHK flats in Ravet",
    "flats in Ravet Pune",
    "Ace Atmosphere Ravet",
  ],
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
