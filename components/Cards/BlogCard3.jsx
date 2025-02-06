import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogCard3 = ({ project }) => {
  return (
    <div className="md:min-w-[409px] flex flex-col justify-between h-[737px] bg-black py-8 px-4 rounded-3xl">
      <img
        src={project.imgUrl}
        className="h-[296px] rounded-3xl object-cover w-full"
      />
      <div className="myFlex justify-between gap-1">
        <h2 className="font-semibold truncate text-white no-select text-lg md:text-xl md:leading-[24.2px]">
          {project.title}
        </h2>
        <p className="text-primary no-select">{project.date}</p>
      </div>
      <p className="text-white">{project.desc}</p>
      <div className="rounded-2xl bg-white w-full text-black p-2">
        <Link
          href="/blog"
          className="myFlex group transition-all duration-300 justify-between"
        >
          Read More
          <ChevronRight
            className="text-black group-hover:translate-x-2"
            size={18}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard3;
