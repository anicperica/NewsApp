import Navbarback from '../assets/Images/NavbarBack.png';

export default function Navbar1() {
  return (
    <div className="flex justify-between items-center w-full bg-center bg-no-repeat bg-cover  h-[60px] px-[170px] "
    style={{ backgroundImage: `url(${Navbarback})` }} >
      <div className="flex">
        <h1 className='text-white font-bold mr-[46px]'>Make MyNews your homepage</h1>
        <h1 className='text-white'>Every day discover what's trending on internet</h1>
      </div>

      <div className='flex' >
        <button className='text-white mr-[24px] font-bold hover:underline'>No, thanks</button>
        <button className='bg-white py-[10px] px-[20px] rounded-lg font-bold hover:bg-gray-800 hover:text-white'>GET</button>
      </div>
    </div>
  );
}
    