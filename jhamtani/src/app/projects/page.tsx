import Header from "@/components/header/Header";
import ProjectsComponent from "@/components/projects/projects";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Projects | Jhamtani - Residential & Commercial Properties in Pune",
  description: "Explore a wide range of premium residential and commercial real estate projects in Pune and PCMC, crafted with excellence by the Jhamtani Group.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsComponent />
      </main>
      <Footer />
    </>
  );
}
