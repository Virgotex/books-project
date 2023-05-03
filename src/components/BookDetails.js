import React from 'react';

function BookDetails({ book }) {
  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    </div>
  );
}

export default BookDetails;
