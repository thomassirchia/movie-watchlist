import { useEffect } from "react";
import styled from "styled-components";

import Movie from "./Movie";
import NoResults from "./NoResults";
import StartExploring from "./StartExploring";

const Container = styled.div`
  flex: 1 1 auto;
  padding: 45px;
  max-width: 700px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
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
