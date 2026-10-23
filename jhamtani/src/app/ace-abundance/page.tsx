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
import HomeVideoModal from "@/components/home/HomeVideoModal";

export const metadata = {
  title: "Jhamtani ACE Abundance Mundhwa | 3 & 4.5 BHK Pune",
  description:
    "Ultra-luxury 3 & 4.5 bed residences in Mundhwa, Pune by Jhamtani Group. Explore ACE Abundance and enquire today.",
  keywords: [
    "Jhamtani ACE Abundance",
    "luxury apartments in Mundhwa",
    "3 BHK in Mundhwa",
    "4.5 BHK Pune",
    "ultra luxury flats Mundhwa",
  ],
};

export default function AceAbundancePage() {
  return (
    <>
      <Header />
      <HomeVideoModal
        youtubeUrl="https://youtu.be/lJfdxpPMcBQ"
        title="Ace Abundance"
        storageKey="hasSeenAceAbundanceVideoModal"
      />
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
