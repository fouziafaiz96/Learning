import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: #f0f0f0;
  width: 100vw;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoTag = styled.p`
  display: inline-block;
  padding: 0 25px;
`;
export const HeaderList = styled.ul`
  display: inline-block;
  margin: 0 15px;
  li {
    display: inline;
    padding: 0 15px;
  }
`;
