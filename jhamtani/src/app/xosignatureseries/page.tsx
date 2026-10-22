import Header from "@/components/header/Header";
import Hero from "@/components/XO/hero/hero";
import About from "@/components/XO/about/about";
import XOCode from "@/components/XO/xo-code/xo-code";
import CTA from "@/components/XO/cta/cta";
import Soon from "@/components/XO/soon/soon";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "XO Series by Jhamtani | Luxury Homes in Pune",
  description:
    "The XO Series is Jhamtani's most considered collection of luxury homes, combining exceptional architecture, curated experiences and uncompromising quality.",
  keywords: [
    "luxury homes in Pune",
    "XO Signature Series",
    "XO Jhamtani",
    "ultra luxury apartments Pune",
  ],
};

export default function XOSignatureSeriesPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        <Hero />
        <About />
        <XOCode />
        <CTA />
        <Soon />
      </main>
      <Footer />
    </>
  );
}
