import Header from "@/components/header/Header";
import Hero from "@/components/channel-partner/hero/hero";
import About from "@/components/channel-partner/about/about";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Channel Partner | Jhamtani",
  description: "Partnerships Built on Promise. Join Jhamtani as a Channel Partner.",
};

export default function ChannelPartnerPage() {
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
