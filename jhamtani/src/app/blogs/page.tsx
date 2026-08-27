import Header from "@/components/header/Header";
import BlogsList from "@/components/blog/BlogsList";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLOGS - Premium Residential and Commercial Properties in Pune and PCMC | Jhamtani",
  description:
    "Explore latest real estate insights, RERA buying guides, and property investment opportunities in Pune with Jhamtani.",
  keywords: [
    "Jhamtani Blogs",
    "Pune Real Estate Blogs",
    "Buy Studio Apartment Pune",
    "RERA Guidelines India",
    "Real Estate Investment Pune",
    "Jhamtani Properties"
  ],
  openGraph: {
    title: "BLOGS - Premium Residential and Commercial Properties in Pune and PCMC | Jhamtani",
    description:
      "Explore latest real estate insights, RERA buying guides, and property investment opportunities in Pune with Jhamtani.",
    url: "https://jhamtani.com/blogs",
    siteName: "Jhamtani",
    images: [
      {
        url: "/assets/blogs/best-locations-to-buy-studio-apartments-in-pune.webp",
        width: 1200,
        height: 628,
        alt: "Jhamtani Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOGS - Jhamtani Real Estate Perspectives",
    description:
      "Explore latest real estate insights, RERA buying guides, and property investment opportunities in Pune with Jhamtani.",
  },
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BlogsList />
      </main>
      <Footer />
    </>
  );
}
