import TawkToMessenger from "@/components/TawkToMessenger";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import { Toaster } from "react-hot-toast";
import SubscribeModal from "@/components/SubscribeModal";

export const metadata = {
  title: "Veralyssa Limited | Construction, Remodeling, Interior Design & More",
  description:
    "Veralyssa is Nigeria’s premier construction and luxury finishing company, specializing in high-end interiors, landscaping, facility management, and government beautification projects. Contact us today!",
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <TawkToMessenger />
        <SubscribeModal />
      </body>
    </html>
  );
}
