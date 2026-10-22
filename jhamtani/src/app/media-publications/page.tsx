import Header from "@/components/header/Header";
import MediaPublicationsComponent from "@/components/media-publications/media-publications";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani in the News | Media & Press Coverage",
  description:
    "Read press coverage, announcements and media features about Jhamtani Group.",
  keywords: [
    "Jhamtani news",
    "Jhamtani Group press",
    "Jhamtani media coverage",
  ],
};

export default function MediaPublicationsPage() {
  return (
    <>
      <Header />
      <main>
        <MediaPublicationsComponent />
      </main>
      <Footer />
    </>
  );
}
