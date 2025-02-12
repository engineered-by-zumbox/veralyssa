import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
