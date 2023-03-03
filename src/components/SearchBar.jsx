import styled from "styled-components";

const Wrapper = styled.div`
  width: 462px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  margin: 0;
  height: 38px;
  color: ${(p) => (p.darkMode ? "#A5A5A5" : "#6B7280")};
  border: ${(p) => (p.darkMode ? "none" : "1px solid #d1d5db")};
  border-radius: 6px 0 0 6px;
  font-size: 14px;
  width: 340px;
  background: url("images/search-icon.png") top 8px left 12px no-repeat;
  background-size: 20px 20px;
  background-color: ${(p) => (p.darkMode ? "#2E2E2F" : "#ffffff")};
  padding: 9px 13px 9px 40px;
`;

const Button = styled.button`
  margin: 0;
  height: 38px;
  border: ${(p) => (p.darkMode ? "none" : "1px solid #d1d5db")};
  font-size: 14px;
  width: 110px;
  color: ${(p) => (p.darkMode ? "#FFFFFF" : "#374151")};
  background-color: ${(p) => (p.darkMode ? "#4B4B4B" : "#f9fafb")};
  border-radius: 0 6px 6px 0;
  cursor: pointer;
`;

export default function SearchBar({
  darkMode,
  setSearchInput,
  handleSearchSubmit,
}) {
  return (
    <Wrapper>
      <form>
        <Input
          darkMode={darkMode}
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button darkMode={darkMode} onClick={handleSearchSubmit}>
          Search
        </Button>
      </form>
    </Wrapper>
  );
}
