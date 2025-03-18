"use client";
import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const ImageViewer = dynamic(() => import("@/components/ImageViewer"), {
  ssr: false,
});

const PortfolioCard = ({ port, type = "1" }) => {
  return (
    <>
      <SectionHeader
        title={port?.name}
        desc={port?.description}
        id={type === "1" ? port?._id : ""}
      />
      <ImageViewer images={port?.images} type={type} />
    </>
  );
};

export default PortfolioCard;
