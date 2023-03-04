import styled from "styled-components";

const StyledToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 3px;
  cursor: pointer;
  text-align: center;
  width: 30px;
  height: 16px;
  background-color: ${(p) => (p.darkMode ? "#121212" : "#ffffff")};
  border: 1px solid ${(p) => (p.darkMode ? "#ffffff" : "#121212")};
  border-radius: 50px;
`;

const Ball = styled.div`
  position: absolute;
  right: ${(p) => (p.darkMode ? "3px" : "auto")};
  width: 10px;
  height: 10px;
  background-color: ${(p) => (p.darkMode ? "#ffffff" : "#121212")};
  border-radius: 100%;
`;

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <StyledToggle darkMode={darkMode} onClick={toggleDarkMode}>
      <Ball darkMode={darkMode} />
    </StyledToggle>
  );
}
