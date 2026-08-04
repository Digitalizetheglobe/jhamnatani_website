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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Amenities />
        <Projects />
        <Timeline />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


