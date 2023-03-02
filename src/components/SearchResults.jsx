import Movie from "./Movie";
import "./SearchResults.css";

export default function SearchResults({
  searchResults,
  watchlist,
  toggleWatchlist,
}) {
  const noResults = <h2>No Results</h2>;

  const startExploring = (
    <img
      className="start-exploring"
      src="/images/start-exploring.png"
      alt="Start exploring"
    />
  );

  const movieElements =
    searchResults.length === 0
      ? noResults
      : searchResults.map((movie) => (
          <Movie
            key={movie}
            movieId={movie}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}
          />
        ));

  return <div className="container">{movieElements}</div>;
}
