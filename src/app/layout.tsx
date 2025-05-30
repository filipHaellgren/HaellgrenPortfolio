import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head"; // <-- add this

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Filip Haellgren's Portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <Head>
          {/* Open Graph (Discord, Facebook) */}
          <meta property="og:title" content="Filip Hällgren – Portfolio" />
          <meta
            property="og:description"
            content="A creative fullstack developer passionate about design and code"
          />
          <meta property="og:url" content="https://filiphaellgren.github.io/HaellgrenPortfolio/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Filip Hällgren – Portfolio" />
          <meta
            name="twitter:description"
            content="A creative fullstack developer passionate about design and code"
          />
        </Head>
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
