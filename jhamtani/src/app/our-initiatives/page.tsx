import Header from "@/components/header/Header";
import Hero from "@/components/permission/hero/hero";
import About from "@/components/permission/about/about";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Promises | Jhamtani Real Estate Pune",
  description:
    "Customer happiness, better than yesterday, thinking long term and a positive impact on every life touched. The four promises behind every Jhamtani project.",
  keywords: [
    "Jhamtani promises",
    "trusted builder in Pune",
    "Jhamtani customer happiness",
  ],
};

export default function OurInitiativesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
