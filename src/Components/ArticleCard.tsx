interface ArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  source: { name: string };
}
export default function ArticleCard({
  title,
  description,
  imageUrl,
  url,
  source,
}: ArticleProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick}>
      <div className="relative flex flex-col items-center p-4  bg-[#F4F5F8] w-full h-[260px]  ">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg" />
        <div className="absolute bottom-0 left-4 right-4 p-4 flex flex-col justify-center items-start bg-white h-[92px] rounded-b-lg">
          <p className="text-[#1E71BB] font-bold">Technology</p>
          <h2 className="text-start font-medium">{title}</h2>
        </div>
      </div>
    </button>
  );
}
