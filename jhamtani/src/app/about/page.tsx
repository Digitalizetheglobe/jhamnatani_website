import Header from "@/components/header/Header";
import Hero from "@/components/about/hero/hero";
import AboutContent from "@/components/about/about/about";
import Our from "@/components/about/our/our";
import Value from "@/components/about/value/value";
import DirectorSection from "@/components/about/director/director";
import AwardSection from "@/components/about/award/award";
import AwardsGridSection from "@/components/about/award/awards";
import AboutTimeline from "@/components/about/timeline/timeline";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us | Jhamtani - The Name Is A Promise",
  description: "Learn about Jhamtani's 40+ years legacy, vision, and real estate excellence in Pune.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutContent />
        <Our />
        <Value />
        <DirectorSection />
        <AboutTimeline />
        <AwardSection />
        <AwardsGridSection />
      </main>
      <Footer />
    </>
  );
}
