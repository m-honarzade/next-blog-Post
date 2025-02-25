import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
const inter = Vazirmatn({ subsets: ["arabic"] });
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa-Ir">
      <body className={inter.className}>
        <Navbar />
        <div className="flex flex-col justify-between items-center min-h-dvh">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
