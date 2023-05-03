import React, { useState } from "react";
import BookList from "./BookList";
import BookDetails from "./BookDetails";

function Layout() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="layout-container">
      <div className="book-list-container">
        <h1>List of Books</h1>
        <BookList onBookClick={handleBookClick} />
      </div>
      <div className="book-details-container">
        <BookDetails book={selectedBook} />
      </div>
    </div>
  );
}

export default Layout;
