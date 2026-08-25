import Header from "@/components/header/Header";
import MahaReraComponent from "@/components/maharera/maharera";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "MahaRERA Certifications | Jhamtani - Official Registrations & Approvals",
  description: "Download verified MahaRERA certificates and registration documents for all residential and commercial projects by the Jhamtani Group in Pune.",
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
