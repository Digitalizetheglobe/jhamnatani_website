import Header from "@/components/header/Header";
import Hero from "@/components/XO/hero/hero";
import About from "@/components/XO/about/about";
import XOCode from "@/components/XO/xo-code/xo-code";
import CTA from "@/components/XO/cta/cta";
import Soon from "@/components/XO/soon/soon";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "XO Series | Jhamtani - The Name Is A Promise",
  description: "Discover the XO Series by Jhamtani. The finest expression of exceptional architecture, curated experiences, and uncompromising quality in Pune.",
};

export default function XOPage() {
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
