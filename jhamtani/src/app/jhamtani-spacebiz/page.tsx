import Header from "@/components/header/Header";
import Hero from "@/components/jhamtani-spacebiz/hero/hero";
import Logo from "@/components/jhamtani-spacebiz/logo/logo";
import Planned from "@/components/jhamtani-spacebiz/planned/planned";
import Highlists from "@/components/jhamtani-spacebiz/highlists/highlists";
import Amenities from "@/components/jhamtani-spacebiz/amenities/amenities";
import Gallery from "@/components/jhamtani-spacebiz/gallery/gallery";
import Walkthrough from "@/components/jhamtani-spacebiz/walkthrough/wallkthrough";
import MapSection from "@/components/jhamtani-spacebiz/map/map";
import Contact from "@/components/jhamtani-spacebiz/contact/contact";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani SpaceBiz | Grade-A Commercial & Office Spaces in Baner, Pune",
  description: "Explore state-of-the-art office spaces, corporate showrooms, and modern business infrastructure at Jhamtani SpaceBiz in Baner, Pune.",
};

export default function JhamtaniSpacebizPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <Hero />
        <Logo />
        <Planned />
        <Highlists />
        {/* <Amenities /> */}
        <Walkthrough />
        <Gallery />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
