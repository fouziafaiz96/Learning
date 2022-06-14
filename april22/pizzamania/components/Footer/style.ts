import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f0f0f0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 50px;
  margin: 50px 0 0;
  position: fixed;
  bottom: 0;
`;
export const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 8px 0;
  }
`;
