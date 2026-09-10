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

export const metadata = {
  title: "Ace Ayodhya | Jhamtani - The Ideal Way of Living",
  description: "Experience the ideal way of living at Ace Ayodhya by Jhamtani. Premium luxury residences featuring exceptional craftsmanship and architecture in Pune.",
};

export default function AceAyodhyaPage() {
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
