import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/sections/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import { WhatsAppButton } from "@/app/components/ui/WhatsAppButton";

const fontHeading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anima Space - Child Psychology Center",
  description: "A safe space for your child to be heard. Professional child psychology services.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
