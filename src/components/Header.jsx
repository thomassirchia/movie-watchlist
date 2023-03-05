import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  position: relative;
  background: url("/images/header.png");
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
  color: #fff;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    color: #d7a132;
  }
`;

const Container = styled.div`
  padding: 45px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #ffbd38;
    font-weight: 700;
    font-size: 16px;

    &:hover {
      color: #ffac05;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 20px 20px 40px 20px;
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

  @media (max-width: 600px) {
    padding: 20px;
    bottom: -40px;
  }
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
      <Link to="/watchlist">My watchlist</Link>
    ) : (
      <Link to="/">Search for movies</Link>
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
