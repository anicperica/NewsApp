import { useState } from "react";
import SearchIcon from "../assets/Icons/Search.svg";
import BusinessIcon from "./IconComponents/BusinessIcon";
import GeneralIcon from "./IconComponents/GeneralIcon";
import HealthIcon from "./IconComponents/HealthIcon";
import ScienceIcon from "./IconComponents/ScienceIcon";
import SportICon from "./IconComponents/SportIcon";
import TechnologyIcon from "./IconComponents/TechnologyIcon";
import HomeIcon from "./IconComponents/HomeIcon";
import MenuItems from "./MenuItems";

interface DropdownMenuProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  const [active, setActive] = useState<string>("home");

  const categories = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "general", label: "General", Icon: GeneralIcon },
    { id: "business", label: "Business", Icon: BusinessIcon },
    { id: "health", label: "Health", Icon: HealthIcon },
    { id: "science", label: "Science", Icon: ScienceIcon },
    { id: "sport", label: "Sport", Icon: SportICon },
    { id: "technology", label: "Technology", Icon: TechnologyIcon },
  ];

  return (
    <div
      className={`fixed   flex flex-col items-center justify-start pt-[111px] top-0 left-0 w-full h-full z-50 bg-[#F4F5F8] transition-all duration-300 
        ${isOpen ? "opacity-100" : "opacity-0  pointer-events-none"}`}
    >
      {isOpen && (
        <div className="flex  flex-col items-center justify-between gap-[64px]">
          <h1>
            <span className="text-[#BB1E1E] text-3xl font-extrabold">My</span>
            <span className="text-3xl font-extrabold">News</span>
          </h1>
          <div className="relative w-[90%] flex items-center justify-center">
            <img
              src={SearchIcon}
              alt="search icon"
              className="absolute left-4  w-[20px] h-[20px]"
            />

            <input
              className="h-[50px] w-full  rounded-lg py-[15px] pl-[50px] pr-[120px] bg-white focus:outline-none "
              type="text"
              placeholder="Search news"
            />
          </div>
          <div className="flex flex-wrap items-start justify-between px-[30px]  ">
            {categories.map(({ id, label, Icon }) => (
              <MenuItems
                key={id}
                id={id}
                label={label}
                Icon={Icon}
                isActive={active === id}
                onClick={() => setActive(id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
