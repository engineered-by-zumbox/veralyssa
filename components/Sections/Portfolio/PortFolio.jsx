import PortFolioCard from "@/components/PortFolioCard";
import { Portfolio } from "@/constants";
import { cn } from "@/lib/utils";

const PortFolioLists = () => {
  return (
    <>
      {Portfolio.map((port, i) => (
        <section
          key={i}
          className={cn("myContainer", i === 0 && "max-md:!pt-0")}
        >
          <PortFolioCard key={i} port={port} />
        </section>
      ))}
    </>
  );
};

export default PortFolioLists;
