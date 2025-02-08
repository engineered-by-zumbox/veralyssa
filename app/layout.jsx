import Header from "@/components/Navigation/Header";
import "./globals.css";
import Footer from "@/components/Navigation/Footer";
import ChatBot from "@/components/Navigation/ChatBot";
import { Inter, Playfair_Display } from "next/font/google";

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
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
