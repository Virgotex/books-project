
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookSearch from './components/BookSearch';
import BookDetails from './components/BookDetails';
import BookResults from './components/BookResults';
import NavBar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

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

function App () {
  return (
    <div className='App'>
      <h1> hey</h1>
    </div>
  )
}

function App () {
  return (
    <div>
      
      <Navbar/>
      
      </div>

  )

}
export default App;


