import React from "react";
import { HeaderList, LogoTag, Navbar } from "./style";

const Header = () => {
  return (
    <>
      <Navbar>
        <LogoTag>
          <a href="#">Pizza Mania</a>
        </LogoTag>
        <HeaderList>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/aboutus">About us</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </HeaderList>
      </Navbar>
    </>
  );
};
export default Header;
