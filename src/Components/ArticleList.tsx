import { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import ArticleCard from "./ArticleCard";
import LatestNewsList from "./LatestNewsList";
interface Article {
  source: { id: string | null; name: string };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

interface ArticleListProps {
  selectedCategory: string;
}
export default function ArticleList({ selectedCategory }: ArticleListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const { searchQuery } = useSearch();
  useEffect(() => {
    const fetchArticles = async () => {
    
      try {
        const res = await fetch(`/api/news?category=${selectedCategory}`);
        const data = await res.json();  
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Fetching failed", error);
      }
    };
    fetchArticles();
  }, [selectedCategory]);

  const filteredArticles = (articles ?? []).filter((article) =>
    article?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 px-4 w-full lg:px-0 ">
      <div className="hidden lg:block lg:col-span-1 lg:row-span-3 lg:col-start-3">
        <LatestNewsList />
      </div>
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description ?? "No description available"}
            imageUrl={article.urlToImage ?? "https://via.placeholder.com/150"}
            url={article.url}
            source={{ name: article.source?.name ?? "Unknown Source" }}
            author={article.author}
            selectedCategory={selectedCategory}
          />
        ))
      ) : (
        <p className="text-center w-full col-span-3">No results found.</p>
      )}
      
    </div>
  );
}
