import Header from "@/components/header/Header";
import MahaReraComponent from "@/components/maharera/maharera";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "MahaRERA Registration | Jhamtani Group Projects",
  description:
    "View MahaRERA registration details for Jhamtani Group projects in Pune.",
  keywords: [
    "Jhamtani MahaRERA",
    "Jhamtani RERA registration",
    "Jhamtani RERA number",
  ],
};

export default function MahaReraPage() {
  return (
    <>
      <Header />
      <main>
        <MahaReraComponent />
      </main>
      <Footer />
    </>
  );
}
