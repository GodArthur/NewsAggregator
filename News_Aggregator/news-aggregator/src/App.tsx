import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import { fetchNews } from "./services/newsApi";
import NewsCard from "./components/NewsCard";
import CarouselRow from "./components/CarouselRow";
import { Article } from "./types";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState("technology");

  useEffect(() => {
    fetchNews(category)
      .then((fetchedArticles) => {
        console.log(fetchedArticles); // Log the fetched articles
        setArticles(fetchedArticles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [category]);

  return (
    <div className="app">
      <NavBar />
      <NewsGrid articles={articles} />
    </div>
  );
}

export default App;
