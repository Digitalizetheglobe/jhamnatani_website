import Header from "@/components/header/Header";
import Hero from "@/components/ace-abundance/hero/hero";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Ace Abundance | Jhamtani - The Ideal Way of Living",
  description: "Experience the ideal way of living at Ace Abundance by Jhamtani. Premium luxury residences featuring exceptional craftsmanship and architecture in Pune.",
};

export default function AceAbundancePage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
