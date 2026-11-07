import type { Metadata, Viewport } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/sections/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import { WhatsAppButton } from "@/app/components/ui/WhatsAppButton";
import { MobileActionDock } from "@/app/components/ui/MobileActionDock";

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#F6F4EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.animaspace.net"),
  title: {
    default: "Anima Space — Psychological Consulting & Counselling Centre",
    template: "%s — Anima Space",
  },
  description:
    "A safe, confidential, and compassionate space for psychological counselling, coaching, career guidance, and training for children, adolescents, and adults.",
  keywords: [
    "child psychology",
    "psychological counselling",
    "child counselling",
    "adolescent therapy",
    "career counselling",
    "emotional well-being",
    "Prashanthi Simon",
    "Anima Space",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.animaspace.net",
    siteName: "Anima Space",
    title: "Anima Space — Psychological Consulting & Counselling Centre",
    description:
      "A safe, confidential space for counselling, coaching & career guidance — for children, adolescents, and adults.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Anima Space — Psychological Consulting & Counselling Centre",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Anima Space — Psychological Consulting & Counselling Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anima Space — Psychological Consulting & Counselling Centre",
    description:
      "A safe, confidential space for counselling, coaching & career guidance — for children, adolescents, and adults.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionDock />
      </body>
    </html>
  );
}
