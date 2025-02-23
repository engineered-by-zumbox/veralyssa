import Link from "next/link";
import AnimatedTitle from "./AnimatedTtitle";

const SectionHeader = ({ title, desc, id }) => {
  return (
    <div className="">
      <div>
        <div className="flex items-end justify-between gap-10">
          <AnimatedTitle title={title} tag="h1" className={`md:max-w-[80%] ${id && "line-clamp-2"}`} />
          {id && (
            <Link
              href={`/projects/${id}`}
              className="text-myGray hover:text-primary whitespace-nowrap font-medium text-lg underline"
            >
              See all
            </Link>
          )}
        </div>
        <p
          className={`line-clamp-5 text-myGray mt-2 ${
            id && "lg:max-w-[60%] !line-clamp-2"
          } `}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
