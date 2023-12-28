import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import { fetchNews } from "./services/newsApi";
import NewsCard from "./components/NewsCard";
import CarouselRow from "./components/CarouselRow";
import { Article } from "./types";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [articlesByCategory, setArticlesByCategory] = useState<Article[][]>([]);
  const categories = [
    "General",
    "Entertainment",
    "Technology",
    "Health",
    "Business",
    "Science",
    "Sports",
  ];
  useEffect(() => {
    const categoryRequests = categories.map((category) => fetchNews(category));

    Promise.all(categoryRequests).then((results) => {
      setArticlesByCategory(results);
    });
  }, []);

  return (
    <div className="app">
      <NavBar />
      <NewsGrid
        categories={categories}
        articlesByCategory={articlesByCategory}
      />
    </div>
  );
}

export default App;
