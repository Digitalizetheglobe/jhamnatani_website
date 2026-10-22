import Header from "@/components/header/Header";
import ContactUsComponent from "@/components/contact-us/contact-us";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Jhamtani Group | Baner Head Office, Pune",
  description:
    "Reach Jhamtani at Nandan Probiz, Balewadi High Street, Baner, Pune. Call +91 7447447669 or email enquiry@jhamtani.com.",
  keywords: [
    "Jhamtani contact",
    "Jhamtani Group office Baner",
    "Jhamtani phone number",
    "Jhamtani enquiry",
  ],
  openGraph: {
    title: "Contact Jhamtani Group | Baner Head Office, Pune",
    description:
      "Reach Jhamtani at Nandan Probiz, Balewadi High Street, Baner, Pune. Call +91 7447447669 or email enquiry@jhamtani.com.",
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
