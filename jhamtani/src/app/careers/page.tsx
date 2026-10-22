import Header from "@/components/header/Header";
import CareerComponent from "@/components/career/career";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Careers at Jhamtani Group | Jobs in Pune",
  description:
    "Explore open roles at Jhamtani Group, a fast-growing Pune real estate developer, and apply today.",
  keywords: [
    "Jhamtani careers",
    "real estate jobs in Pune",
    "Jhamtani Group jobs",
  ],
};

export default function CareersPage() {
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
