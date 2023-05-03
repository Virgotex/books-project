import * as React from 'react'
import React, { useState, useEffect } from 'react';

  const SidebarBox = () = {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect() => {
    const fetchData = async () => {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms');
      const data = await response.json();
      setBooks(data.items);
    };

    fetchData();
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const Reviews = () => {
    return (
      <div>
        <h3>{selectedBook.volumeInfo.title}</h3>
        <p>{selectedBook.volumeInfo.description}</p>
        <p>{selectedBook.volumeInfo.averageRating}</p>
      </div>
    );
  };

  return (
    <div>
      {books.length > 0 && (
        <div style={{ height: '500px', overflowY: 'scroll' }}>
          {books.map((book) => (
            <img
              key={book.id}
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              onClick={() => handleBookClick(book)}
              style={{ width: '50px', height: '50px', cursor: 'pointer' }}
            />
          ))}
        </div>
      )}
      {selectedBook && <Reviews />}
    </div>
  );
};

export default SidebarBox;

  
