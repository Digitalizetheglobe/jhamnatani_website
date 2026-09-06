import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingWidgets from "@/components/common/FloatingWidgets";

const forum = localFont({
  src: "./fonts/Forum-Regular.ttf",
  variable: "--font-forum",
});

const plusJakartaSans = localFont({
  src: [
    {
      path: "./fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PlusJakartaSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-jakarta",
});

const inriaSerif = localFont({
  src: "./fonts/InriaSerif-Light.ttf",
  variable: "--font-inria-serif",
});

export const metadata: Metadata = {
  title: "Jhamtani | The Name Is A Promise",
  description: "Pune's premier luxury real estate developer. Creating exceptional architecture, curated experiences, and uncompromising quality.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${forum.variable} ${plusJakartaSans.variable} ${inriaSerif.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col text-white selection:bg-[#C5A880] selection:text-black font-sans"
      >
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
