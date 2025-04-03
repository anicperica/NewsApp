interface LatestProps {
  published_date: string;
  title: string;
  url:string
}

export default function LatestNewsCard({ published_date, title,url }: LatestProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <button onClick={handleClick} className="flex flex-col items-start justify-center px-4">
      <p className="text-left text-[#1E71BB] uppercase font-bold text-[10px]">{published_date}</p>
      <h3 className="font-medium text-sm text-left line-clamp-2">{title}</h3>
      <hr className=" border border-[#F4F5F8] w-full my-[13px]"/>
    </button>
  );
}
