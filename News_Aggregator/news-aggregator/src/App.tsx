import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { fetchAllNews } from "./services/newsApi";
import { Article } from "./types";
import NewsGrid from "./components/NewsGrid";
import SearchResults from "./components/SearchResults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    const categoryRequests = categories.map((category) =>
      fetchAllNews(category)
    );

    Promise.all(categoryRequests).then((results) => {
      setArticlesByCategory(results);
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <NewsGrid
              categories={categories}
              articlesByCategory={articlesByCategory}
            />
          }
        />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
