import React from "react";
import NewsCard from "./NewsCard";
import CarouselRow from "./CarouselRow";
import { Article } from "../types";

interface NewsGridProps {
  articles: Article[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {
  return (
    <div className="newsgrid">
      <CarouselRow articles={articles} />
    </div>
  );
};

export default NewsGrid;
