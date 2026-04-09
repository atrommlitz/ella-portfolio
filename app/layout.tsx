import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { PageTransition } from "./components/page-transition";
import Particles from "./components/particles";

export const metadata: Metadata = {
  title: {
    default: "Ella Hansen Portfolio",
    template: "%s | Ella Hansen Portfolio",
  },
  description: "Design and Marketing Portfolio of Ella Hansen",
  openGraph: {
    title: "Ella Hansen Portfolio",
    description: "Design and Marketing Portfolio of Ella Hansen",
    url: "https://chronark.com",
    siteName: "Ella Hansen Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/ella-hansen-logo.png",
    icon: "/ella-hansen-logo.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-gradient-to-tl from-blue-200 via-white to-blue-200 min-h-screen ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Particles className="fixed inset-0 -z-10" quantity={100} />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
