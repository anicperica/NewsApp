import { useState } from "react";
import { useSearch } from "./context/SearchContext";
import DropdownMenu from "./DropdownMenu";
import SearchIcon from "../assets/Icons/Search.svg";
import HamburgerMenu from "./IconComponents/HamburgerMenu";
import HamburgerMenuClosed from "./IconComponents/HamburgerMenuClosed";

interface NavbarProps {
  onTabChange: (tab: string) => void;
}

export default function Navbar2({ onTabChange }: NavbarProps) {
  const [active, setActive] = useState<string>("featured");
  const { searchQuery, setSearchQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleTabClick = (tab: string) => {
    setActive(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex flex-col items-between w-full justify-center gap-[20px] px-[20px] bg-[#F4F5F8] h-[210px]  lg:px-[170px] lg:justify-start md:h-[113px] md:px-[150px]  md:flex-row md:items-center md:gap-[43px] md:w-full  ">
      <div className="flex items-center justify-between ">
        <h1>
          <span className="text-[#BB1E1E] text-3xl font-extrabold">My</span>
          <span className="text-3xl font-extrabold">News</span>
        </h1>
        <div className="relative  md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-[51] sticky top-5 right-5"
          >
            {menuOpen ? (
              <HamburgerMenuClosed  width={24} />
            ) : (
              <HamburgerMenu  width={24} />
            )}
          </button>
          <DropdownMenu isOpen={menuOpen} />
        </div>
      </div>

      <div className="relative w-full flex items-center md:w-[70%]">
        <div className="relative w-full flex items-center">
          <img
            src={SearchIcon}
            alt="search icon"
            className="absolute left-4  w-[20px] h-[20px]"
          />

          <input
            className="h-[50px] w-full rounded-lg py-[15px] pl-[50px] pr-[120px] bg-white focus:outline-none "
            type="text"
            placeholder="Search news"
            onChange={(e)=>setSearchQuery(e.target.value)}
          />

          <button className="absolute right-2 text-white bg-[#BB1E1E] px-[14px] py-[8px] rounded-lg font-bold hover:bg-gray-800  hidden lg:block">
            SEARCH
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[40px] md:hidden">
        <button
          className={` px-[16px] py-[10px] rounded-[24px] ${
            active === "featured"
              ? "text-[#BB1E1E] bg-[#BB1E1E1A] "
              : "text-[#1D1D1B]"
          }`}
          onClick={() => handleTabClick("featured")}
        >
          Featured
        </button>
        <button
          className={` px-[16px] py-[10px] rounded-[24px] ${
            active === "latest"
              ? "text-[#BB1E1E] bg-[#BB1E1E1A] "
              : "text-[#1D1D1B]"
          }`}
          onClick={() => handleTabClick("latest")}
        >
          Latest
        </button>
      </div>
    </div>
  );
}
