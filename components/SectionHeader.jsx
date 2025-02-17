import Link from "next/link";

const SectionHeader = ({ title, desc, id }) => {
  return (
    <div className="myFlex max-md:gap-5 justify-between">
      <div>
        <h1 className="max-md:max-w-[90%]">{title}</h1>
        <p className="text-myGray pt-2 max-w-[90%] md:max-w-[60%] lg:max-w-[90%]">
          {desc}
        </p>
      </div>
      {id && (
        <Link
          href={`/projects/${id}`}
          className="text-myGray whitespace-nowrap font-medium hover:underline"
        >
          See all
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
