import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const PortFolioCard = ({ port }) => {
  return (
    <>
      <SectionHeader title={port.title} desc={port.desc} />
      <div className="myFlex no-scrollbar overflow-y-scroll gap-4 mt-10">
        {port.projects.map((project, i) => (
          <div
            key={i}
            className="relative group transition-all duration-300 min-w-[300px] md:min-w-[356px] h-[540px] md:h-[641px] overflow-hidden rounded-3xl bg-black"
          >
            <img
              src={project.imageUrl}
              className="absolute inset-0 object-cover h-full w-full"
            />
            <div className="absolute bg-black/20 inset-0 z-50 px-4 pb-6 flex items-end">
              <div>
                <h2 className="text-[32px] mb-7 font-semibold leading-[38.73px] text-white">
                  {project.title}
                </h2>
                <div className="rounded-2xl group-hover:bg-white w-full group-hover:!text-black border border-white p-2 text-white">
                  <Link href={project.link} className="myFlex justify-between">
                    MORE DETAILS
                    <ChevronRight
                      className="text-white group-hover:text-black"
                      size={18}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortFolioCard;
