import Movie from "./Movie";

import "./Watchlist.css";

function EmptyWatchlist() {
  return (
    <div className="empty-watchlist">
      <h3 className="empty-watchlist-title">
        Your watchlist is looking a little empty...
      </h3>
      <div className="add-movies">
        <img
          className="watchlist-add-icon"
          src="/images/add-icon.png"
          alt="Add icon"
        />
        <p className="empty-watchlist-text">Let’s add some movies!</p>
      </div>
    </div>
  );
}

export default function Watchlist({ watchlist, toggleWatchlist }) {
  const movieElements =
    watchlist.length === 0 ? (
      <EmptyWatchlist />
    ) : (
      watchlist.map((movie) => (
        <Movie
          key={movie}
          movieId={movie}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      ))
    );

  return <div className="container">{movieElements}</div>;
}
