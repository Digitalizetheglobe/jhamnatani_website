import Header from "@/components/header/Header";
import PrivacyPolicyComponent from "@/components/privacy-policy/privacy-policy";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jhamtani Group",
  description:
    "How Jhamtani Group collects, uses and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | Jhamtani Group",
    description:
      "How Jhamtani Group collects, uses and protects your personal information.",
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
