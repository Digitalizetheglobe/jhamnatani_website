import Header from "@/components/header/Header";
import Hero from "@/components/hum-aapke-saath/hero/hero";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Hamesha Aapke Saath | Jhamtani",
  description: "A promise that doesn't end at possession. Trust is built long after it.",
};

export default function HumAapkeSaathPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
