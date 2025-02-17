import PortFolioCard from "@/components/PortFolioCard";
import { cn } from "@/lib/utils";

const PortFolioLists = ({ projects }) => {
  return (
    <>
      {projects &&
        projects?.map((port, i) => (
          <section key={i} className={cn("myContainer", i === 0 && "!pt-0")}>
            <PortFolioCard key={i} port={port} />
          </section>
        ))}
    </>
  );
};

export default PortFolioLists;
