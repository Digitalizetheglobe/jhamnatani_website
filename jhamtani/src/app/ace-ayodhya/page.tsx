import Header from "@/components/header/Header";
import Hero from "@/components/ace-ayodhya/hero/hero";
import Logo from "@/components/ace-ayodhya/logo/logo";
import Planned from "@/components/ace-ayodhya/planned/planned";
import Highlists from "@/components/ace-ayodhya/highlists/highlists";
import Amenities from "@/components/ace-ayodhya/amenities/amenities";
import Gallery from "@/components/ace-ayodhya/gallery/gallery";
import Walkthrough from "@/components/ace-ayodhya/walkthrough/wallkthrough";
import MapSection from "@/components/ace-ayodhya/map/map";
import Contact from "@/components/ace-ayodhya/contact/contact";
import Footer from "@/components/footer/Footer";
import HomeVideoModal from "@/components/home/HomeVideoModal";

export const metadata = {
  title: "Jhamtani ACE Ayodhya Thergaon | 2 & 3 BHK Flats Pune",
  description:
    "Premium 2 & 3 BHK homes in Thergaon, Pune by Jhamtani Group. Explore ACE Ayodhya's project details and enquire today for a visit.",
  keywords: [
    "Jhamtani ACE Ayodhya",
    "2 BHK flats in Thergaon",
    "3 BHK flats in Thergaon",
    "flats in Thergaon Pune",
    "ACE Ayodhya Thergaon",
  ],
};

export default function AceAyodhyaPage() {
  return (
    <>
      <Header />
      <HomeVideoModal
        youtubeUrl="https://youtu.be/AOeMqMzfRCQ"
        title="Ace Ayodhya"
        storageKey="hasSeenAceAyodhyaVideoModal"
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
