import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LatestIcon from "../Components/IconComponents/TopListIcon";
import LatestNewsCard from "./LatestNewsCard";
import ArrowIcon from "../Components/IconComponents/ArrowIcons";
import { useEffect } from "react";

interface LatestProps {
  published_date: string;
  title: string;
  url: string;
}

const fetchNews = async ({ pageParam = 1 }) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=T5sgRegrFlWFIfPmrrKwUCUX5WfxuKVF&page=${pageParam}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return {
    news: data.response.docs.map((article: any) => ({
      published_date: article.pub_date,
      title: article.headline.main,
      url: article.web_url,
    })),
    nextPage: pageParam < 100 ? pageParam + 1 : undefined,
  };
};

export default function LatestNewsList() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["latestNews"],
      queryFn: fetchNews,
      initialPageParam: 0,
      staleTime: 60000,
      retry: 2,
      retryDelay: (attempt) => attempt * 30000,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="h-screen px-8 lg:px-0 lg:h-full">
      <div className="flex flex-col justify-between h-[90%] lg:h-[517px] lg:mt-4 w-full bg-white rounded-lg">
        <div className="flex gap-3 p-4">
          <LatestIcon />
          <h1 className="font-bold">Latest news</h1>
        </div>

        <div className="overflow-y-auto px-4  h-[90%] lg:h-[400px]">
          {data?.pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {page.news.map((news: LatestProps, index: number) => (
                <LatestNewsCard
                  key={index}
                  published_date={formatTime(news.published_date)}
                  title={news.title}
                  url={news.url}
                />
              ))}
            </div>
          ))}

          {hasNextPage && (
            <div ref={ref} className="text-center p-4">
              {isFetchingNextPage
                ? "Loading more news..."
                : "Scroll to load more"}
            </div>
          )}
        </div>

        <div className="flex items-center p-4 h-[53px] w-full border-t border-[#F4F5F8] gap-2">
          <p className="text-[#1E71BB] text-[14px]">See all news</p>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
