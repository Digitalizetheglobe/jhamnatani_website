import Header from "@/components/header/Header";
import ProjectLocation from "@/components/project-location/project-lcoation";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Jhamtani Project Locations | Baner, Ravet, Mundhwa",
  description:
    "See where Jhamtani builds across Pune: Thergaon, Ravet, Mundhwa, Baner and Koregaon Park NX, with key city landmarks nearby.",
  keywords: [
    "Jhamtani project locations",
    "Jhamtani projects in Ravet",
    "Jhamtani projects in Baner",
    "projects in Mundhwa",
  ],
};

export default function ProjectLocationPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectLocation />
      </main>
      <Footer />
    </>
  );
}
