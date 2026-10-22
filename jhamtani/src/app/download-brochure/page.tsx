import Header from "@/components/header/Header";
import ProjectBrochureComponent from "@/components/project-broucher/poject-broucher";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Brochures | Jhamtani Projects in Pune",
  description:
    "Download brochures for Jhamtani's ongoing projects in Pune and enquire about homes, villas, studios and commercial spaces.",
  keywords: [
    "Jhamtani brochure",
    "Jhamtani project brochure download",
    "Jhamtani Group brochure",
  ],
  openGraph: {
    title: "Download Brochures | Jhamtani Projects in Pune",
    description:
      "Download brochures for Jhamtani's ongoing projects in Pune and enquire about homes, villas, studios and commercial spaces.",
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
