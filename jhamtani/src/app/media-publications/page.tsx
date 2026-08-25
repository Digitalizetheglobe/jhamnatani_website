import Header from "@/components/header/Header";
import MediaPublicationsComponent from "@/components/media-publications/media-publications";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Media Publications | Jhamtani - Press & News Articles",
  description: "Read latest news articles, featured publications, and press coverage of the Jhamtani Group in prominent national media including BW Businessworld and The Pioneer.",
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
