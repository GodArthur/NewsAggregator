import React from "react";
import Card from "react-bootstrap/Card";
import { Article } from "../types";

interface NewsCardProps {
  article: Article;
}
const NewsCard = ({ article }: NewsCardProps) => {
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
          src={article.urlToImage}
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
