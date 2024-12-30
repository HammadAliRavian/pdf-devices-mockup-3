import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PDF Devices ",
  description: "PDF Devices ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
