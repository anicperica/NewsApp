import SearchIcon from "../assets/Icons/Search.svg"

export default function Navbar2() {
  return (
    <div className="flex items-center px-[170px] bg-[#F4F5F8] h-[113px]">
      <div className="mr-[43px]">
        <h1>
            <span className="text-[#BB1E1E] text-3xl font-extrabold">My</span>
            <span className="text-3xl font-extrabold">News</span>
        </h1>
      </div>  
      <div className="relative flex items-center">
        <img src={SearchIcon} alt="serach icon" className="absolute left-4"/>
      <input className="h-[50px] w-[625px] rounded-lg py-[15px] pl-[50px] pr-[100px] bg-white  focus:outline-none" type="text" placeholder="Search news"/>
      <button className=" absolute right-1 text-white bg-[#BB1E1E] px-[14px] py-[10px] rounded-lg font-bold hover:bg-gray-800">SEARCH</button>
      </div>
    </div>
  );
}
