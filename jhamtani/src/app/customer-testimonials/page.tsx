import Header from "@/components/header/Header";
import CustomerTestimonialsComponent from "@/components/customer-testimonial/testimonial";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Jhamtani Homebuyer Stories",
  description:
    "Watch real homebuyer stories from Jhamtani residents, including Ace Abode in Ravet. Hear from 13K+ happy families across Pune.",
  keywords: [
    "Jhamtani reviews",
    "Jhamtani customer reviews",
    "Jhamtani builder reviews",
    "Ace Abode reviews",
  ],
  openGraph: {
    title: "Customer Testimonials | Jhamtani Homebuyer Stories",
    description:
      "Watch real homebuyer stories from Jhamtani residents, including Ace Abode in Ravet. Hear from 13K+ happy families across Pune.",
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
