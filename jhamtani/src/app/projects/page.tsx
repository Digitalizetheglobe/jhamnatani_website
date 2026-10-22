import Header from "@/components/header/Header";
import ProjectsComponent from "@/components/projects/projects";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani Projects in Pune | Flats, Villas & Offices",
  description:
    "Explore 8 ongoing Jhamtani projects in Thergaon, Ravet, Mundhwa, Baner and Koregaon Park NX: 2–4.5 BHK homes, villas, studios and Grade A offices.",
  keywords: [
    "Jhamtani projects in Pune",
    "Jhamtani Group projects",
    "ongoing projects Jhamtani",
    "new projects in Pune",
  ],
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
