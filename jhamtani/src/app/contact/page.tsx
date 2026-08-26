import Header from "@/components/header/Header";
import ContactUsComponent from "@/components/contact-us/contact-us";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Jhamtani - Head Office & Site Experience Centres",
  description:
    "Connect with Jhamtani Real Estate Developers. Visit our Head Office at Balewadi High Street, Baner, or connect with our project sales advisors across Pune.",
  openGraph: {
    title: "Contact Jhamtani Real Estate Developers | Pune",
    description:
      "Get in touch for property enquiries, site visits, and developer consultations.",
    url: "https://jhamtani.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ContactUsComponent />
      </main>
      <Footer />
    </>
  );
}
