import SectionHeader from "./SectionHeader";
import ImageViewer from "./ImageViewer";

const PortfolioCard = ({ port, type = "1" }) => {
  return (
    <>
      <SectionHeader
        title={port?.name}
        desc={port?.description}
        id={type === "1" ? port?._id : ""}
      />
        <ImageViewer
          images={port?.images}
          type={type}
        />
    </>
  );
};

export default PortfolioCard;
