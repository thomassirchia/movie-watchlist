import { useEffect } from "react";
import styled from "styled-components";

import Movie from "./Movie";
import NoResults from "./NoResults";
import StartExploring from "./StartExploring";

const Container = styled.main`
  background-color: ${(p) => (p.darkMode ? "#121212" : "#ffffff")};
  flex: 1 1 auto;
  padding: 0 44px 0 44px;
`;

export default function SearchResults({
  darkMode,
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
          darkMode={darkMode}
          movieId={movie}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      ))
    );

  return (
    <Container darkMode={darkMode}>
      {!hasSearched ? <StartExploring /> : movieElements}
    </Container>
  );
}
