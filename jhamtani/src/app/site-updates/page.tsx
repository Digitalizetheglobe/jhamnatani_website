import Header from "@/components/header/Header";
import SiteUpdatesComponent from "@/components/site-updates/site-updates";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Site Updates | Jhamtani Projects",
  description:
    "Track the latest construction progress across Jhamtani projects in Pune.",
  keywords: [
    "Jhamtani construction updates",
    "Jhamtani site progress",
    "Jhamtani construction status",
  ],
  openGraph: {
    title: "Construction Site Updates | Jhamtani Projects",
    description:
      "Track the latest construction progress across Jhamtani projects in Pune.",
    url: "https://jhamtani.com/site-updates",
    siteName: "Jhamtani",
  },
};

export default function SiteUpdatesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <SiteUpdatesComponent />
      </main>
      <Footer />
    </>
  );
}
