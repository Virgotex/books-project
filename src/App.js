import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookSearch from './components/BookSearch';
import BookDetails from './components/BookDetails';
import BookResults from './components/BookResults';

function App() {
  return (
    <div>
      <Header />
      <h1>Collection Of Books</h1>
      <BookSearch />
      <Footer />
    </div>
  );
}

export default App;


