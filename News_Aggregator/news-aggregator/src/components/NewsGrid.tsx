import React from "react";
import NewsCard from "./NewsCard";
import CarouselRow from "./CarouselRow";
import { Article } from "../types";

interface NewsGridProps {
  categories?: string[];
  articlesByCategory?: Article[][];
  isSearchResult?: boolean;
  articles?: Article[];
}

const NewsGrid = ({
  categories = [],
  articlesByCategory = [[]],
  isSearchResult = false,
  articles = [],
}: NewsGridProps) => {
  if (isSearchResult) {
    // If it's search results, flatten the array and display in a list or grid

    return (
      <div className="newsgrid">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    );
  }

  // Regular display for categories
  return (
    <div className="newsgrid">
      {articlesByCategory.map((articles, index) => (
        <CarouselRow
          key={index}
          category={categories[index]}
          articles={articles}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
