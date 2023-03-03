import Movie from "./Movie";
import EmptyWatchlistPlaceholder from "./EmptyWatchlistPlaceholder";
import styled from "styled-components";

const Container = styled.main`
  background-color: ${(p) => (p.darkMode ? "#121212" : "#ffffff")};
  flex: 1 1 auto;
  padding: 0 44px 0 44px;
`;

export default function Watchlist({ darkMode, watchlist, toggleWatchlist }) {
  const movieElements =
    watchlist.length === 0 ? (
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

  return <Container darkMode={darkMode}>{movieElements}</Container>;
}
