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

export const metadata = {
  title: "FuelMyChai – Support Creators with a Sip of Love",
  description:
    "FuelMyChai is a desi-inspired platform where fans can support their favorite creators, artists, and freelancers with small contributions—like buying them a cup of chai. Simple, heartfelt, and hassle-free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

        <Navbar />
        <div className="max-w-[90%] mx-auto ">{children}</div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
