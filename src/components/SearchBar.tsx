import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const SearchBar = () => {
  return (
    <Form className="d-flex justify-content-end">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-3 custom-search"
        aria-label="Search"
      />
      <Button variant="light">Search</Button>
    </Form>
  );
};

export default SearchBar;
