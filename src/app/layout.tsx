import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans'});
const calistoga = Calistoga({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio", 
  description: "Created with the help of Frontend Tribe",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-[#F6EADB] text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
/* 3C7A3A
3C7B3B */