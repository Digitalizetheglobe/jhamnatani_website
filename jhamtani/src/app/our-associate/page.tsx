import Header from "@/components/header/Header";
import Hero from "@/components/channel-partner/hero/hero";
import About from "@/components/channel-partner/about/about";
import Yugma from "@/components/channel-partner/yugma/yugma";
import VendorRegistration from "@/components/channel-partner/vendor-registration/vendor-registration";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Associate | Jhamtani",
  description: "Partnerships Built on Promise. Join Jhamtani as a Channel Partner or Vendor.",
};

export default function OurAssociatePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Yugma />
        <VendorRegistration />
      </main>
      <Footer />
    </>
  );
}
