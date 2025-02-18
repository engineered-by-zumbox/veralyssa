import TawkToMessenger from "@/components/TawkToMessenger";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
import { Toaster } from "react-hot-toast";
import SubscribeModal from "@/components/SubscribeModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
