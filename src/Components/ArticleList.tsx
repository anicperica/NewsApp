import { useState, useEffect } from "react";
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
export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2025-03-12&to=2025-03-12&sortBy=popularity&apiKey=cb7352685cc7491a948226d1cd8e4081"
        );
        const data = await res.json();
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Fetching failed", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 px-4 w-full lg:px-0">
      <div className="hidden lg:block lg:col-span-1 lg:row-span-3 lg:col-start-3">
        <LatestNewsList/>
      </div>
    {articles.map((article, index) => (
      <ArticleCard
        key={index}
        title={article.title}
        description={article.description ?? "No description available"}
        imageUrl={article.urlToImage ?? "https://via.placeholder.com/150"}
        url={article.url}
        source={{ name: article.source?.name ?? "Unknown Source" }}
        author={article.author}
      />
    ))}
    
  </div>
  );
}
