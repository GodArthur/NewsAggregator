import React from "react";
import Card from "react-bootstrap/Card";
import { Article } from "../types";

interface NewsCardProps {
  article: Article;
}
const NewsCard = ({ article }: NewsCardProps) => {
  const imageUrl = article.urlToImage
    ? article.urlToImage
    : "/news_default.png";

  return (
    <Card className="card">
      <a
        href={article.url}
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          onError={(e) => (e.currentTarget.src = "news_default.png")}
          className="img-wrapper"
        />

        <Card.Body>
          <Card.Title className="card-title">{article.title}</Card.Title>
        </Card.Body>
      </a>
    </Card>
  );
};

export default NewsCard;
