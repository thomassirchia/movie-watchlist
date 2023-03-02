import "./Movie.css";

export default function Movie({ title }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="/images/placeholder-poster.png" />
      </div>
      <div className="movie-details">
        <div className="movie-card-header">
          <h2>{title}</h2>
          <div className="rating">
            <img
              src="/images/star-icon.png"
              className="rating-icon"
              alt="gold star"
            />
            <p>4.3</p>
          </div>
        </div>
        <div className="movie-card-sub-header">
          <p className="runtime">117 min</p>
          <p className="genres">Action, Drama, Sci-fi</p>
          <button className="watchlist-btn">
            <img src="/images/add-icon.png" />
            Watchlist
          </button>
        </div>
        <div className="plot">
          A blade runner must pursue and terminate four replicants who stole a
          ship in space, and have returned to Earth to find their creator.
        </div>
      </div>
    </div>
  );
}