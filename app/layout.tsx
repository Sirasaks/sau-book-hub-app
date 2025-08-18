import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAU Book Hub",
  description: "ชุมชนคนรักการอ่านที่ดีที่สุด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-red-50 via-white to-red-100 min-h-screen`}
      >
        <Navbar />
        <div className="max-w-6xl mx-auto px-4">
          {children}
        </div>
        <Footer />
       

      </body>
      
    </html>
  );
}
