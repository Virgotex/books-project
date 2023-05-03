import React, { useState } from 'react';
import BookResults from './BookResults';

function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    setSearchResults(data.items);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <BookResults searchResults={searchResults} />
    </div>
  );
}

export default BookSearch;
