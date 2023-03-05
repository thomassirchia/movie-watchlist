import styled from "styled-components";

const Img = styled.img`
  align-self: center;
  display: block;
  width: 150px;
`;

export default function StartExploring() {
  return <Img src="/images/start-exploring.png" alt="Start exploring" />;
}
