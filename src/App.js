import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from "./components/SearchView";
import { Routes, Route } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';
import MovieView from "./components/MovieView";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=58507cc706ac67cc8ba97b098c38a449&query=${searchText}&include_adult=false&language=en-US&page=1`
      )
        .then((Response) => Response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  // searchText => variable
  // setSearchText(searchText) => function

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
