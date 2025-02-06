import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="myContainer lg:myFlex lg:justify-between">
      <div className="lg:max-w-[408px]">
        <h1 className="md:!font-medium">FEATURED PROJECTS</h1>
        <p className="text-myGray pt-2 max-w-[90%] md:max-w-[60%] lg:max-w-[90%]">
          Discover our portfolio of luxury construction projects, where
          attention to detail meets uncompromising quality.
        </p>
      </div>
      <div className="lg:max-w-[735px] w-full max-lg:mt-7">
        <div className="h-[56px] bg-[#00000014] px-4 rounded-2xl w-full myFlex gap-4 justify-between">
          <div className="myFlex gap-3 flex-grow">
            <Search size={20} className="text-myGray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search or filter search result"
              name=""
              className="w-full bg-transparent focus:outline-none placeholder:max-md:text-sm placeholder:text-myGray-400"
            />
          </div>
          <div className="w-10 h-10 myFlex justify-center cursor-pointer transition-all duration-300 hover:bg-white rounded-full">
            <Image
              src="/images/filter.svg"
              alt="filter icon"
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
