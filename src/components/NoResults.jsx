import styled from "styled-components";

const H3 = styled.h3`
  align-self: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #dfdddd;
`;

export default function NoResults() {
  return (
    <H3>Unable to find what you’re looking for. Please try another search.</H3>
  );
}
