import type { Metadata } from "next";
import localFont from "next/font/local";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Topper from "./components/topper";
import Footer from "./components/footer";

const advercase = localFont({
  src: [
    {
      path: "./fonts/Advercase-Font-Demo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Advercase-Font-Demo-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Advercase-Font-Demo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Advercase-Font-Demo-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-advercase",
  display: "swap",
});

const helloOrganic = localFont({
  src: "./fonts/Hello-OrganicHand.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-hello-organic",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freelance Jordan",
  description:
    "Web design, development, branding, media and SEO by Jordan Moureau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${advercase.variable} ${helloOrganic.variable} ${libreBaskerville.variable}`}
    >
      <Topper />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
