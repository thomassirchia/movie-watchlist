import { useEffect } from "react";

import Movie from "./Movie";
import NoResults from "./NoResults";
import StartExploring from "./StartExploring";

import "./SearchResults.css";

export default function SearchResults({
  searchResults,
  hasSearched,
  setHasSearched,
  watchlist,
  toggleWatchlist,
}) {
  useEffect(() => {
    setHasSearched(false);
  }, []);

  const movieElements =
    searchResults.length === 0 ? (
      <NoResults />
    ) : (
      searchResults.map((movie) => (
        <Movie
          key={movie}
          movieId={movie}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      ))
    );

  return (
    <div className="container">
      {!hasSearched ? <StartExploring /> : movieElements}
    </div>
  );
}
