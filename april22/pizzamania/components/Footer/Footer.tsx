import React from "react";
import { FooterWrapper, ListWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="">
        <h3>Company</h3>
        <ListWrapper>
          <li>About us</li>
          <li>Contact us</li>
        </ListWrapper>
      </div>

      <div className="">
        <h3>Legal</h3>
        <ListWrapper>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ListWrapper>
      </div>

      <div className="">
        <h3>What we do</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          laudantium id, accusamus ad adipisci repudiandae eos eaque labore
          tempore debitis ipsam mollitia sapiente, nisi voluptatem, cumque ea
          dicta consectetur nemo.
        </p>
      </div>
    </FooterWrapper>
  );
};
export default Footer;
