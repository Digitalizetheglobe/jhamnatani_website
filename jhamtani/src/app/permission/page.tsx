import Header from "@/components/header/Header";
import Hero from "@/components/permission/hero/hero";
import About from "@/components/permission/about/about";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Promises | Jhamtani - The Name Is A Promise",
  description: "Promises aren't written. They're practised. Explore Jhamtani's commitments to homeowners, quality, and legacy.",
};

export default function PermissionPage() {
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
