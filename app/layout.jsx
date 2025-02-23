import TawkToMessenger from "@/components/TawkToMessenger";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Veralyssa Limited | Construction, Remodeling, Interior Design & More",
  description:
    "Veralyssa Limited offers top-tier services in construction, remodeling, interior design, project management, and consulting. We deliver excellence from concept to completion.",
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
      </body>
    </html>
  );
}
