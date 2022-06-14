import styled from "styled-components";

export const GridWrapper = styled.div`
  margin: 65px 15px 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  flex-direction: column;
  padding: 1%;
  p {
    margin: 0;
  }
`;
