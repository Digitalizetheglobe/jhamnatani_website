import Header from "@/components/header/Header";
import Hero from "@/components/channel-partner/hero/hero";
import About from "@/components/channel-partner/about/about";
import Yugma from "@/components/channel-partner/yugma/yugma";
import VendorRegistration from "@/components/channel-partner/vendor-registration/vendor-registration";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Associates | Jhamtani Group Pune",
  description:
    "Meet the associates and partners who work with Jhamtani Group to deliver quality real estate across Pune.",
  keywords: [
    "Jhamtani associates",
    "Jhamtani channel partners",
    "real estate partners Pune",
  ],
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
