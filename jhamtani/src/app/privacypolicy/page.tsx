import Header from "@/components/header/Header";
import PrivacyPolicyComponent from "@/components/privacy-policy/privacy-policy";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jhamtani - Official Data Protection & Privacy Terms",
  description:
    "Review Jhamtani's Privacy Policy, data encryption protocols, user rights, and legal compliance under the Information Technology Act, 2000.",
  openGraph: {
    title: "Privacy Policy | Jhamtani Pune",
    description:
      "Transparency, data protection, and privacy standards at Jhamtani.",
    url: "https://jhamtani.com/privacypolicy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PrivacyPolicyComponent />
      </main>
      <Footer />
    </>
  );
}
