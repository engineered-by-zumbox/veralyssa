import { Search } from "lucide-react";

const Header = ({ title, searchInput, handleSearchChange }) => {
  return (
    <header className="myFlex justify-between sticky mb-8 top-0 bg-white z-[100] py-7 pt-4">
      <h1 className="text-[#696969]">{title}</h1>
      <div className="bg-[#E6E6E6] rounded-2xl h-[48px] w-[462px] myFlex gap-3 justify-between px-4">
        <Search size={20} color="#767471" />
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Conduct a search"
          className="placeholder:text-[#767471] bg-transparent w-full focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
