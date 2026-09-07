import Header from "@/components/header/Header";
import ShaktiEdge from "@/components/shakti-edge/shakti-edge";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Shakti Edge | Empowering Women, Enabling Leaders | Jhamtani",
  description:
    "A dedicated initiative focused on empowering women across Jhamtani through workshops, learning opportunities, leadership development and meaningful conversations.",
};

export default function ShaktiEdgePage() {
  return (
    <>
      <Header />
      <main>
        <ShaktiEdge />
      </main>
      <Footer />
    </>
  );
}
