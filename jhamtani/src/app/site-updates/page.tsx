import Header from "@/components/header/Header";
import SiteUpdatesComponent from "@/components/site-updates/site-updates";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Updates | Jhamtani - Live Construction Progress",
  description:
    "Explore latest monthly construction updates, on-ground site photos, and engineering milestones for ACE Abode, ACE Villas, Jhamtani SpaceBiz, Jhamtani Elevate, ACE Abundance, ACE Atmosphere, ACE Aster, and Jhamtani Bizcore.",
  openGraph: {
    title: "SITE UPDATES - Premium Residential and Commercial Properties in Pune | Jhamtani",
    description:
      "Latest photographic construction progress across all Jhamtani residential and commercial landmarks.",
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
