import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    if (hasSearched) {
      fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=83673317&s=${searchTerm}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.Search.map((movie) => movie.imdbID));
          // setHasSearched(true);
        })
        .catch((err) => {
          console.log(err);
          setSearchResults([]);
          // setHasSearched(true);
        });
    }
  }, [searchTerm]);

  function handleSearchSubmit(e) {
    e.preventDefault();
    setHasSearched(true);
    setSearchTerm(searchInput);
  }

  function toggleWatchlist(id) {
    if (watchlist.includes(id)) {
      setWatchlist((watchlist) => watchlist.filter((item) => item !== id));
    } else {
      setWatchlist([...watchlist, id]);
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="container">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSearchSubmit={handleSearchSubmit}
        setSearchInput={setSearchInput}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchResults
              darkMode={darkMode}
              searchResults={searchResults}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
              hasSearched={hasSearched}
              setHasSearched={setHasSearched}
            />
          }
        ></Route>
        <Route
          exact
          path="/watchlist"
          element={
            <Watchlist
              darkMode={darkMode}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
