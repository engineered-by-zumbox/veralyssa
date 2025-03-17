"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ImageViewer from "./ImageViewer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PortfolioCard = ({ port, type = "1" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <SectionHeader
        title={port.name}
        desc={port.description}
        id={type === "1" ? port._id : ""}
      />
      <div
        className={cn(
          "mt-10",
          type === "1" && "myFlex no-scrollbar overflow-y-scroll gap-4",
          type === "2" && "grid md:grid-cols-2 gap-4"
        )}
      >
        {port.images.map((project, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(i)}
            className="relative group transition-all duration-300 min-w-[300px] md:min-w-[356px] h-[540px] md:h-[641px] overflow-hidden rounded-3xl bg-gray-100 cursor-pointer"
          >
            <Image
              width={500}
              height={700}
              src={project.url}
              alt={project.caption}
              className="absolute inset-0 object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bg-black/20 inset-0 z-50 px-4 pb-6 flex items-end">
              <div>
                <h2 className="text-[32px] mb-7 font-semibold leading-[38.73px] max-w-[90%] text-white">
                  {project.caption}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <ImageViewer
          images={port.images}
          initialIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default PortfolioCard;
