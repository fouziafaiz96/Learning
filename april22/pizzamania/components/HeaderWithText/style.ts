import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  font-family: "Fredoka One", cursive;
  margin: 0 1rem;
  padding: 0 20px;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Heading = styled.p`
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.span`
  font-weight: normal;
  font-size: 15px;
  font-family: cursive;
  word-wrap: break-word;
`;
