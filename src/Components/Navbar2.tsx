import SearchIcon from "../assets/Icons/Search.svg";

export default function Navbar2() {
  return (
    <div className="flex items-center w-full  bg-[#F4F5F8] h-[113px] gap-[43px] lg:px-[170px] md:px-[150px] sm:px-[20px] ">
      <div>
        <h1>
          <span className="text-[#BB1E1E] text-3xl font-extrabold">My</span>
          <span className="text-3xl font-extrabold">News</span>
        </h1>
      </div>

      <div className="relative w-full flex items-center">
        <div className="relative w-[80%] flex items-center">
          <img
            src={SearchIcon}
            alt="search icon"
            className="absolute left-4  w-[20px] h-[20px]"
          />

          <input
            className="h-[50px] w-full rounded-lg py-[15px] pl-[50px] pr-[120px] bg-white focus:outline-none"
            type="text"
            placeholder="Search news"
          />

          <button className="absolute right-2   text-white bg-[#BB1E1E] px-[14px] py-[8px] rounded-lg font-bold hover:bg-gray-800  hidden lg:block">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
