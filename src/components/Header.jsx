import { Link, useLocation } from "react-router-dom";

import "./Header.css";

export default function Header({ handleSearchSubmit, setSearchInput }) {
  const { pathname } = useLocation();

  const headerLink =
    pathname === "/" ? (
      <Link to="/watchlist">
        <h3>My watchlist</h3>
      </Link>
    ) : (
      <Link to="/">
        <h3>Search for movies</h3>
      </Link>
    );

  const searchBar = (
    <div className="search-bar">
      <form>
        <input
          type="text"
          placeholder="Search for a movie"
          id="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearchSubmit}>
          Search
        </button>
      </form>
    </div>
  );

  return (
    <header>
      <h1>{pathname === "/" ? "Find your film" : "My Watchlist"}</h1>
      {headerLink}
      {pathname === "/" && searchBar}
    </header>
  );
}
