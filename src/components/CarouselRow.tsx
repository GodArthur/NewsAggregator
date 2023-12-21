import React from "react";
import NewsCard from "./NewsCard";

interface CarouselRowProps {
  articles: [];
}

const CarouselRow = ({ articles }: CarouselRowProps) => {
  return (
    <div>
      <NewsCard />
    </div>
  );
};

export default CarouselRow;
