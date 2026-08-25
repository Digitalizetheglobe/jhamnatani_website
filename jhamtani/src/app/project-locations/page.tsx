import Header from "@/components/header/Header";
import ProjectLocation from "@/components/project-location/project-lcoation";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Project Locations | Jhamtani - Premium Properties in Pune",
  description: "Explore our prime residential and commercial project locations across Pune and PCMC including Thergaon, Mundhwa, Koregaon Park NX, Ravet, and Baner.",
};

export default function ProjectLocationsPage() {
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
