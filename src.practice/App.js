import React from 'react';
import Header from "./components/Header";
import Nav from "./components/SearchForm";
import Footer from "./components/Footer";
import './App.css';
import SearchResultContainer from './components/SearchResultContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <SearchResultContainer />
        <Footer />
    </div>
  );
}

export default App;
