import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thelocalrfi.fr"),
  title: {
    default: "TheLocalRFI — Outils IA, Business & Logiciels pour Entrepreneurs",
    template: "%s | TheLocalRFI",
  },
  description:
    "Comparatifs, guides et ressources pour entrepreneurs. Les meilleurs outils IA, logiciels métier et stratégies business — testés et approuvés.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "TheLocalRFI — Outils IA, Business & Logiciels",
    description: "Comparatifs, guides et ressources pour entrepreneurs.",
    siteName: "TheLocalRFI",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
