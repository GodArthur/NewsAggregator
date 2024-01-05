import React, { ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Article } from "../types";
import { useState } from "react";
import { fetchNewsByQuery } from "../services/newsApi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const fetchedArticles = await fetchNewsByQuery(searchQuery);
      console.log("fetched articles " + fetchedArticles);
      navigate("/search", {
        state: {
          articles: fetchedArticles,
        },
      });
    } catch {
      console.error("Error Fetching news");
    }
  };

  return (
    <Form className="d-flex justify-content-end">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-3 custom-search"
        aria-label="Search"
        value={searchQuery}
        onChange={handleQueryChange}
      />
      <Button variant="light" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
