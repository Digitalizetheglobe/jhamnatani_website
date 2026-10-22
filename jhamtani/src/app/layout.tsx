import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jhamtani.com/#organization",
  name: "Jhamtani",
  url: "https://jhamtani.com/",
  description:
    "Jhamtani is a real estate brand developing residential and commercial properties in Pune, Maharashtra, India.",
  telephone: "+91 7447447669",
  email: "enquiry@jhamtani.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Office No. 1303/1309, Nandan Probiz, Balewadi High Street, Baner",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411045",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales and Customer Enquiries",
    telephone: "+91 7447447669",
    email: "enquiry@jhamtani.com",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jhamtani.com"),
  title: "Jhamtani | The Name Is A Promise",
  description: "Pune's premier luxury real estate developer. Creating exceptional architecture, curated experiences, and uncompromising quality.",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },
  verification: {
    google: "bqMKh88AWXiIU6JxPoyHJY4ZzfKZ6C0JH4-qghZa9oE",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics & Google Ads Tags */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-93HTFX0TJ0"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18230516715"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-93HTFX0TJ0');
            gtag('config', 'AW-18230516715');
          `}
        </Script>
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
