import { Link, useLocation } from "react-router-dom";

import "./Header.css";

export default function Header({ handleSearchSubmit, setSearchInput }) {
  const { pathname } = useLocation();

  const headerLink =
    pathname === "/" ? (
      <Link to="/watchlist">
        <h3>My Watchlist</h3>
      </Link>
    ) : (
      <Link to="/">
        <h3>Search</h3>
      </Link>
    );

  return (
    <header>
      <h1>MovieWatchlist</h1>
      {headerLink}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie"
          id="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>
    </header>
  );
}
