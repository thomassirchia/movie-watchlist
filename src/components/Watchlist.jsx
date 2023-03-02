import Movie from "./Movie";

export default function Watchlist({ watchlist, toggleWatchlist }) {
  const movieElements = watchlist.map((movie) => (
    <Movie
      key={movie}
      movieId={movie}
      watchlist={watchlist}
      toggleWatchlist={toggleWatchlist}
    />
  ));

  return <div className="container">{movieElements}</div>;
}
