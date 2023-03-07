import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";

import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(p) => (p.darkMode ? "#121212" : "#ffffff")};
`;

const Main = styled.main`
  display: flex;
  margin: 0 auto;
  flex: 1 1 auto;
`;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem("darkMode"));
    if (storedValue !== null) {
      return storedValue;
    } else {
      return [];
    }
  });

  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (hasSearched) {
      fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=83673317&s=${searchTerm}`,
        { signal: signal }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setSearchResults(data.Search.map((movie) => movie.imdbID));
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            console.log(err);
          }
          setSearchResults([]);
        });
    }

    return () => {
      controller.abort();
    };
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
    <Container darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        handleSearchSubmit={handleSearchSubmit}
        setSearchInput={setSearchInput}
      />
      <Main>
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
      </Main>
    </Container>
  );
}

export default App;
