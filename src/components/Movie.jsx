import { useState, useEffect } from "react";
import "./Movie.css";

export default function Movie({ movieId }) {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=83673317`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  console.log(movieData);

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={movieData.Poster}
        alt={"Movie poster for" + movieData.title}
      />
      <div className="movie-details">
        <div className="movie-card-header">
          <h2>{movieData.Title}</h2>
          <div className="rating">
            <img
              src="/images/star-icon.png"
              className="rating-icon"
              alt="gold star"
            />
            <p>{movieData.imdbRating}</p>
          </div>
        </div>
        <div className="movie-card-sub-header">
          <p className="runtime">{movieData.Runtime}</p>
          <p className="genres">{movieData.Genre}</p>
          <button className="watchlist-btn">
            <img src="/images/add-icon.png" />
            Watchlist
          </button>
        </div>
        <div className="plot">{movieData.plot}</div>
      </div>
    </div>
  );
}
