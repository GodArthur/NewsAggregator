import React from "react";
import NewsCard from "./NewsCard";
import { Article } from "../types";
import Carousel from "react-bootstrap/Carousel";

interface CarouselRowProps {
  articles: Article[];
}

const CarouselRow = ({ articles }: CarouselRowProps) => {
  // Function to chunk the articles array into groups of three
  const chunkedArticles = (articles: Article[], size: number) => {
    const chunkedArr = [];
    let index = 0;
    while (index < articles.length) {
      chunkedArr.push(articles.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  };

  // Creating chunks of articles
  const articleChunks = chunkedArticles(articles, 5);

  return (
    <Carousel className="ca">
      {articleChunks.map((chunk, idx) => (
        <Carousel.Item key={idx} className="carousell">
          <div className="d-flex cards-wrapper">
            {" "}
            {/* Ensure this div has appropriate styling for card layout */}
            {chunk.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselRow;
