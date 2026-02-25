import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import "@/styles/prose.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portafolio Virtual | Senior Full-Stack",
    template: "%s | Portafolio Virtual",
  },
  description: "Portafolio profesional con case studies de proyectos fullstack y geoportales.",
  openGraph: {
    title: "Portafolio Virtual | Senior Full-Stack",
    description: "Case studies de proyectos con arquitectura, resultados y próximos pasos.",
    url: "https://example.com",
    siteName: "Portafolio Virtual",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og/default-og.svg",
        width: 1200,
        height: 630,
        alt: "Portafolio Virtual OpenGraph",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
