import React from "react";
import NewsCard from "./NewsCard";
import CarouselRow from "./CarouselRow";
import { Article } from "../types";

interface NewsGridProps {
  categories: string[]; // Category names
  articlesByCategory: Article[][];
}

const NewsGrid = ({ categories, articlesByCategory }: NewsGridProps) => {
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
