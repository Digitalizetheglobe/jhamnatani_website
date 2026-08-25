import Header from "@/components/header/Header";
import Hero from "@/components/jhamtani-elevate/hero/hero";
import Logo from "@/components/jhamtani-elevate/logo/logo";
import Planned from "@/components/jhamtani-elevate/planned/planned";
import Highlists from "@/components/jhamtani-elevate/highlists/highlists";
import Amenities from "@/components/jhamtani-elevate/amenities/amenities";
import Gallery from "@/components/jhamtani-elevate/gallery/gallery";
import Walkthrough from "@/components/jhamtani-elevate/walkthrough/wallkthrough";
import MapSection from "@/components/jhamtani-elevate/map/map";
import Contact from "@/components/jhamtani-elevate/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani Elevate | Elevated Living in Mundhwa, Pune",
  description: "Experience modern elevated living at Jhamtani Elevate in Mundhwa, Pune. Premium residences featuring thoughtful design, lifestyle amenities, and co-working spaces.",
};

export default function JhamtaniElevatePage() {
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
