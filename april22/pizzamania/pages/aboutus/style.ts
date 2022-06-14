import styled from "styled-components";

export const HeadingDiv = styled.div`
  margin-top: 53px;
  width: 100%;
  background: rgb(0, 153, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Fredoka One", cursive;
  font-size: 80px;
  padding: 25px;
`;

export const SVGDiv = styled.div`
  width: 100%;
  svg {
    animation: wave 2s linear;
  }
  @keyframes wave {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 1000px;
    }
  }
`;
