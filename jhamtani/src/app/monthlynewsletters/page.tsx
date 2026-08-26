import Header from "@/components/header/Header";
import MonthlyNewsletterComponent from "@/components/monthly-newsletter/monthly-newsletter";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Newsletters | Jhamtani - Official Monthly Buzz & Community Editions",
  description:
    "Read and download Jhamtani's official Monthly Newsletters and Annual Buzz editions. Explore construction progress, community events, and project milestone updates.",
  openGraph: {
    title: "Jhamtani Monthly Newsletters & Flipbook Archives",
    description:
      "Interactive digital flipbook editions and PDF downloads of Jhamtani Monthly Buzz across Pune.",
    url: "https://jhamtani.com/monthlynewsletters/",
  },
};

export default function MonthlyNewslettersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MonthlyNewsletterComponent />
      </main>
      <Footer />
    </>
  );
}
