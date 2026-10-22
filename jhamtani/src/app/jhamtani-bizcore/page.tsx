import Header from "@/components/header/Header";
import Hero from "@/components/jhamtani-bizcore/hero/hero";
import Logo from "@/components/jhamtani-bizcore/logo/logo";
import Planned from "@/components/jhamtani-bizcore/planned/planned";
import Amenities from "@/components/jhamtani-bizcore/amenities/amenities";
import Highlists from "@/components/jhamtani-bizcore/highlists/highlists";
import InvestCalculator from "@/components/jhamtani-bizcore/invest-calculator/invest-calculator";
import Gallery from "@/components/jhamtani-bizcore/gallery/gallery";
import Walkthrough from "@/components/jhamtani-bizcore/walkthrough/wallkthrough";
import MapSection from "@/components/jhamtani-bizcore/map/map";
import Contact from "@/components/jhamtani-bizcore/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani Bizcore | Serviced Studios Koregaon Park NX",
  description:
    "Serviced studio apartments in Koregaon Park NX, Pune by Jhamtani Group. Explore Jhamtani Bizcore and enquire today.",
  keywords: [
    "Jhamtani Bizcore",
    "serviced apartments Koregaon Park",
    "studio apartments Koregaon Park NX",
    "serviced studio Pune",
  ],
};

export default function JhamtaniBizcorePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Logo />
        <Planned />
        <Amenities />
        <Highlists />
        <Gallery />
        <InvestCalculator />
        {/* <Walkthrough /> */}
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
