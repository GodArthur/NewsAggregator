import React from "react";
import { useLocation } from "react-router-dom";
import { Article } from "../types";
import NewsGrid from "./NewsGrid";

const SearchResults = () => {
  const location = useLocation();
  const { articles } = location.state as { articles: Article[] };

  return <NewsGrid articles={articles} isSearchResult={true} />;
};

export default SearchResults;
