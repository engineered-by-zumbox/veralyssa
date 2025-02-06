import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PortFolioCard = ({ port }) => {
  return (
    <section className="myContainer">
      <div className="lg:max-w-[515px]">
        <h1>{port.title}</h1>
        <p className="text-myGray pt-2 md:max-w-[60%] lg:max-w-[90%]">
          {port.desc}
        </p>
      </div>
      <div className="myFlex no-scrollbar overflow-y-scroll gap-4 mt-20">
        {port.projects.map((project, i) => (
          <div
            key={i}
            className="relative min-w-[356px] h-[641px] overflow-hidden rounded-3xl bg-black"
          >
            <img
              src={project.imageUrl}
              className="absolute inset-0 object-cover h-full w-full"
            />
            <div className="absolute bg-black/20 inset-0 z-50 px-4 pb-6 flex items-end">
              <div>
                <h2 className="text-[32px] mb-7 font-semibold leadig-[38.73px] text-white">
                  {project.title}
                </h2>
                <div className="rounded-2xl w-full border border-white p-2 text-white">
                  <Link href={project.link} className="myFlex justify-between">
                    MORE DETAILS
                    <ChevronRight className="text-white" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortFolioCard;
