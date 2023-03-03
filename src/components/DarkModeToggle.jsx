import styled from "styled-components";

const StyledToggle = styled.div`
  cursor: pointer;
  text-align: center;
`;

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <StyledToggle onClick={toggleDarkMode}>
      {darkMode ? "☀️" : "🌙"}
    </StyledToggle>
  );
}
