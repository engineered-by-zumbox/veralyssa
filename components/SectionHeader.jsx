const SectionHeader = ({ title, desc }) => {
  return (
    <div className="lg:max-w-[515px]">
      <h1 className="max-md:max-w-[90%]">{title}</h1>
      <p className="text-myGray pt-2 max-w-[90%] md:max-w-[60%] lg:max-w-[90%]">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
