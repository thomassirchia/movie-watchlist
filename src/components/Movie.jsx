import { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  gap: 21px;
  align-items: center;
  margin: 22px 0 22px 0;
  padding: 21px 0 42px 0;
  border-bottom: 1.5px solid ${(p) => (p.darkMode ? "#2C2C2C" : "#e5e7eb")};
  color: ${(p) => (p.darkMode ? "#FFFFFF" : "#111827")};

  p {
    margin: 0;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;

  h2 {
    color: ${(p) => (p.darkMode ? "#FFFFFF" : "#111827")}
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const CardSubheader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;

  p {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Poster = styled.img`
  width: 100px;
`;

const Rating = styled.div`
  display: flex;
  gap: 4px;

  img {
    width: 15px;
    height: 15px;
  }
`;

const Plot = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
`;

const WatchlistButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: ${(p) => (p.darkMode ? "#FFFFFF" : "#111827")};
  background: none;
  border: none;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

export default function Movie({
  darkMode,
  movieId,
  watchlist,
  toggleWatchlist,
}) {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=83673317`, {
      signal: signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => setMovieData(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(err.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const inWatchlist = watchlist.includes(movieData.imdbID);
  const addRemoveIconPath = darkMode
    ? `/images/${inWatchlist ? "remove-icon-dark" : "add-icon-dark"}.png`
    : `/images/${inWatchlist ? "remove-icon" : "add-icon"}.png`;

  return (
    <Card darkMode={darkMode}>
      <Poster
        src={movieData.Poster}
        alt={"Movie poster for" + movieData.title}
      />
      <div>
        <CardHeader darkMode={darkMode}>
          <h2>{movieData.Title}</h2>
          <Rating darkMode={darkMode}>
            <img src="/images/star-icon.png" alt="gold star" />
            <p>{movieData.imdbRating}</p>
          </Rating>
        </CardHeader>
        <CardSubheader darkMode={darkMode}>
          <p>{movieData.Runtime}</p>
          <p>{movieData.Genre}</p>
          <WatchlistButton
            darkMode={darkMode}
            onClick={() => toggleWatchlist(movieData.imdbID)}
          >
            <img src={addRemoveIconPath} />
            {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </WatchlistButton>
        </CardSubheader>
        <Plot>{movieData.Plot}</Plot>
      </div>
    </Card>
  );
}
