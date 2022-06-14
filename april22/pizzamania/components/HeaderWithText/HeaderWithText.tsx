import React from "react";
import { Description, Heading, Wrapper } from "./style";

type HeaderTextProps = {
  title: string;
  desc: string;
};
const HeaderWithText = (props: HeaderTextProps) => {
  const { title, desc } = props;
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <Description>{desc}</Description>
    </Wrapper>
  );
};
export default HeaderWithText;
