import React from "react";
import NewsCard from "./NewsCard";
import { Article } from "../types";
import Carousel from "react-bootstrap/Carousel";

interface CarouselRowProps {
  category: string;
  articles: Article[];
}

const CarouselRow = ({ category, articles }: CarouselRowProps) => {
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
    <>
      <h2 className="category-title">{category}</h2>
      <Carousel className="ca">
        {articleChunks.map((chunk, idx) => (
          <Carousel.Item key={idx} className="carousell">
            <div className="d-flex cards-wrapper">
              {chunk.map((article, index) =>
                article.title !== "[Removed]" ? (
                  <NewsCard key={index} article={article} />
                ) : null
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselRow;
