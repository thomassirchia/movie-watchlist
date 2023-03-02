import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";

import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=83673317&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.Search.map((movie) => movie.imdbID));
      });
  }, [searchTerm]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setSearchTerm(searchInput);
  }

  return (
    <>
      <Header
        handleSearchSubmit={handleSearchSubmit}
        setSearchInput={setSearchInput}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={<SearchResults searchResults={searchResults} />}
        ></Route>
        <Route exact path="/watchlist" element={<Watchlist />}></Route>
      </Routes>
    </>
  );
}

export default App;
