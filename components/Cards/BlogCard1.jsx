import { ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogCard1 = ({ news }) => {
  return (
    <div className="md:p-5 max-w-[408px] cursor-pointer h-[300px] md:h-[336px] flex gap-3 md:gap-6">
      <div className="basis-1/2 relative rounded-3xl overflow-hidden">
        <img
          src={news.imgUrl}
          width={164}
          height={288}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="basis-1/2 flex flex-col justify-between max-md:py-2">
        <h2 className="font-semibold no-select line-clamp-2 text-xl md:leading-[24.2px]">
          {news.title}
        </h2>
        <p className="text-primary no-select">{news.date}</p>
        <p className="no-select">{news.desc}</p>
        <div className="rounded-2xl w-full text-black border border-[#B1B1B1] p-2">
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
    </div>
  );
};

export default BlogCard1;
