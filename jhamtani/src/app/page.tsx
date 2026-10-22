import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Hero from "@/components/home/hero/Hero";
import AboutSection from "@/components/home/about/AboutSection";
import Amenities from "@/components/home/amenities/Amenities";
import Projects from "@/components/home/projects/Projects";
import Timeline from "@/components/home/timeline/Timeline";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Blog from "@/components/home/blog/Blog";
import Contact from "@/components/home/contact/Contact";
import Footer from "@/components/footer/Footer";
import SignatureSeries from '@/components/home/signtaure/signtaureseries';
import InteractiveMap from "@/components/home/map/map";
import HomeVideoModal from "@/components/home/HomeVideoModal";

export const metadata: Metadata = {
  title: "Jhamtani Group | Luxury Real Estate Developer in Pune",
  description:
    "Jhamtani Group is a Pune real estate developer with 40+ years of legacy and 13K+ happy families. Explore 2–4.5 BHK homes, villas, and commercial spaces.",
  keywords: [
    "real estate developer in Pune",
    "Jhamtani Group",
    "luxury apartments in Pune",
    "builders in Pune",
    "Jhamtani builders Pune",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <HomeVideoModal />
      <main>
        <Hero />
        <AboutSection />
        <Amenities />
        <Projects />
        <SignatureSeries/>
        <InteractiveMap />
        {/* <Timeline /> */}
        <Testimonial />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


