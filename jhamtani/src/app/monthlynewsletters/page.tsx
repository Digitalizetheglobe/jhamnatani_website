import Header from "@/components/header/Header";
import MonthlyNewsletterComponent from "@/components/monthly-newsletter/monthly-newsletter";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monthly Buzz Newsletter | Jhamtani Group",
  description:
    "Read Monthly Buzz for construction milestones, project deliveries and community stories from Jhamtani Group.",
  keywords: [
    "Jhamtani Monthly Buzz",
    "Jhamtani newsletter",
    "Jhamtani Group updates",
  ],
  openGraph: {
    title: "Monthly Buzz Newsletter | Jhamtani Group",
    description:
      "Read Monthly Buzz for construction milestones, project deliveries and community stories from Jhamtani Group.",
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
