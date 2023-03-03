import styled from "styled-components";

const H3 = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #dfdddd;
  margin: 30vh auto;
`;

export default function NoResults() {
  return (
    <H3>Unable to find what you’re looking for. Please try another search.</H3>
  );
}
