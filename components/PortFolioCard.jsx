"use client";

import SectionHeader from "./SectionHeader";
import ImagePreviewerNew from "./ImagePreviewerUpdated";

const PortfolioCard = ({ port, type = "1" }) => {
  return (
    <>
      <SectionHeader
        title={port?.name}
        desc={port?.description}
        id={type === "1" ? port?._id : ""}
      />
      <ImagePreviewerNew images={port?.images} type={type} />
    </>
  );
};

export default PortfolioCard;
