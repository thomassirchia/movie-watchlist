import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  position: relative;
  background: url("/images/header.png");
  height: 208px;
  color: #fff;
  position: relative;
`;

const H1 = styled.h1`
  letter-spacing: -0.045em;
  font-weight: 800;
  font-size: 42.7947px;
  line-height: 24px;
`;

const H3 = styled.h3`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const Container = styled.div`
  padding: 45px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DarkModeToggleWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const SearchBarWrapper = styled.div`
  position: absolute;
  bottom: -17px;
  left: 0;
  right: 0;
`;

export default function Header({
  darkMode,
  toggleDarkMode,
  setSearchInput,
  handleSearchSubmit,
}) {
  const { pathname } = useLocation();

  const headerLink =
    pathname === "/" ? (
      <Link to="/watchlist">
        <H3>My watchlist</H3>
      </Link>
    ) : (
      <Link to="/">
        <H3>Search for movies</H3>
      </Link>
    );

  return (
    <StyledHeader>
      <Container>
        <DarkModeToggleWrapper>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </DarkModeToggleWrapper>
        <H1>{pathname === "/" ? "Find your film" : "My Watchlist"}</H1>
        {headerLink}
        {pathname === "/" && (
          <SearchBarWrapper>
            <SearchBar
              darkMode={darkMode}
              setSearchInput={setSearchInput}
              handleSearchSubmit={handleSearchSubmit}
            />
          </SearchBarWrapper>
        )}
      </Container>
    </StyledHeader>
  );
}
