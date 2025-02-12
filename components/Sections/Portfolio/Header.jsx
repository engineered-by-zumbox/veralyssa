import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <section className="myContainer grid gap-5 lg:gap-7">
      <h1 className="md:!font-medium">FEATURED PROJECTS</h1>
      <div className="h-[56px] bg-[#00000014] px-4 rounded-2xl w-full myFlex gap-4 justify-between">
        <div className="myFlex gap-3 flex-grow">
          <Search size={20} className="text-myGray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Conduct a search; what project are you looking for?"
            name=""
            className="w-full bg-transparent focus:outline-none placeholder:max-md:text-sm placeholder:text-myGray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
