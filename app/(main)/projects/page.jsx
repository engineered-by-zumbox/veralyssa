import Header from "@/components/Sections/Portfolio/Header";
import PortFolioLists from "@/components/Sections/Portfolio/PortFolio";
import React from "react";

const PortfolioPage = () => {
  return (
    <main className="min-h-dvh !pt-16 lg:!pt-20">
      <Header />
      <PortFolioLists />
    </main>
  );
};

export default PortfolioPage;
