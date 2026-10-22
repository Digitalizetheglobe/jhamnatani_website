import Header from "@/components/header/Header";
import Hero from "@/components/jhamtani-spacebiz/hero/hero";
import Logo from "@/components/jhamtani-spacebiz/logo/logo";
import Planned from "@/components/jhamtani-spacebiz/planned/planned";
import Highlists from "@/components/jhamtani-spacebiz/highlists/highlists";
import Amenities from "@/components/jhamtani-spacebiz/amenities/amenities";
import Gallery from "@/components/jhamtani-spacebiz/gallery/gallery";
import Walkthrough from "@/components/jhamtani-spacebiz/walkthrough/wallkthrough";
import MapSection from "@/components/jhamtani-spacebiz/map/map";
import Contact from "@/components/jhamtani-spacebiz/contact/contact";
import Footer from "@/components/footer/Footer";
import HomeVideoModal from "@/components/home/HomeVideoModal";

export const metadata = {
  title: "Jhamtani SpaceBiz Baner | Grade A Commercial Space",
  description:
    "Grade A commercial spaces in Baner, Pune by Jhamtani Group. Explore Jhamtani SpaceBiz and enquire for availability.",
  keywords: [
    "Jhamtani SpaceBiz",
    "commercial space in Baner",
    "office space Baner Pune",
    "Grade A office Baner",
  ],
};

export default function JhamtaniSpacebizPage() {
  return (
    <>
      <Header />
      <HomeVideoModal
        videoSrc="/assets/biz-one/COMMERCIAL-SPACES.mp4"
        title="Jhamtani SpaceBiz"
        storageKey="hasSeenSpacebizVideoModal"
      />
      <main className="bg-white min-h-screen">
        <Hero />
        <Logo />
        <Planned />
        <Highlists />
        {/* <Amenities /> */}
        <Walkthrough />
        <Gallery />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
