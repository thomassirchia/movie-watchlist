import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 30vh auto;

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: ${(p) => (p.darkMode ? "#787878" : "#DFDDDD")};
    margin: 0;
  }
`;

const AddMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;

  img {
    width: 18px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    color: ${(p) => (p.darkMode ? "#FFFFFF" : "#363636")};
  }
`;

export default function EmptyWatchlistPlaceholder({ darkMode }) {
  return (
    <Wrapper darkMode={darkMode}>
      <h3>Your watchlist is looking a little empty...</h3>
      <AddMovies darkMode={darkMode}>
        <img
          src={`/images/add-icon${darkMode ? "-dark" : ""}.png`}
          alt="Add icon"
        />
        <Link to="/">Let’s add some movies!</Link>
      </AddMovies>
    </Wrapper>
  );
}
