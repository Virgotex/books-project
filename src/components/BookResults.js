import React from 'react';
import BookDetails from './BookDetails';

function BookResults({ searchResults }) {
  return (
    <ul>
      {searchResults.map(book => (
        <li key={book.id}>
          <BookDetails book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookResults;
