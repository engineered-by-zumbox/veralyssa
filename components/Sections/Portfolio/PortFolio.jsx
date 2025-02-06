import PortFolioCard from "@/components/PortFolioCard";
import { Portfolio } from "@/constants";

const PortFolioLists = () => {
  return (
    <>
      {Portfolio.map((port, i) => (
        <PortFolioCard key={i} port={port} />
      ))}
    </>
  );
};

export default PortFolioLists;
