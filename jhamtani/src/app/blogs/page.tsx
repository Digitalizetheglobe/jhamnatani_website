import Header from "@/components/header/Header";
import BlogsList from "@/components/blog/BlogsList";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jhamtani Perspectives | Blogs & Real Estate News",
  description:
    "Read Jhamtani Perspectives: news, media features and ideas that build tomorrow, from Pune real estate developer Jhamtani Group.",
  keywords: [
    "Jhamtani blog",
    "Pune real estate news",
    "Jhamtani Perspectives",
  ],
  openGraph: {
    title: "Jhamtani Perspectives | Blogs & Real Estate News",
    description:
      "Read Jhamtani Perspectives: news, media features and ideas that build tomorrow, from Pune real estate developer Jhamtani Group.",
    url: "https://jhamtani.com/blogs",
    siteName: "Jhamtani",
    images: [
      {
        url: "/assets/blogs/best-locations-to-buy-studio-apartments-in-pune.webp",
        width: 1200,
        height: 628,
        alt: "Jhamtani Perspectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhamtani Perspectives | Blogs & Real Estate News",
    description:
      "Read Jhamtani Perspectives: news, media features and ideas that build tomorrow, from Pune real estate developer Jhamtani Group.",
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
