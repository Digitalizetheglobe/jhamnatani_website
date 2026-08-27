import Header from "@/components/header/Header";
import CustomerTestimonialsComponent from "@/components/customer-testimonial/testimonial";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Jhamtani - Video Reviews & Homeowner Stories",
  description:
    "Watch authentic video testimonials and reviews from over 5,000+ happy homeowners across Jhamtani residential developments in Pune.",
  openGraph: {
    title: "Customer Testimonials | Jhamtani Pune",
    description:
      "Real stories of joy, trust, and community from proud Jhamtani homeowners.",
    url: "https://jhamtani.com/customer-testimonials/",
  },
};

export default function CustomerTestimonialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CustomerTestimonialsComponent />
      </main>
      <Footer />
    </>
  );
}
