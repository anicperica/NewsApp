interface ArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  source: { name: string };
  author?: string;
  selectedCategory:string;
}
export default function ArticleCard({
  title,
  author,
  imageUrl,
  url,
  selectedCategory
}: ArticleProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <button onClick={handleClick} className="w-full  ">
      <div className="relative flex flex-col w-full bg-[#F4F5F8] h-[260px]  rounded-lg overflow-hidden lg:h-[252px] ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[226px] object-cover lg:h-[212px]"
        />

        <div className="absolute flex flex-col justify-center bottom-0 w-full bg-white p-4 h-[92px]">
          <p className="text-left text-[#1E71BB] uppercase font-bold text-[10px]">
            {selectedCategory}
          </p>
          <h2 className="font-medium text-sm text-left line-clamp-2">
            {title}
          </h2>
          <p className="hidden lg:block text-gray-500 text-left">{author}</p>
        </div>
      </div>
    </button>
  );
}
