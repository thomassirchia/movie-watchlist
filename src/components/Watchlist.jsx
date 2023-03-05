import Movie from "./Movie";
import EmptyWatchlistPlaceholder from "./EmptyWatchlistPlaceholder";
import styled from "styled-components";

const Container = styled.div`
  flex: 1 1 auto;
  padding: 45px;
  max-width: 700px;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export default function Watchlist({ darkMode, watchlist, toggleWatchlist }) {
  const watchlistEmpty = watchlist.length === 0;

  const movieElements = watchlistEmpty ? (
    <EmptyWatchlistPlaceholder darkMode={darkMode} />
  ) : (
    watchlist.map((movie) => (
      <Movie
        key={movie}
        darkMode={darkMode}
        movieId={movie}
        watchlist={watchlist}
        toggleWatchlist={toggleWatchlist}
      />
    ))
  );

  return watchlistEmpty ? (
    <EmptyWatchlistPlaceholder darkMode={darkMode} />
  ) : (
    <Container darkMode={darkMode}>{movieElements}</Container>
  );
}
