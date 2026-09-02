import Header from "@/components/header/Header";
import CareerComponent from "@/components/career/career";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Careers | Jhamtani - Build a Career That Builds Lives",
  description:
    "Explore career opportunities at Jhamtani. Build homes, communities and meaningful experiences while growing with purpose, mentorship, and Shakti Edge initiatives.",
};

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <CareerComponent />
      </main>
      <Footer />
    </>
  );
}
