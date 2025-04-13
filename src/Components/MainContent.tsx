import { useCategory } from "../context/CategoryContext";
import { categories } from "../utils/categories";
import ArticleList from "./ArticleList";
import MenuItems from "./MenuItems";
import LatestNewsList from "./LatestNewsList";

interface MainContentProps {
  active: string; 
}

export default function MainContent({active}:MainContentProps) {
  const { selectedCategory,setSelectedCategory } = useCategory();

  return (
    <div className="flex items-start lg:px-[170px] bg-[#F4F5F8] lg:gap-[25px] w-full">
      <div className="hidden lg:flex lg:flex-col  ">
        {categories.map((category) => (
          <MenuItems
            key={category.id}
            id={category.id}
            label={category.label}
            Icon={category.Icon}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
      <div className="w-full lg:flex lg:flex-col lg:gap-4">
        <h1 className=" font-bold hidden lg:block">NEWS</h1>
        {active==="featured" ?<ArticleList  selectedCategory={selectedCategory}/>: <LatestNewsList/>}
      </div>
    </div>
  );
}
