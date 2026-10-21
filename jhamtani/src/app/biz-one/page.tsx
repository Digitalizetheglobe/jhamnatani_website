import Header from "@/components/header/Header";
import Hero from "@/components/biz-one/hero/hero";
import Logo from "@/components/biz-one/logo/logo";
import Planned from "@/components/biz-one/planned/planned";
import Highlists from "@/components/biz-one/highlists/highlists";
import Amenities from "@/components/biz-one/amenities/amenities";
import Gallery from "@/components/biz-one/gallery/gallery";
import Walkthrough from "@/components/biz-one/walkthrough/wallkthrough";
import MapSection from "@/components/biz-one/map/map";
import Contact from "@/components/biz-one/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani Bizone | Premium Offices & Retail Spaces at Kokane Chowk, Pune",
  description:
    "Give your business the perfect centre stage at Jhamtani Bizone, Kokane Chowk, Pimple Saudagar. Strategic location, grand Italian marble lobby, 6th-floor open-air deck, double-height retail frontage, and modern commercial offices.",
};

export default function BizOnePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Logo />
        <Planned />
        <Highlists />
        {/* <Amenities /> */}
        <Gallery />
        {/* <Walkthrough /> */}
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
