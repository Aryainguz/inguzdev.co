import "./globals.css";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";
import Script from "next/script";

export const metadata = {
  title: { default: "Aryan Inguz" },
  creator: "Aryan Inguz",
  publisher: "Aryan Inguz",
  description:
    "I'm Aryan Inguz, full stack web and mobile app developer",
  keywords: [
    "Aryan Inguz",
    "Inguz Dev",
    "Web Developer",
    "App Developer",
    "inguzdev",
    "inguzdev.co",
  ],
  authors: [{ name: "Aryan Inguz", url: "https://inguzdev.co" }],
  openGraph: {
    title: "Aryan Inguz",
    description:
      "I'm Aryan Inguz, full web and mobile app developer",
    url: "https://inguzdev.co",
    siteName: "Aryan Inguz",
    images: [
      {
        url: "https://inguzdev.co/og.png",
        width: 1200,
        height: 678,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Inguz",
    description:
      "I'm Aryan Inguz, full stack web and mobile app developer programming ideas into reality.",
    siteId: "inguzdev",
    creator: "inguzdev",
    creatorId: "inguzdev",
    images: {
      url: "https://inguzdev.co/og.png",
      alt: "",
    },
  },

  alternates: {
    canonical: "https://inguzdev.co",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d3c56799-22aa-4622-b0d5-b686d3adf197"
        />
      </head>
      <link rel="shortcut icon" href="/images/profile.jpg" />
      <body className="bg-white dark:bg-slate-950">
        <Providers>
          <AnimateEnter>
            <>
              <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
                <RollingIcons />
              </nav>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
