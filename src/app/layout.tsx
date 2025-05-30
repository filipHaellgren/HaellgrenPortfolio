import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Filip Hällgren – Portfolio",
  description: "A creative fullstack developer passionate about design and code",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: "Filip Hällgren – Portfolio",
    description: "A creative fullstack developer passionate about design and code",
    url: "https://filiphaellgren.github.io/HaellgrenPortfolio/",
    siteName: "Filip Hällgren – Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Filip Hällgren – Portfolio",
    description: "A creative fullstack developer passionate about design and code"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-[#F6EADB] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
