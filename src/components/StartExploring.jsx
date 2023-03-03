import styled from "styled-components";

const Img = styled.img`
  display: block;
  width: 150px;
  margin: 30vh auto;
`;

export default function StartExploring() {
  return <Img src="/images/start-exploring.png" alt="Start exploring" />;
}
