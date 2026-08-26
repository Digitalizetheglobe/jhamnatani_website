import Header from "@/components/header/Header";
import ProjectBrochureComponent from "@/components/project-broucher/poject-broucher";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Brochure | Jhamtani - Floor Plans & Project Specifications",
  description:
    "Download official brochures, masterplans, and detailed unit floor plans for ACE Ayodhya, ACE Abundance, ACE Villas, ACE Atmosphere, ACE Aster, Jhamtani Bizcore, Jhamtani Elevate, and Jhamtani SpaceBiz.",
  openGraph: {
    title: "Download Project Brochures | Jhamtani Pune",
    description:
      "Explore and download verified e-brochures and architectural floor plans across Pune and PCMC.",
    url: "https://jhamtani.com/download-brochure/",
  },
};

export default function DownloadBrochurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ProjectBrochureComponent />
      </main>
      <Footer />
    </>
  );
}
